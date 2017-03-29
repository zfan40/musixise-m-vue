"use strict";
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, argv){
    var scssLoaders = [
        "css-loader?-autoprefixer&sourceMap",
        "postcss-loader",
        "sass"
    ];

    config.module.loaders.push({
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
    }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", scssLoaders)
    });

    // 独立CSS文件
    config.plugins.push(new ExtractTextPlugin('[name].css', {
        disable: false,
        allChunks: true
    }));

    config.postcss = function() {
        return [
            autoprefixer({
                remove: false,
                browsers: [
                    'ios >= 7',
                    'Android >= 4'
                ]
            })
        ];
    };
};
