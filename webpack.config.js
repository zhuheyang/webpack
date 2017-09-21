const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    // './src/index.js',
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),   
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  //use the devtool in development environment only, 
  //do not use them in a production environment!
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //If the module is the last, you can skip the comma in the end,
  //But you should notice: when you add a new module, first thing you 
  //should do is to add the missing comma, or else you will be crazy for that!
  //Funny Bug!
};
