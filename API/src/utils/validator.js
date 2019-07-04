import { check, validationResult } from 'express-validator';

class Validation {
  static getValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const validateErrors = errors.array();

      const errArray = validateErrors.map(obj => {
        const rObj = {};
        rObj[obj.param] = obj.msg;
        rObj.value = obj.value;
        return rObj;
      });

      return res.status(400).json({
        status: 'Bad Request',
        error: 'Validation failed, check to ensure fields are properly filled',
        errors: errArray
      });
    }

    return next();
  }

  static validateSignUp() {
    return [
      check('first_name', 'last_name')
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
      check('phoneNumber')
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
}

export default Validation;
