var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './lib/src/',
    output: {
        path: __dirname,
        publicPath: '/public/',
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
              test:/\.css$/,
              loader:'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
        ]
    },
    //devtool: 'cheap-module-source-map',
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './lib'
    },
    plugins: [
      /*
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),*/
    new ExtractTextPlugin("styles.css"),
    /*
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      minimize: false,
      sourceMap: true
    })]*/
  ]
};
