"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var seeders = "\n    INSERT INTO users (first_name, last_name, email, phone_number, address, hashed_password, is_admin)\n    VALUES ('Okikiola', 'Apelehin', 'user@gmail.com', '08023182344', '22, ellen road abesan estate', '".concat(_bcrypt["default"].hashSync('okiki123', 8), "', 'false');\n\n    INSERT INTO users (first_name, last_name, email, phone_number, address, hashed_password, is_admin)\n    VALUES ('Shola', 'Oladele', 'shola@gmail.com', '08023182344', 'Road 2, dele street, ojota', '").concat(_bcrypt["default"].hashSync('deledoe', 8), "', 'false');\n");
var _default = seeders;
exports["default"] = _default;