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

var _index = _interopRequireDefault(require("../db/index"));

var User =
/*#__PURE__*/
function () {
  function User() {
    (0, _classCallCheck2["default"])(this, User);
  }

  (0, _createClass2["default"])(User, null, [{
    key: "SaveUser",
    value: function () {
      var _SaveUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(first_name, last_name, email, hashed_password, phone_number, address, is_admin) {
        var query, values, _ref, rows;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "INSERT INTO\n            users(first_name, last_name, email, hashed_password, phone_number, address, is_admin)\n            VALUES($1, $2, $3, $4, $5, $6, $7)\n            returning *";
                values = [first_name, last_name, email, hashed_password, phone_number, address, is_admin];
                _context.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref = _context.sent;
                rows = _ref.rows;
                return _context.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function SaveUser(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
        return _SaveUser.apply(this, arguments);
      }

      return SaveUser;
    }()
  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(email) {
        var query, values, _ref2, rows;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n            SELECT * FROM users WHERE email = $1\n        ";
                values = [email];
                _context2.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref2 = _context2.sent;
                rows = _ref2.rows;
                return _context2.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findByEmail(_x8) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id) {
        var query, values, _ref3, rows;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "\n            SELECT * FROM users WHERE id = $1\n        ";
                values = [id];
                _context3.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref3 = _context3.sent;
                rows = _ref3.rows;
                return _context3.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function findById(_x9) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }]);
  return User;
}();

var _default = User;
exports["default"] = _default;