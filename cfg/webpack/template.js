"use strict";

module.exports = function(config, argv){
    config.module.loaders.push({
        test: /\.ejs$/,
        loader: "@ali/alimusic-orbit-ejs-loader?variable=data"
    }, {
        test: /\.html$/,
        loader: "underscore-loader"
    });

    config.orbitEjsTemplateLoader = {
        minify: true,
        // engineFull: 'var _ = { escape: require(\'lodash/escape\') };',
        minifierOptions: {
            collapseInlineTagWhitespace: true,
            conservativeCollapse: false,
            ignoreCustomFragments: [/<%[\s\S]*?%>/]
        }
    };
    config.underscoreTemplateLoader = {
        minify: false,
        engineFull: 'var _ = { escape: require(\'lodash/escape\') };',
        minifierOptions: {
            conservativeCollapse: false,
            ignoreCustomFragments: [/<%.*%>/]
        }
    };
};
