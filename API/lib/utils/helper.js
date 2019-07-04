"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    (0, _classCallCheck2["default"])(this, Helpers);
  }

  (0, _createClass2["default"])(Helpers, null, [{
    key: "hashPassword",

    /**
     * @static hashPassword
     * @description hashes a password
     * @param { string } password
     * @returns hashed password
     */
    value: function () {
      var _hashPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(password) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _bcrypt["default"].hash(password, _bcrypt["default"].genSaltSync(8));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function hashPassword(_x) {
        return _hashPassword.apply(this, arguments);
      }

      return hashPassword;
    }()
  }]);
  return Helpers;
}();

var _default = Helpers;
exports["default"] = _default;