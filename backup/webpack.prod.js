const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true // enables the source map feature in order to let the debugging define which js-file is affected by an issue out of the bundle
    // }),
    // new webpack.HashedModuleIdsPlugin(),
    new WorkboxPlugin.GenerateSW({
      // exclude: [/\.(?:png|jpg|jpeg|svg)$/], // Exclude images from the precache
      runtimeCaching: [ // Define runtime caching rules.
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/, // Match any request that ends with .png, .jpg, .jpeg or .svg.
          handler: 'cacheFirst', // Apply a cache-first strategy.
          options: {
            expiration: { // Only cache 10 images.
              maxEntries: 10,
            },
          },
        },
      ],
    })
  ],
  mode: 'production'
});
