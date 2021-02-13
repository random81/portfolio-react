const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

const webpackAnalysis = process.env.npm_config_webpackAnalysis;

const CURRENT_WORKING_DIR = process.cwd();

const config = {
  mode: 'production',
  entry: [
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    path.join(CURRENT_WORKING_DIR, './src/main.js'),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: '/portfolio-react/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
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
        loader: 'url-loader',
        options: {
          // >10 KB won’t be inlined
          limit: 10 * 1024,
        },
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
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before loaders
        // and not duplicate them
        enforce: 'pre',
      },
      {
        test: /\.css$/,
        exclude: [/fireAnt-.*/],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './main.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './fireAnt**/**', to: './' },
        { from: './index.html', to: './index.html' },
        { from: './webpaintings/**', to: './' },
        { from: './webwitchcraft/**', to: './' },
      ],
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
};
if (webpackAnalysis) {
  config.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = config;
