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
};

exports.mergeDefaultPropertyObject = mergeDefaultPropertyObject;

var mobileCheck = function mobileCheck() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}; //<---------------------GEOMETRIC FUNCTION-------------------->


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