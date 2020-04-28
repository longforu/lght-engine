"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByDotNotation = exports.changeByDotNotation = exports.rotatePoint = exports.degToRad = exports.radToDeg = exports.findDistance2Point = exports.findQuadrant = exports.mergeDefaultPropertyObject = exports.random = exports.calculateRotatePoint = exports.findIntersection = exports.findAngle2Point = exports.findAngle3Point = exports.findClosestPoint = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var random = function random(high, low) {
  return Math.round(Math.random() * (high - low + 1) + low);
};

exports.random = random;

var mergeDefaultPropertyObject = function mergeDefaultPropertyObject(p, d, o) {
  for (var prop in d) {
    if (_typeof(p) == 'object') {
      if (typeof p[prop] === 'function') o[prop] = p[prop];else if (typeof p[prop] != 'undefined') o[prop] = _lodash["default"].cloneDeep(p[prop]);else o[prop] = _lodash["default"].cloneDeep(d[prop]);
    } else {
      o[prop] = _lodash["default"].cloneDeep(d[prop]);
    }
  }
}; //<---------------------GEOMETRIC FUNCTION-------------------->


exports.mergeDefaultPropertyObject = mergeDefaultPropertyObject;

var findQuadrant = function findQuadrant(angle) {
  if (angle < 90 && angle > 0) return 1;
  if (angle > 90 && angle < 180) return 2;
  if (angle > 180 && angle < 270) return 3;
  if (angle > 270 && angle < 360) return 4;
};

exports.findQuadrant = findQuadrant;

var findDistance2Point = function findDistance2Point(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};

exports.findDistance2Point = findDistance2Point;

var findAngle2Point = function findAngle2Point(x1, y1, x2, y2) {
  //CHECK SPECIAL CASES
  if (x1 === x2 && y1 === y2) return 0;

  if (x1 === x2) {
    if (y1 < y2) return 270;
    if (y1 > y2) return 90;
  }

  if (y1 === y2) {
    if (x1 < x2) return 0;
    if (x2 < x1) return 180;
  } //FIND QUADRANT


  var dx = x2 - x1;
  var dy = y2 - y1;
  var tan = Math.atan(-dy / dx);
  if (x1 < x2 && y1 > y2) return radToDeg(tan); //QUADRANT 1

  if (x1 > x2 && y1 > y2) return 180 + radToDeg(tan); //QUADRANT 2

  if (x1 > x2 && y1 < y2) return 180 + radToDeg(tan); //QUADRANT 3

  if (x1 < x2 && y1 < y2) return 360 + radToDeg(tan); //QUADRANT 4
};

exports.findAngle2Point = findAngle2Point;

var radToDeg = function radToDeg(rad) {
  return rad * 180 / Math.PI;
};

exports.radToDeg = radToDeg;

var degToRad = function degToRad(deg) {
  return deg * Math.PI / 180;
};

exports.degToRad = degToRad;

var rotatePoint = function rotatePoint(cx, cy, x, y, deg) {
  return deg === 0 || deg === 360 ? [x, y] : calculateRotatePoint(cx, cy, findAngle2Point(cx, cy, x, y) + deg, findDistance2Point(cx, cy, x, y));
};

exports.rotatePoint = rotatePoint;

var calculateRotatePoint = function calculateRotatePoint(cx, cy, r, d) {
  var rad = degToRad(r); //IF IT'S IN SPECIAL CASE

  var angleIndex = [0, 90, 180, 270, 360];
  var coeffIndex = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 0]];

  if (angleIndex.indexOf(r) !== -1) {
    var coeff = coeffIndex[angleIndex.indexOf(r)];
    return [cx + coeff[0] * d, cy - coeff[1] * d];
  }

  return [cx + Math.cos(rad) * d, cy - Math.sin(rad) * d];
}; //<----------------------SEGMENT INTERSECTION, USED FOR OBJECT COLLISION------------------------------>


exports.calculateRotatePoint = calculateRotatePoint;

var findIntersection = function findIntersection(s1, s2) {
  //FIND CONSTRAINS FOR USE BEFORE INTERSECTION FUNCTION
  var _s2 = _slicedToArray(s1, 4),
      x11 = _s2[0],
      y11 = _s2[1],
      x12 = _s2[2],
      y12 = _s2[3];

  var _s3 = _slicedToArray(s2, 4),
      x21 = _s3[0],
      y21 = _s3[1],
      x22 = _s3[2],
      y22 = _s3[3];

  if (Math.round(x11) === Math.round(x12) || Math.round(x21) === Math.round(x22)) {
    var _rotatePoint = rotatePoint(0, 0, x11, y11, 30);

    var _rotatePoint2 = _slicedToArray(_rotatePoint, 2);

    x11 = _rotatePoint2[0];
    y11 = _rotatePoint2[1];

    var _rotatePoint3 = rotatePoint(0, 0, x12, y12, 30);

    var _rotatePoint4 = _slicedToArray(_rotatePoint3, 2);

    x12 = _rotatePoint4[0];
    y12 = _rotatePoint4[1];

    var _rotatePoint5 = rotatePoint(0, 0, x21, y21, 30);

    var _rotatePoint6 = _slicedToArray(_rotatePoint5, 2);

    x21 = _rotatePoint6[0];
    y21 = _rotatePoint6[1];

    var _rotatePoint7 = rotatePoint(0, 0, x22, y22, 30);

    var _rotatePoint8 = _slicedToArray(_rotatePoint7, 2);

    x22 = _rotatePoint8[0];
    y22 = _rotatePoint8[1];
  }

  var minX1 = Math.min(x11, x12);
  var maxX1 = Math.max(x11, x12);
  var minX2 = Math.min(x21, x22);
  var maxX2 = Math.max(x21, x22);
  var slope1 = (y11 - y12) / (x11 - x12);
  var slope2 = (y21 - y22) / (x21 - x22);
  var coeff1 = -(x11 * slope1) + y11;
  var coeff2 = -(x21 * slope2) + y21;
  if (slope1 === slope2) return false;
  var x = (coeff2 - coeff1) / (slope1 - slope2);
  var y = slope1 * x + coeff1;
  if (x > minX1 && x < maxX1 && x > minX2 && x < maxX2) return [x, y];
  return false;
}; //<--------------------------OTHER SEGMENT FUNCTION------------------------------>


exports.findIntersection = findIntersection;

var findAngle3Point = function findAngle3Point(cx, cy, x1, y1, x2, y2) {
  return Math.abs(findAngle2Point(cx, cy, x2, y2) - findAngle2Point(cx, cy, x1, y1));
}; //FIND THE 'HEIGHT' OF A POINT TO A SEGMENT


exports.findAngle3Point = findAngle3Point;

var findClosestPoint = function findClosestPoint(x, y, s) {
  var _s4 = _slicedToArray(s, 4),
      x1 = _s4[0],
      y1 = _s4[1],
      x2 = _s4[2],
      y2 = _s4[3];

  var angle = findAngle3Point(x1, y1, x, y, x2, y2);
  var d = findDistance2Point(x, y, x1, y1);
  var d1 = Math.abs(d * Math.cos(degToRad(angle)));
  var d2 = Math.sqrt(Math.pow(d, 2) - Math.pow(d1, 2));
  if (d1 > findDistance2Point(x1, y1, x2, y2)) return false;
  angle = degToRad(findAngle2Point(x1, y1, x2, y2));
  var xh = x1 + Math.cos(angle) * d1;
  var yh = y1 - Math.sin(angle) * d1;
  return [xh, yh, d2];
};

exports.findClosestPoint = findClosestPoint;

var changeByDotNotation = function changeByDotNotation(propertyString, object, value) {
  var propertyArray = propertyString.split(".");
  var objectLink = object;
  propertyArray.forEach(function (e, i) {
    if (i === propertyArray.length - 1) {
      if (Array.isArray(objectLink)) objectLink[parseInt(e)] = value;else objectLink[e] = value;
    } else {
      if (Array.isArray(objectLink)) objectLink = objectLink[parseInt(e)];else objectLink = objectLink[e];
    }
  });
};

exports.changeByDotNotation = changeByDotNotation;

var getByDotNotation = function getByDotNotation(propertyString, object) {
  var propertyArray = propertyString.split(".");
  var value = object;
  propertyArray.forEach(function (e) {
    if (Array.isArray(value)) value = value[parseInt(e)];else value = object[e];
  });
  return value;
};

exports.getByDotNotation = getByDotNotation;