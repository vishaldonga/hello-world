const webpack = require('webpack');
const path = require('path');
 
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    hot: true,
  },
};

// const webpack = require('webpack');
// const path = require("path");
// module.exports = {
//   entry: "./src/index.js",
//   mode: "development", //production
//   resolve: {
//     extensions: ["*", ".js", ".jsx"],
//   },
//   output: {
//     path: path.resolve(__dirname, "./public"),
//     filename: "bundle.js",
//   },  
//   devServer: {
//     contentBase: path.resolve(__dirname, './public'),
//     hot: true,
//   },
//   modules: {
//     rules: [
//       {
//         test: /\.txt$/,
//         use: "raw-loader",
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ["babel-loader"],
//       },
//     ],
//   },
//   plugins: [new webpack.HotModuleReplacementPlugin()],
// };
