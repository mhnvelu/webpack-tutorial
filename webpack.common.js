const path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Inject styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader", // 1. Turns sass into css
        ],
      },
      {
        test: /\.html$/,
        use: [
          "html-loader", // Emits require("imagename.svg") from img tag in html
        ],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader", // Loads the file require(imagename.svg)
          options: {
            name: "[name].[hash].[ext]", // ouput filename is imagename.1g2gg2.svg
            outputPath: "imgs", // imgs dir created under target folder
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/template.html",
    }),
  ],
};
