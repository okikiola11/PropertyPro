"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var User = [{
  id: 1,
  first_name: 'Okikiola',
  last_name: 'Apelehin',
  email: 'user@gmail.com',
  phone_number: '08023182819',
  address: '2a, 2nd street Osborne estate Ikoyi',
  is_admin: false,
  password: _bcrypt["default"].hashSync('okiki123', _bcrypt["default"].genSaltSync(8))
}, {
  id: 2,
  first_name: 'John',
  last_name: 'Agent',
  email: 'admin@gmail.com',
  phone_number: '08023182844',
  address: '5b, Udi street Osborne estate Ikoyi',
  is_admin: false,
  password: _bcrypt["default"].hashSync('okiki123', _bcrypt["default"].genSaltSync(8))
}];
var _default = User;
exports["default"] = _default;