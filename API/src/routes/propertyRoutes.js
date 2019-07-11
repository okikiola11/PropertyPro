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
router.patch(
  '/:id',
  AuthMiddleware.verifyToken,
  uploader,
  PropertyController.updateProperty
);

export default router;
