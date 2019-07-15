import { Router } from 'express';
import PropertyController from '../controller/propertyController';
import AuthMiddleware from '../middleware/authMiddleware';
import Validator from '../middleware/validator';
import Validate from '../middleware/validateResult';
import Middleware from '../middleware/property';

const router = Router();

router.get(
  '/',
  AuthMiddleware.verifyToken,
  PropertyController.getAllProperties
);
router.get('/:id', PropertyController.getSingleProperty);
router.post(
  '/',
  Validator.validatePostProperty(),
  Validate.validateResult,
  AuthMiddleware.verifyToken,
  PropertyController.postProperty
);
router.patch(
  '/:propertyId',
  Validator.validateUpdatePrice(),
  Validate.validateResult,
  AuthMiddleware.verifyToken,
  Middleware.findPropertyId,
  // uploader,
  PropertyController.updateProperty
);
router.patch('/:id/sold', PropertyController.markSoldProperty);

router.delete('/:id', PropertyController.deleteProperty);

export default router;
