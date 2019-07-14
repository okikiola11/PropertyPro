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

  // static validatePostProperty() {
  //   return [
  //     check('price')
  //       .exists()
  //       .withMessage('Field is Required')
  //       .not()
  //       .isEmpty()
  //       .withMessage('Field cannot be empty')
  //       .isLength({ min: 4, max: 15 })
  //       .withMessage('characters should be between 4-15 long')
  //       .trim()
  //       .matches(/^\d+(\.|\d)\d+$/)
  //       .withMessage('should be either a number or float')
  //       .escape()
  // check('state')
  //   .exists()
  //   .withMessage('Field is Required')
  //   .not()
  //   .isEmpty()
  //   .withMessage('Field cannot be empty')
  //   .isIn([...states])
  //   .withMessage('')
  //   .trim(),
  // check('city')
  //   .exists()
  //   .withMessage('Field is Required')
  //   .not()
  //   .isEmpty()
  //   .withMessage('Field cannot be empty')
  //   .isAlpha()
  //   .withMessage('Should be Alphabets only')
  //   .trim()
  //   .isLength({ min: 3 })
  //   .withMessage('Input should be atleast 3 characters long')
  //   .escape(),
  // check('address')
  //   .exists()
  //   .withMessage('Field is Required')
  //   .not()
  //   .isEmpty()
  //   .withMessage('Field cannot be empty')
  //   .isLength({ min: 5 })
  //   .withMessage('Input should be atleast 3 characters long')
  //   .trim()
  //   .escape(),
  // check('type')
  //   .exists()
  //   .withMessage('Field is Required')
  //   .not()
  //   .isEmpty()
  //   .withMessage('Field cannot be empty')
  //   .isIn([...type])
  //   .withMessage('')
  //   .trim()
  //   ];
  // }
}

export default Validation;
