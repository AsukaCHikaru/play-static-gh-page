const { resolve } = require("path");

module.exports = {
  entry: {
    index: resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.js",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
