var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')    
  },

    //Servidor que irá abrir o local onde possui o arquivo de saida 
    devServer: {
        port: 8000,
        contentBase: './public',
    },

  module: {
        rules: [
            {
                test: /\.(js|jsx)$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }],
            },
        ]
    },
}