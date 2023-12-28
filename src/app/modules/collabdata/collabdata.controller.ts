/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../middlewares/catchAsync";
import httpStatus from "http-status";
import sendResponse from "../../middlewares/sendResponse";
import { CollabdataService } from "./collabdata.service";
import { ICollabdata } from "./collabdata.interface";

const createCollabdata: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...collabdata } = req.body;
    const result = await CollabdataService.createCollabdata(collabdata);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Collaboration data created successfully',
      data: result,
    });
  }
);

const getAllCollabdata = catchAsync(async (req: Request, res: Response) => {
  const result = await CollabdataService.getAllCollabdata();

  sendResponse<ICollabdata | any>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ALL Collaboration Data Retrieved Successfully',
    data: result,
  });
});

const deleteCollabdata = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CollabdataService.deleteCollabdata(id);

  sendResponse<ICollabdata>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete Collaboration Data Successfully',
    data: result,
  });
});

export const CollabdataController = {
  createCollabdata,
  getAllCollabdata,
  deleteCollabdata,
};
