// @flow
import webpack from 'webpack'
import path from 'path'
import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
  context: path.resolve(__dirname, 'src/client'),
  entry: './index',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }],
  },
  devtool: isProd ? false : 'source-map',
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
