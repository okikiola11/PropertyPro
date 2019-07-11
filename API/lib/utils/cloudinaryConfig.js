"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _multerStorageCloudinary = _interopRequireDefault(require("multer-storage-cloudinary"));

_cloudinary["default"].config({
  cloud_name: 'dqyaazwe7',
  api_key: '979745235194575',
  api_secret: 'DSPznsOdDDBQiFdzC0D2b8FK-Ow'
});

var storage = (0, _multerStorageCloudinary["default"])({
  cloudinary: _cloudinary["default"],
  folder: 'property/images',
  allowedFormats: ['jpg', 'png']
});
var _default = storage;
exports["default"] = _default;