const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //production
    entry: {
      header: {
        import: './modules/header/header.js',
        dependOn: 'shared',
      },
      body: {
        import: './modules/body/body.js',
        dependOn: 'shared',
      },
      footer: {
        import: './modules/footer/footer.js',
        dependOn: 'shared',
      },
      shared: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        assetModuleFilename: '[name].bundle.js',
    },

    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, 
              type: 'asset/resource',
              use: [
                'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
              ],
            },
          ]
    },

  //Perfomance
  performance: {
  maxAssetSize: 1000000,
  maxEntrypointSize: 1000000,
	},
  optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},

  //devTools
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8564, //default 8080
    open: true,
    hot: true,
  },

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};