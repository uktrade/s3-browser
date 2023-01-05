"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigDataMessage = BigDataMessage;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function BigDataMessage(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "govuk-inset-text"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "govuk-body"
  }, "Files in the ", /*#__PURE__*/_react["default"].createElement("code", null, props.bigDataFolder), " folder are not automatically accessible from your tools in the same way other files are. However, they can be manually accessed. For example, after uploading a file ", /*#__PURE__*/_react["default"].createElement("code", null, props.bigDataFolder, "file.csv"), ", you can create a Pandas DataFrame in a JupyterLab Python notebook by running the following code."), /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("pre", null, "import os\nimport pandas as pd \nimport boto3 \n\nclient = boto3.client('s3', region_name='eu-west-2') \nresponse = client.get_object(\n          Bucket='".concat(props.bucketName, "', \n          Key=os.environ['S3_PREFIX'] + '").concat(props.bigDataFolder, "file.csv' ) \ndf = pd.read_csv(response['Body'])\n  "))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "govuk-body govuk-!-margin-top-2"
  }, "You can also create a tibble from this file in R by running the following code."), /*#__PURE__*/_react["default"].createElement("code", null, /*#__PURE__*/_react["default"].createElement("pre", null, "library(\"aws.s3\")\nlibrary(\"readr\")\nfilename <- \"".concat(props.bigDataFolder, "file.csv\"\nconn = s3connection(paste(c(\n    \"s3://").concat(props.bucketName, "/\",\n    Sys.getenv(\"S3_PREFIX\"), filename), \n    collapse=\"\"\n))\n\ntb = read_csv(conn)\nclose(conn)\n        "))));
}