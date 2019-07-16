import { check } from 'express-validator';
import { states, status, type } from '../utils/validateData';

class Validation {
  static validateSignUp() {
    return [
      check('first_name')
        .isAlpha()
        .withMessage('Should be only alphabet')
        .exists()
        .withMessage('Field cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Should be atleast 3 characters long')
        .trim(),
      check('last_name')
        .isAlpha()
        .withMessage('Should be only alphabet')
        .exists()
        .withMessage('Field cannot be empty')
        .isLength({ min: 3 })
        .withMessage('Should be atleast 3 characters long')
        .trim(),
      check('email')
        .isEmail()
        .withMessage('Should be a valid email address')
        .exists()
        .withMessage('Field cannot be empty'),
      check('phone_number')
        .isNumeric()
        .withMessage('Should be only numbers')
        .exists()
        .withMessage('Field cannot be empty')
        .isLength({ min: 9, max: 11 })
        .withMessage('Should be atleast 9-11 characters long'),
      check('address')
        .exists()
        .withMessage('Field is required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isLength({ min: 5 })
        .withMessage('Should be atleast 5 characters long')
        .trim(),
      check('password')
        .exists()
        .withMessage('Field cannot be empty')
        .isLength({
          min: 6
        })
        .withMessage('Should be atleast 6 characters long')
        .trim()
    ];
  }

  static validateSignIn() {
    return [
      check('email')
        .isEmail()
        .withMessage('Should be a valid email address')
        .exists()
        .withMessage('Field cannot be empty'),
      check('password')
        .exists()
        .withMessage('Field cannot be empty')
        .isLength({
          min: 6
        })
        .withMessage('Should be atleast 6 characters long')
        .trim()
    ];
  }

  static validatePostProperty() {
    return [
      check('price')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isNumeric()
        .withMessage('should be either a number or float')
        .escape(),
      check('state')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty'),
      check('city')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isAlpha()
        .withMessage('Should be Alphabets only')
        .trim()
        .escape(),
      check('address')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .trim()
        .escape(),
      check('type')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty'),
      check('image_url')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isURL()
        .withMessage('Must be a url')
    ];
  }

  static validateUpdatePrice() {
    return [
      check('price')
        .exists()
        .withMessage('Field is Required')
        .not()
        .isEmpty()
        .withMessage('Field cannot be empty')
        .isNumeric()
        .withMessage('should be either a number or float')
        .escape()
    ];
  }
}

export default Validation;
