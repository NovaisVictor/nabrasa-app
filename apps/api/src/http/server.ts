import { env } from '@acl/env'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'

import { signIn } from './users/sign-in'
import { signUp } from './users/sign-up'

const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})
app.register(fastifyCors)

app.post('/sign-in', signIn)
app.post('/sign-up', signUp)

app.listen({ port: 3333 }).then(() => {
  console.log('http server running')
})
