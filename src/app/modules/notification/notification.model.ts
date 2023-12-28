/* eslint-disable no-console */
import { Schema, model } from "mongoose"
import { INotification } from "./notification.interface"
 
const NotificationSchema = new Schema<INotification>(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    deails: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
) 
export const Notificaion = model<INotification>('Notificaion', NotificationSchema)
