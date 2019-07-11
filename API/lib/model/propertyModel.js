"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var PropertyModel = function PropertyModel(id, owner, price, state, city, address, type, image_name, image_id, image_url, status) {
  (0, _classCallCheck2["default"])(this, PropertyModel);
  this.id = id;
  this.owner = owner;
  this.price = price;
  this.state = state;
  this.city = city;
  this.address = address;
  this.type = type;
  this.image_name = image_name;
  this.image_id = image_id;
  this.image_url = image_url;
  this.status = status;
};