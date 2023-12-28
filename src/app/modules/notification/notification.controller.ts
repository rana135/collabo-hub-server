import { Request, RequestHandler, Response } from "express"
import catchAsync from "../../middlewares/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../middlewares/sendResponse"
import { NotifyService } from "./notification.service"

  
  const createNotification: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...notiData } = req.body  
      const result = await NotifyService.createNotify(notiData)
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Notification created successfully',
        data: result,
      })
    },
  )

  export const NotificationController = {
    createNotification
  }