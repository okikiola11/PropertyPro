import { Router } from 'express';
import PropertyController from '../controller/propertyController';
import uploader from '../middleware/multer';
import AuthMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post(
  '/',
  AuthMiddleware.verifyToken,
  uploader,
  PropertyController.postProperty
);

export default router;
