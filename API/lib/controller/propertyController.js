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
        var _req$body, price, state, city, address, type, image_name, userInfo, id, imageModel, newPrice, newlyCreatedProperty;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _req$body = req.body, price = _req$body.price, state = _req$body.state, city = _req$body.city, address = _req$body.address, type = _req$body.type, image_name = _req$body.image_name;
                userInfo = _userData["default"].find(function (details) {
                  return details.id === req.data.id;
                });
                id = userInfo.id; //get owner ID from user table

                imageModel = _propertyModel["default"].find(function (imgName) {
                  return imgName.imageName;
                });
                newPrice = parseFloat(price);
                newlyCreatedProperty = {
                  id: _propertyData["default"][_propertyData["default"].length - 1].id + 1,
                  owner: id,
                  newPrice: newPrice,
                  state: state,
                  city: city,
                  address: address,
                  type: type,
                  status: 'sold',
                  created_on: new Date().toLocaleString(),
                  image_url: image_url
                };

                _propertyData["default"].push(newlyCreatedProperty);

                return _context.abrupt("return", res.status(201).json({
                  status: 'success',
                  message: 'Property advert has been created',
                  data: [newlyCreatedProperty]
                }));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0.stack);
                return _context.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went wrong while trying to create a property advert'
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      function postProperty(_x, _x2) {
        return _postProperty.apply(this, arguments);
      }

      return postProperty;
    }()
  }]);
  return PropertyController;
}();

var _default = PropertyController;
exports["default"] = _default;