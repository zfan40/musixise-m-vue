"use strict";
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var getLigoRC = require('../util/getLigoRC');

module.exports = function(config){
    var ligorc = getLigoRC();

    if(ligorc.framework === 'vue'){

        var scssLoaders = [
            "css-loader?-autoprefixer&sourceMap",
            "postcss-loader",
            "sass"
        ];

        config.module.loaders.push({
            test: /\.vue$/,
            loader: 'vue'
        });

        config.vue = {
            loaders: {
                js: 'babel?presets[]=es2015,presets[]=stage-2&plugins[]=transform-remove-strict-mode',
                css: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap"),
                scss: ExtractTextPlugin.extract("style-loader", scssLoaders)
            },
            postcss: [
                autoprefixer({
                    remove: false,
                    browsers: [
                        'ios >= 7',
                        'Android >= 4'
                    ]
                })
            ]
        };
    }
};
