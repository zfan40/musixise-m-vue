"use strict";

var pages = require('./pages');
var relativePath = '../webpack/';

module.exports = {
    applyConfigs: function(config, argv, handlerNames){

        handlerNames.forEach(function(handlerName){
            if(handlerName){
                require(relativePath + handlerName)(config, argv);
            }
        });

    },
    applyPageConfigs: function(config, argv, handlerNames){

        var selectedPages = pages.get(!argv.all && argv.target);

        handlerNames.forEach(function(handlerName){
            if(handlerName){
                var handler = require(relativePath + handlerName);

                selectedPages.forEach(function(pageName){
                    handler(config, argv, pageName);
                });
            }
        });

    }
};
