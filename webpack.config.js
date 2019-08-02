const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { main: "./src/index.js" },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.?worker\.js$/,
        exclude: /node_modules/,
        use: { loader: "worker-loader" }
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({ hash: true, template: "./src/index.html" })]
};
