import { DocumentAlreadyExists, InvalidCredentials, UserAlreadyExists, UserNotFound } from '#modules/auth/errors.js'
import { login, loginDto } from '#modules/auth/use-cases/login.js'
import { resetPassword, resetPasswordDto } from '#modules/auth/use-cases/reset-password.js'
import {
  sendForgotPasswordLink,
  sendForgotPasswordLinkDto,
} from '#modules/auth/use-cases/send-forgot-password-link.js'
import { signup, signupDto } from '#modules/auth/use-cases/signup.js'
import { updatePassword, updatePasswordDto } from '#modules/auth/use-cases/update-password.js'
import { updateUser, updateUserDto } from '#modules/auth/use-cases/update-user.js'
import { getAuthUser } from '#modules/auth/use-cases/get-auth-user.js'
import { NotFoundException } from '#modules/shared/http/exceptions/not-found-exception.js'
import { ValidationException } from '#modules/shared/http/exceptions/validation-exception.js'
import {
  deleteJwtCookie,
  jwtMiddleware,
  setJwtCookie,
} from '#modules/shared/http/middleware/jwt-middleware.js'
import { zodValidator } from '#modules/shared/http/middleware/zod-validator.js'
import { Hono } from 'hono'
import { Match } from 'resultable'
import { StatusCodes } from 'http-status-codes'

const app = new Hono()

app.post('/signup', zodValidator('json', signupDto), async (c) => {
  const validated = c.req.valid('json')
  const signupResult = await signup(validated)

  if (signupResult instanceof UserAlreadyExists) {
    throw new ValidationException({ email: ['El email ya está registrado'] })
  }

  if (signupResult instanceof DocumentAlreadyExists) {
    throw new ValidationException({ documentNumber: ['Este documento ya está registrado'] })
  }

  const [loginResult, loginError] = await login({
    email: validated.email,
    password: validated.password,
  })

  if (loginError) {
    throw Match.matchBrand(loginError)({
      '@/auth/errors/InvalidCredentials': () =>
        new ValidationException({ email: ['Credenciales inválidas'] }),
    })
  }

  await setJwtCookie(c, loginResult.token)

  return c.json(loginResult, StatusCodes.CREATED)
})

app.post('/login', zodValidator('json', loginDto), async (c) => {
  const validated = c.req.valid('json')

  const [authToken, authTokenError] = await login(validated)

  if (authTokenError) {
    throw Match.matchBrand(authTokenError)({
      '@/auth/errors/InvalidCredentials': () =>
        new ValidationException({ email: ['Credenciales inválidas'] }),
    })
  }

  await setJwtCookie(c, authToken.token)

  return c.json(authToken)
})

app.post('/logout', jwtMiddleware, async (c) => {
  await deleteJwtCookie(c)
  return c.body(null, StatusCodes.NO_CONTENT)
})

app.post('/forgot-password', zodValidator('json', sendForgotPasswordLinkDto), async (c) => {
  const validated = c.req.valid('json')
  const result = await sendForgotPasswordLink(validated)

  if (result instanceof UserNotFound) {
    throw new NotFoundException(`Usuario con email ${validated.email} no encontrado`)
  }

  return c.body(null)
})

app.post('/reset-password', zodValidator('json', resetPasswordDto), async (c) => {
  const validated = c.req.valid('json')
  const result = await resetPassword(validated)

  if (result instanceof InvalidCredentials) {
    throw new ValidationException({ token: ['Token inválido o expirado'] })
  }

  return c.body(null)
})

app.get('/me', jwtMiddleware, async (c) => {
  const { user: loggedInUser } = c.get('jwtPayload')

  const [user, userError] = await getAuthUser(loggedInUser.email)

  if (userError) {
    throw Match.matchBrand(userError)({
      '@/auth/errors/UserNotFound': () => new NotFoundException('Usuario no encontrado'),
    })
  }

  return c.json(user)
})

app.put('/me', jwtMiddleware, zodValidator('json', updateUserDto), async (c) => {
  const validated = c.req.valid('json')
  const { user } = c.get('jwtPayload')

  const [, updateUserError] = await updateUser(user.id, validated)

  if (updateUserError) {
    throw Match.matchBrand(updateUserError)({
      '@/auth/errors/UserNotFound': () => new NotFoundException('Usuario no encontrado'),
    })
  }

  return c.body(null, StatusCodes.NO_CONTENT)
})

app.put('/update-password', jwtMiddleware, zodValidator('json', updatePasswordDto), async (c) => {
  const validated = c.req.valid('json')
  const { user } = c.get('jwtPayload')

  const [, error] = await updatePassword(user.id, validated)

  if (error) {
    throw Match.matchBrand(error)({
      '@/auth/errors/UserNotFound': () => new NotFoundException('Usuario no encontrado'),
      '@/auth/errors/InvalidCredentials': () =>
        new ValidationException({ currentPassword: ['Credenciales inválidas'] }),
    })
  }

  return c.body(null, StatusCodes.NO_CONTENT)
})

export default app
