const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
}