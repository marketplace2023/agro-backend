import { parseErrorSchema } from '#modules/shared/lib/zod-utilities.js'
import { HTTPException } from 'hono/http-exception'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import type { z } from 'zod'

export function validationErrorResponse(errors: Record<string, string[]>) {
  return new Response(
    JSON.stringify({ message: ReasonPhrases.BAD_REQUEST, errors }),
    { status: StatusCodes.BAD_REQUEST, headers: { 'Content-Type': 'application/json' } },
  )
}

export class ValidationException extends HTTPException {
  constructor(public errors: Record<string, string[]>) {
    super(StatusCodes.BAD_REQUEST, { res: validationErrorResponse(errors) })
  }

  static fromZodIssues(zodIssues: z.ZodIssue[]) {
    return new ValidationException(parseErrorSchema(zodIssues))
  }

  static fnWithMessages(fieldName: string, messages: [string, ...string[]]) {
    return () => {
      throw new ValidationException({ [fieldName]: messages })
    }
  }
}
