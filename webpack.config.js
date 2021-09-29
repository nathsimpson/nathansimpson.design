const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: './public/bundle.js'
  },
  devServer: {
    contentBase: './public',
    port: process.env.PORT || 3000
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-2'] }
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        },
        include: path.resolve(__dirname, '../')
      }
    ]
  }
};
