import { z } from 'zod'

const createTestimonialZodSchema = z.object({
  body: z.object({
    email: z.string().optional(),
    username: z.string().optional(),
    rating: z.number().optional(),
    feedback: z.string().optional(),
  }),
})
export const TestimonialValidation = {
    createTestimonialZodSchema,
} 