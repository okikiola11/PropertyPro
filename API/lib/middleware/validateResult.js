"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _expressValidator = require("express-validator");

var Validate =
/*#__PURE__*/
function () {
  function Validate() {
    (0, _classCallCheck2["default"])(this, Validate);
  }

  (0, _createClass2["default"])(Validate, null, [{
    key: "validateResult",
    value: function validateResult(req, res, next) {
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
  }]);
  return Validate;
}();

var _default = Validate;
exports["default"] = _default;