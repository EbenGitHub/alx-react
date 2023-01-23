const path = require('path');

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },

    //loaders

    //plugins
}