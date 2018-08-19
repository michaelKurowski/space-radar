const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlLoader = require('html-loader')
const CssWebpackPlugin = require('css-loader')
const SassWebpackPlugin = require('sass-loader')
const StyleWebpackPlugin = require('style-loader')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['./main.scss', './index.ts'],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader?exportAsEs6Default"
      },
      { test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        }) 
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.html', '.scss' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
}