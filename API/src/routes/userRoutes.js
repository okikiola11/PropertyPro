import { Router } from 'express';
import Validator from '../middleware/validator';
import UserController from '../controller/userController';

const router = Router();

router.post(
  '/signup',
  Validator.validateSignUp(),
  Validator.getValidationResult,
  UserController.signupUser
);
router.post(
  '/signin',
  Validator.validateSignIn(),
  Validator.getValidationResult,
  UserController.signinUser
);

export default router;
