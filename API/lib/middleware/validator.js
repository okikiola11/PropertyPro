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
    key: "validateSignUp",
    value: function validateSignUp() {
      return [(0, _expressValidator.check)('first_name').isAlpha().withMessage('Should be only alphabet').exists().withMessage('Field cannot be empty').isLength({
        min: 3
      }).withMessage('Should be atleast 3 characters long').trim(), (0, _expressValidator.check)('last_name').isAlpha().withMessage('Should be only alphabet').exists().withMessage('Field cannot be empty').isLength({
        min: 3
      }).withMessage('Should be atleast 3 characters long').trim(), (0, _expressValidator.check)('email').isEmail().withMessage('Should be a valid email address').exists().withMessage('Field cannot be empty'), (0, _expressValidator.check)('phone_number').isNumeric().withMessage('Should be only numbers').exists().withMessage('Field cannot be empty').isLength({
        min: 9,
        max: 11
      }).withMessage('Should be atleast 9-11 characters long'), (0, _expressValidator.check)('address').exists().withMessage('Field is required').not().isEmpty().withMessage('Field cannot be empty').isLength({
        min: 5
      }).withMessage('Should be atleast 5 characters long').trim(), (0, _expressValidator.check)('password').exists().withMessage('Field cannot be empty').isLength({
        min: 6
      }).withMessage('Should be atleast 6 characters long').trim()];
    }
  }, {
    key: "validateSignIn",
    value: function validateSignIn() {
      return [(0, _expressValidator.check)('email').isEmail().withMessage('Should be a valid email address').exists().withMessage('Field cannot be empty'), (0, _expressValidator.check)('password').exists().withMessage('Field cannot be empty').isLength({
        min: 6
      }).withMessage('Should be atleast 6 characters long').trim()];
    }
  }, {
    key: "validatePostProperty",
    value: function validatePostProperty() {
      return [(0, _expressValidator.check)('price').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty').isLength({
        min: 4,
        max: 15
      }).withMessage('characters should be between 4-15 long').trim().matches(/^\d+(\.|\d)\d+$/).withMessage('should be either a number or float').escape(), (0, _expressValidator.check)('state').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty'), (0, _expressValidator.check)('city').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty').isAlpha().withMessage('Should be Alphabets only').trim().isLength({
        min: 3
      }).withMessage('Input should be atleast 3 characters long').escape(), (0, _expressValidator.check)('address').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty').isLength({
        min: 5
      }).withMessage('Input should be atleast 3 characters long').trim().escape(), (0, _expressValidator.check)('type').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty'), (0, _expressValidator.check)('image_url').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty')];
    }
  }, {
    key: "validateUpdatePrice",
    value: function validateUpdatePrice() {
      return [(0, _expressValidator.check)('price').exists().withMessage('Field is Required').not().isEmpty().withMessage('Field cannot be empty').isLength({
        min: 4,
        max: 15
      }).withMessage('characters should be between 4-15 long').trim().matches(/^\d+(\.|\d)\d+$/).withMessage('should be either a number or float').escape()];
    }
  }]);
  return Validation;
}();

var _default = Validation;
exports["default"] = _default;