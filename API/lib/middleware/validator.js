"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressValidator = require("express-validator");

var _validateData = require("../utils/validateData");

var Validation =
/*#__PURE__*/
function () {
  function Validation() {
    (0, _classCallCheck2["default"])(this, Validation);
  }

  (0, _createClass2["default"])(Validation, null, [{
    key: "getValidationResult",
    value: function getValidationResult(req, res, next) {
      var errors = (0, _expressValidator.validationResult)(req);

      if (!errors.isEmpty()) {
        var validateErrors = errors.array();
        var errArray = validateErrors.map(function (obj) {
          var rObj = {};
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
  }, {
    key: "validateSignUp",
    value: function validateSignUp() {
      return [(0, _expressValidator.check)('first_name', 'last_name').isAlpha().withMessage('Should be only alphabet').exists().withMessage('Field cannot be empty').isLength({
        min: 3
      }).withMessage('Should be atleast 3 characters long').trim(), (0, _expressValidator.check)('email').isEmail().withMessage('Should be a valid email address').exists().withMessage('Field cannot be empty'), (0, _expressValidator.check)('phoneNumber').isNumeric().withMessage('Should be only numbers').exists().withMessage('Field cannot be empty').isLength({
        min: 9,
        max: 11
      }).withMessage('Should be atleast 9-11 characters long'), (0, _expressValidator.check)('address').exists().withMessage('Field is required').not().isEmpty().withMessage('Field cannot be empty').isLength({
        min: 5
      }).withMessage('Should be atleast 5 characters long').trim(), (0, _expressValidator.check)('password').exists().withMessage('Field cannot be empty').isLength({
        min: 6
      }).withMessage('Should be atleast 6 characters long').trim()];
    } // static validateSignIn() {
    //   return [
    //     check('email')
    //       .isEmail()
    //       .withMessage('Should be a valid email address')
    //       .exists()
    //       .withMessage('Field cannot be empty'),
    //     check('password')
    //       .exists()
    //       .withMessage('Field cannot be empty')
    //       .isLength({
    //         min: 6
    //       })
    //       .withMessage('Should be atleast 6 characters long')
    //       .trim()
    //   ];
    // }
    // static validateCreateProperty() {
    //   return [
    //     check('status')
    //       .optional()
    //       .not()
    //       .isEmpty()
    //       .withMessage('Field cannot be empty')
    //       .customSanitizer(Helpers.capitalizeFirst)
    //       .isIn([...status])
    //       .withMessage('should be either Available, Sold ')
    //       .trim(),
    //     check('price')
    //       .exists()
    //       .withMessage('Field is Required')
    //       .not()
    //       .isEmpty()
    //       .withMessage('Field cannot be empty')
    //       .isLength({ min: 3, max: 15 })
    //       .withMessage('characters should be between 4-15 long')
    //       .trim()
    //       .matches(/^\d+(\.|\d)\d+$/)
    //       .withMessage('should be a floating number')
    //       .escape(),
    //     check('state')
    //       .exists()
    //       .withMessage('Field is Required')
    //       .not()
    //       .isEmpty()
    //       .withMessage('Field cannot be empty')
    //       .isIn([...states])
    //       .withMessage('')
    //       .trim(),
    //     check('city')
    //       .exists()
    //       .withMessage('Field is Required')
    //       .not()
    //       .isEmpty()
    //       .withMessage('Field cannot be empty')
    //       .isAlpha()
    //       .withMessage('Should be Alphabets only')
    //       .trim()
    //       .isLength({ min: 3 })
    //       .withMessage('Input should be atleast 3 characters long')
    //       .escape(),
    //     check('address')
    //       .exists()
    //       .withMessage('Field is Required')
    //       .not()
    //       .isEmpty()
    //       .withMessage('Field cannot be empty')
    //       .isLength({ min: 5 })
    //       .withMessage('Input should be atleast 3 characters long')
    //       .trim()
    //       .escape()
    //   ];
    // }

  }]);
  return Validation;
}();

var _default = Validation;
exports["default"] = _default;