"use strict";

var webpack = require("webpack");
var _require = require("webpack-merge"),
  merge = _require.merge;
var common = require("./webpack.common.js");
var BundleTracker = require("webpack-bundle-tracker");
var TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "/__django_static/js/bundles/"
  },
  plugins: [new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }), new BundleTracker({
    filename: "../stats/react_apps-stats.json",
    relativePath: true
  })],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    })]
  }
});