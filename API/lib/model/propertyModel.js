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

var Properties =
/*#__PURE__*/
function () {
  function Properties() {
    (0, _classCallCheck2["default"])(this, Properties);
  }

  (0, _createClass2["default"])(Properties, null, [{
    key: "SaveProperty",
    value: function () {
      var _SaveProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(owner, price, state, city, address, type, image_url) {
        var query, values, _ref, rows;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "\n            INSERT INTO\n            properties(\n              owner, price, state, city, address, type, image_url)\n            VALUES ($1, $2, $3, $4, $5, $6, $7)\n            returning *\n        ";
                values = [owner, price, state, city, address, type, image_url];
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

      function SaveProperty(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
        return _SaveProperty.apply(this, arguments);
      }

      return SaveProperty;
    }()
  }, {
    key: "updateProperty",
    value: function () {
      var _updateProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(price, id) {
        var query, values, _ref2, rows;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n        UPDATE properties SET price = $1 WHERE id = $2 RETURNING *\n    ";
                values = [price, id];
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

      function updateProperty(_x8, _x9) {
        return _updateProperty.apply(this, arguments);
      }

      return updateProperty;
    }()
  }, {
    key: "findPropertyId",
    value: function () {
      var _findPropertyId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id) {
        var query, values, _ref3, rows;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                query = "\n        SELECT * FROM properties WHERE id = $1\n    ";
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

      function findPropertyId(_x10) {
        return _findPropertyId.apply(this, arguments);
      }

      return findPropertyId;
    }()
  }, {
    key: "getAllProperties",
    value: function () {
      var _getAllProperties = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var query, _ref4, rows;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                query = "\n      SELECT properties.id,\n      properties.status,\n      properties.type,\n      properties.state,\n      properties.city,\n      properties.address,\n      properties.price,\n      properties.created_on,\n      properties.image_url,\n      users.email owner_email,\n      users.phone_number owner_phone_number\n      FROM\n      properties\n      INNER JOIN users ON users.id = properties.owner\n    ";
                _context4.next = 3;
                return _index["default"].queryPool(query);

              case 3:
                _ref4 = _context4.sent;
                rows = _ref4.rows;
                return _context4.abrupt("return", rows);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAllProperties() {
        return _getAllProperties.apply(this, arguments);
      }

      return getAllProperties;
    }()
  }, {
    key: "getSingleProperty",
    value: function () {
      var _getSingleProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var query, values, _ref5, rows;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                query = "\n      SELECT properties.id,\n      properties.status,\n      properties.type,\n      properties.state,\n      properties.city,\n      properties.address,\n      properties.price,\n      properties.created_on,\n      properties.image_url,\n      users.email owner_email,\n      users.phone_number owner_phone_number\n      FROM\n      properties\n      INNER JOIN users ON users.id = properties.owner WHERE properties.id = $1\n    ";
                values = [id];
                _context5.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref5 = _context5.sent;
                rows = _ref5.rows;
                return _context5.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getSingleProperty(_x11) {
        return _getSingleProperty.apply(this, arguments);
      }

      return getSingleProperty;
    }()
  }, {
    key: "updateMarkProperty",
    value: function () {
      var _updateMarkProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(id) {
        var query, values, _ref6, rows;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = "\n        UPDATE properties SET status = $1 WHERE id = $2 RETURNING *\n    ";
                values = ['sold', id];
                _context6.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref6 = _context6.sent;
                rows = _ref6.rows;
                return _context6.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateMarkProperty(_x12) {
        return _updateMarkProperty.apply(this, arguments);
      }

      return updateMarkProperty;
    }()
  }, {
    key: "deleteProperty",
    value: function () {
      var _deleteProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(id) {
        var query, values, _ref7, rows;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                query = "\n        DELETE FROM properties WHERE id = $1 RETURNING *;\n    ";
                values = [id];
                _context7.next = 4;
                return _index["default"].query(query, values);

              case 4:
                _ref7 = _context7.sent;
                rows = _ref7.rows;
                return _context7.abrupt("return", rows[0]);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteProperty(_x13) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }()
  }]);
  return Properties;
}();

var _default = Properties;
exports["default"] = _default;