/* eslint-disable no-console */
import { Schema, model } from "mongoose";
import { ICollabdata } from "./collabdata.interface";

const CollabdataSchema = new Schema<ICollabdata>(
  {
    date: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Collabdata = model<ICollabdata>('Collabdata', CollabdataSchema);
