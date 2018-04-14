'use strict';

const Webpack = require('webpack'),
   FileChanger = require('webpack-file-changer'),
   ExtractTextPlugin = require('extract-text-webpack-plugin'),
   NODE_ENV = process.env.NODE_ENV || 'development',
   isDev = NODE_ENV === 'development',
   CleanWebpackPlugin = require('clean-webpack-plugin'),
   Path = require('path'),
   FileSystem = require('fs'),
   critical = require('critical');

const pathsToClean = [
   'dist'
];

const cleanOptions = {
   exclude:  ['manifest.json', 'keybase.txt', 'icons', 'img'],
};

module.exports = {
   mode: isDev ? 'development' : 'production',
   optimization: {
      namedModules: true,
      minimize: true,
      noEmitOnErrors: true,
      concatenateModules: true
   },
   entry: {
      app: ['./src/index.js']
   },
   output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: isDev ? '[name].bundle.js' : '[name].bundle.[hash].js',
      library: '[name]',
      libraryTarget: 'var'
   },
   resolve: {
      extensions: ['.js', '.less']
   },
   watch: isDev,
   devtool: isDev ? 'sheap-inline-module-source-map' : false,
   plugins: [
      new CleanWebpackPlugin(pathsToClean, cleanOptions),
      new ExtractTextPlugin({
         filename: isDev ? 'styles.css' : 'styles.[hash].css',
         allChunks: true
      }),
      new Webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify(NODE_ENV)
         }
      }),
      function() {
         this.plugin('done', statsData => {
            let stats = statsData.toJson(),
               htmlOutput;
            if (!stats.errors.length) {
               let htmlFileName = 'index.html',
                  htmlOutput = FileSystem.readFileSync (
                     Path.join(__dirname, 'src/' + htmlFileName),
                     'utf8'
                  );
               if (!isDev) {
                  const yaMetrics = require('./src/metricsScript.js');
                  htmlOutput = htmlOutput.replace (
                     /<script src=(["'])(.+?)bundle\.js/ig,
                     '<script src=$1$2bundle\.' + stats.hash + '\.js'
                  ).replace (
                     /<link rel="stylesheet" href=(["'])(.+?)\.css/,
                     '<link rel="stylesheet" href="$2.' + stats.hash + '\.css'
                  ).replace (
                     '</body>',
                     yaMetrics + '\n</body>'
                  );
               }
               FileSystem.writeFileSync (
                  Path.join(__dirname, 'dist/', htmlFileName),
                  htmlOutput
               );
               critical.generate({
                  base: 'dist/',
                  src: 'index.html',
                  dest: 'index.html',
                  extract: true,
                  inline: true,
                  minify: true,
                  css: [`dist/styles.${!isDev ? `${stats.hash}.` : ''}css`],
               });
            }
         });
      }
   ],
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      }, {
         test: /\.css|\.less$/,
         use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'less-loader']
         })
      }, {
         test: /\.svg$/,
         use: [{
            loader: 'svg-url-loader'
         }]
      }]
   }
};