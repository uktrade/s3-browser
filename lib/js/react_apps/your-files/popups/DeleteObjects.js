"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteObjectsPopup = void 0;
var _react = _interopRequireDefault(require("react"));
var _trash = require("../icons/trash");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BULK_DELETE_MAX_FILES = 1000;
function DeleteTableHeader() {
  return /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "govuk-table__row"
  }, /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "govuk-table__header"
  }, "Name"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "govuk-table__header govuk-table__header--numeric",
    style: {
      width: "15em"
    }
  }, "Last modified"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "govuk-table__header govuk-table__header--numeric",
    style: {
      width: "5em"
    }
  }, "Size"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col",
    className: "govuk-table__header govuk-table__header--numeric",
    style: {
      width: "7em"
    }
  }, "Status")));
}
var DeleteObjectsPopup = /*#__PURE__*/function (_React$Component) {
  _inherits(DeleteObjectsPopup, _React$Component);
  var _super = _createSuper(DeleteObjectsPopup);
  function DeleteObjectsPopup(props) {
    var _this;
    _classCallCheck(this, DeleteObjectsPopup);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "escFunction", function (event) {
      if (event.key === 'Escape') {
        _this.onCloseClick();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDeleteClick", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var s3, bucketName, foldersToDelete, filesToDelete, numObjects, maxConnections, isErrored, isAborted, remainingDeleteCount, keysToDelete, updateDeleteState, deleteKeys, flushDelete, scheduleDelete, _iterator3, _step3, folder, continuationToken, isTruncated, response, j, _iterator4, _step4, file;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            s3 = _this.props.s3;
            bucketName = _this.props.bucketName;
            foldersToDelete = _this.state.foldersToDelete;
            filesToDelete = _this.state.filesToDelete;
            numObjects = foldersToDelete.length + filesToDelete.length;
            maxConnections = 4;
            isErrored = false;
            isAborted = false;
            remainingDeleteCount = numObjects;
            keysToDelete = [];
            _this.abort = function () {
              isAborted = true;
            };
            updateDeleteState = function updateDeleteState(fileOrFolder, newState) {
              _this.setState({
                foldersToDelete: _this.state.foldersToDelete.map(function (f) {
                  return f.Prefix === fileOrFolder.Prefix ? _objectSpread(_objectSpread({}, f), newState) : f;
                }),
                filesToDelete: _this.state.filesToDelete.map(function (f) {
                  return f.Key === fileOrFolder.Key ? _objectSpread(_objectSpread({}, f), newState) : f;
                })
              });
            };
            deleteKeys = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var rootFileOrFolders, _iterator, _step, rootFileOrFolder, _iterator2, _step2, _rootFileOrFolder;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      rootFileOrFolders = keysToDelete.map(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                          rootFileOrFolder = _ref4[0],
                          key = _ref4[1];
                        return rootFileOrFolder;
                      });
                      _context.prev = 1;
                      _context.next = 4;
                      return s3.deleteObjects({
                        Bucket: bucketName,
                        Delete: {
                          Objects: keysToDelete.map(function (_ref5) {
                            var _ref6 = _slicedToArray(_ref5, 2),
                              rootFileOrFolder = _ref6[0],
                              key = _ref6[1];
                            return {
                              Key: key
                            };
                          })
                        }
                      }).promise();
                    case 4:
                      _context.next = 12;
                      break;
                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](1);
                      isErrored = true;
                      _iterator = _createForOfIteratorHelper(rootFileOrFolders);
                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          rootFileOrFolder = _step.value;
                          updateDeleteState(rootFileOrFolder, {
                            deleteError: _context.t0.code || _context.t0.message || _context.t0
                          });
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                      throw _context.t0;
                    case 12:
                      _context.prev = 12;
                      keysToDelete = [];
                      return _context.finish(12);
                    case 15:
                      _iterator2 = _createForOfIteratorHelper(rootFileOrFolders);
                      try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                          _rootFileOrFolder = _step2.value;
                          updateDeleteState(_rootFileOrFolder, {
                            deleteFinished: true
                          });
                        }
                      } catch (err) {
                        _iterator2.e(err);
                      } finally {
                        _iterator2.f();
                      }
                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[1, 6, 12, 15]]);
              }));
              return function deleteKeys() {
                return _ref2.apply(this, arguments);
              };
            }();
            flushDelete = /*#__PURE__*/function () {
              var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!keysToDelete.length) {
                        _context2.next = 3;
                        break;
                      }
                      _context2.next = 3;
                      return deleteKeys();
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function flushDelete() {
                return _ref7.apply(this, arguments);
              };
            }();
            scheduleDelete = /*#__PURE__*/function () {
              var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rootFolder, key) {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      keysToDelete.push([rootFolder, key]);
                      if (!(keysToDelete.length >= BULK_DELETE_MAX_FILES)) {
                        _context3.next = 4;
                        break;
                      }
                      _context3.next = 4;
                      return deleteKeys();
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function scheduleDelete(_x2, _x3) {
                return _ref8.apply(this, arguments);
              };
            }();
            _iterator3 = _createForOfIteratorHelper(foldersToDelete);
            _context4.prev = 16;
            _iterator3.s();
          case 18:
            if ((_step3 = _iterator3.n()).done) {
              _context4.next = 49;
              break;
            }
            folder = _step3.value;
            updateDeleteState(folder, {
              deleteStarted: true
            });
            continuationToken = null;
            isTruncated = true;
          case 23:
            if (!(isTruncated && !isAborted)) {
              _context4.next = 47;
              break;
            }
            // Find objects at or under the prefix...
            response = void 0;
            _context4.prev = 25;
            _context4.next = 28;
            return s3.listObjectsV2({
              Bucket: bucketName,
              Prefix: folder.Prefix,
              ContinuationToken: continuationToken
            }).promise();
          case 28:
            response = _context4.sent;
            continuationToken = response.NextContinuationToken;
            isTruncated = response.IsTruncated;
            _context4.next = 38;
            break;
          case 33:
            _context4.prev = 33;
            _context4.t0 = _context4["catch"](25);
            isErrored = true;
            updateDeleteState(folder, {
              deleteError: _context4.t0.code || _context4.t0.message || _context4.t0
            });
            throw _context4.t0;
          case 38:
            j = 0;
          case 39:
            if (!(j < response.Contents.length && !isAborted)) {
              _context4.next = 45;
              break;
            }
            _context4.next = 42;
            return scheduleDelete(folder, response.Contents[j].Key);
          case 42:
            ++j;
            _context4.next = 39;
            break;
          case 45:
            _context4.next = 23;
            break;
          case 47:
            _context4.next = 18;
            break;
          case 49:
            _context4.next = 54;
            break;
          case 51:
            _context4.prev = 51;
            _context4.t1 = _context4["catch"](16);
            _iterator3.e(_context4.t1);
          case 54:
            _context4.prev = 54;
            _iterator3.f();
            return _context4.finish(54);
          case 57:
            _iterator4 = _createForOfIteratorHelper(filesToDelete);
            _context4.prev = 58;
            _iterator4.s();
          case 60:
            if ((_step4 = _iterator4.n()).done) {
              _context4.next = 69;
              break;
            }
            file = _step4.value;
            if (!isAborted) {
              _context4.next = 64;
              break;
            }
            return _context4.abrupt("break", 69);
          case 64:
            updateDeleteState(file, {
              deleteStarted: true
            });
            _context4.next = 67;
            return scheduleDelete(file, file.Key);
          case 67:
            _context4.next = 60;
            break;
          case 69:
            _context4.next = 74;
            break;
          case 71:
            _context4.prev = 71;
            _context4.t2 = _context4["catch"](58);
            _iterator4.e(_context4.t2);
          case 74:
            _context4.prev = 74;
            _iterator4.f();
            return _context4.finish(74);
          case 77:
            if (!isAborted) {
              _context4.next = 79;
              break;
            }
            return _context4.abrupt("return");
          case 79:
            _context4.next = 81;
            return flushDelete();
          case 81:
            _this.setState({
              finished: true
            });
            if (!isErrored) {
              _this.props.onSuccess();
            }
          case 83:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[16, 51, 54, 57], [25, 33], [58, 71, 74, 77]]);
    })));
    _defineProperty(_assertThisInitialized(_this), "onCloseClick", function () {
      _this.abort();
      _this.props.onClose();
    });
    _this.abort = function () {};
    _this.state = {
      finished: false,
      trashing: false,
      aborted: false,
      foldersToDelete: _this.props.foldersToDelete.map(function (folder) {
        return _objectSpread(_objectSpread({}, folder), {}, {
          deleteStarted: false,
          deleteFinished: false,
          deleteError: null
        });
      }),
      filesToDelete: _this.props.filesToDelete.map(function (file) {
        return _objectSpread(_objectSpread({}, file), {}, {
          deleteStarted: false,
          deleteFinished: false,
          deleteError: null
        });
      })
    };
    return _this;
  }
  _createClass(DeleteObjectsPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.escFunction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var folders = this.state.foldersToDelete;
      var files = this.state.filesToDelete;
      var objectCount = files.length + folders.length;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "popup-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "popup-container__overlay"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "popup-container__modal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog",
        style: {
          maxWidth: "100%"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "modal-title govuk-heading-m",
        id: "trash-title"
      }, "Confirm delete of ".concat(objectCount, " object").concat(objectCount > 1 ? "s" : ""))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "panel-body"
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: "govuk-table",
        style: {
          tableLayout: "fixed"
        }
      }, /*#__PURE__*/_react["default"].createElement(DeleteTableHeader, null), /*#__PURE__*/_react["default"].createElement("tbody", {
        id: "s3objects-tbody"
      }, folders.map(function (folder) {
        var folderName = (0, _utils.prefixToFolder)(folder.Prefix);
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: folder.Prefix,
          className: "govuk-table__row"
        }, /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell"
        }, folderName), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell"
        }), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell"
        }), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell govuk-table__cell--numeric govuk-table__cell-progress"
        }, folder.deleteStarted || folder.deleteFinished || folder.deleteError ? null : /*#__PURE__*/_react["default"].createElement("span", null, "..."), folder.deleteStarted && !folder.deleteFinished && !folder.deleteError ? /*#__PURE__*/_react["default"].createElement("strong", {
          className: "govuk-tag progress-percentage"
        }, "Deleting") : null, folder.deleteError ? /*#__PURE__*/_react["default"].createElement("strong", {
          className: "govuk-tag progress-error"
        }, folder.deleteError) : null, folder.deleteFinished ? /*#__PURE__*/_react["default"].createElement("strong", {
          className: "govuk-tag progress-percentage-complete"
        }, "Deleted") : null));
      }), files.map(function (file) {
        var filename = (0, _utils.fullPathToFilename)(file.Key);
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: file.Key,
          className: "govuk-table__row",
          "ng-repeat": "object in model.objects"
        }, /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell"
        }, filename), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell govuk-table__cell--numeric"
        }, file.LastModified.toLocaleString()), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell govuk-table__cell--numeric"
        }, (0, _utils.bytesToSize)(file.Size)), /*#__PURE__*/_react["default"].createElement("td", {
          className: "govuk-table__cell govuk-table__cell--numeric govuk-table__cell-progress"
        }, !file.deleteFinished && !file.deleteError ? /*#__PURE__*/_react["default"].createElement("span", null, "...") : null, file.deleteError ? /*#__PURE__*/_react["default"].createElement("strong", {
          className: "govuk-tag progress-error"
        }, file.deleteError) : null, file.deleteFinished ? /*#__PURE__*/_react["default"].createElement("strong", {
          className: "govuk-tag progress-percentage-complete"
        }, "Deleted") : null));
      }))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        id: "trash-btn-cancel",
        type: "button",
        onClick: function onClick() {
          return _this2.onCloseClick();
        },
        className: "govuk-button govuk-button--secondary modal-button"
      }, this.state.finished ? "Close" : "Cancel"), !this.state.finished ? /*#__PURE__*/_react["default"].createElement("span", null, "\xA0", /*#__PURE__*/_react["default"].createElement("button", {
        id: "trash-btn-delete",
        type: "button",
        onClick: function onClick() {
          return _this2.onDeleteClick();
        },
        className: "govuk-button govuk-button--warning modal-button",
        disabled: this.state.trashing || this.state.finished
      }, /*#__PURE__*/_react["default"].createElement(_trash.TrashIcon, null), "\xA0Delete ", objectCount)) : null))));
    }
  }]);
  return DeleteObjectsPopup;
}(_react["default"].Component);
exports.DeleteObjectsPopup = DeleteObjectsPopup;