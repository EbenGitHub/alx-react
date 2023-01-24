const path = require('path');

module.exports = {
    mode: 'production', //development
    entry: {
        main: path.resolve(__dirname, 'js/dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        assetModuleFilename: '[name][ext]',
    },
    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
        ]
    },
    //Perfomance
    performance: {
		maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
	},
};