import { HTTPException } from 'hono/http-exception'

export class NotFoundException extends HTTPException {
  constructor(message = 'Resource not found') {
    super(404, { message })
  }
}

export class ConflictException extends HTTPException {
  constructor(message = 'Resource already exists') {
    super(409, { message })
  }
}

export class ForbiddenException extends HTTPException {
  constructor(message = 'Access forbidden') {
    super(403, { message })
  }
}

export class UnauthorizedException extends HTTPException {
  constructor(message = 'Unauthorized') {
    super(401, { message })
  }
}

export class ValidationException extends HTTPException {
  constructor(message = 'Validation failed') {
    super(422, { message })
  }
}
