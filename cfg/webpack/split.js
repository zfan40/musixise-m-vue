"use strict";

var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
// var getLigoRC = require('../util/getLigoRC');

module.exports = function(config, argv){
    var preCommon = [
        "./src/_common/js/rem.js"
    ];

    var postCommon = argv.local ? [
        "es6-promise",
        "@ali/lib-windvane",
        "@ali/alimusic-orbit-mtop",
        "@ali/alimusic-orbit-maidian"
    ] : [];

    var aplus = [
        "./cfg/script/aplus.js"
    ];

    var aplusSufei = [
        "./cfg/script/aplus-sufei.js"
    ];

    // var ligorc = getLigoRC();
    // var ligoPreCommon = ligorc && ligorc.preCommon;
    // var ligoPostCommon = ligorc && ligorc.postCommon;

    // if(ligoPreCommon instanceof Array){
    //     preCommon = preCommon.concat(ligoPreCommon);
    // }
    // if(ligoPostCommon instanceof Array){
    //     postCommon = postCommon.concat(ligoPostCommon);
    // }

    var bundles = {};
    bundles["_common/pre-common"] = preCommon;
    bundles["_common/post-common"] = postCommon;

    if(argv.local && !argv.release){
        bundles["_common/aplus"] = aplus;
        bundles["_common/aplus-sufei"] = aplusSufei;
    }

    var bundleNames = Object.keys(bundles);

    bundleNames.map(function(bundleName){
        config.entry[bundleName] = bundles[bundleName];
    });

    config.plugins.push(
        new CommonsChunkPlugin({
            names: bundleNames.reverse(),
            minChunks: Infinity
        })
    );
};
