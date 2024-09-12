import { hash } from 'bcryptjs'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

import { prisma } from '@/lib/prisma'

const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
})

export async function signUp(request: FastifyRequest, reply: FastifyReply) {
  const { email, name, phone, password } = signUpSchema.parse(request.body)
  const passwordHash = await hash(password, 1)
  const user = await prisma.user.create({
    data: { name, email, passwordHash, phone },
  })
  return reply.send({ user })
}
