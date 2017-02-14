const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.jsx',
  // entry: './src/plot-sample/index-recharts.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react'],
              plugins: ["transform-object-rest-spread"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // externals: {
  //   'react': 'react',
  //   'react-dom' : 'reactDOM'
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true,
        sequences: true,
        booleans: true,
      },
      output: {
        comments: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'HK Weather Summary',
      template: './src/index.ejs'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new BundleAnalyzerPlugin()
  ],
  devtool: 'cheap-module-source-map',
};
