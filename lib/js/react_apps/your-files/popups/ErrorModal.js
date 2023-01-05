"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorModal = ErrorModal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ErrorModal(_ref) {
  var error = _ref.error,
    onClose = _ref.onClose;
  var errors = Object.entries(error || {}).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    return {
      key: key,
      value: value
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "popup-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "popup-container__overlay"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "popup-container__modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modal-title govuk-heading-m",
    id: "trash-title"
  }, "Error ", error.code ? "(".concat(error.code, ")") : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-body"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "govuk-body",
    "ng-if": "error.errors.length"
  }, error.message), /*#__PURE__*/_react["default"].createElement("table", {
    className: "govuk-table",
    "ng-if": "error.errors.length"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "govuk-table__row"
  }, /*#__PURE__*/_react["default"].createElement("th", {
    className: "govuk-table__header"
  }, "Key"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "govuk-table__header"
  }, "Value"))), /*#__PURE__*/_react["default"].createElement("tbody", null, errors.map(function (err, idx) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: "govuk-table__row",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "govuk-table__cell"
    }, err.key), /*#__PURE__*/_react["default"].createElement("td", {
      className: "govuk-table__cell"
    }, err.value.toString()));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "govuk-button-group"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: "error-btn-close",
    type: "button",
    onClick: onClose,
    className: "govuk-button govuk-button--secondary modal-button"
  }, "Close"))))));
}