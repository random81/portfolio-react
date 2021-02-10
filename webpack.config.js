const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const webpackAnalysis = process.env.npm_config_webpackAnalysis;

const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: 'browser',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: 
     ['react-hot-loader/patch', 
     'webpack-hot-middleware/client?reload=true',
      path.join(CURRENT_WORKING_DIR, './src/main.js')],
  
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /fireAnt-.*/],
        use: [
          'react-hot-loader/webpack', 'babel-loader',
        ],
      },
      {
        test: /\.(ttf|eot|woff)(\?[\s\S]+)?$/,
        exclude: [/node_modules/, /fireAnt-.*/],
        use: 'file-loader',
      },
      {
        test: /\.(svg|gif|jpg|png)(\?[\s\S]+)?$/,
        exclude: [/node_modules/, /fireAnt-.*/],
        // use: 'file-loader?name=images/[name].[ext]',
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/,
        exclude: [/node_modules/, /fireAnt-.*/],
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.html$/i,
        exclude: [/node_modules/, /fireAnt-.*/],
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        exclude: [/fireAnt-.*/],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: './main.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './fireAnt**/**', to: './' },
        { from: './web.*/**', to: './' },
      ],
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
if (webpackAnalysis) {
  config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
