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

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _helper = _interopRequireDefault(require("../utils/helper"));

var _userModel = _interopRequireDefault(require("../model/userModel"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "signupUser",
    value: function () {
      var _signupUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var _req$body, first_name, last_name, email, password, phone_number, address, is_admin, member, hashed_password, user, id, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, password = _req$body.password, phone_number = _req$body.phone_number, address = _req$body.address, is_admin = _req$body.is_admin;
                _context.next = 4;
                return _userModel["default"].findByEmail(email);

              case 4:
                member = _context.sent;

                if (!member) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", res.status(409).json({
                  status: 'Conflict',
                  error: 'Email already exist'
                }));

              case 7:
                _context.next = 9;
                return _helper["default"].hashPassword(password);

              case 9:
                hashed_password = _context.sent;
                _context.next = 12;
                return _userModel["default"].SaveUser(first_name, last_name, email, hashed_password, phone_number, address, is_admin || false);

              case 12:
                user = _context.sent;
                id = user.id;
                token = _authMiddleware["default"].generateToken(id, is_admin);
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'New user has been created',
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    phone_number: phone_number,
                    address: address
                  }
                }));

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to create a user'
                }));

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 18]]);
      }));

      function signupUser(_x, _x2) {
        return _signupUser.apply(this, arguments);
      }

      return signupUser;
    }()
  }, {
    key: "signinUser",
    value: function () {
      var _signinUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body2, email, password, user, passwordIsValid, id, is_admin, first_name, last_name, token;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
                _context2.next = 4;
                return _userModel["default"].findByEmail(email);

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  status: 'error',
                  error: 'User not found'
                }));

              case 7:
                _context2.next = 9;
                return _bcrypt["default"].compare(password, user.hashed_password);

              case 9:
                passwordIsValid = _context2.sent;

                if (passwordIsValid) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", res.status(401).json({
                  status: 'Unauthorized',
                  error: 'Incorrect Password'
                }));

              case 12:
                id = user.id, is_admin = user.is_admin, first_name = user.first_name, last_name = user.last_name;
                token = _authMiddleware["default"].generateToken(id, is_admin);
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: "Welcome ".concat(user.email, ", you have successfully logged in"),
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                  }
                }));

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to process your request'
                }));

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));

      function signinUser(_x3, _x4) {
        return _signinUser.apply(this, arguments);
      }

      return signinUser;
    }()
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;