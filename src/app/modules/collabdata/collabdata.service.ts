import { ICollabdata } from "./collabdata.interface";
import { Collabdata } from "./collabdata.model";

const createCollabdata = async (collabdataDetails: ICollabdata): Promise<ICollabdata | null> => {
  const newCollabdata = await Collabdata.create(collabdataDetails);
  return newCollabdata;
};

const getAllCollabdata = async (): Promise<ICollabdata[] | null> => {
  const collabdata = await Collabdata.find({}).sort({ createdAt: -1 }).exec();
  return collabdata;
};

const deleteCollabdata = async (id: string): Promise<ICollabdata | null> => {
  const result = await Collabdata.findByIdAndDelete(id);
  return result;
};

export const CollabdataService = {
  createCollabdata,
  getAllCollabdata,
  deleteCollabdata,
};
