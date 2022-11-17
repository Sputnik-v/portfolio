const path = require('path');
const NODE_ENV = process.env.NODE_ENV;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  target: "node",
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: "server.js"
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimize: false
  }
};