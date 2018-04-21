const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    "presets": [
      ["env", {
        "modules": false,
        "useBuiltIns": "entry",
        "targets": {
          "browsers": ["ie >= 9", "chrome >= 30", "firefox >= 30"]
        }
      }]
    ],
    "plugins": [
      "transform-runtime"
    ]
  }
}

const tsLoader = {
  loader: 'ts-loader'
}

module.exports = {
  entry: {
    'multi-apps-in-spa': resolve('./src/app.multi-apps-in-spa/index.ts'),
    'service-example': resolve('./src/app.service-example/app.ts'),
    'tour-of-hero': resolve('./src/app.tour-of-hero/index.ts'),
    'welcome': resolve('./src/app.welcome/index.ts')
  },

  output: {
    path: '/',
    filename: '[name].js'
  },

  devtool: 'eval-source-map',

  devServer: {
    host: '0.0.0.0',
    compress: true,
    port: 8080,
    contentBase: resolve('./src/static'),
    quiet: true
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: [
              babelLoader,
              tsLoader
            ]
          }
        }
      },
      {
        test: /\.js$/,
        use: [
          babelLoader
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          babelLoader,
          tsLoader
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'welcome.html',
      template: resolve('./src/app.welcome/index.html'),
      chunks: ['welcome']
    }),

    new HtmlWebpackPlugin({
      filename: 'service-example.html',
      template: resolve('./src/app.service-example/app.html'),
      chunks: ['service-example']
    }),

    new HtmlWebpackPlugin({
      filename: 'tour-of-hero.html',
      template: resolve('./src/app.tour-of-hero/index.html'),
      chunks: ['tour-of-hero']
    }),

    new HtmlWebpackPlugin({
      filename: 'multi-apps-in-spa.html',
      template: resolve('./src/app.multi-apps-in-spa/index.html'),
      chunks: ['multi-apps-in-spa']
    }),

    new FriendlyErrorPlugin()
  ]
}

function resolve (filePath) {
  return path.resolve(__dirname, '../', filePath)
}
