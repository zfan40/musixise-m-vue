"use strict";

var argv = require('./util/argv')();
var config = require('./webpack/base')();
var util = require('./util/util');

var isBuild = /build/.test(argv._.join(' '));
argv.release = argv.r = isBuild;

// 引入对config做全局修改的配置文件
util.applyConfigs(config, argv, [
    'vue',
    'babel',
    'alias',
    'externals',
    'split',
    'image',
    'style',
    'template',
    'debug',
    'uglify'
]);

// 引入针对每个页面做修改的配置文件
util.applyPageConfigs(config, argv, [
    'page_entry',
    'page_html',
    'page_assets'
]);

module.exports = config;
