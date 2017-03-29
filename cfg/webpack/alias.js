"use strict";
var path = require('path');
var getLigoRC = require('../util/getLigoRC');

module.exports = function(config, argv){
    var alias = {
        root: path.resolve(__dirname, '../..'),
        src: path.resolve(__dirname, '../../src'),
        common: path.resolve(__dirname, '../../src/_common'),
        node_modules: path.resolve(__dirname, '../../node_modules')
    };

    var ligorc = getLigoRC();

    if(ligorc.framework === 'react-lite'){
        alias.react = 'react-lite';
        alias['react-dom'] = 'react-lite';
    }

    config.resolve = {
        alias: alias
    };
};
