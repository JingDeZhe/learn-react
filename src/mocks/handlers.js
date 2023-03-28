import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-auth', 'true')
    return res(ctx.status(200))
  }),
  rest.get('/user', (req, res, ctx) => {
    const isAuth = sessionStorage.getItem('is-auth')
    if (isAuth) {
      return res(
        ctx.status(200),
        ctx.json({
          username: 'snooby',
        })
      )
    } else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not auth',
        })
      )
    }
  }),
]
