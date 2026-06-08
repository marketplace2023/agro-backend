import { db } from '#database/connection.js'
import {
  mpListingsTable,
  mpListingStatusesTable,
  mpModerationQueueTable,
} from '#database/schemas/listings.js'
import {
  InvalidStatusTransition,
  ListingNotFound,
  NotListingOwner,
} from '#modules/listings/errors.js'
import { eq } from 'drizzle-orm'
import { Result } from 'resultable'

type ListingStatus = 'draft' | 'pending_review' | 'published' | 'paused' | 'rejected' | 'expired' | 'deleted'

// Allowed transitions: [from] -> [to[]]
const OWNER_TRANSITIONS: Record<string, ListingStatus[]> = {
  draft: ['published', 'pending_review', 'deleted'],
  pending_review: ['published', 'draft', 'deleted'],
  published: ['paused', 'deleted'],
  paused: ['published', 'pending_review', 'deleted'],
  rejected: ['draft', 'deleted'],
}

const ADMIN_TRANSITIONS: Record<string, ListingStatus[]> = {
  pending_review: ['published', 'rejected'],
  published: ['paused', 'deleted'],
  paused: ['published', 'deleted'],
  rejected: ['published'],
}

export const changeListingStatus = Result.resultableFn(async function (
  actorId: number,
  listingId: number,
  newStatus: ListingStatus,
  options: { isAdmin?: boolean; reason?: string } = {},
) {
  const [listing] = await db
    .select({ id: mpListingsTable.id, userId: mpListingsTable.userId, status: mpListingsTable.status })
    .from(mpListingsTable)
    .where(eq(mpListingsTable.id, listingId))
    .limit(1)

  if (!listing) return Result.err(new ListingNotFound())

  const isOwner = listing.userId === actorId
  const { isAdmin = false, reason } = options

  if (!isOwner && !isAdmin) return Result.err(new NotListingOwner())

  const allowed = isAdmin
    ? ADMIN_TRANSITIONS[listing.status] ?? []
    : OWNER_TRANSITIONS[listing.status] ?? []

  if (!allowed.includes(newStatus)) {
    return Result.err(new InvalidStatusTransition())
  }

  await db
    .update(mpListingsTable)
    .set({ status: newStatus })
    .where(eq(mpListingsTable.id, listingId))

  await db.insert(mpListingStatusesTable).values({
    listingId,
    fromStatus: listing.status,
    toStatus: newStatus,
    reason,
    changedByUserId: actorId,
  })

  // When submitting for review → add to moderation queue
  if (newStatus === 'pending_review') {
    await db.insert(mpModerationQueueTable).values({
      listingId,
      status: 'pending',
      priority: 'normal',
    })
  }

  // When admin resolves (approves/rejects) → mark queue as resolved
  if (isAdmin && (newStatus === 'published' || newStatus === 'rejected')) {
    await db
      .update(mpModerationQueueTable)
      .set({ status: 'resolved', assignedToUserId: actorId })
      .where(eq(mpModerationQueueTable.listingId, listingId))
  }

  // When listing is published → run Radar match engine (fire-and-forget)
  if (newStatus === 'published') {
    import('#modules/radar/use-cases/match-engine.js')
      .then(({ matchListingAgainstRadar }) => matchListingAgainstRadar(listingId))
      .catch(() => {})
  }

  return Result.okVoid()
})
