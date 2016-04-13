module.exports = {
  entry: {
    main: ['./frontend/javascripts/src/index.js']
  },
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        key: 'jsx',
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.js.jsx']
  }
};
