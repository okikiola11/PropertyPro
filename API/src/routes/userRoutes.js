import { Router } from 'express';
import Validator from '../middleware/validator';
import Validate from '../middleware/validateResult';
import UserController from '../controller/userController';

const router = Router();

router.post(
  '/signup',
  Validator.validateSignUp(),
  Validate.validateResult,
  UserController.signupUser
);

router.post(
  '/signin',
  // Validator.validateSignIn(),
  // Validator.validateResult,
  UserController.signinUser
);

export default router;
