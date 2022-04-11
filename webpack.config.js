const path = require('path');

module.exports = {
    mode: 'development', // agregado
    entry: './src/index.js', // archivo principal
    output: {
        filename: 'main.js', // o bundle.js
        path: path.resolve(__dirname, 'dist'), // dist o public
    },
    module: {
        rules: [
          {
            test: /\.m?js$/, // buscar dentro de archivos .js
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      }
};