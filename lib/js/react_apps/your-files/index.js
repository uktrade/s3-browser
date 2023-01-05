"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Workaround for hot reload "ignored-module" issue when developing locally.
if (module.hot) {
  module.hot.accept();
}
var el = document.getElementById("your-files-app");
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], {
  config: YOURFILES_CONFIG
}), el);