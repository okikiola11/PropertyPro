import { Router } from 'express';
import PropertyController from '../controller/propertyController';
import AuthMiddleware from '../middleware/authMiddleware';
import Validator from '../middleware/validator';
import Validate from '../middleware/validateResult';
import Middleware from '../middleware/property';
import uploader from '../middleware/multer';

const router = Router();

router.get(
  '/',
  AuthMiddleware.verifyToken,
  PropertyController.getAllProperties
);
router.get(
  '/:id',
  AuthMiddleware.verifyToken,
  PropertyController.getSingleProperty
);
router.post(
  '/',
  uploader,
  Validator.validatePostProperty(),
  Validate.validateResult,
  AuthMiddleware.verifyToken,
  PropertyController.postProperty
);
router.patch(
  '/:propertyId',
  uploader,
  // Validator.validateUpdatePrice(),
  // Validate.validateResult,
  AuthMiddleware.verifyToken,
  Middleware.findPropertyId,
  // uploader,
  PropertyController.updateProperty
);
router.patch(
  '/:propertyId/sold',
  AuthMiddleware.verifyToken,
  Middleware.findPropertyId,
  PropertyController.updateMarkProperty
);

router.delete(
  '/:id',
  AuthMiddleware.verifyToken,
  PropertyController.deleteProperty
);

export default router;
