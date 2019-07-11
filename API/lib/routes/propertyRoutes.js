"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _propertyController = _interopRequireDefault(require("../controller/propertyController"));

var _multer = _interopRequireDefault(require("../middleware/multer"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var router = (0, _express.Router)();
router.post('/', _authMiddleware["default"].verifyToken, _multer["default"], _propertyController["default"].postProperty);
var _default = router;
exports["default"] = _default;