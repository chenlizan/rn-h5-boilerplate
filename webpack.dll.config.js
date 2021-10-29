const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const dll = {
  mode: "development",
  entry: {
    vendor: ["antd-mobile", "react", "react-dom", "react-redux", "react-router-dom", "redux", "redux-actions"],
  },
  output: {
    path: path.resolve(__dirname, "dll"),
    filename: "[name].dll.js",
    library: "[name]_[chunkhash:5]",
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.join(__dirname, ".", "dll"),
      path: path.join(__dirname, "dll", "[name]-manifest.json"),
      name: "[name]_[chunkhash:5]",
    }),
    new ProgressBarPlugin(),
  ],
};

module.exports = dll;
