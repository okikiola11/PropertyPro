"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _propertyController = _interopRequireDefault(require("../controller/propertyController"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _validator = _interopRequireDefault(require("../middleware/validator"));

var _validateResult = _interopRequireDefault(require("../middleware/validateResult"));

var _property = _interopRequireDefault(require("../middleware/property"));

var _multer = _interopRequireDefault(require("../middleware/multer"));

var router = (0, _express.Router)();
router.get('/', _authMiddleware["default"].verifyToken, _propertyController["default"].getAllProperties);
router.get('/:id', _authMiddleware["default"].verifyToken, _propertyController["default"].getSingleProperty);
router.post('/', _validator["default"].validatePostProperty(), _validateResult["default"].validateResult, _authMiddleware["default"].verifyToken, _multer["default"], _propertyController["default"].postProperty);
router.patch('/:propertyId', _validator["default"].validateUpdatePrice(), _validateResult["default"].validateResult, _authMiddleware["default"].verifyToken, _property["default"].findPropertyId, // uploader,
_propertyController["default"].updateProperty);
router.patch('/:propertyId/sold', _authMiddleware["default"].verifyToken, _property["default"].findPropertyId, _propertyController["default"].updateMarkProperty);
router["delete"]('/:id', _authMiddleware["default"].verifyToken, _propertyController["default"].deleteProperty);
var _default = router;
exports["default"] = _default;