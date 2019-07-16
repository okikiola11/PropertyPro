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

var _db = _interopRequireDefault(require("../db"));

var _propertyModel = _interopRequireDefault(require("../model/propertyModel"));

var Middleware =
/*#__PURE__*/
function () {
  function Middleware() {
    (0, _classCallCheck2["default"])(this, Middleware);
  }

  (0, _createClass2["default"])(Middleware, null, [{
    key: "findPropertyId",

    /** @description checks for availability and ownership of a users property */
    value: function () {
      var _findPropertyId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var propertyId, id, prop;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                propertyId = req.params.propertyId; //get property id

                id = req.auth.id; //get user id

                _context.next = 5;
                return _propertyModel["default"].findPropertyId(propertyId);

              case 5:
                prop = _context.sent;
                req.property = prop;

                if (prop) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.status(404).json({
                  status: 'Not found',
                  error: 'No property found'
                }));

              case 9:
                if (!(prop.owner !== id)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", res.status(401).json({
                  status: 'Unauthorized',
                  error: 'This property does not belong to you'
                }));

              case 11:
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(500).json({
                  status: 'Server internal error',
                  error: 'Something went while trying to update property 234'
                }));

              case 16:
                next();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }));

      function findPropertyId(_x, _x2, _x3) {
        return _findPropertyId.apply(this, arguments);
      }

      return findPropertyId;
    }()
  }]);
  return Middleware;
}();

var _default = Middleware;
exports["default"] = _default;