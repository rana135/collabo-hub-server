import { ITestimonial } from "./testimonial.interface"
import { Testimonial } from "./testimonial.model"

const createTestimonail = async ( testimonialDetails: ITestimonial): Promise<ITestimonial | null> => {
    const newTesti = await Testimonial.create(testimonialDetails)
    return newTesti
  }

  const getAllTestimonial = async (): Promise<ITestimonial | null> => {
    const testimonial = await Testimonial.find({}).sort({ createdAt: -1 }).exec();
    return testimonial;
  }

  const deleteTestimonial = async (id: string): Promise<ITestimonial | null> => {
    const result = await Testimonial.findByIdAndDelete(id)
    return result
  }

export const TestimonailService = {
    createTestimonail,
    getAllTestimonial,
    deleteTestimonial
}
