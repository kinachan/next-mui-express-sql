// webpack.config.js

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./server.js"],
  target: 'node',
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  externals: /^(?!^(src|\.|\.\.)\/)/,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/ ,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }]
              ]
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};


// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, 'server.js'),
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'server.js'
//   },
//   target: 'node',
//   module: {
//     rules: [
//       { test: /\.js$/, loader: require.resolve('babel-loader'), exclude: /node_modules/ },
//       {
//         test: /\.jsx$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           babelrc: false,
//           presets: [
//             '@babel/preset-env',
//             '@babel/preset-react'
//           ],
//           plugins: [
//             ['@babel/plugin-proposal-decorators', {
//               legacy: true
//             }],
//             ['@babel/plugin-proposal-class-properties', {
//               loose: true
//             }]
//           ]
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader?modules']
//       },
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devServer: {
//     contentBase: path.join(__dirname, './'),
//     compress: true,
//     port: 9000
//   }
// }