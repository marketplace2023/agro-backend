import type { z } from 'zod'

type ZodInvalidUnionIssue = z.ZodIssue & {
  code: 'invalid_union'
  unionErrors: Array<{ errors: z.ZodIssue[] }>
}

function isInvalidUnionIssue(issue: z.ZodIssue): issue is ZodInvalidUnionIssue {
  return issue.code === 'invalid_union'
}

export function parseErrorSchema(zodErrors: z.ZodIssue[]) {
  const errors: Record<string, string[]> = {}

  for (; zodErrors.length; ) {
    const error = zodErrors[0]
    const { message, path } = error
    const _path = path.join('.')

    if (!errors[_path]) {
      if (isInvalidUnionIssue(error)) {
        const unionError = error.unionErrors[0].errors[0]
        errors[_path] = [unionError.message]
      } else {
        errors[_path] = [message]
      }
    }

    if (isInvalidUnionIssue(error)) {
      error.unionErrors.forEach((unionError) =>
        unionError.errors.forEach((e) => zodErrors.push(e)),
      )
    }

    zodErrors.shift()
  }

  return errors
}
