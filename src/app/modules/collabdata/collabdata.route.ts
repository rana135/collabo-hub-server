import express from 'express';
import { CollabdataController } from './collabdata.controller'; 

const router = express.Router();

router.post(
  '/', 
  CollabdataController.createCollabdata,
);

router.get('/', CollabdataController.getAllCollabdata);
router.delete('/:id', CollabdataController.deleteCollabdata);

export const CollabdataRoutes = router;
