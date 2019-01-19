const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Path = require('path');

const pathsToClean = ['dist'];

const cleanOptions = {
  exclude:  ['manifest.json', 'keybase.txt', 'icons', 'img'],
};

module.exports = {
  mode: isDev ? 'development' : 'production',
  optimization: {
    namedModules: true,
    minimize: false,
    noEmitOnErrors: true,
    concatenateModules: true
  },
  entry: {
    app: ['./src/index.js']
  },
  target: isDev ? 'node' : 'web',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  watch: isDev,
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css|\.less$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'svg-url-loader'
      }]
    }]
  }
};
