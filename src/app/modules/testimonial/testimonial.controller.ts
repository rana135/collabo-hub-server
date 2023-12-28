import { Request, RequestHandler, Response } from "express"
import catchAsync from "../../middlewares/catchAsync"
import httpStatus from "http-status"
import sendResponse from "../../middlewares/sendResponse"
import { TestimonailService } from "./testimonial.service"
import { ITestimonial } from "./testimonial.interface"

  
  const createTestimonial: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
      const { ...testiData } = req.body  
      const result = await TestimonailService.createTestimonail(testiData)
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Testimonial created successfully',
        data: result,
      })
    },
  )

  const getAllTestimonial = catchAsync(async (req: Request, res: Response) => {
    
    const result = await TestimonailService.getAllTestimonial()
  
    sendResponse<ITestimonial>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'ALL Testimonial Retrived Successfully',
      data: result,
    })
  })


  const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await TestimonailService.deleteTestimonial(id)
  
    sendResponse<ITestimonial>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete Testimonial Successfully',
      data: result,
    })
  })

  export const TestimonialController = {
    createTestimonial,
    getAllTestimonial,
    deleteTestimonial
  }