import { HTTPException } from 'hono/http-exception'
import { StatusCodes } from 'http-status-codes'

export class ForbiddenException extends HTTPException {
  constructor(message = 'Access forbidden') {
    super(StatusCodes.FORBIDDEN, {
      res: new Response(
        JSON.stringify({ message }),
        { status: StatusCodes.FORBIDDEN, headers: { 'Content-Type': 'application/json' } },
      ),
    })
  }
}
