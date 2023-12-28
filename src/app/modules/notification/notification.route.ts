import express from 'express'
import { NotificationController } from './notification.controller'
const router = express.Router()

router.post(
  '/',
//   validateRequest(bookValidation.createBookZodSchema),
  NotificationController.createNotification,
)

export const NotificationRoutes = router
