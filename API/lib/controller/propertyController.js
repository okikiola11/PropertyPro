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

var _userData = _interopRequireDefault(require("../utils/userData"));

var _propertyData = _interopRequireDefault(require("../utils/propertyData"));

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
        var _req$body, price, state, city, address, type, owner, _req$file, image_id, image_url, image_name, newPrice, newlyCreatedProperty;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, price = _req$body.price, state = _req$body.state, city = _req$body.city, address = _req$body.address, type = _req$body.type;
                owner = req.auth.id; //get owner ID from user table

                _req$file = req.file, image_id = _req$file.public_id, image_url = _req$file.url, image_name = _req$file.originalname;
                newPrice = parseFloat(price);
                newlyCreatedProperty = {
                  id: _propertyData["default"][_propertyData["default"].length - 1].id + 1,
                  owner: owner,
                  price: newPrice,
                  state: state,
                  city: city,
                  address: address,
                  type: type,
                  status: 'available',
                  created_on: new Date().toLocaleString(),
                  image_url: image_url,
                  image_id: image_id,
                  image_name: image_name
                };

                _propertyData["default"].push(newlyCreatedProperty);

                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Property advert has been created',
                  data: [newlyCreatedProperty]
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
        var id, _req$body2, price, state, city, address, type, status, property, image_id, image_url, image_name, _req$file2, public_id, url, originalname, updatedProperty, index;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = req.params.id;
                _req$body2 = req.body, price = _req$body2.price, state = _req$body2.state, city = _req$body2.city, address = _req$body2.address, type = _req$body2.type, status = _req$body2.status;
                property = _propertyData["default"].find(function (propId) {
                  return propId.id === parseInt(id, 10);
                });

                if (property) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(404).json({
                  status: 404,
                  error: 'Property Id not found'
                }));

              case 6:
                if (req.file) {
                  _req$file2 = req.file, public_id = _req$file2.public_id, url = _req$file2.url, originalname = _req$file2.originalname;
                  image_id = public_id;
                  image_url = url;
                  image_name = originalname;
                }

                updatedProperty = {
                  id: property.id,
                  owner: property.owner,
                  price: price || property.price,
                  state: state || property.state,
                  city: city || property.city,
                  address: address || property.address,
                  type: type || property.type,
                  status: status || property.status,
                  image_id: image_id || property.image_id,
                  image_url: image_url || property.image_url,
                  image_name: image_name || property.image_name,
                  created_on: property.created_on
                };
                index = _propertyData["default"].findIndex(function (propId) {
                  return propId.id === parseInt(id, 10);
                });

                _propertyData["default"].splice(index, 1, updatedProperty);

                return _context2.abrupt("return", res.status(200).json({
                  status: 'success',
                  success: 'Property has being updated successfully',
                  data: updatedProperty
                }));

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(500).json({
                  status: 'internal server error',
                  error: 'Something went wrong while trying to update your property'
                }));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
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
        var allProperties;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                allProperties = _propertyData["default"].map(function (property) {
                  var id = property.id,
                      status = property.status,
                      price = property.price,
                      state = property.state,
                      city = property.city,
                      address = property.address,
                      type = property.type,
                      created_on = property.created_on,
                      image_url = property.image_url,
                      owner = property.owner;

                  var _userData$find = _userData["default"].find(function (_ref) {
                    var propertyId = _ref.id;
                    return propertyId === owner;
                  }),
                      owner_email = _userData$find.email,
                      owner_phone_number = _userData$find.phone_number;

                  return {
                    id: id,
                    status: status,
                    price: price,
                    state: state,
                    city: city,
                    address: address,
                    type: type,
                    created_on: created_on,
                    image_url: image_url,
                    owner_email: owner_email,
                    owner_phone_number: owner_phone_number
                  };
                });
                return _context3.abrupt("return", res.status(200).send({
                  status: 'success',
                  message: 'Successfully retrieved all properties',
                  data: allProperties
                }));

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(404).json({
                  status: 404,
                  error: 'No property found'
                }));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 5]]);
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
        var id, singleProperty, currentId, status, price, state, city, address, type, created_on, image_url, owner, _userData$find2, owner_email, owner_phone_number, newProperty;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                id = parseInt(req.params.id, 10);
                singleProperty = _propertyData["default"].find(function (getProperty) {
                  return getProperty.id === id;
                });

                if (singleProperty) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Property Id not found'
                }));

              case 5:
                currentId = singleProperty.id, status = singleProperty.status, price = singleProperty.price, state = singleProperty.state, city = singleProperty.city, address = singleProperty.address, type = singleProperty.type, created_on = singleProperty.created_on, image_url = singleProperty.image_url, owner = singleProperty.owner;
                _userData$find2 = _userData["default"].find(function (_ref2) {
                  var propertyId = _ref2.id;
                  return propertyId === owner;
                }), owner_email = _userData$find2.email, owner_phone_number = _userData$find2.phone_number;
                newProperty = {
                  id: currentId,
                  status: status,
                  price: price,
                  state: state,
                  city: city,
                  address: address,
                  type: type,
                  created_on: created_on,
                  image_url: image_url,
                  owner_email: owner_email,
                  owner_phone_number: owner_phone_number
                };
                return _context4.abrupt("return", res.status(200).json({
                  status: 200,
                  message: 'Property has been successfully retrieved',
                  data: newProperty
                }));

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Property does not exist'
                }));

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }));

      function getSingleProperty(_x7, _x8) {
        return _getSingleProperty.apply(this, arguments);
      }

      return getSingleProperty;
    }()
  }, {
    key: "markSoldProperty",
    value: function () {
      var _markSoldProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, getProperty, newlyCreatedPropertyDetails, indexValue;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                id = parseInt(req.params.id, 10);
                getProperty = _propertyData["default"].find(function (findPropId) {
                  return findPropId.id === id;
                });

                if (getProperty) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Oooops! no record with such Property Id'
                }));

              case 5:
                newlyCreatedPropertyDetails = {
                  id: getProperty.id,
                  status: 'sold',
                  owner: getProperty.owner,
                  type: getProperty.type,
                  state: getProperty.state,
                  city: getProperty.city,
                  address: getProperty.address,
                  price: getProperty.price,
                  created_on: getProperty.created_on,
                  image_url: getProperty.image_url
                };
                indexValue = _propertyData["default"].findIndex(function (propIndex) {
                  return propIndex.id === id;
                });

                _propertyData["default"].splice(indexValue, 1, newlyCreatedPropertyDetails);

                return _context5.abrupt("return", res.status(200).json({
                  status: 'success',
                  success: 'Property has being updated successfully',
                  data: {
                    id: id,
                    status: 'sold',
                    type: getProperty.type,
                    state: getProperty.state,
                    city: getProperty.city,
                    address: getProperty.address,
                    price: getProperty.price,
                    created_on: getProperty.created_on,
                    image_url: getProperty.image_url
                  }
                }));

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(500).json({
                  status: 'internal server error',
                  error: 'Something went wrong while trying to update your property'
                }));

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function markSoldProperty(_x9, _x10) {
        return _markSoldProperty.apply(this, arguments);
      }

      return markSoldProperty;
    }() // static async getPropertyType(req, res) {
    //   try {
    //     const { type } = req.query;
    //     const id = parseInt(req.params.id, 10);
    //   } catch (error) {}
    // }

  }, {
    key: "deleteProperty",
    value: function () {
      var _deleteProperty = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, res) {
        var id, index;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                id = parseInt(req.params.id, 10);
                index = _propertyData["default"].findIndex(function (deletedData) {
                  return deletedData.id === id;
                });

                if (index) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'Oooops! no record with such Property Id'
                }));

              case 5:
                _propertyData["default"].splice(index, 1);

                return _context6.abrupt("return", res.status(200).json({
                  status: 'success',
                  message: 'Property has been deleted successfully'
                }));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                return _context6.abrupt("return", res.status(500).send({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to delete the property, try again'
                }));

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
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