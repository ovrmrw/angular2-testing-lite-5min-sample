const webpack = require("webpack");

module.exports = [
  {
    entry: ['./app/boot.ts'],
    output: {
      filename: './bundles/webpack.bundle.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin() // minify enabled
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: 'babel-loader!ts-loader' // first ts-loader(with tsconfig.json), second babel-loader        
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },
    devtool: 'source-map', // output source map
  },
  {
    entry: ['./test/index.spec.ts'],
    output: {
      filename: './bundles/webpack.bundle.spec.espowered.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin() // minify enabled
    ],
    module: {
      loaders: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: 'babel-loader?presets[]=es2015&plugins[]=babel-plugin-espower!ts-loader', // babel-loaderがbabel-plugin-espowerを読み込む必要がある。
        },
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    },
    devtool: 'inline-source-map',
  }
]