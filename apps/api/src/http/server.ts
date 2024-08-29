import fastifyCors from '@fastify/cors'
import fastify from 'fastify'

const app = fastify()

app.register(fastifyCors)

app.get('/', () => {
  return 'alguma mensagem'
})

app.listen({ port: 3333 }).then(() => {
  console.log('http server running')
})
