const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpe?g|gif|mp4|jpg|mpeg|webm)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name:'[path] [name].[ext]',
                    }
                  },
                ],
      },
    ],
  },
};