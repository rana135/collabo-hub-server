/* eslint-disable no-console */
import { Schema, model } from "mongoose"
import { ITestimonial } from "./testimonial.interface"

const TestimonialSchema = new Schema<ITestimonial>(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
) 
export const Testimonial = model<ITestimonial>('Testimonial', TestimonialSchema)
