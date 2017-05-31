if(process.env.DEBUG){
    require('./index.html')({
        htmlWebpackPlugin: {
            options: {
                buildOptions: {
                    debug: process.env.DEBUG,
                    resourceBase: process.env.RESOURCE_BASE,
                    local: process.env.LOCAL
                }
            }
        }
    });
}
require('./index.scss');

/**
 * 使用orbit mtop mock
 */
if(process.env.MOCK){
    require('./mock/_orbit-mtop-mock.js');
}

import App from './js/app.vue';
import Vue from 'vue';

new Vue({
    el: '#app',
    render: function(createComponent) {
        return createComponent(App);
    }
});