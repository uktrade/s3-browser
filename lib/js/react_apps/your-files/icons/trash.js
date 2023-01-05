"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrashIcon = TrashIcon;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TrashIcon(props) {
  var width = 16;
  var height = 18;
  if (props.isNavIcon) {
    width = 60;
    height = 60;
  }
  var svgClasses = (0, _classnames["default"])("svg-inline--fa", "fa-trash-alt", "fa-w-14", {
    "navbutton-icon": props.isNavIcon,
    "button-icon": !props.isNavIcon
  });
  return /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "trash-alt",
    className: svgClasses,
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    width: width,
    height: height
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "currentColor",
    d: "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
  }));
}