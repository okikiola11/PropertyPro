"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("./index"));

var _seeders = _interopRequireDefault(require("./seeders"));

var createTables =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var queryText;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryText = "\n  DROP TABLE IF EXISTS users CASCADE;\n  CREATE TABLE users(\n    id SERIAL NOT NULL PRIMARY KEY,\n    email VARCHAR(128) UNIQUE NOT NULL,\n    first_name VARCHAR(128) NOT NULL,\n    last_name VARCHAR(128) NOT NULL,\n    hashed_password VARCHAR (355) NOT NULL,\n    phone_number BIGINT NOT NULL,\n    address VARCHAR(128) NOT NULL,\n    is_admin BOOLEAN NOT NULL,\n    created_on TIMESTAMP NOT NULL DEFAULT (NOW())\n  );\n  DROP TABLE IF EXISTS properties CASCADE;\n  CREATE TABLE properties(\n    id SERIAL NOT NULL PRIMARY KEY,\n    owner INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,\n    status VARCHAR(10) NOT NULL DEFAULT ('available'),\n    price NUMERIC(200, 2) NOT NULL,\n    state VARCHAR(128)  NOT NULL,\n    city VARCHAR(128) NOT NULL,\n    address VARCHAR(355) NOT NULL,\n    type VARCHAR(128) NOT NULL,\n    image_url VARCHAR(250) NOT NULL,\n    created_on TIMESTAMP NOT NULL DEFAULT (NOW())\n  );\n  DROP TABLE IF EXISTS flags CASCADE;\n  CREATE TABLE flags(\n    id SERIAL NOT NULL PRIMARY KEY,\n    property_id INT NOT NULL REFERENCES properties(id) ON DELETE CASCADE,\n    reason VARCHAR(128) NOT NULL,\n    description VARCHAR(600) NOT NULL,\n    created_on TIMESTAMP NOT NULL DEFAULT (NOW())\n  );\n  ";
            _context.prev = 1;
            _context.next = 4;
            return _index["default"].queryPool(queryText + _seeders["default"]);

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 6]]);
  }));

  return function createTables() {
    return _ref.apply(this, arguments);
  };
}();

createTables();