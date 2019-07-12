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
router.get('/', _propertyController["default"].getAllProperties);
router.get('/:id', _propertyController["default"].getSingleProperty);
router.get(':id', _propertyController["default"].getPropertyType);
router.post('/', // Validator.validateCreateProperty(),
// Validator.getValidationResult,
_authMiddleware["default"].verifyToken, _multer["default"], _propertyController["default"].postProperty);
router.patch('/:id', _authMiddleware["default"].verifyToken, _multer["default"], _propertyController["default"].updateProperty); //router.patch('/:id/sold', PropertyController.markSoldProperty);

router["delete"]('/:id', _propertyController["default"].deleteProperty);
var _default = router;
exports["default"] = _default;