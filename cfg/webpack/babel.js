"use strict";

var path = require('path');
var fs = require('fs');
var getLigoRC = require('../util/getLigoRC');
var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json')));

module.exports = function(config) {
    var ligorc = getLigoRC();

    if(ligorc.es6){
        var presets = ['es2015'];
        var plugins = ['transform-remove-strict-mode'];

        if(/react/.test(ligorc.framework)){
            presets.push('react');
        }

        var env = {};
        if(pkg.devDependencies['babel-plugin-istanbul']){
            env.test = {
                plugins: [
                    ['istanbul', {
                        exclude: [
                            "src/**/test/**/*.js",
                            "cfg/**/*.js"
                        ]
                    }]
                ]
            };
        }

        config.module.loaders.push({
            test: /\.jsx?$/,
            // exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: presets,
                plugins: plugins,
                env: env
            }
        });
    }
};
