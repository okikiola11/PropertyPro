"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _validator = _interopRequireDefault(require("../middleware/validator"));

var _userController = _interopRequireDefault(require("../controller/userController"));

var router = (0, _express.Router)();
router.post('/signup', _validator["default"].validateSignUp(), _validator["default"].getValidationResult, _userController["default"].signupUser);
router.post('/signin', // Validator.validateSignIn(),
// Validator.getValidationResult,
_userController["default"].signinUser);
var _default = router;
exports["default"] = _default;