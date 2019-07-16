"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var pool = new _pg.Pool({
  connectionString: process.env.ELEPHANTSQL
});
var _default = {
  query: function query(text, params) {
    return pool.query(text, params);
  },
  queryPool: function queryPool(text) {
    return pool.query(text);
  }
};
exports["default"] = _default;