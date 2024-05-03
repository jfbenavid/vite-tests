const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const e = require('express');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    port: 3001,
    proxy: [{
      'my-lib': {
        target: 'http://localhost:3005',
        changeOrigin: true,
        pathRewrite: { 'my-lib': '' },
      }
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
};