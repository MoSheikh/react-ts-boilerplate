require("dotenv").config();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const SRC_DIR = path.resolve(__dirname, "src");
const OUT_DIR = path.resolve(__dirname, "build");

module.exports = {
  entry: path.resolve(SRC_DIR, "index.tsx"),

  output: {
    path: OUT_DIR,
    filename: "static/js/[name].[contenthash:8].js",
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
    publicPath: "/",
  },

  devServer: {
    open: true,
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT || "8000", 10),
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
        test: /\.css/i,
        include: /src/,
      },
      {
        loader: "babel-loader",
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
      },
      {
        loader: "file-loader",
        test: /\.(jpe?g|png|svg)$/i,
        options: {
          name: "static/media/[name][hash:8].[ext]",
        },
      },
      {
        loader: "file-loader",
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        options: {
          name: "static/fonts/[name][hash:8].[ext]",
        },
      },
    ],
  },

  resolve: {
    extensions: ["*", "...", ".jsx", ".tsx", ".ts"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.APP_TITLE || "Untitled",
      inject: true,
      template: path.resolve(SRC_DIR, "index.html"),
      favicon: path.resolve(SRC_DIR, "assets", "icons", "react.png"),
      ...(isProduction && {
        minify: {
          collapseWhitespace: true,
          keepClosingSlash: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeEmptyAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURSLs: true,
        },
      }),
    }),
  ],
};
