module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
