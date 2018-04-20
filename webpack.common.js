const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const buildFolder = 'public';

module.exports = {
  entry: {
    main: './src/react-components/App.js'
  },
  plugins: [
    // new ExtractTextPlugin({ filename: '[name].[contenthash].css' }),
    new CleanWebpackPlugin([buildFolder]),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, buildFolder)
  },
  resolve: {
    alias: {
      Css: path.resolve(__dirname, 'src/css/'),
      Components: path.resolve(__dirname, 'src/react-components/'),
      Redux: path.resolve(__dirname, 'src/redux'),
      Actions: path.resolve(__dirname, 'src/redux/actions'),
      Reducers: path.resolve(__dirname, 'src/redux/reducers'),
      Images: path.resolve(__dirname, 'src/images'),
      Icons: path.resolve(__dirname, 'src/images/icons'),
      Main: path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['babel-preset-react'], // for compiling JSX and other stuff down to Javascript
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // transform inline images into data URLs
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
