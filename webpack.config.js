const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  'plugins': [
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false,
    //     },
    //     output: {
    //         comments: false,
    //     },
    // }),
    new HtmlWebpackPlugin({
      title: 'React-Redux Todo',
      template: './src/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
};
