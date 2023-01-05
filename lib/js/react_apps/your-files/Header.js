"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireDefault(require("react"));
var _trash = require("./icons/trash");
var _upload = require("./icons/upload");
var _newfolder = require("./icons/newfolder");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
    var _this;
    _classCallCheck(this, Header);
    _this = _super.call(this, props);
    _this.state = {
      spin: false
    };
    return _this;
  }
  _createClass(Header, [{
    key: "handleRefreshClick",
    value: function handleRefreshClick() {
      this.props.onRefreshClick();
      this.setState({
        spin: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var breadCrumbs = this.props.breadCrumbs.map(function (b) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: "browser-breadcrumb",
          key: b.prefix
        }, "\xA0", /*#__PURE__*/_react["default"].createElement("a", {
          href: "",
          onClick: function onClick(e) {
            return _this2.props.onBreadcrumbClick(e, b);
          },
          className: "browser-breadcrumb-link"
        }, b.label), "\xA0");
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "browser-header"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "navbutton",
        onClick: function onClick() {
          return _this2.handleRefreshClick();
        }
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        spinner: "refresh",
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fas",
        "data-icon": "sync",
        className: "navbutton-icon navbutton-icon-small svg-inline--fa fa-sync fa-w-16".concat(this.state.spin ? ' spin' : ''),
        onAnimationEnd: function onAnimationEnd() {
          return _this2.setState({
            spin: false
          });
        },
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        width: "60",
        height: "60"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        fill: "currentColor",
        d: "M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"
      }))), /*#__PURE__*/_react["default"].createElement("ul", {
        className: "govuk-body browser-breadcrumbs"
      }, breadCrumbs), /*#__PURE__*/_react["default"].createElement("button", {
        className: "navbutton",
        title: "Create folder",
        onClick: function onClick() {
          return _this2.props.onNewFolderClick(_this2.props.currentPrefix);
        }
      }, /*#__PURE__*/_react["default"].createElement(_newfolder.NewFolderIcon, {
        isNavIcon: true
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "navbutton",
        title: "Upload files",
        onClick: function onClick() {
          return _this2.props.onUploadClick(_this2.props.currentPrefix);
        }
      }, /*#__PURE__*/_react["default"].createElement(_upload.UploadIcon, {
        isNavIcon: true
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "navbutton",
        title: "Delete selected items",
        onClick: function onClick() {
          return _this2.props.onDeleteClick();
        },
        disabled: !this.props.canDelete
      }, /*#__PURE__*/_react["default"].createElement(_trash.TrashIcon, {
        isNavIcon: true
      })));
    }
  }]);
  return Header;
}(_react["default"].Component);
exports.Header = Header;