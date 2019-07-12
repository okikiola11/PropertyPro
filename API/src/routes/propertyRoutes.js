import { Router } from 'express';
import PropertyController from '../controller/propertyController';
import uploader from '../middleware/multer';
import AuthMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/', PropertyController.getAllProperties);
router.get('/:id', PropertyController.getSingleProperty);
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
router.patch('/:id/sold', PropertyController.markSoldProperty);

router.delete('/:id', PropertyController.deleteProperty);

export default router;
