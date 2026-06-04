import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import { parseErrorSchema } from '#modules/shared/lib/zod-utilities.js'
import type { Context, ValidationTargets } from 'hono'
import { validator } from 'hono/validator'
import type { z } from 'zod'

export const zodValidator = <From extends keyof ValidationTargets, T extends z.ZodType<any>>(
  from: From,
  schema: T,
  appendData?: (c: Context) => Promise<Record<string, unknown>>,
) =>
  validator(from, async (value, c) => {
    const finalValue = appendData ? { ...value, ...(await appendData(c)) } : value
    const result = schema.safeParse(finalValue)

    if (!result.success) {
      throw new ValidationException(parseErrorSchema(result.error.issues))
    }

    return result.data as z.infer<T>
  })
