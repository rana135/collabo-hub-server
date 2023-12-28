import express from 'express'
import { TestimonialController } from './testimonial.controller'
import { TestimonialValidation } from './testimonial.validation'
import validateRequest from '../../middlewares/validateRequest'
const router = express.Router()

router.post(
  '/',
validateRequest(TestimonialValidation.createTestimonialZodSchema),
  TestimonialController.createTestimonial,
)
router.get('/', TestimonialController.getAllTestimonial)
router.delete('/:id', TestimonialController.deleteTestimonial)

export const TestimonialRoutes = router
