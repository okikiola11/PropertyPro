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

var _cloudinaryConfig = _interopRequireDefault(require("../utils/cloudinaryConfig"));

var _propertyModel = _interopRequireDefault(require("../model/propertyModel"));

var PropertyController =
/*#__PURE__*/
function () {
  function PropertyController() {
    (0, _classCallCheck2["default"])(this, PropertyController);
  }

  (0, _createClass2["default"])(PropertyController, null, [{
    key: "postProperty",
    value: function () {
      var _postProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var _req$body, price, state, city, address, type, image_url, id, newPrice, newProperty;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, price = _req$body.price, state = _req$body.state, city = _req$body.city, address = _req$body.address, type = _req$body.type, image_url = _req$body.image_url;
                id = req.auth.id; //get owner ID from user table

                newPrice = parseFloat(price);
                _context.next = 6;
                return _propertyModel["default"].SaveProperty(id, price, state, city, address, type, image_url);

              case 6:
                newProperty = _context.sent;
                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Property advert has been created',
                  data: newProperty
                }));

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to create a property advert'
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function postProperty(_x, _x2) {
        return _postProperty.apply(this, arguments);
      }

      return postProperty;
    }()
  }, {
    key: "updateProperty",
    value: function () {
      var _updateProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var id, price, property, status, type, state, city, address, created_on, image_url;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = parseInt(req.params.propertyId, 10);
                price = req.body.price;
                _context2.next = 5;
                return _propertyModel["default"].updateProperty(price, id);

              case 5:
                property = _context2.sent;
                status = property.status, type = property.type, state = property.state, city = property.city, address = property.address, created_on = property.created_on, image_url = property.image_url;
                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Property has been succesfully updated',
                  data: {
                    id: id,
                    status: status,
                    type: type,
                    state: state,
                    city: city,
                    address: address,
                    price: price,
                    created_on: created_on,
                    image_url: image_url
                  }
                }));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 'internal server error',
                  error: 'Something went wrong while trying to update your property'
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      function updateProperty(_x3, _x4) {
        return _updateProperty.apply(this, arguments);
      }

      return updateProperty;
    }()
  }, {
    key: "getAllProperties",
    value: function () {
      var _getAllProperties = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var properties;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _propertyModel["default"].getAllProperties();

              case 3:
                properties = _context3.sent;

                if (!(properties.length === 0)) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'There are no existing properties'
                }));

              case 6:
                return _context3.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Successfully retrieved all properties',
                  data: properties
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'No property found'
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function getAllProperties(_x5, _x6) {
        return _getAllProperties.apply(this, arguments);
      }

      return getAllProperties;
    }()
  }, {
    key: "getSingleProperty",
    value: function () {
      var _getSingleProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, property;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = parseInt(req.params.id, 10);
                _context4.next = 4;
                return _propertyModel["default"].getSingleProperty(id);

              case 4:
                property = _context4.sent;

                if (property) {
                  _context4.next = 7;
                  break;
                }

                throw new Error('Property does not exist');

              case 7:
                return _context4.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Property has been retrieved successfully',
                  data: property
                }));

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

                if (!(_context4.t0.message === 'Property does not exist')) {
                  _context4.next = 14;
                  break;
                }

                return _context4.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Property does not exist'
                }));

              case 14:
                if (!(_context4.t0.message === 'Unauthorized')) {
                  _context4.next = 16;
                  break;
                }

                return _context4.abrupt("return", res.status(403).json({
                  status: 'Forbidden',
                  error: 'This property does not belong to you'
                }));

              case 16:
                return _context4.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to retrieve property'
                }));

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function getSingleProperty(_x7, _x8) {
        return _getSingleProperty.apply(this, arguments);
      }

      return getSingleProperty;
    }()
  }, {
    key: "updateMarkProperty",
    value: function () {
      var _updateMarkProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, markProperty, status, type, state, city, address, price, created_on, image_url;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = parseInt(req.params.propertyId, 10);
                _context5.next = 4;
                return _propertyModel["default"].updateMarkProperty(id);

              case 4:
                markProperty = _context5.sent;
                status = markProperty.status, type = markProperty.type, state = markProperty.state, city = markProperty.city, address = markProperty.address, price = markProperty.price, created_on = markProperty.created_on, image_url = markProperty.image_url;
                return _context5.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Property has been succesfully updated',
                  data: {
                    id: id,
                    status: status,
                    type: type,
                    state: state,
                    city: city,
                    address: address,
                    price: price,
                    created_on: created_on,
                    image_url: image_url
                  }
                }));

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  status: 'internal server error',
                  error: 'Something went wrong while trying to update your property'
                }));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function updateMarkProperty(_x9, _x10) {
        return _updateMarkProperty.apply(this, arguments);
      }

      return updateMarkProperty;
    }()
  }, {
    key: "deleteProperty",
    value: function () {
      var _deleteProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var id, deletedProperty;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                id = parseInt(req.params.id, 10);
                _context6.next = 4;
                return _propertyModel["default"].deleteProperty(id);

              case 4:
                deletedProperty = _context6.sent;

                if (deletedProperty) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Oooops! no record with such Property Id'
                }));

              case 7:
                return _context6.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Property has been deleted successfully'
                }));

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", res.status(500).send({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to delete the property, try again'
                }));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 10]]);
      }));

      function deleteProperty(_x11, _x12) {
        return _deleteProperty.apply(this, arguments);
      }

      return deleteProperty;
    }()
  }]);
  return PropertyController;
}();

var _default = PropertyController;
exports["default"] = _default;