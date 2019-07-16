"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();

var AuthMiddleware =
/*#__PURE__*/
function () {
  function AuthMiddleware() {
    (0, _classCallCheck2["default"])(this, AuthMiddleware);
  }

  (0, _createClass2["default"])(AuthMiddleware, null, [{
    key: "generateToken",
    value: function generateToken(id, is_admin) {
      return _jsonwebtoken["default"].sign({
        id: id,
        is_admin: is_admin
      }, process.env.SECRET, {
        expiresIn: '24h'
      });
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(req, res, next) {
      try {
        var token = req.headers.token;
        if (!token) return res.status(401).json({
          status: 'Unauthorized',
          error: 'Token is required'
        });

        var decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET);

        var id = decoded.id,
            is_admin = decoded.is_admin;
        req.auth = {
          id: id,
          is_admin: is_admin
        };
        next();
      } catch (err) {
        return res.status(401).json({
          status: 'Unauthorized',
          error: 'Token is invalid'
        });
      }
    }
  }]);
  return AuthMiddleware;
}();

var _default = AuthMiddleware;
exports["default"] = _default;