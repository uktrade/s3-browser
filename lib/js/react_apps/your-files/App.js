"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.scss");
var _Header = require("./Header");
var _FileList = require("./FileList");
var _BigDataMessage = require("./BigDataMessage");
var _utils = require("./utils");
var _popups = require("./popups");
var _DeleteObjects = require("./popups/DeleteObjects");
var _ErrorModal = require("./popups/ErrorModal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var popupTypes = {
  ADD_FOLDER: "addFolder",
  UPLOAD_FILES: "uploadFiles",
  DELETE_OBJECTS: "deleteObjects"
};
var Credentials = /*#__PURE__*/function (_AWS$Credentials) {
  _inherits(Credentials, _AWS$Credentials);
  var _super = _createSuper(Credentials);
  function Credentials() {
    var _this;
    _classCallCheck(this, Credentials);
    _this = _super.call(this);
    _this.expiration = 0;
    return _this;
  }
  _createClass(Credentials, [{
    key: "refresh",
    value: function () {
      var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callback) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              this.accessKeyId = 'AAAAAAAAAAAAAAAAAAAA';
              this.secretAccessKey = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
              // this.sessionToken = response.SessionToken;
              this.expiration = Date.parse(response.Expiration);
              _context.next = 10;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              callback(_context.t0);
              return _context.abrupt("return");
            case 10:
              callback();
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 6]]);
      }));
      function refresh(_x) {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "needsRefresh",
    value: function needsRefresh() {
      return this.expiration - 60 < Date.now();
    }
  }]);
  return Credentials;
}(AWS.Credentials);
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super2 = _createSuper(App);
  function App(props) {
    var _this2;
    _classCallCheck(this, App);
    _this2 = _super2.call(this, props);
    _defineProperty(_assertThisInitialized(_this2), "onFileChange", function (event) {
      if (!event.target.files) {
        console.log("nothing selected");
        return;
      }
      var files = [];
      for (var i = 0; i < event.target.files.length; i++) {
        var file = event.target.files[i];
        file.relativePath = file.name;
        files.push(file);
      }
      _this2.setState({
        selectedFiles: files
      });
      _this2.showPopup(popupTypes.UPLOAD_FILES);
      _this2.fileInputRef.current.value = null;
    });
    _defineProperty(_assertThisInitialized(_this2), "onBreadcrumbClick", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, breadcrumb) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _context2.next = 3;
              return _this2.navigateTo(breadcrumb.prefix);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this2), "onRefreshClick", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _this2.navigateTo(_this2.state.currentPrefix);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    _defineProperty(_assertThisInitialized(_this2), "showNewFolderPopup", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(prefix) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this2.showPopup(popupTypes.ADD_FOLDER);
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x4) {
        return _ref3.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this2), "hidePopup", function (popupName) {
      var state = {
        popups: {}
      };
      state.popups[popupName] = false;
      _this2.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this2), "onUploadsComplete", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _this2.refresh(_this2.state.currentPrefix);
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })));
    _defineProperty(_assertThisInitialized(_this2), "onUploadClick", /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(prefix) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // this opens the file input ... processing continues
              // in the onFileChange function
              _this2.fileInputRef.current.click();
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this2), "onDeleteClick", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var filesToDelete, foldersToDelete;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            filesToDelete = _this2.state.files.filter(function (file) {
              return file.isSelected;
            });
            foldersToDelete = _this2.state.folders.filter(function (folder) {
              return folder.isSelected;
            });
            console.log("delete ".concat(filesToDelete.length, " files and ").concat(foldersToDelete.length, " folders"));
            _this2.setState({
              filesToDelete: filesToDelete,
              foldersToDelete: foldersToDelete
            });
            _this2.showPopup(popupTypes.DELETE_OBJECTS);
          case 5:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    })));
    _defineProperty(_assertThisInitialized(_this2), "showErrorPopup", function (error) {
      var newState = {
        error: error,
        popups: _this2.state.popups
      };
      Object.keys(newState.popups).forEach(function (key) {
        newState.popups[key] = false;
      });
      _this2.setState(newState);
    });
    _defineProperty(_assertThisInitialized(_this2), "handleFileClick", /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(key) {
        var params, url;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              params = {
                Bucket: _this2.state.bucketName,
                Key: key,
                Expires: 15,
                ResponseContentDisposition: "attachment"
              };
              _context8.prev = 1;
              _context8.next = 4;
              return _this2.s3.getSignedUrlPromise("getObject", params);
            case 4:
              url = _context8.sent;
              console.log(url);
              window.location.href = url;
              _context8.next = 12;
              break;
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](1);
              _this2.showErrorPopup(_context8.t0);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[1, 9]]);
      }));
      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this2), "handleFolderClick", /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(prefix) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _this2.navigateTo(prefix);
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      return function (_x7) {
        return _ref8.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this2), "onFileSelect", function (file, isSelected) {
      _this2.setState({
        files: _this2.state.files.map(function (f) {
          if (f.Key === file.Key) {
            f.isSelected = isSelected;
          }
          return f;
        })
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "onFolderSelect", function (folder, isSelected) {
      _this2.setState({
        folders: _this2.state.folders.map(function (f) {
          if (f.Prefix === folder.Prefix) {
            f.isSelected = isSelected;
          }
          return f;
        })
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "handleDragEnter", function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this2.setState({
        dragActive: true
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "handleDragLeave", function (e) {
      e.preventDefault();
      e.stopPropagation();
      // Don't fire the leave event if we are dragging over a child element
      if (e.currentTarget.contains(e.relatedTarget)) return;
      _this2.setState({
        dragActive: false
      });
    });
    _defineProperty(_assertThisInitialized(_this2), "handleDragOver", function (e) {
      // We need to cancel the drag over event to allow the drop event
      // to be picked up on a child element
      e.preventDefault();
      e.stopPropagation();
    });
    _defineProperty(_assertThisInitialized(_this2), "handleDrop", /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
        var entries, _entries, file, _file, getFiles, _getFiles;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _getFiles = function _getFiles3() {
                _getFiles = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(dataTransferItemList) {
                  var files, fileAndDirectoryEntryQueue, i, entry;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        files = []; // DataTransferItemList does not support map
                        fileAndDirectoryEntryQueue = [];
                        for (i = 0; i < dataTransferItemList.length; ++i) {
                          // At the time of writing no browser supports `getAsEntry`
                          fileAndDirectoryEntryQueue.push(dataTransferItemList[i].webkitGetAsEntry());
                        }
                      case 3:
                        if (!(fileAndDirectoryEntryQueue.length > 0)) {
                          _context12.next = 24;
                          break;
                        }
                        entry = fileAndDirectoryEntryQueue.shift();
                        if (!entry.isFile) {
                          _context12.next = 13;
                          break;
                        }
                        _context12.t0 = files;
                        _context12.next = 9;
                        return file(entry);
                      case 9:
                        _context12.t1 = _context12.sent;
                        _context12.t0.push.call(_context12.t0, _context12.t1);
                        _context12.next = 22;
                        break;
                      case 13:
                        if (!entry.isDirectory) {
                          _context12.next = 22;
                          break;
                        }
                        _context12.t2 = fileAndDirectoryEntryQueue.push;
                        _context12.t3 = fileAndDirectoryEntryQueue;
                        _context12.t4 = _toConsumableArray;
                        _context12.next = 19;
                        return entries(entry.createReader());
                      case 19:
                        _context12.t5 = _context12.sent;
                        _context12.t6 = (0, _context12.t4)(_context12.t5);
                        _context12.t2.apply.call(_context12.t2, _context12.t3, _context12.t6);
                      case 22:
                        _context12.next = 3;
                        break;
                      case 24:
                        return _context12.abrupt("return", files);
                      case 25:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }));
                return _getFiles.apply(this, arguments);
              };
              getFiles = function _getFiles2(_x11) {
                return _getFiles.apply(this, arguments);
              };
              _file = function _file3() {
                _file = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(fileEntry) {
                  var file;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.next = 2;
                        return new Promise(function (resolve, reject) {
                          fileEntry.file(resolve, reject);
                        });
                      case 2:
                        file = _context11.sent;
                        // We monkey-patch the file to include its FileSystemEntry fullPath,
                        // which is a path relative to the root of the pseudo-filesystem of
                        // a dropped folder
                        file.relativePath = fileEntry.fullPath.substring(1); // Remove leading slash
                        return _context11.abrupt("return", file);
                      case 5:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11);
                }));
                return _file.apply(this, arguments);
              };
              file = function _file2(_x10) {
                return _file.apply(this, arguments);
              };
              _entries = function _entries3() {
                _entries = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(directoryReader) {
                  var entries, latestEntries;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        entries = [];
                      case 1:
                        if (!true) {
                          _context10.next = 10;
                          break;
                        }
                        _context10.next = 4;
                        return new Promise(function (resolve, reject) {
                          directoryReader.readEntries(resolve, reject);
                        });
                      case 4:
                        latestEntries = _context10.sent;
                        if (!(latestEntries.length == 0)) {
                          _context10.next = 7;
                          break;
                        }
                        return _context10.abrupt("break", 10);
                      case 7:
                        entries = entries.concat(latestEntries);
                        _context10.next = 1;
                        break;
                      case 10:
                        return _context10.abrupt("return", entries);
                      case 11:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }));
                return _entries.apply(this, arguments);
              };
              entries = function _entries2(_x9) {
                return _entries.apply(this, arguments);
              };
              e.preventDefault();
              e.stopPropagation();
              _context13.t0 = _this2;
              _context13.next = 11;
              return getFiles(e.dataTransfer.items);
            case 11:
              _context13.t1 = _context13.sent;
              _context13.t2 = {
                dragActive: false,
                selectedFiles: _context13.t1
              };
              _context13.t0.setState.call(_context13.t0, _context13.t2);
              _this2.showPopup(popupTypes.UPLOAD_FILES);
            case 15:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      return function (_x8) {
        return _ref9.apply(this, arguments);
      };
    }());
    var appConfig = _this2.props.config;
    var awsConfig = _objectSpread(_objectSpread({
      credentials: new Credentials(),
      region: appConfig.region,
      s3ForcePathStyle: true
    }, appConfig.endpointUrl ? {
      endpoint: appConfig.endpointUrl
    } : {}), {}, {
      httpOptions: {
        // Total time a request is allowed to take, which for a multipart upload
        // is the total time a single 5MB is allowed to take. The default is 2
        // mins, but some people were hitting timeout errors, so bumped it to
        // 10 minutes
        timeout: 10 * 60 * 60 * 1000
      }
    });
    console.log("AWS Config", awsConfig);
    _this2.s3 = new AWS.S3(awsConfig);
    _this2.state = {
      files: [],
      folders: [],
      selectedFiles: [],
      filesToDelete: [],
      foldersToDelete: [],
      // Ensure the user provided prefix ends with a slash but does not start with a slash
      currentPrefix: appConfig.initialPrefix.replace(/^\//, "").replace(/([^\/]$)/, "$1/"),
      bigDataFolder: appConfig.bigdataPrefix,
      createTableUrl: appConfig.createTableUrl,
      isLoaded: false,
      error: null,
      bucketName: appConfig.bucketName,
      region: appConfig.region,
      showBigDataMessage: false,
      popups: Object.fromEntries(Object.entries(popupTypes).map(function (key, value) {
        return [value, false];
      })),
      dragActive: false
    };
    _this2.fileInputRef = /*#__PURE__*/_react["default"].createRef();
    return _this2;
  }
  _createClass(App, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              addEventListener("popstate", function (event) {
                _this3.setState({
                  currentPrefix: event.state && event.state.prefix ? event.state.prefix : _this3.props.config.initialPrefix
                }, function () {
                  _this3.refresh();
                });
              });
              _context14.next = 3;
              return this.refresh();
            case 3:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "showPopup",
    value: function showPopup(popupName) {
      var state = {
        popups: {}
      };
      state.popups[popupName] = true;
      this.setState(state);
    }
  }, {
    key: "navigateTo",
    value: function () {
      var _navigateTo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(prefix) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              window.history.pushState({
                prefix: prefix
              }, null, this.props.config.rootUrl + prefix);
              this.setState({
                prefix: prefix
              });
              _context15.next = 4;
              return this.refresh(prefix);
            case 4:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function navigateTo(_x12) {
        return _navigateTo.apply(this, arguments);
      }
      return navigateTo;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(prefix) {
        var _this4 = this;
        var rootPrefix, bigdataPrefix, showBigDataMessage, params, listObjects, data;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              rootPrefix = this.props.config.rootPrefix;
              bigdataPrefix = this.props.config.bigdataPrefix;
              showBigDataMessage = prefix === rootPrefix + bigdataPrefix;
              params = {
                Bucket: this.state.bucketName,
                Prefix: prefix || this.state.currentPrefix,
                Delimiter: "/"
              };
              listObjects = /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
                  var response, files, teamsFolders, bigDataFolder, foldersWithoutBigData, folders;
                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                      case 0:
                        _context16.prev = 0;
                        _context16.next = 3;
                        return _this4.s3.listObjectsV2(params).promise();
                      case 3:
                        response = _context16.sent;
                        _context16.next = 10;
                        break;
                      case 6:
                        _context16.prev = 6;
                        _context16.t0 = _context16["catch"](0);
                        console.error("Failed to fetch objects from S3", _context16.t0);
                        throw new Error(_context16.t0);
                      case 10:
                        files = response.Contents.filter(function (file) {
                          return file.Key !== params.Prefix;
                        }).map(function (file) {
                          return _objectSpread(_objectSpread({}, file), {}, {
                            formattedDate: new Date(file.LastModified),
                            isSelected: false
                          });
                        });
                        teamsFolders = params.Prefix === rootPrefix ? _this4.props.config.teamsPrefixes.map(function (prefix) {
                          return {
                            Prefix: prefix,
                            isSharedFolder: true,
                            isSelected: false
                          };
                        }) : [];
                        bigDataFolder = params.Prefix === rootPrefix ? [{
                          Prefix: rootPrefix + bigdataPrefix,
                          isBigData: true,
                          isSelected: false
                        }] : [];
                        foldersWithoutBigData = response.CommonPrefixes.filter(function (folder) {
                          return folder.Prefix !== "".concat(rootPrefix).concat(bigdataPrefix);
                        }).map(function (folder) {
                          return _objectSpread(_objectSpread({}, folder), {}, {
                            isBigData: false,
                            isSelected: false
                          });
                        });
                        folders = teamsFolders.concat(bigDataFolder).concat(foldersWithoutBigData);
                        return _context16.abrupt("return", {
                          files: files,
                          folders: folders
                        });
                      case 16:
                      case "end":
                        return _context16.stop();
                    }
                  }, _callee16, null, [[0, 6]]);
                }));
                return function listObjects() {
                  return _ref10.apply(this, arguments);
                };
              }();
              _context17.prev = 5;
              _context17.next = 8;
              return listObjects();
            case 8:
              data = _context17.sent;
              this.setState({
                files: data.files,
                folders: data.folders,
                currentPrefix: params.Prefix,
                showBigDataMessage: showBigDataMessage
              });
              _context17.next = 16;
              break;
            case 12:
              _context17.prev = 12;
              _context17.t0 = _context17["catch"](5);
              console.log("Error", _context17.t0);
              this.showErrorPopup(_context17.t0);
            case 16:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[5, 12]]);
      }));
      function refresh(_x13) {
        return _refresh2.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      var breadCrumbs = (0, _utils.getBreadcrumbs)(this.props.config.rootPrefix, this.props.config.teamsPrefix, this.state.currentPrefix);
      var currentFolderName = (0, _utils.getFolderName)(this.state.currentPrefix, this.props.config.rootPrefix);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "browser"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "file",
        onChange: this.onFileChange,
        multiple: true,
        ref: this.fileInputRef,
        style: {
          display: "none"
        }
      }), this.state.error ? /*#__PURE__*/_react["default"].createElement(_ErrorModal.ErrorModal, {
        error: this.state.error,
        onClose: function onClose() {
          return _this5.setState({
            error: null
          });
        }
      }) : null, this.state.popups.deleteObjects ? /*#__PURE__*/_react["default"].createElement(_DeleteObjects.DeleteObjectsPopup, {
        s3: this.s3,
        bucketName: this.props.config.bucketName,
        filesToDelete: this.state.filesToDelete,
        foldersToDelete: this.state.foldersToDelete,
        onClose: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
          return _regeneratorRuntime().wrap(function _callee18$(_context18) {
            while (1) switch (_context18.prev = _context18.next) {
              case 0:
                _this5.hidePopup(popupTypes.DELETE_OBJECTS);
              case 1:
              case "end":
                return _context18.stop();
            }
          }, _callee18);
        })),
        onSuccess: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
          return _regeneratorRuntime().wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _this5.onRefreshClick();
              case 2:
              case "end":
                return _context19.stop();
            }
          }, _callee19);
        }))
      }) : null, this.state.popups.addFolder ? /*#__PURE__*/_react["default"].createElement(_popups.AddFolderPopup, {
        s3: this.s3,
        bucketName: this.props.config.bucketName,
        currentPrefix: this.state.currentPrefix,
        onSuccess: function onSuccess() {
          return _this5.onRefreshClick();
        },
        onClose: function onClose() {
          return _this5.hidePopup(popupTypes.ADD_FOLDER);
        },
        onError: function onError(ex) {
          return _this5.showErrorPopup(ex);
        }
      }) : null, this.state.popups[popupTypes.UPLOAD_FILES] ? /*#__PURE__*/_react["default"].createElement(_popups.UploadFilesPopup, {
        s3: this.s3,
        bucketName: this.props.config.bucketName,
        currentPrefix: this.state.currentPrefix,
        selectedFiles: this.state.selectedFiles,
        folderName: currentFolderName,
        onCancel: function onCancel() {
          return _this5.hidePopup(popupTypes.UPLOAD_FILES);
        },
        onUploadsComplete: this.onUploadsComplete
      }) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "drop-zone ".concat(this.state.dragActive ? "drag-active" : ""),
        onDragEnter: this.handleDragEnter,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop,
        onDragOver: this.handleDragOver
      }, /*#__PURE__*/_react["default"].createElement(_Header.Header, {
        breadCrumbs: breadCrumbs,
        canDelete: this.state.folders.concat(this.state.files).filter(function (f) {
          return f.isSelected;
        }).length > 0,
        currentPrefix: this.state.currentPrefix,
        onBreadcrumbClick: this.onBreadcrumbClick,
        onRefreshClick: this.onRefreshClick,
        onNewFolderClick: this.showNewFolderPopup,
        onUploadClick: this.onUploadClick,
        onDeleteClick: this.onDeleteClick
      }), /*#__PURE__*/_react["default"].createElement(_FileList.FileList, {
        files: this.state.files,
        folders: this.state.folders,
        createTableUrl: this.state.createTableUrl,
        onFolderClick: this.handleFolderClick,
        onFolderSelect: this.onFolderSelect,
        onFileClick: this.handleFileClick,
        onFileSelect: this.onFileSelect
      }), this.state.showBigDataMessage ? /*#__PURE__*/_react["default"].createElement(_BigDataMessage.BigDataMessage, {
        bigDataFolder: this.state.bigDataFolder,
        bucketName: this.state.bucketName
      }) : null));
    }
  }]);
  return App;
}(_react["default"].Component);
exports["default"] = App;