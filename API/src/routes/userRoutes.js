import { Router } from 'express';
import Validator from '../utils/validator';
import UserController from '../controller/userController';

const router = Router();

router.post(
  '/signup',
  Validator.validateSignUp(),
  Validator.getValidationResult,
  UserController.signupUser
);

export default router;
