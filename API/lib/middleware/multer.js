"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _cloudinaryConfig = _interopRequireDefault(require("../utils/cloudinaryConfig"));

var upload = (0, _multer["default"])({
  storage: _cloudinaryConfig["default"],
  limits: {
    fileSize: 800000
  }
}).single('image');

var uploader = function uploader(req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof _multer["default"].MulterError) {
      return res.status(400).json({
        status: 'Bad Request',
        error: 'The uploaded file size limit has been exceeded'
      });
    } else if (err) {
      return res.status(500).json({
        status: 'Internal server error ',
        error: 'Something went wrong while trying to process your request.'
      });
    }

    next();
  });
};

var _default = uploader;
exports["default"] = _default;