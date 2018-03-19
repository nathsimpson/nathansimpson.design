var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath:'/public/'
  },
  devServer: {
    contentBase: "./src"
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        include : path.resolve(__dirname, 'src'),
        loader : 'babel-loader',
        query: {
          "presets" : ["es2015", "react"]
        }
      },{
        test: /\.md$/,
        use: 'raw-loader'
      },{
        test: /\.scss$/,
        use: [
          // creates style nodes from JS strings
          {loader: "style-loader"},
          // translates CSS into CommonJS
          {loader: "css-loader"},
          // compiles Sass to CSS
          {loader: "sass-loader"}
        ]
      },{
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
};
