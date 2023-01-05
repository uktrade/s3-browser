"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);
  var _super = _createSuper(Header);
  function Header(props) {
    _classCallCheck(this, Header);
    return _super.call(this, props);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this = this;
      var breadCrumbs = this.props.breadCrumbs.map(function (b) {
        return /*#__PURE__*/React.createElement("li", {
          onClick: function onClick() {
            return _this.props.onBreadcrumbClick(b);
          },
          className: "browser-breadcrumb",
          key: b.prefix
        }, b.label);
      });
      console.log(breadCrumbs);
      return /*#__PURE__*/React.createElement("div", {
        className: "browser-header"
      }, /*#__PURE__*/React.createElement("button", {
        className: "navbutton"
      }, /*#__PURE__*/React.createElement("svg", {
        spinner: "refresh",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "sync",
        className: "navbutton-icon navbutton-icon-small svg-inline--fa fa-sync fa-w-16",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        width: "60",
        height: "60"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
      }))), /*#__PURE__*/React.createElement("ul", {
        className: "browser-breadcrumbs"
      }, breadCrumbs), /*#__PURE__*/React.createElement("button", {
        className: "navbutton",
        title: "Create folder"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "folder-plus",
        className: "navbutton-icon navbutton-icon-large svg-inline--fa fa-folder-plus fa-w-16",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        width: "60",
        height: "60"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm-96 168c0 8.84-7.16 16-16 16h-72v72c0 8.84-7.16 16-16 16h-16c-8.84 0-16-7.16-16-16v-72h-72c-8.84 0-16-7.16-16-16v-16c0-8.84 7.16-16 16-16h72v-72c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v72h72c8.84 0 16 7.16 16 16v16z"
      }))), /*#__PURE__*/React.createElement("button", {
        className: "navbutton",
        title: "Upload files"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "cloud-upload-alt",
        className: "navbutton-icon svg-inline--fa fa-cloud-upload-alt fa-w-20",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 640 512",
        width: "60",
        height: "60"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"
      }))), /*#__PURE__*/React.createElement("button", {
        className: "navbutton",
        title: "Delete selected items"
      }, /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "trash-alt",
        className: "navbutton-icon svg-inline--fa fa-trash-alt fa-w-14",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        width: "60",
        height: "60"
      }, /*#__PURE__*/React.createElement("path", {
        fill: "currentColor",
        d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
      }))));
    }
  }]);
  return Header;
}(React.Component);
var sizes = ["bytes", "KB", "MB", "GB", "TB"];
function bytesToSize(bytes) {
  if (bytes === 0) return "0 bytes";
  var ii = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return "".concat(Math.round(bytes / Math.pow(1024, ii), 2), " ").concat(sizes[ii]);
}
function Folder(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "folder",
    onClick: props.onClick
  }, props.text);
}
function File(props) {
  return /*#__PURE__*/React.createElement("a", {
    className: "file",
    onClick: props.onClick
  }, props.text);
}
var FileList = /*#__PURE__*/function (_React$Component2) {
  _inherits(FileList, _React$Component2);
  var _super2 = _createSuper(FileList);
  function FileList(props) {
    var _this2;
    _classCallCheck(this, FileList);
    _this2 = _super2.call(this, props);
    _this2.handleFolderClick = _this2.props.onFolderClick.bind(_assertThisInitialized(_this2));
    _this2.handleFileClick = _this2.props.onFileClick.bind(_assertThisInitialized(_this2));
    _this2.handleCreateTableClick = _this2.handleCreateTableClick.bind(_assertThisInitialized(_this2));
    return _this2;
  }
  _createClass(FileList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("componentDidMount filelist");
              console.log(this.props.files);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "handleFolderClick",
    value: function handleFolderClick(prefix) {
      console.log("handleFolderClick", prefix);
    }
  }, {
    key: "handleFileClick",
    value: function handleFileClick(key) {
      console.log("fileClick", key);
    }

    // This is a specific case for data-workspace
    // probably extract this to an open-link type effect
  }, {
    key: "handleCreateTableClick",
    value: function handleCreateTableClick(key) {
      console.log("createTable", key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var files = this.props.files;
      var folders = this.props.folders;
      return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        className: "header--checkbox"
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox"
      })), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Last modified"), /*#__PURE__*/React.createElement("th", null, "Size"), /*#__PURE__*/React.createElement("th", null, "Details"))), /*#__PURE__*/React.createElement("tbody", null, folders.map(function (folder) {
        return /*#__PURE__*/React.createElement("tr", {
          key: folder.Prefix
        }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
          type: "checkbox"
        })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Folder, {
          text: folder.Prefix,
          onClick: function onClick() {
            return _this3.handleFolderClick(folder.Prefix);
          }
        })));
      }), files.map(function (file) {
        var createTableButton = null;
        if (file.isCsv) {
          createTableButton = /*#__PURE__*/React.createElement("a", {
            className: "create-table",
            onClick: function onClick() {
              return _this3.handleCreateTableClick(file.Key);
            }
          }, "Create table");
        }
        return /*#__PURE__*/React.createElement("tr", {
          key: file.Key
        }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
          type: "checkbox"
        })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(File, {
          text: file.Key,
          onClick: function onClick() {
            return _this3.handleFileClick(file.Key);
          }
        })), /*#__PURE__*/React.createElement("td", null, file.formattedDate.toLocaleString()), /*#__PURE__*/React.createElement("td", null, bytesToSize(file.Size)), /*#__PURE__*/React.createElement("td", null, createTableButton));
      })));
    }
  }]);
  return FileList;
}(React.Component);
var Browser = /*#__PURE__*/function (_React$Component3) {
  _inherits(Browser, _React$Component3);
  var _super3 = _createSuper(Browser);
  function Browser(props) {
    var _this4;
    _classCallCheck(this, Browser);
    _this4 = _super3.call(this, props);
    console.log(_this4.props.config);
    _this4.state = {
      files: [],
      folders: [],
      isLoaded: false,
      error: null,
      bucketName: _this4.props.config.bucketName,
      prefix: _this4.props.config.initialPrefix,
      region: _this4.props.config.region
    };
    _this4.handleFileClick = _this4.handleFileClick.bind(_assertThisInitialized(_this4));
    _this4.handleFolderClick = _this4.handleFolderClick.bind(_assertThisInitialized(_this4));
    _this4.handleBreadcrumbClick = _this4.handleBreadcrumbClick.bind(_assertThisInitialized(_this4));
    return _this4;
  }
  _createClass(Browser, [{
    key: "handleFileClick",
    value: function handleFileClick() {
      console.log("handleFileClick", arguments);
    }
  }, {
    key: "handleFolderClick",
    value: function () {
      var _handleFolderClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(prefix) {
        var _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log("handleFolderClick", _args2);
              console.log(prefix);
              this.setState({
                prefix: prefix
              });
              _context2.next = 5;
              return this.refresh(prefix);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function handleFolderClick(_x) {
        return _handleFolderClick.apply(this, arguments);
      }
      return handleFolderClick;
    }()
  }, {
    key: "handleBreadcrumbClick",
    value: function handleBreadcrumbClick() {
      console.log("handleBreadcrumbClick", arguments);
    }
  }, {
    key: "getBreadcrumbs",
    value: function getBreadcrumbs() {
      var prefix = this.state.prefix;
      var data = [{
        prefix: prefix,
        label: "home"
      }];
      return data;
    }
  }, {
    key: "refresh",
    value: function () {
      var _refresh = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(prefix) {
        var params, data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              params = {
                Bucket: this.state.bucketName,
                Prefix: prefix || this.state.prefix,
                Delimiter: "/"
              };
              console.log("refresh", params);
              _context3.prev = 2;
              _context3.next = 5;
              return this.props.proxy.listObjects(params);
            case 5:
              data = _context3.sent;
              this.setState({
                files: data.Contents,
                folders: data.CommonPrefixes
              });
              _context3.next = 12;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](2);
              console.error(_context3.t0);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[2, 9]]);
      }));
      function refresh(_x2) {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.refresh();
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function componentDidMount() {
        return _componentDidMount2.apply(this, arguments);
      }
      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      console.log("render");
      var breadCrumbs = this.getBreadcrumbs();
      return /*#__PURE__*/React.createElement("div", {
        className: "browser"
      }, /*#__PURE__*/React.createElement(Header, {
        breadCrumbs: breadCrumbs,
        onBreadcrumbClick: this.handleBreadcrumbClick
      }), /*#__PURE__*/React.createElement(FileList, {
        files: this.state.files,
        folders: this.state.folders,
        onFileClick: this.handleFileClick,
        onFolderClick: this.handleFolderClick
      }));
    }
  }]);
  return Browser;
}(React.Component);
var config = {
  bucketName: "my-bucket",
  initialPrefix: ""
};
var proxy = new S3Proxy({
  region: "uk-west-2"
});
var root = document.getElementById("root");
ReactDOM.render( /*#__PURE__*/React.createElement(Browser, {
  proxy: proxy,
  config: config
}), root);