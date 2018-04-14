const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map', // enables the source map feature in order to let the debugging define which js-file is affected by an issue out of the bundle
  // plugins: [
  //   new webpack.NamedModulesPlugin() // this plugin keeps the generated filaname consistent for each file that's not been changed. it's particularly useful for vendors like lodash because they are usually unchanged and shouldn't change otherwise they would be downloaded again instead of being cached
  // ],
  mode: 'development'
});
