import { z } from 'zod'

const createNotiZodSchema = z.object({
  body: z.object({
    email: z.string().optional(),
    title: z.string().optional(),
    deails: z.string().optional(),
    date: z.string().optional(),
  }),
})
export const notificationValidation = {
    createNotiZodSchema,
} 