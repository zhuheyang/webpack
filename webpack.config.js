const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //If the module is the last, you can skip the comma in the end,
  //But you should notice: when you add a new module, first thing you 
  //should do is to add the missing comma, or else you will be crazy for that!
  //Funny Bug!
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
       }
     ]
   }
};
