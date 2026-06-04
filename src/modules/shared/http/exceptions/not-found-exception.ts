import { HTTPException } from 'hono/http-exception'
import { StatusCodes } from 'http-status-codes'

export class NotFoundException extends HTTPException {
  constructor(message = 'Resource not found') {
    super(StatusCodes.NOT_FOUND, {
      res: new Response(
        JSON.stringify({ message }),
        { status: StatusCodes.NOT_FOUND, headers: { 'Content-Type': 'application/json' } },
      ),
    })
  }
}
