const path = require('path');
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  // 追踪错误和警告
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // 开启模块热替换
    hot: true
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/"
  },
  mode: "production"
};
