const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlLoader = require('html-loader')

module.exports = {
  entry: './index.ts',
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
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.html' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html'
    })
  ]
}