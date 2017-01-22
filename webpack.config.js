const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';

let plugins = [
  new HtmlWebpackPlugin({
    template: './pages/index.html',
  }),
  new CopyWebpackPlugin([
    {
      from: './assets',
      to: './assets',
    },
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env),
    },
  }),
];

if (env === 'development') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins,
}
