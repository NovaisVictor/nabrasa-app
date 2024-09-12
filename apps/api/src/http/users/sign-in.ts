import { compare } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { prisma } from '@/lib/prisma'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = signInSchema.parse(request.body)
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) {
    throw new Error('Invalid credentials')
  }
  const isPasswordValid = await compare(password, user.passwordHash)
  if (!isPasswordValid) {
    throw new Error('Invalid credentials')
  }
  const token = await reply.jwtSign(
    {
      sub: user.id,
      role: user.role,
    },
    {
      sign: {
        expiresIn: '7d',
      },
    },
  )
  return reply.send({ token })
}
