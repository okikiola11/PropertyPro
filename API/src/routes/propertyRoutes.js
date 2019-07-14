import { Router } from 'express';
import PropertyController from '../controller/propertyController';
import AuthMiddleware from '../middleware/authMiddleware';
import Validator from '../middleware/validator';
import Validate from '../middleware/validateResult';

const router = Router();

router.get('/', PropertyController.getAllProperties);
router.get('/:id', PropertyController.getSingleProperty);
router.post(
  '/',
  Validator.validatePostProperty(),
  Validate.validateResult,
  AuthMiddleware.verifyToken,
  PropertyController.postProperty
);
router.patch(
  '/:id',
  // AuthMiddleware.verifyToken,
  // uploader,
  PropertyController.updateProperty
);
router.patch('/:id/sold', PropertyController.markSoldProperty);

router.delete('/:id', PropertyController.deleteProperty);

export default router;
