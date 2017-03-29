"use strict";

var path = require('path');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = function() {
    return {
        entry: {},
        output: {
            path: path.join(__dirname, '../../build'),
            filename: '[name].js',
            publicPath: '/',
            sourceMapFilename: '[file].map'
        },
        module: {
            loaders: []
        },
        plugins: [
            new ProgressBarPlugin()
        ]
    };
};
