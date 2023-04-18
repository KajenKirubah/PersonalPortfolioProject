const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const currentTask = process.env.npm_lifecycle_event === "build";

const PostCSSPlugins = [
    require("postcss-mixins"), 
    require("postcss-nested"), 
    require("postcss-import"),
    require('postcss-simple-vars'), 
    require("autoprefixer")
];

module.exports = {
  mode: "development",
  entry: {
    app: "./app/scripts/App.js",
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          currentTask ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: PostCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: currentTask ? "index.[contenthash].html" : 'index.html',
      template: "./app/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1000,
    },
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: {
        index: '/index.html',
    },
  },
};
