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

var _userData = _interopRequireDefault(require("../utils/userData"));

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
        var _req$body, first_name, last_name, email, password, phoneNumber, address, hashedPassword, getUserID, is_admin, user, token;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, email = _req$body.email, password = _req$body.password, phoneNumber = _req$body.phoneNumber, address = _req$body.address;
                _context.next = 4;
                return _helper["default"].hashPassword(password);

              case 4:
                hashedPassword = _context.sent;
                getUserID = _userData["default"][_userData["default"].length - 1].id + 1;
                is_admin = false;
                user = {
                  id: getUserID,
                  first_name: first_name,
                  last_name: last_name,
                  email: email,
                  password: hashedPassword,
                  phoneNumber: phoneNumber,
                  address: address,
                  is_admin: is_admin
                };

                _userData["default"].push(user);

                token = _authMiddleware["default"].generateToken({
                  id: getUserID,
                  is_admin: is_admin
                });
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'New user has been created',
                  data: {
                    token: token,
                    id: getUserID,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address
                  }
                }));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: '500 Server internal error',
                  error: 'Something went wrong while trying to create a user'
                }));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
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
                user = _userData["default"].find(function (member) {
                  return member.email === email;
                });

                if (user) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status('401 Unauthorized').send('No user found.'));

              case 5:
                _context2.next = 7;
                return _bcrypt["default"].compare(password, user.password);

              case 7:
                passwordIsValid = _context2.sent;

                if (passwordIsValid) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", res.status(401).json({
                  status: 'Unauthorized',
                  message: 'Incorrect Password'
                }));

              case 10:
                id = user.id, is_admin = user.is_admin, first_name = user.first_name, last_name = user.last_name;
                token = _authMiddleware["default"].generateToken({
                  id: id,
                  is_admin: is_admin
                });
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: "Welcome ".concat(user.email, ", you have successfully logged in"),
                  data: {
                    token: token,
                    id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    is_admin: is_admin
                  }
                }));

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  message: 'Something went wrong while trying to process your request'
                }));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
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