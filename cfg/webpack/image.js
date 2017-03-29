"use strict";

module.exports = function(config){
    config.module.loaders.push({
        test: /\.(jpg|png|gif|svg)$/,
        loaders: [
            "url?limit=10240&name=[name]-[hash].[ext]",
            "image-webpack"
        ]
    });

    // 配置选项参见：https://github.com/tcoopman/image-webpack-loader
    config.imageWebpackLoader = {
        svgo: {
            plugins: [
                {removeTitle: true},
                {removeDesc: true}
            ]
        }
    };
};
