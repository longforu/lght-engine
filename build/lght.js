"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util/util");

var _temp,
    _this4 = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lght = {}; //Config

lght.inputReference = {};
lght.inputReference.movementIndex = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
lght.inputReference.coeffIndex = [[0, -1], [-1, 0], [0, 1], [1, 0], [0, -1], [-1, 0], [0, 1], [1, 0]];
lght.defaultAppConfig = {
  initFunctions: ["visualInit", 'mouseInputInit'],
  animateFunctions: ["animate", "update", "render"],
  lastFrame: undefined,
  constantRender: true,
  background: "black",
  pixelDensity: 1,
  eventListeners: [],
  eventListenersFunction: []
};
lght.defaultObjectProps = {
  shapes: [],
  animations: [],
  behaviors: [],
  behaviorFuncs: [],
  behaviorQueue: [],
  hoverEvents: [],
  animationCount: 0,
  initFunctions: ["createPreloader"],
  "static": true,
  x: 0,
  y: 0,
  rotation: 0,
  positionIndicator: false,
  display: true,
  opacity: 1,
  mouseUpEvent: [],
  mouseDownEvent: [],
  mouseMoveEvent: [],
  zIndex: 0,
  alignX: false,
  alignDirectionX: 'right',
  alignMarginX: 5,
  alignY: false,
  alignDirectionY: 'top',
  alignMarginY: 5
};
lght.defaultStorageProps = {
  spacing: 0,
  direction: 'row',
  model: [],
  margin: 0
};
lght.defaultAdvanceStorageProps = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  backgroundFunction: null
};
lght.defaultShapeOptions = {
  kind: "rect",
  animations: [],
  hoverEvents: [],
  animationCount: 0,
  x: 0,
  y: 0,
  rotation: 0,
  scaleX: 1,
  scaleY: 1,
  color: "black",
  display: true,
  lineWidth: 1,
  opacity: 1,
  borderColor: 'yellow',
  borderWidth: 10,
  border: false,
  borderOnly: false,
  shadow: null,
  mouseUpEvent: [],
  mouseDownEvent: [],
  mouseMoveEvent: []
};
lght.defaultRectOptions = {
  w: 0,
  h: 0,
  clip: false,
  clipImageLink: null,
  clipCanvas: null,
  clipSpriteSheetX: null,
  clipSpriteSheetY: null,
  spriteLengthX: null,
  spriteLengthY: null
};
lght.defaultArcOptions = {
  rad: 0,
  arcDegree: 360
};
lght.defaultTextOptions = {
  textAlign: 'center',
  fontFamily: 'Arial Bold',
  fontSize: 10,
  text: 'Hello World',
  fontBackwardCompatibility: undefined
};
lght.defaultImgOptions = {
  spriteLink: null,
  drawWidth: null,
  drawHeight: null,
  loadedFunction: undefined
};
lght.defaultPolyOptions = {
  points: [],
  specialPolygon: false,
  numberOfSide: 0,
  radius: 10,
  clip: false,
  clipImageLink: null
};
lght.defaultLineOptions = {
  points: []
}; //Main

lght.apps = [];
lght.gameloop = {
  list: [],
  frameTime: undefined,
  lastFrame: undefined
};

lght.gameloop.loop = function (time) {
  requestAnimationFrame(lght.gameloop.loop);

  for (var i = 0; i < lght.gameloop.list.length; i++) {
    lght.gameloop.list[i](lght.apps[i]);
  }

  if (time !== undefined) {
    lght.lastFrame = lght.frameTime;
    lght.frameTime = time;
  }
};

lght.gameloop.loop();

lght.app = function (elem, options) {
  var _this = this;

  this.options = {};
  (0, _util.mergeDefaultPropertyObject)(options, lght.defaultAppConfig, this.options);
  this.canvas = elem;
  this.eventListeners = [];
  this.eventListenersFunction = [];
  this.options.initFunctions.forEach(function (e) {
    return _this[e]();
  });
  this.objects = [];
  this.index = lght.gameloop.list.length;
  lght.gameloop.list.push(this.options.constantRender ? this.turnFunctions : function () {});
  lght.apps.push(this);
};

lght.app.prototype.turnFunctions = function (obj) {
  obj.options.animateFunctions.forEach(function (e) {
    return obj[e]();
  });
};

lght.app.prototype.addEventListener = function (event, func) {
  this.eventListeners.push(event);
  this.eventListenersFunction.push(func);
  this.canvas.addEventListener(event, func);
};

lght.app.prototype.removeEventListenr = function () {
  var _this2 = this;

  this.eventListeners.forEach(function (e, i) {
    return _this2.canvas.removeEventListener(e, _this2.eventListenersFunction[i]);
  });
};

lght.app.prototype.kill = function () {
  this.objects.forEach(function (e) {
    e.shapes.forEach(function (f) {
      return f.kill();
    });
    e.kill();
  });
  this.killed = true;
  lght.gameloop.list.splice(this.index, 1);
  lght.apps.splice(this.index, 1);
  this.removeEventListenr();
};

lght.app.prototype.update = function () {
  this.objects.forEach(function (e) {
    if (typeof e.update === 'function') e.update(e);
  });
};

lght.app.prototype.translateMouseCoor = function (e) {
  var x;
  var y;

  if (e.pageX || e.pageY) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientX + document.body.scrollTop + document.documentElement.scrollTop;
  }

  if (this.canvas.parentElement.scrollLeft && this.canvas.style.position !== 'fixed') x += this.canvas.parentElement.scrollLeft;
  if (this.canvas.parentElement.scrollTop && this.canvas.style.position !== 'fixed') x += this.canvas.parentElement.scrollTop;
  x -= this.canvas.offsetLeft;
  y -= this.canvas.offsetTop;
  return [x * this.pixelDensity, y * this.pixelDensity];
}; //Object
//TOTAL OBJECT COUNT, USED TO PRODUCE ID


lght.objectCount = 0;
lght.object = (_temp = /*#__PURE__*/function () {
  function _temp(property, parent) {
    var _this3 = this;

    _classCallCheck(this, _temp);

    _defineProperty(this, "translateToRealPixel", function (num, extraInfo) {
      if (num.match(/%/)) return parseInt(num.split('').filter(function (e) {
        return e !== '%';
      }).join('')) / 100 * extraInfo;
      return parseInt(num);
    });

    lght.objectCount++;
    this.id = lght.objectCount;
    this.parent = parent;
    this.parent.objects.push(this);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultObjectProps, this);
    this.initFunctions.forEach(function (e) {
      return _this3[e]();
    });
    this.name = property.objectName ? property.objectName : "Object ".concat(this.id);
  }

  _createClass(_temp, [{
    key: "changePosition",
    value: function changePosition(x, y) {
      if (x) {
        if (this.alignX) {
          var coeff = this.alignDirectionX === 'left' || this.alignDirectionX === 'center' ? 1 : -1;
          this.alignMarginX = x - coeff * this.posX;
        } else this.x = x;
      }

      if (y) {
        if (this.alignY) {
          var _coeff = this.alignDirectionY === 'top' || this.alignDirectionY === 'center' ? 1 : -1;

          this.alignMarginY = y - _coeff * this.posY;
        } else this.y = y;
      }
    }
  }, {
    key: "kill",
    value: function kill() {
      this.parent.objects.splice(this.parent.objects.indexOf(this), 1);
    }
  }, {
    key: "collide",
    value: function collide(obj) {
      var _iterator = _createForOfIteratorHelper(this.shapes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s1 = _step.value;

          var _iterator2 = _createForOfIteratorHelper(obj.shapes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var s2 = _step2.value;
              if (s1.collide(s2)) return true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "pointInObject",
    value: function pointInObject(x, y) {
      var _iterator3 = _createForOfIteratorHelper(this.shapes),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var s1 = _step3.value;
          if (s1.pointInShape(x, y)) return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return false;
    }
  }, {
    key: "findMax",
    value: function findMax() {
      var xs = [];
      var ys = [];
      this.shapes.forEach(function (s) {
        var _s$findMax = s.findMax(),
            _s$findMax2 = _slicedToArray(_s$findMax, 4),
            minX = _s$findMax2[0],
            maxX = _s$findMax2[1],
            minY = _s$findMax2[2],
            maxY = _s$findMax2[3];

        xs = [].concat(_toConsumableArray(xs), [minX, maxX]);
        ys = [].concat(_toConsumableArray(ys), [minY, maxY]);
      });
      return [Math.min.apply(Math, _toConsumableArray(xs)), Math.max.apply(Math, _toConsumableArray(xs)), Math.min.apply(Math, _toConsumableArray(ys)), Math.max.apply(Math, _toConsumableArray(ys))];
    }
  }, {
    key: "findThePositionThatIsRelativeToThisObjectFromAbsolutePosition",
    value: function findThePositionThatIsRelativeToThisObjectFromAbsolutePosition(x, y) {
      return [x - this.x, y - this.y];
    }
  }, {
    key: "posX",
    get: function get() {
      if (this.alignX) {
        var base;
        if (this.alignDirectionX === 'left') base = 0;else if (this.alignDirectionX === 'right') base = this.parent.canvas.width;else base = this.parent.canvas.width / 2;
        var coeff = this.alignDirectionX === 'left' || this.alignDirectionX === 'center' ? 1 : -1;
        return base + coeff * this.alignMarginX;
      }

      if (typeof this.x === 'number') return this.x;
      var arr = this.x.split(' ');
      if (arr.length === 1) return this.translateToRealPixel(arr[0], this.parent.canvas.width);else {
        var i = 0;

        while (i < arr.length) {
          if (arr[i] === '+' || arr[i] === '-') {
            var _coeff2 = arr[i] === '+' ? 1 : -1;

            arr[i] = this.translateToRealPixel(arr.splice(i + 1, 1), this.parent.canvas.width) + _coeff2 * this.translateToRealPixel(arr.splice(i - 1, 1), this.parent.canvas.width);
          } else i++;
        }
      }
      return arr[0];
    }
  }, {
    key: "posY",
    get: function get() {
      if (this.alignY) {
        var base;
        if (this.alignDirectionY === 'top') base = 0;else if (this.alignDirectionY === 'bottom') base = this.parent.canvas.height;else base = this.parent.canvas.height / 2;
        var coeff = this.alignDirectionY === 'top' || this.alignDirectionY === 'center' ? 1 : -1;
        return base + coeff * this.alignMarginY;
      }

      if (typeof this.y === 'number') return this.y;
      var arr = this.y.split(' ');
      if (arr.length === 1) return this.translateToRealPixel(arr[0], this.parent.canvas.height);else {
        var i = 0;

        while (i < arr.length) {
          if (arr[i] === '+' || arr[i] === '-') {
            var _coeff3 = arr[i] === '+' ? 1 : -1;

            arr[i] = this.translateToRealPixel(arr.splice(i + 1, 1), this.parent.canvas.height) + _coeff3 * this.translateToRealPixel(arr.splice(i - 1, 1), this.parent.canvas.height);
          } else i++;
        }
      }
      return arr[0];
    }
  }, {
    key: "w",
    get: function get() {
      return this.findMax()[1] - this.findMax()[0];
    }
  }, {
    key: "h",
    get: function get() {
      return this.findMax()[3] - this.findMax(2);
    }
  }]);

  return _temp;
}(), _temp);
lght.templateNames = [];
lght.templates = [];

lght.template = function (name, func) {
  lght.templateNames.push(name);
  lght.templates.push(func);
};

lght.app.prototype.useTemplate = function (name, model) {
  return lght.templates[lght.templateNames.indexOf(name)](model, _this4);
};

lght.storage = /*#__PURE__*/function (_lght$object) {
  _inherits(_class2, _lght$object);

  var _super = _createSuper(_class2);

  function _class2(property, parent) {
    var _this5;

    _classCallCheck(this, _class2);

    _this5 = _super.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultStorageProps, _assertThisInitialized(_this5));
    _this5.storageShapes = [];
    _this5.model = property.model || [];
    _this5.elementFunction = property.elementFunction || null;

    _this5.updateToModel();

    return _this5;
  }

  _createClass(_class2, [{
    key: "updateToModel",
    value: function updateToModel() {
      var _this6 = this;

      var model = _toConsumableArray(this.model);

      this.storageShapes.forEach(function (e) {
        e.kill();
      });
      this.storageShapes = [];
      if (!model.length) return;
      if (!this.elementFunction) return;
      var shape;
      var totalLength;

      switch (this.direction) {
        case 'row-reverse':
          model.reverse();

        case 'row':
          shape = this.elementFunction(model[0], 0);
          var w = shape.width;
          shape.kill();
          totalLength = w * model.length + this.spacing * (model.length - 1);
          var firstX = -totalLength / 2 + 0.5 * w + this.margin;
          model.forEach(function (content, i) {
            var shape = _this6.elementFunction(content, i);

            _this6.storageShapes.push(shape);

            shape.x = firstX + i * w + i * _this6.spacing;
          });
          break;

        case 'column-reverse':
          model.reverse();

        case 'column':
          shape = this.elementFunction(model[0], 0);
          var h = shape.height;
          shape.kill();
          totalLength = h * model.length + this.spacing * (model.length - 1);
          var firstY = -totalLength / 2 + 0.5 * h - this.margin;
          model.forEach(function (content, i) {
            var shape = _this6.elementFunction(content, i);

            _this6.storageShapes.push(shape);

            shape.y = firstY + i * h + i * _this6.spacing;
          });
          break;

        default:
          break;
      }

      this.updateVisual();
      return this;
    }
  }, {
    key: "totalLength",
    get: function get() {
      if (!this.model.length) return 0;
      if (!this.elementFunction) return 0;
      var shape;

      switch (this.direction) {
        case 'row-reverse':
        case 'row':
          shape = this.elementFunction(this.model[0], 0);
          var w = shape.width;
          shape.kill();
          return w * this.model.length + this.spacing * (this.model.length - 1);

        case 'column-reverse':
        case 'column':
          shape = this.elementFunction(this.model[0], 0);
          var h = shape.height;
          shape.kill();
          return h * this.model.length + this.spacing * (this.model.length - 1);

        default:
          return 0;
          break;
      }
    }
  }]);

  return _class2;
}(lght.object);

lght.advanceStorage = /*#__PURE__*/function (_lght$storage) {
  _inherits(_class3, _lght$storage);

  var _super2 = _createSuper(_class3);

  function _class3(property, parent) {
    var _this7;

    _classCallCheck(this, _class3);

    _this7 = _super2.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultAdvanceStorageProps, _assertThisInitialized(_this7));

    _this7.updateToModel();

    return _this7;
  }

  _createClass(_class3, [{
    key: "updateToModel",
    value: function updateToModel() {
      _get(_getPrototypeOf(_class3.prototype), "updateToModel", this).call(this);

      if (!this.backgroundFunction) return;
      this.backgroundShape = this.backgroundFunction();
      var h, w;

      if (this.direction.match(/column/)) {
        h = this.totalLength;
        w = Math.max.apply(Math, _toConsumableArray(this.storageShapes.map(function (e) {
          return e.w;
        })));
      } else {
        w = this.totalLength;
        h = Math.max.apply(Math, _toConsumableArray(this.storageShapes.map(function (e) {
          return e.h;
        })));
      }

      this.backgroundShape.h = h + this.paddingBottom + this.paddingTop;
      this.backgroundShape.w = w + this.paddingLeft + this.paddingRight;
      this.backgroundShape.x += this.paddingRight - this.paddingLeft;
      this.backgroundShape.y += this.paddingTop - this.paddingBottom;
      this.shapes.splice(this.shapes.length - 1, 1);
      this.shapes.unshift(this.backgroundShape);
      this.updateVisual();
      return this;
    }
  }]);

  return _class3;
}(lght.storage);

lght.spriteLinkReference = [];
lght.spriteImageReference = [];
lght.funcLists = [];

lght.sprite = function (link, func) {
  var index = lght.spriteLinkReference.indexOf(link);

  if (index !== -1) {
    var image = lght.spriteImageReference[index];
    lght.funcLists[index].push(func);
    if (image.complete) requestAnimationFrame(func);
    return image;
  } else {
    var _image = new Image();

    var id = lght.spriteImageReference.length;

    _image.onload = function () {
      lght.funcLists[id].forEach(function (e) {
        return e();
      });
    };

    lght.funcLists[id] = [];
    lght.funcLists[id].push(func);
    _image.src = link;
    lght.spriteLinkReference.push(link);
    lght.spriteImageReference.push(_image);
    return _image;
  }
};

lght.sound = /*#__PURE__*/function () {
  function _class4(link, loop) {
    var _this8 = this;

    _classCallCheck(this, _class4);

    this.elem = document.createElement('audio');

    this.elem.oncanplaythrough = function () {
      _this8.loaded = true;

      _this8.updateQueue();
    };

    this.elem.loop = loop;
    this.elem.volume = 0.2;
    this.elem.src = link;
    this.elem.setAttribute('preload', 'auto');
    this.elem.setAttribute('controls', 'none');
    this.elem.style.display = 'none';
    document.body.appendChild(this.elem);
    this.queue = 1;
    this.running = false;
    this.loaded = false;
  }

  _createClass(_class4, [{
    key: "updateQueue",
    value: function updateQueue() {
      var _this9 = this;

      if (!this.running && this.queue && this.loaded && !lght.mute) {
        this.running = true;
        this.elem.play();
        setTimeout(function () {
          _this9.running = false;

          _this9.updateQueue();
        }, this.elem.duration + 300);
        this.queue--;
      }
    }
  }, {
    key: "addToQueue",
    value: function addToQueue() {
      this.queue++;
      this.updateQueue();
    }
  }]);

  return _class4;
}();

lght.audioReference = [];
lght.audioLinkReference = [];

lght.playSound = function (src, loop) {
  if (lght.audioLinkReference.indexOf(src) < 0) {
    var sound = new lght.sound(src, loop);
    lght.audioReference.push(sound);
    lght.audioLinkReference.push(sound);
  } else lght.audioReference[lght.audioLinkReference.indexOf(src)].addToQueue();
};

lght.stopAll = function () {
  Array.from(document.getElementsByTagName('audio')).forEach(function (e) {
    e.pause();
  });
};

lght.muteAll = function () {
  lght.mute = true;
  lght.stopAll();
  Array.from(document.getElementsByTagName('audio')).forEach(function (e) {
    return e.mute = true;
  });
};

lght.unmuteAll = function () {
  lght.mute = false;
  lght.stopAll();
  Array.from(document.getElementsByTagName('audio')).forEach(function (e) {
    return e.mute = false;
  });
  lght.audioReference.forEach(function (e) {
    if (e.elem.loop) e.addToQueue();
  });
};

lght.component = /*#__PURE__*/function () {
  function _class5(object) {
    _classCallCheck(this, _class5);

    if (!lght.components) lght.components = {};
    if (!object.name) throw Error("Component must have name");
    lght.components[object.name] = object;
  }

  _createClass(_class5, null, [{
    key: "addComponent",
    value: function addComponent(name) {
      var property = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var object = arguments.length > 2 ? arguments[2] : undefined;

      var option = _objectSpread({}, lght.components[name]);

      for (var _prop in property) {
        option[_prop] = property[_prop];
      }

      return new lght[option.kind](option, object);
    }
  }]);

  return _class5;
}();

lght.addComponent = function (property) {
  return new lght.component(property);
};

lght.classes = {};

lght.addClass = function (name, options) {
  return lght.classes[name] = options;
};

lght.shape = /*#__PURE__*/function () {
  function _class6(property, parent) {
    _classCallCheck(this, _class6);

    if (property["class"]) {
      var _iterator4 = _createForOfIteratorHelper(property["class"].split(' ')),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var className = _step4.value;

          for (var attr in lght.classes[className] || {}) {
            if (property.importantAttr) if (property.importantAttr.split(' ').includes(attr)) continue;
            property[attr] = lght.classes[className][attr];
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    this.kind = property.kind;
    this.parent = parent;
    this.parent.shapes.push(this);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultShapeOptions, this);
  }

  _createClass(_class6, [{
    key: "kill",
    value: function kill() {
      var index = this.parent.shapes.indexOf(this);
      if (index < 0) return;
      this.parent.shapes.splice(index, 1);
      this.parent.updateVisual();
    }
  }, {
    key: "findVertex",
    value: function findVertex() {
      return [];
    }
  }, {
    key: "findMax",
    value: function findMax() {
      var vertex = this.findVertex();
      var xs = [];
      var ys = [];
      vertex.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        xs.push(x);
        ys.push(y);
      });
      var offsetMinX = -this.borderWidthIfBorderIsOn;
      var offsetMaxX = this.borderWidthIfBorderIsOn;
      var offsetMinY = -this.borderWidthIfBorderIsOn;
      var offsetMaxY = this.borderWidthIfBorderIsOn;

      if (this.shadow) {
        var shadowOffsetMinX = -this.shadow.blur - 2;
        var shadowOffsetMaxX = this.shadow.blur + 2;
        var shadowOffsetMinY = -this.shadow.blur - 2;
        var shadowOffsetMaxY = this.shadow.blur + 2;

        if (this.shadow.offsetX) {
          shadowOffsetMinX += this.shadow.offsetX;
          shadowOffsetMaxX += this.shadow.offsetX;
        }

        if (this.shadow.offsetY) {
          shadowOffsetMinY += this.shadow.offsetY;
          shadowOffsetMaxY += this.shadow.offsetY;
        }

        if (shadowOffsetMinX < 0) offsetMinX += shadowOffsetMinX;
        if (shadowOffsetMaxX > 0) offsetMaxX += shadowOffsetMaxX;
        if (shadowOffsetMinY < 0) offsetMinY += shadowOffsetMinY;
        if (shadowOffsetMaxY > 0) offsetMaxY += shadowOffsetMaxY;
      }

      return [Math.min.apply(Math, xs) + offsetMinX, Math.max.apply(Math, xs) + offsetMaxX, Math.min.apply(Math, ys) + offsetMinY, Math.max.apply(Math, ys) + offsetMaxY];
    }
  }, {
    key: "pointInShape",
    value: function pointInShape(x, y) {
      var sides = this.findSides();

      var _this$findMax = this.findMax(),
          _this$findMax2 = _slicedToArray(_this$findMax, 4),
          minX = _this$findMax2[0],
          maxX = _this$findMax2[1],
          minY = _this$findMax2[2],
          maxY = _this$findMax2[3];

      var distance = (0, _util.findDistance2Point)(x, y, maxX, maxY);
      var compareSide = [x, y, x + distance, y];
      var intersect = 0;
      if (x > maxX || x < minX || y > maxY || y < minY) return false;
      sides.forEach(function (e) {
        if ((0, _util.findIntersection)(e, compareSide)) intersect++;
      });
      return !(intersect % 2 === 0);
    }
  }, {
    key: "findSides",
    value: function findSides() {
      var vertex = this.findVertex();
      var result = [];

      for (var i = 0; i < vertex.length; i++) {
        result.push([].concat(_toConsumableArray(vertex[i]), _toConsumableArray(vertex[i + 1] ? vertex[i + 1] : vertex[0])));
      }

      return result;
    }
  }, {
    key: "collide",
    value: function collide(shape) {
      if (shape.kind === 'arc') return shape.collide(this);

      var _this$findMax3 = this.findMax(),
          _this$findMax4 = _slicedToArray(_this$findMax3, 4),
          maxX1 = _this$findMax4[0],
          minX1 = _this$findMax4[1],
          maxY1 = _this$findMax4[2],
          minY1 = _this$findMax4[3];

      var _shape$findMax = shape.findMax(),
          _shape$findMax2 = _slicedToArray(_shape$findMax, 4),
          maxX2 = _shape$findMax2[0],
          minX2 = _shape$findMax2[1],
          maxY2 = _shape$findMax2[2],
          minY2 = _shape$findMax2[3];

      if (minX1 < minX2 && maxX1 > maxX2 && minY1 < minY2 && maxY1 > maxY2 || minX2 < minX1 && maxX2 > maxX1 && minY2 < minY1 && maxY2 > maxY1) return true;
      var side1 = this.findSides();
      var side2 = shape.findSides();

      var _iterator5 = _createForOfIteratorHelper(side1),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var s1 = _step5.value;

          var _iterator6 = _createForOfIteratorHelper(side2),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var s2 = _step6.value;
              if ((0, _util.findIntersection)(s1, s2)) return true;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      return false;
    }
  }, {
    key: "absoluteX",
    get: function get() {
      return this.x + this.parent.posX;
    }
  }, {
    key: "absoluteY",
    get: function get() {
      return this.y + this.parent.posY;
    }
  }, {
    key: "hasBorder",
    get: function get() {
      return this.border || this.borderOnly;
    }
  }, {
    key: "width",
    get: function get() {
      return (this.hasBorder ? this.w + this.borderWidth : this.w) * this.scaleX;
    }
  }, {
    key: "height",
    get: function get() {
      return (this.hasBorder ? this.h + this.borderWidth : this.h) * this.scaleY;
    }
  }, {
    key: "outOfBound",
    get: function get() {
      var _this$findMax5 = this.findMax(),
          _this$findMax6 = _slicedToArray(_this$findMax5, 4),
          minX = _this$findMax6[0],
          maxX = _this$findMax6[1],
          minY = _this$findMax6[2],
          maxY = _this$findMax6[3];

      var _this$parent$parent$c = this.parent.parent.canvas,
          width = _this$parent$parent$c.width,
          height = _this$parent$parent$c.height;
      return minX > width || maxX < 0 || minY > height || maxY < 0;
    }
  }, {
    key: "borderWidthIfBorderIsOn",
    get: function get() {
      if (this.border || this.borderOnly) return this.borderWidth;
      return 0;
    }
  }]);

  return _class6;
}();

lght.rect = /*#__PURE__*/function (_lght$shape) {
  _inherits(_class7, _lght$shape);

  var _super3 = _createSuper(_class7);

  function _class7(property, parent) {
    var _this10;

    _classCallCheck(this, _class7);

    _this10 = _super3.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultRectOptions, _assertThisInitialized(_this10));
    return _this10;
  }

  _createClass(_class7, [{
    key: "findVertex",
    value: function findVertex() {
      var _this11 = this;

      var reference = [[1, -1], [-1, -1], [-1, 1], [1, 1]];
      var result = [];
      reference.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            rx = _ref4[0],
            ry = _ref4[1];

        var nx = _this11.absoluteX + 0.5 * _this11.width * rx;
        var ny = _this11.absoluteY + 0.5 * _this11.height * ry;
        result.push((0, _util.rotatePoint)(_this11.absoluteX, _this11.absoluteY, nx, ny, _this11.rotation));
      });
      return result;
    }
  }]);

  return _class7;
}(lght.shape);

lght.arc = /*#__PURE__*/function (_lght$shape2) {
  _inherits(_class8, _lght$shape2);

  var _super4 = _createSuper(_class8);

  function _class8(property, parent) {
    var _this12;

    _classCallCheck(this, _class8);

    _this12 = _super4.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultArcOptions, _assertThisInitialized(_this12));
    return _this12;
  }

  _createClass(_class8, [{
    key: "pointInShape",
    value: function pointInShape(x, y) {
      var angle = (0, _util.findAngle2Point)(this.absoluteX, this.absoluteY, x, y);

      if (angle > this.minAngle && angle < this.maxAngle) {
        if ((0, _util.findDistance2Point)(this.absoluteX, this.absoluteY, x, y) <= this.radius) return true;
      }

      return false;
    }
  }, {
    key: "findMax",
    value: function findMax() {
      var result = [this.absoluteX - this.radius, this.absoluteX + this.radius, this.absoluteY - this.radius, this.absoluteY + this.radius];
      var xs = [this.absoluteX, this.absoluteX + Math.cos(this.minRadAngle) * this.radius, this.absoluteX + Math.cos(this.maxRadAngle) * this.radius];
      var ys = [this.absoluteY, this.absoluteY - Math.sin(this.minRadAngle) * this.radius, this.absoluteY - Math.sin(this.maxRadAngle) * this.radius];
      if (!this.pointInShape(result[0], this.absoluteY)) result[0] = Math.min.apply(Math, xs) - this.borderWidthIfBorderIsOn / 2;
      if (!this.pointInShape(result[1], this.absoluteY)) result[1] = Math.max.apply(Math, xs) + this.borderWidthIfBorderIsOn / 2;
      if (!this.pointInShape(this.absoluteX, result[2])) result[2] = Math.min.apply(Math, ys) - this.borderWidthIfBorderIsOn / 2;
      if (!this.pointInShape(this.absoluteX, result[3])) result[3] = Math.max.apply(Math, ys) + this.borderWidthIfBorderIsOn / 2;
      return result;
    }
  }, {
    key: "findVertex",
    value: function findVertex() {
      var _this$findMax7 = this.findMax(),
          _this$findMax8 = _slicedToArray(_this$findMax7, 4),
          minX = _this$findMax8[0],
          maxX = _this$findMax8[1],
          minY = _this$findMax8[2],
          maxY = _this$findMax8[3];

      var referenceX = [this.absoluteX + Math.cos(this.minRadAngle) * this.radius, this.absoluteX + Math.cos(this.maxRadAngle) * this.radius, this.absoluteX + this.radius, this.absoluteX - this.radius, this.absoluteX];
      var referenceY = [this.absoluteY - Math.sin(this.minRadAngle) * this.radius, this.absoluteY - Math.sin(this.maxRadAngle) * this.radius, this.absoluteY + this.radius, this.absoluteY - this.radius, this.absoluteY];
      return [[minX, referenceY[referenceX.indexOf(minX)]], [maxX, referenceY[referenceX.indexOf(maxX)]], [referenceX[referenceY.indexOf(minY)], minY], [referenceX[referenceY.indexOf(maxY)], maxY]];
    }
  }, {
    key: "fidnSides",
    value: function fidnSides() {
      if (this.arcDegree === 360) return false;
      return [[this.absoluteX, this.absoluteY, this.absoluteX + Math.cos(this.minRadAngle) * this.radius, this.absoluteY - Math.sin(this.minRadAngle) * this.radius], [this.absoluteX, this.absoluteY, this.absoluteX + Math.cos(this.maxRadAngle) * this.radius, this.absoluteY - Math.sin(this.maxRadAngle) * this.radius]];
    }
  }, {
    key: "collide",
    value: function collide(shape) {
      var vertex1 = this.findVertex();
      var vertex2 = shape.findVertex();

      var _iterator7 = _createForOfIteratorHelper(vertex1),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _step7$value = _slicedToArray(_step7.value, 2),
              x = _step7$value[0],
              y = _step7$value[1];

          if (shape.pointInShape(x, y)) return true;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = _createForOfIteratorHelper(vertex2),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = _slicedToArray(_step8.value, 2),
              _x = _step8$value[0],
              _y = _step8$value[1];

          if (this.pointInShape(_x, _y)) return true;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      if (shape.kind === 'arc') {
        //when checking for intersection between 2 arcs, there are 2 cases
        //Case 1: they are both circles. In this case the distance between the 2 center have to be smaller or equal to
        //sum of radius for them to intersect
        if (this.pureCircle && shape.pureCircle) {
          return (0, _util.findDistance2Point)(this.absoluteX, this.absoluteY, shape.absoluteX, shape.absoluteY) <= this.radius + shape.radius;
        } //Case 2: either of them are arcs
        //In these cases, there are 2 scenarios
        //Scenario 1: one of the vertexes will be inside the circle, this is easy to check
        //Scenario 2: none of the vertex is inside the circle. There is only one possible explanation for this. In this case, check if 
        //the "ray" that connect the 2 center is inside both arcs, then check that the length of the ray is less than the length of both radius


        if ((0, _util.findDistance2Point)(this.absoluteX, this.absoluteY, shape.absoluteX, shape.absoluteY) > this.radius + shape.radius) return false;
        var ray1 = (0, _util.findAngle2Point)(this.absoluteX, this.absoluteY, shape.absoluteX, shape.absoluteY);
        var ray2 = (0, _util.findAngle2Point)(shape.absoluteX, shape.absoluteY, this.absoluteX, this.absoluteY);
        return ray1 < this.maxAngle && ray1 > this.minAngle && ray2 < shape.maxAngle && ray2 > shape.minAngle;
      } else {
        var side = shape.findSides();

        var _iterator9 = _createForOfIteratorHelper(side),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var s = _step9.value;
            var closest = (0, _util.findClosestPoint)(this.absoluteX, this.absoluteY, s);

            if (closest) {
              if (this.pointInShape(closest[0], closest[1])) return true;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        return false;
      }
    }
  }, {
    key: "radius",
    get: function get() {
      return this.hasBorder ? this.rad + this.borderWidth : this.rad;
    }
  }, {
    key: "minAngle",
    get: function get() {
      return this.rotation;
    }
  }, {
    key: "maxAngle",
    get: function get() {
      return this.rotation + this.arcDegree;
    }
  }, {
    key: "minRadAngle",
    get: function get() {
      return (0, _util.degToRad)(this.minAngle);
    }
  }, {
    key: "maxRadAngle",
    get: function get() {
      return (0, _util.degToRad)(this.maxAngle);
    }
  }, {
    key: "pureCircle",
    get: function get() {
      return this.arcDegree === 360;
    }
  }]);

  return _class8;
}(lght.shape);

lght.roundedRectangle = /*#__PURE__*/function (_lght$rect) {
  _inherits(_class9, _lght$rect);

  var _super5 = _createSuper(_class9);

  function _class9(property, parent) {
    var _this13;

    _classCallCheck(this, _class9);

    _this13 = _super5.call(this, property, parent);
    _this13.borderRadius = property.borderRadius || 0;

    if (_this13.clip) {
      if (property.clipCanvas) {
        _this13.clipImage = property.clipCanvas;
        _this13.clipCanvas = true;
      } else {
        _this13.clipImage = lght.sprite(_this13.clipImageLink, function () {
          _this13.parent.updateVisual();
        });
      }
    }

    return _this13;
  }

  _createClass(_class9, [{
    key: "changeClipImage",
    value: function changeClipImage(imageUrl) {
      var _this14 = this;

      this.clipImage = lght.sprite(imageUrl, function () {
        _this14.parent.updateVisual();
      });
    }
  }, {
    key: "clipImageLoaded",
    get: function get() {
      if (!this.clip) return false;
      if (this.clipCanvas) return true;
      return this.clipImage.complete;
    }
  }]);

  return _class9;
}(lght.rect);

lght.poly = /*#__PURE__*/function (_lght$shape3) {
  _inherits(_class10, _lght$shape3);

  var _super6 = _createSuper(_class10);

  function _class10(property, parent) {
    var _this15;

    _classCallCheck(this, _class10);

    _this15 = _super6.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultPolyOptions, _assertThisInitialized(_this15));

    if (_this15.clip) {
      _this15.clipImage = lght.sprite(_this15.clipImageLink, function () {
        _this15.parent.updateVisual();
      });
    }

    return _this15;
  }

  _createClass(_class10, [{
    key: "findVertex",
    value: function findVertex() {
      var _this16 = this;

      return this.polyPoints.map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            x = _ref6[0],
            y = _ref6[1];

        return (0, _util.rotatePoint)(_this16.absoluteX, _this16.absoluteY, x + _this16.absoluteX, y + _this16.absoluteY, _this16.rotation);
      });
    }
  }, {
    key: "clipImageLoaded",
    get: function get() {
      if (!this.clip) return false;
      return this.clipImage.complete;
    }
  }, {
    key: "polyPoints",
    get: function get() {
      if (!this.specialPolygon) return this.points;
      var radiusCoefficient = 360 / this.numberOfSide;
      var result = [];

      for (var i = 0; i < this.numberOfSide; i++) {
        result.push((0, _util.calculateRotatePoint)(0, 0, radiusCoefficient * i, this.radius));
      }

      return result;
    }
  }, {
    key: "width",
    get: function get() {
      return this.findMax()[1] - this.findMax()[0];
    }
  }, {
    key: "height",
    get: function get() {
      return this.findMax()[3] - this.findMax()[2];
    }
  }, {
    key: "sideLength",
    get: function get() {
      if (!this.specialPolygon) return null;
      var radiusCoefficient = (0, _util.degToRad)(360 / this.numberOfSide);
      return Math.sqrt(2 * Math.pow(this.radius, 2) - 2 * Math.pow(this.radius, 2) * Math.cos(radiusCoefficient));
    }
  }]);

  return _class10;
}(lght.shape);

lght.line = /*#__PURE__*/function (_lght$shape4) {
  _inherits(_class11, _lght$shape4);

  var _super7 = _createSuper(_class11);

  function _class11(property, parent) {
    var _this17;

    _classCallCheck(this, _class11);

    _this17 = _super7.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultLineOptions, _assertThisInitialized(_this17));
    return _this17;
  }

  _createClass(_class11, [{
    key: "findVertex",
    value: function findVertex() {
      var _this18 = this;

      var result = [];

      var notIncluded = function notIncluded(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            x = _ref8[0],
            y = _ref8[1];

        var _iterator10 = _createForOfIteratorHelper(result),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var position = _step10.value;

            var _position = _slicedToArray(position, 2),
                x2 = _position[0],
                y2 = _position[1];

            if (~~(x + 0.5) === ~~(x2 + 0.5) && ~~(y + 0.5) === ~~(y2 + 0.5)) return false;
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        return true;
      };

      var point = _toConsumableArray(this.rotatedPoints);

      point.forEach(function (_ref9, index) {
        var _ref10 = _slicedToArray(_ref9, 2),
            x1 = _ref10[0],
            y1 = _ref10[1];

        if (index === point.length - 1) return;

        var _this18$rotatedPoints = _slicedToArray(_this18.rotatedPoints[index + 1], 2),
            x2 = _this18$rotatedPoints[0],
            y2 = _this18$rotatedPoints[1];

        var distance = (0, _util.findDistance2Point)(x1, y1, x2, y2);
        var tan = Math.atan(_this18.lineWidth / 2 / distance);
        var angle = (0, _util.findAngle2Point)(x1, y1, x2, y2);
        var angleQuadrant = (0, _util.radToDeg)(tan) + angle;
        var firstDistance = Math.sqrt(distance * distance + 0.5 * _this18.lineWidth * (0.5 * _this18.lineWidth));
        var pointOneInFirstQuadrant = (0, _util.calculateRotatePoint)(x1, y1, angleQuadrant, firstDistance);

        var pointSecondInSecondQuadrant = _util.calculateRotatePoint.apply(void 0, _toConsumableArray(pointOneInFirstQuadrant).concat([180 + angle, distance]));

        var pointThreeInThirdQuadrant = _util.calculateRotatePoint.apply(void 0, _toConsumableArray(pointSecondInSecondQuadrant).concat([270 + angle, distance]));

        var pointFourInFourthQuadrant = _util.calculateRotatePoint.apply(void 0, _toConsumableArray(pointThreeInThirdQuadrant).concat([angle, distance]));

        if (notIncluded(pointFourInFourthQuadrant)) result.push(pointFourInFourthQuadrant);
        if (notIncluded(pointOneInFirstQuadrant)) result.push(pointOneInFirstQuadrant);
        if (notIncluded(pointSecondInSecondQuadrant)) result.push(pointSecondInSecondQuadrant);
        if (notIncluded(pointThreeInThirdQuadrant)) result.push(pointThreeInThirdQuadrant);
      });
      return result;
    }
  }, {
    key: "rotatedPoints",
    get: function get() {
      var _this19 = this;

      return this.points.map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            x = _ref12[0],
            y = _ref12[1];

        return (0, _util.rotatePoint)(_this19.absoluteX, _this19.absoluteY, x + _this19.absoluteX, y + _this19.absoluteY, _this19.rotation);
      });
    }
  }]);

  return _class11;
}(lght.shape);

lght.text = /*#__PURE__*/function (_lght$shape5) {
  _inherits(_class12, _lght$shape5);

  var _super8 = _createSuper(_class12);

  function _class12(property, parent) {
    var _this20;

    _classCallCheck(this, _class12);

    _this20 = _super8.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultTextOptions, _assertThisInitialized(_this20));
    if (property.font) _this20.fontBackwardCompatibility = property.font;
    return _this20;
  }

  _createClass(_class12, [{
    key: "findVertex",
    value: function findVertex() {
      var _this21 = this;

      var reference;
      var coefficient = 1;
      if (this.textAlign === 'center') reference = [[1, -1], [-1, -1], [-1, 0.8], [1, 0.8]];else {
        if (this.textAlign === 'right') coefficient = -1;
        reference = [[2, -1], [0, -1], [0, 0.8], [2, 0.8]].map(function (e) {
          return [e[0] * coefficient, e[1]];
        });
      }
      var result = [];
      reference.forEach(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            rx = _ref14[0],
            ry = _ref14[1];

        var nx = _this21.absoluteX + 0.5 * _this21.width * rx;
        var ny = _this21.absoluteY + 0.5 * _this21.height * ry;
        result.push((0, _util.rotatePoint)(_this21.absoluteX, _this21.absoluteY, nx, ny, _this21.rotation));
      });
      return result;
    }
  }, {
    key: "font",
    get: function get() {
      return this.fontBackwardCompatibility || "".concat(this.fontSize, "px ").concat(this.fontFamily);
    }
  }, {
    key: "textSize",
    get: function get() {
      var c = lght.apps[0].context;
      c.save();
      c.font = this.font;
      var width = c.measureText(this.text).width;
      var height = c.measureText('gM').width;
      c.restore();
      return [width, height];
    }
  }, {
    key: "w",
    get: function get() {
      return this.textSize[0] + this.borderWidthIfBorderIsOn;
    }
  }, {
    key: "h",
    get: function get() {
      return this.textSize[1] + this.borderWidthIfBorderIsOn;
    }
  }]);

  return _class12;
}(lght.shape);

lght.img = /*#__PURE__*/function (_lght$shape6) {
  _inherits(_class13, _lght$shape6);

  var _super9 = _createSuper(_class13);

  function _class13(property, parent) {
    var _this22;

    _classCallCheck(this, _class13);

    _this22 = _super9.call(this, property, parent);
    (0, _util.mergeDefaultPropertyObject)(property, lght.defaultImgOptions, _assertThisInitialized(_this22));
    _this22.sprite = lght.sprite(_this22.spriteLink, function () {
      if (_this22.loadedFunction) _this22.loadedFunction();

      _this22.parent.updateVisual();
    });
    return _this22;
  }

  _createClass(_class13, [{
    key: "findVertex",
    value: function findVertex() {
      var _this23 = this;

      var reference = [[1, -1], [-1, -1], [-1, 1], [1, 1]];
      var result = [];
      reference.forEach(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
            rx = _ref16[0],
            ry = _ref16[1];

        var nx = _this23.absoluteX + 0.5 * _this23.width * rx;
        var ny = _this23.absoluteY + 0.5 * _this23.height * ry;
        result.push((0, _util.rotatePoint)(_this23.absoluteX, _this23.absoluteY, nx, ny, _this23.rotation));
      });
      return result;
    }
  }, {
    key: "imageLoaded",
    get: function get() {
      return this.sprite.complete;
    }
  }, {
    key: "w",
    get: function get() {
      if (this.drawWidth) return this.drawWidth;

      if (this.imageLoaded) {
        if (this.drawHeight) return this.drawHeight * this.sprite.width / this.sprite.height;
        return this.sprite.width;
      }

      return 0;
    }
  }, {
    key: "h",
    get: function get() {
      if (this.drawHeight) return this.drawHeight;

      if (this.imageLoaded) {
        if (this.drawWidth) return this.drawWidth * this.sprite.height / this.sprite.width;
        return this.sprite.height;
      }

      return 0;
    }
  }]);

  return _class13;
}(lght.shape); //Input
//<--------------KEYBOARD INPUT GO HERE------------------->


lght.object.prototype.attachQuickMovement = function (velocity, cooldown, func) {
  var cd = true;
  var obj = this;
  document.addEventListener('keydown', function (key) {
    if (cd) {
      if (lght.inputReference.movementIndex.indexOf(key.key) !== -1) {
        obj.x += lght.inputReference.coeffIndex[lght.inputReference.movementIndex.indexOf(key.key)][0] * velocity;
        obj.y += lght.inputReference.coeffIndex[lght.inputReference.movementIndex.indexOf(key.key)][1] * velocity;
        obj.updateVisual();
        if (func) func(key, obj);
        cd = false;
        setTimeout(function () {
          cd = true;
        }, cooldown);
      }
    }
  });
  return this;
}; //<--------------MOUSE INPUT GO HERE---------------------->


lght.app.prototype.startCursor = function () {
  this.canvas.style.cursor = 'pointer';
};

lght.app.prototype.endCursor = function () {
  this.canvas.style.cursor = 'default';
};

lght.object.prototype.enterCursorEvent = function () {
  var _this24 = this;

  if (this.alreadyCursorEvent) return;
  this.alreadyCursorEvent = true;
  this.hoverEvent(function () {
    return _this24.parent.startCursor();
  }, function () {
    return _this24.parent.endCursor();
  });
};

lght.shape.prototype.enterCursorEvent = function () {
  var _this25 = this;

  if (this.alreadyCursorEvent) return;
  this.alreadyCursorEvent = true;
  this.hoverEvent(function () {
    return _this25.parent.parent.startCursor();
  }, function () {
    return _this25.parent.parent.endCursor();
  });
};

lght.app.prototype.attachEvent = function (event, func) {
  var _this26 = this;

  var mobile = window.mobileCheck();
  var trueEvent = event;

  if (mobile) {
    switch (trueEvent) {
      case 'mousedown':
        trueEvent = 'touchstart';
        break;

      case 'mouseup':
        trueEvent = 'touchend';
        break;

      case 'mousemove':
        trueEvent = 'touchmove';
        break;

      default:
        break;
    }
  }

  this.addEventListener(trueEvent, function (e) {
    if (_this26.killed) return;

    if (window.mobileCheck()) {
      Array.from(e.changedTouches).forEach(function (touch) {
        var _this26$translateMous = _this26.translateMouseCoor(touch),
            _this26$translateMous2 = _slicedToArray(_this26$translateMous, 2),
            x = _this26$translateMous2[0],
            y = _this26$translateMous2[1];

        func(x, y);
      });
      return;
    }

    var _this26$translateMous3 = _this26.translateMouseCoor(e),
        _this26$translateMous4 = _slicedToArray(_this26$translateMous3, 2),
        x = _this26$translateMous4[0],
        y = _this26$translateMous4[1];

    func(x, y);
  });
};

lght.app.prototype.mouseInputInit = function () {
  var _this27 = this;

  var handleCoor = function handleCoor(x, y, event) {
    if (_this27.objects.length === 0) return;

    for (var i = _this27.objects.length; i--; i >= 0) {
      var obj = _this27.objects[i];
      if (obj[event].length === 0) continue;
      if (!obj.display) continue;

      if (obj.pointInObject(x, y)) {
        var _iterator11 = _createForOfIteratorHelper(obj[event]),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var func = _step11.value;
            func(x, y);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        break;
      }
    }

    LargeLoop: for (var _i2 = _this27.objects.length; _i2--; _i2 >= 0) {
      var _obj = _this27.objects[_i2];
      if (_obj.shapes.length === 0) continue;
      if (!_obj.display) continue;

      for (var a = _obj.shapes.length; a--; a >= 0) {
        var shape = _obj.shapes[a];
        if (shape[event].length === 0) continue;
        if (!shape.display) continue;

        if (shape.pointInShape(x, y)) {
          var _iterator12 = _createForOfIteratorHelper(shape[event]),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _func = _step12.value;

              _func(x, y);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          break LargeLoop;
        }
      }
    }
  };

  this.attachEvent('mouseup', function (x, y) {
    return handleCoor(x, y, 'mouseUpEvent');
  });
  this.attachEvent('mousemove', function (x, y) {
    return handleCoor(x, y, 'mouseMoveEvent');
  });
  this.attachEvent('mousedown', function (x, y) {
    return handleCoor(x, y, 'mouseDownEvent');
  });
}; //PRESS EVENT FOR AN APP


lght.object.prototype.pressedEvent = function (func) {
  this.enterCursorEvent();
  this.mouseUpEvent.push(func);
  return this;
}; //MAKE AN OBJECT DRAGGABLE


lght.object.prototype.makeDraggable = function (func, funcDone) {
  var _this28 = this;

  this.enterCursorEvent();
  this.onDrag = false;
  var obj = this;
  this.draggable = true;
  var rx = 0;
  var ry = 0;
  this.mouseDownEvent.push(function (x, y) {
    if (obj.draggable) {
      if (!obj.onDrag) {
        obj.onDrag = true;
        rx = x - obj.posX;
        ry = y - obj.posY;
      }
    }
  });
  this.parent.attachEvent('mousemove', function () {
    if ((arguments.length <= 0 ? undefined : arguments[0]) < 0 || (arguments.length <= 0 ? undefined : arguments[0]) > _this28.parent.canvas.width || (arguments.length <= 1 ? undefined : arguments[1]) < 0 || (arguments.length <= 1 ? undefined : arguments[1]) > _this28.parent.canvas.height) obj.onDrag = false;

    if (obj.onDrag) {
      _this28.changePosition((arguments.length <= 0 ? undefined : arguments[0]) - rx, (arguments.length <= 1 ? undefined : arguments[1]) - ry);

      if (typeof func == 'function') func(obj);
    }
  });
  this.parent.attachEvent('mouseup', function (e) {
    if (obj.onDrag) {
      obj.onDrag = false;
      if (funcDone) funcDone();
    }
  });
  return this;
}; //HOVER EVENT


lght.object.prototype.hoverEvent = function (funcin, funcout) {
  var _this29 = this;

  this.mouseIn = false;
  var obj = this;
  this.hoverEvents.push([funcin, funcout]);

  if (this.hoverEvents.length === 1) {
    this.enterCursorEvent();
    this.parent.attachEvent('mousemove', function () {
      if ((arguments.length <= 0 ? undefined : arguments[0]) < 0 || (arguments.length <= 0 ? undefined : arguments[0]) > _this29.parent.canvas.width || (arguments.length <= 1 ? undefined : arguments[1]) < 0 || (arguments.length <= 1 ? undefined : arguments[1]) > _this29.parent.canvas.height) {
        obj.mouseIn = false;

        var _iterator13 = _createForOfIteratorHelper(_this29.hoverEvents),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var event = _step13.value;
            if (event[1]) event[1]();
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }

        return;
      }

      var touch = obj.pointInObject(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);

      if (obj.mouseIn && !touch) {
        obj.mouseIn = false;

        var _iterator14 = _createForOfIteratorHelper(_this29.hoverEvents),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _event = _step14.value;
            if (_event[1]) _event[1]();
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    });
    this.mouseMoveEvent.push(function () {
      if (!obj.mouseIn) {
        obj.mouseIn = true;

        var _iterator15 = _createForOfIteratorHelper(_this29.hoverEvents),
            _step15;

        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var event = _step15.value;
            if (event[0]) event[0]();
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
      }
    });
  }

  return this;
}; //INPUT FOR SHAPES


lght.object.prototype.attachQuickMovement = function (velocity, cooldown, func) {
  var cd = true;
  var obj = this;
  document.addEventListener('keydown', function (key) {
    if (cd) {
      if (lght.inputReference.movementIndex.indexOf(key.key) !== -1) {
        obj.x += lght.inputReference.coeffIndex[lght.inputReference.movementIndex.indexOf(key.key)][0] * velocity;
        obj.y += lght.inputReference.coeffIndex[lght.inputReference.movementIndex.indexOf(key.key)][1] * velocity;
        obj.updateVisual();
        if (func) func(key, obj);
        cd = false;
        setTimeout(function () {
          cd = true;
        }, cooldown);
      }
    }
  });
  return this;
}; //<--------------MOUSE INPUT GO HERE---------------------->
//PRESS EVENT FOR AN APP


lght.shape.prototype.pressedEvent = function (func) {
  this.enterCursorEvent();
  this.mouseUpEvent.push(func);
  return this;
}; //HOVER EVENT


lght.shape.prototype.hoverEvent = function (funcin, funcout) {
  var _this30 = this;

  this.mouseIn = false;
  var obj = this;
  this.hoverEvents.push([funcin, funcout]);

  if (this.hoverEvents.length === 1) {
    this.enterCursorEvent();
    this.parent.parent.attachEvent('mousemove', function () {
      if (!_this30.display) return;

      if ((arguments.length <= 0 ? undefined : arguments[0]) < 0 || (arguments.length <= 0 ? undefined : arguments[0]) > _this30.parent.parent.canvas.width || (arguments.length <= 1 ? undefined : arguments[1]) < 0 || (arguments.length <= 1 ? undefined : arguments[1]) > _this30.parent.parent.canvas.height) {
        obj.mouseIn = false;

        var _iterator16 = _createForOfIteratorHelper(_this30.hoverEvents),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var event = _step16.value;
            if (event[1]) event[1]();
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }

        obj.parent.updateVisual();
        return;
      }

      var touch = obj.pointInShape(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]);

      if (obj.mouseIn && !touch) {
        obj.mouseIn = false;

        var _iterator17 = _createForOfIteratorHelper(_this30.hoverEvents),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _event2 = _step17.value;
            if (_event2[1]) _event2[1]();
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }

        obj.parent.updateVisual();
      }
    });
    this.mouseMoveEvent.push(function () {
      if (!obj.mouseIn) {
        obj.mouseIn = true;

        var _iterator18 = _createForOfIteratorHelper(_this30.hoverEvents),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var event = _step18.value;
            if (event[0]) event[0]();
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }

        obj.parent.updateVisual();
      }
    });
  }

  return this;
}; //Animation


lght.app.prototype.animate = function () {
  if (lght.frameTime !== undefined && lght.lastFrame !== undefined) {
    var timeDifference = lght.frameTime - lght.lastFrame;
    this.objects.forEach(function (e) {
      e.animate(timeDifference);
      e.shapes.forEach(function (a) {
        a.animate(timeDifference);
      });
    });
  }
};

var addAnimation = function addAnimation(property, value, time, func) {
  var _this31 = this;

  this.animationCount++;
  var id = this.animationCount;
  var timeout = setTimeout(function () {
    (0, _util.changeByDotNotation)(property, _this31, value);

    _this31.cancelAnimation(id);

    if (_this31.parent["static"] !== undefined) _this31.parent["static"] = true;else _this31["static"] = true;
    if (_this31.updateVisual) _this31.updateVisual();else _this31.parent.updateVisual();
    if (func) func();
  }, time);
  var alreadyAnimated = this.animations.find(function (animation) {
    return animation[0] === property;
  });

  if (alreadyAnimated) {
    this.cancelAnimation(alreadyAnimated[6]);
  }

  if (this.parent["static"] !== undefined) this.parent["static"] = false;else this["static"] = false;
  this.animations.push([property, value, (0, _util.getByDotNotation)(property, this), time, timeout, func, id]);
  return this;
};

var awaitAnimation = function awaitAnimation(property, value, time) {
  var _this32 = this;

  return new Promise(function (r) {
    return _this32.addAnimation(property, value, time, r);
  });
};

var cancelAnimation = function cancelAnimation() {
  var _this33 = this;

  var _loop = function _loop() {
    var id = _arr2[_i3];

    var animation = _this33.animations.find(function (e) {
      return e[6] === id;
    });

    var index = _this33.animations.findIndex(function (e) {
      return e[6] === id;
    });

    if (!animation) return {
      v: false
    };
    clearTimeout(animation[4]);

    _this33.animations.splice(index, 1);
  };

  for (var _i3 = 0, _arr2 = Array.prototype.slice.call(arguments); _i3 < _arr2.length; _i3++) {
    var _ret = _loop();

    if (_typeof(_ret) === "object") return _ret.v;
  }
};

var animate = function animate(time) {
  var obj = this;
  this.animations.forEach(function (animation) {
    var _animation = _slicedToArray(animation, 4),
        property = _animation[0],
        value = _animation[1],
        init = _animation[2],
        timeUp = _animation[3];

    var newValue = (0, _util.getByDotNotation)(property, obj) + time / timeUp * (value - init);
    if (init < value && newValue > value) newValue = value;
    if (init > value && newValue < value) newValue = value;
    (0, _util.changeByDotNotation)(property, obj, newValue);
  });
};

var fadeIn = function fadeIn(time) {
  var _this34 = this;

  return new Promise(function (r) {
    return _this34.addAnimation('opacity', 1, time, r);
  });
};

var fadeOut = function fadeOut(time) {
  var _this35 = this;

  return new Promise(function (r) {
    return _this35.addAnimation('opacity', 0, time, r);
  });
};

lght.animateFunctionReference = {
  animate: animate,
  addAnimation: addAnimation,
  cancelAnimation: cancelAnimation,
  fadeIn: fadeIn,
  fadeOut: fadeOut
};

for (var prop in lght.animateFunctionReference) {
  lght.object.prototype[prop] = lght.animateFunctionReference[prop];
  lght.shape.prototype[prop] = lght.animateFunctionReference[prop];
} //Draw


lght.app.prototype.render = function () {
  this.clearCanvas();
  this.fillBackground();
  this.renderShape();
};

lght.app.prototype.visualInit = function () {
  this.backgroundColor = this.options.background;
  this.context = this.canvas.getContext("2d");
};

lght.app.prototype.renderShape = function () {
  this.renderPositions();
  this.objects.sort(function (a, b) {
    return a.zIndex - b.zIndex;
  }).forEach(function (obj) {
    obj.draw();
  });
}; //<-------------------BASIC CANVAS STUFF---------------------->
//CLEARING CANVAS AND BACKGROUND COLOR


lght.app.prototype.clearCanvas = function () {
  this.context.save();
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.restore();
};

lght.app.prototype.fillBackground = function () {
  if (this.backgroundColor !== 'none') {
    this.context.save();
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore();
  }
};
/*POSITION INDICATOR FUNCTIONS GO HERE
Draw all position indicators at once to save performance from context state change*/


lght.app.prototype.renderPositions = function () {
  var _this36 = this;

  this.context.save();
  this.context.fillStyle = 'red';
  this.objects.forEach(function (_ref17) {
    var posX = _ref17.posX,
        posY = _ref17.posY,
        positionIndicator = _ref17.positionIndicator;
    if (!positionIndicator) return;

    _this36.context.beginPath();

    _this36.context.arc(posX, posY, 5, 0, 2 * Math.PI);

    _this36.context.closePath();

    _this36.context.fill();
  });
  this.context.restore();
};
/* SHAPE PRERENDERING FUNCTIONS GO HERE
Shape prerendering prerender shapes on canvases to save performance*/


lght.object.prototype.updateVisual = function () {
  var _this37 = this;

  //If the dimension changes a new canvas have to be created
  var max = this.findMax();

  for (var i = 0; i < max.length; i++) {
    if (~~(max[i] + 0.5) !== ~~(this.preloader.maxes[i] + 0.5)) {
      this.createPreloader();
      return;
    }
  }

  this.clearPreloader();
  this.shapes.forEach(function (s) {
    var x = _this37.preloader.ox + s.x;
    var y = _this37.preloader.oy + s.y;
    lght.drawShape(_this37.preloader.context, x, y, s);
  });
  if (!this.parent.options.constantRender) this.parent.turnFunctions(this.parent);
};

lght.object.prototype.clearPreloader = function () {
  this.preloader.context.clearRect(0, 0, this.preloader.width, this.preloader.height);
};

lght.object.prototype.createPreloader = function () {
  this.preloader = document.createElement('canvas');
  this.preloader.maxes = this.findMax();

  var _this$preloader$maxes = _slicedToArray(this.preloader.maxes, 4),
      minX = _this$preloader$maxes[0],
      maxX = _this$preloader$maxes[1],
      minY = _this$preloader$maxes[2],
      maxY = _this$preloader$maxes[3];

  this.preloader.width = maxX - minX;
  this.preloader.height = maxY - minY;
  this.preloader.ox = this.posX - minX;
  this.preloader.oy = this.posY - minY;
  this.preloader.context = this.preloader.getContext('2d');
  this.updateVisual();
};

lght.object.prototype.drawPreloader = function () {
  if (!this.display) return;

  if (this.preloader.width > 0 && this.preloader.height > 0) {
    var x = this.preloader.maxes[0] + this.preloader.width / 2;
    var y = this.preloader.maxes[2] + this.preloader.height / 2;
    x = ~~(x + 0.5);
    y = ~~(y + 0.5);
    this.parent.context.save();
    this.parent.context.translate(x, y);
    lght.drawImg(this.parent.context, this.preloader, this.preloader.width, this.preloader.height);
    this.parent.context.restore();
  }
}; //<------------------SHAPE DRAWING FUNCTION---------------->


lght.object.prototype.draw = function () {
  var _this38 = this;

  if (!this.display) return;
  if (this["static"]) return this.drawPreloader();
  this.shapes.forEach(function (s) {
    lght.drawShape(_this38.parent.context, _this38.posX + s.x, _this38.posY + s.y, s);
  });
}; //MASTER FUNCTION


lght.drawShape = function (c, x, y, shape) {
  x = ~~(x + 0.5);
  y = ~~(y + 0.5);
  if (!shape.display) return;
  if (shape.border || shape.borderOnly) this.drawShapeKind(c, shape, x, y, true, 1, shape.borderColor, shape.shadow);else if (!shape.borderOnly && !shape.border) this.drawShapeKind(c, shape, x, y, false, shape.opacity, shape.color, shape.shadow);
  if (!shape.borderOnly) this.drawShapeKind(c, shape, x, y, false, shape.opacity, shape.color);
};

lght.drawShapeKind = function (c, s, x, y, stroke, opacity, color, shadow) {
  opacity = opacity * s.parent.opacity;
  if (opacity == 0 || opacity < 0) return;
  c.save();
  c.globalAlpha = opacity;
  c.fillStyle = color;
  c.strokeStyle = color;
  c.lineWidth = s.borderWidth;
  c.translate(x, y);
  c.scale(s.scaleX, s.scaleY);

  if (shadow) {
    var _color = shadow.color,
        blur = shadow.blur,
        offsetX = shadow.offsetX,
        offsetY = shadow.offsetY;
    c.shadowColor = _color;
    c.shadowBlur = blur;
    c.shadowOffsetX = offsetX;
    c.shadowOffsetY = offsetY;
  }

  switch (s.kind) {
    case 'rect':
      lght.drawRect(c, s.w, s.h, s.rotation, stroke);
      break;

    case 'arc':
      lght.drawArc(c, s.rad, s.arcDegree, s.rotation, stroke);
      break;

    case 'text':
      lght.drawText(c, s.text, s.font, stroke, s.textAlign, s.w, s.h, s.rotation);
      break;

    case 'img':
      if (s.imageLoaded) lght.drawImg(c, s.sprite, s.w, s.h, s.rotation);
      break;

    case 'poly':
      lght.drawPoly(c, s.polyPoints, s.rotation, stroke);
      break;

    case 'line':
      if (stroke) {
        var points = s.points.map(function (position, index) {
          var _position2 = _slicedToArray(position, 2),
              x = _position2[0],
              y = _position2[1];

          if (index === 0) {
            var angle = (0, _util.degToRad)(_util.findAngle2Point.apply(void 0, _toConsumableArray(position).concat(_toConsumableArray(s.points[index + 1]))));
            return [x - s.borderWidth * Math.cos(angle), y + s.borderWidth * Math.sin(angle)];
          } else if (index === s.points.length - 1) {
            var _angle = (0, _util.degToRad)(_util.findAngle2Point.apply(void 0, _toConsumableArray(position).concat(_toConsumableArray(s.points[index - 1]))));

            return [x - s.borderWidth * Math.cos(_angle), y + s.borderWidth * Math.sin(_angle)];
          } else return [x, y];
        });
        lght.drawLine(c, points, s.rotation, s.lineWidth + s.borderWidth);
      } else lght.drawLine(c, s.points, s.rotation, s.lineWidth);

      break;

    case 'roundedRectangle':
      lght.drawRoundedRectangle(c, s.w, s.h, s.rotation, s.borderRadius, stroke);
      break;

    default:
      break;
  }

  if (s.clip && s.clipImageLoaded) {
    c.clip();
    c.rotate((0, _util.degToRad)(s.rotation));

    if (typeof s.clipSpriteSheetX === 'number' && typeof s.clipSpriteSheetY === 'number') {
      var spriteWidth = s.clipImage.width / s.spriteLengthX;
      var spriteHeight = s.clipImage.height / s.spriteLengthY;
      var clipStartX = s.clipSpriteSheetX * spriteWidth;
      var clipStartY = s.clipSpriteSheetY * spriteHeight;
      c.drawImage(s.clipImage, clipStartX, clipStartY, spriteWidth, spriteHeight, -s.width / 2 / s.scaleX, -s.height / 2 / s.scaleY, s.width / s.scaleX, s.height / s.scaleY);
    } else c.drawImage(s.clipImage, -s.width / 2 / s.scaleX, -s.height / 2 / s.scaleY, s.width / s.scaleX, s.height / s.scaleY);
  }

  c.restore();
}; //DRAWING RECTANGLE


lght.drawRect = function (c, w, h, rotation, stroke) {
  c.rotate((0, _util.degToRad)(360 - rotation));
  if (stroke) c.strokeRect(-w / 2, -h / 2, w, h);else c.fillRect(-w / 2, -h / 2, w, h);
};

lght.drawRoundedRectangle = function (c, w, h, rotation, borderRadius, stroke) {
  c.rotate((0, _util.degToRad)(360, rotation));
  c.beginPath();
  c.moveTo(0, -h * 0.5);
  c.lineTo(-w * 0.5 + borderRadius, -h * 0.5);
  c.quadraticCurveTo(-w * 0.5, -h * 0.5, -w * 0.5, -h * 0.5 + borderRadius);
  c.lineTo(-w * 0.5, h * 0.5 - borderRadius);
  c.quadraticCurveTo(-w * 0.5, h * 0.5, -w * 0.5 + borderRadius, h * 0.5);
  c.lineTo(w * 0.5 - borderRadius, h * 0.5);
  c.quadraticCurveTo(w * 0.5, h * 0.5, w * 0.5, h * 0.5 - borderRadius);
  c.lineTo(w * 0.5, -h * 0.5 + borderRadius);
  c.quadraticCurveTo(w * 0.5, -h * 0.5, w * 0.5 - borderRadius, -h * 0.5);
  c.lineTo(0, -h * 0.5);
  c.closePath();
  if (stroke) c.stroke();else c.fill();
}; //DRAWING CIRCLES


lght.drawArc = function (c, rad, arcDegree, rotation, stroke) {
  c.beginPath();
  var br = (0, _util.degToRad)(360 - rotation - arcDegree);
  var er = (0, _util.degToRad)(360 - rotation);

  if (arcDegree < 360) {
    var _rotatePoint = (0, _util.rotatePoint)(0, 0, rad, 0, 360 - rotation - arcDegree),
        _rotatePoint2 = _slicedToArray(_rotatePoint, 2),
        x = _rotatePoint2[0],
        y = _rotatePoint2[1];

    c.moveTo(x, y);
    c.moveTo(0, 0);
  }

  c.arc(0, 0, rad, br, er);
  if (stroke) c.stroke();else c.fill();
  c.closePath();
}; //DRAWING TEXT


lght.drawText = function (c, text, font, stroke, textAlign, width, height, rotation) {
  c.font = font;
  c.rotate((0, _util.degToRad)(360 - rotation));
  var x;
  if (textAlign === 'center') x = ~~(-width / 2 + 0.5);else if (textAlign === 'left') x = 0;else x = ~~(-width + 0.5);
  if (stroke) c.strokeText(text, x, ~~(height / 3.5 + 0.5));else c.fillText(text, x, ~~(height / 3.5 + 0.5));
}; //DRAWING IMAGES


lght.drawImg = function (c, sprite, w, h, rotation) {
  c.rotate((0, _util.degToRad)(360 - rotation));
  c.drawImage(sprite, -w / 2, -h / 2, w, h);
};

lght.drawPoly = function (c, points, rotation, stroke) {
  if (points.length === 0 || !points) return;
  c.rotate((0, _util.degToRad)(360 - rotation));
  c.beginPath();
  c.moveTo.apply(c, _toConsumableArray(points[0]));
  points.forEach(function (_ref18) {
    var _ref19 = _slicedToArray(_ref18, 2),
        x = _ref19[0],
        y = _ref19[1];

    return c.lineTo(x, y);
  });
  c.closePath();
  if (stroke) c.stroke();else c.fill();
};

lght.drawLine = function (c, points, rotation, lineWidth) {
  c.beginPath();
  c.rotate((0, _util.degToRad)(360 - rotation));
  c.moveTo.apply(c, _toConsumableArray(points[0]));
  points.forEach(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
        x = _ref21[0],
        y = _ref21[1];

    return c.lineTo(x, y);
  });
  c.lineWidth = lineWidth;
  c.stroke();
};

lght.object.prototype.addShape = function (property) {
  var shape = new lght[property.kind](property, this);
  this.updateVisual();
  return shape;
};

lght.object.prototype.addComponent = function (name, property) {
  var shape = lght.component.addComponent(name, property, this);
  this.updateVisual();
  return shape;
};

lght.app.prototype.addObject = function (property) {
  return new lght.object(property, this);
};

lght.app.prototype.getObject = function (name) {
  return this.objects.find(function (e) {
    return e.name === name;
  });
};

lght.app.prototype.addStorage = function (property) {
  return new lght.storage(property, this);
};

lght.app.prototype.addAdvanceStorage = function (property) {
  return new lght.advanceStorage(property, this);
};

lght.app.prototype.removeObject = function (obj) {
  this.objects.splice(this.objects.indexOf(obj), 1);
};

module.exports = lght;
var _default = lght;
exports["default"] = _default;