const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s?)[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jp(|e)g|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff(|2)|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(md)$/,
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(
      [
        {
          from: 'public',
          to: '',
          toType: 'dir',
          ignore: [
            '.DS_Store'
          ]
        }
      ]
    ),
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
    historyApiFallback: true
  }
}
