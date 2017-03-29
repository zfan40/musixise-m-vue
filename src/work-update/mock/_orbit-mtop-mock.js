(function(win, orbit) {
    var mtopMock = {
        apiMap: {}
    };

    // TODO: Implement base path setting.

    var mockApiArray = require('./_mockMap.js');
    for (var i = 0, len = mockApiArray.length; i < len; i++) {
        var fileName = mockApiArray[i];
        mtopMock.apiMap[fileName.substring(0, fileName.lastIndexOf('.js'))] = require('./' + fileName);
    }

    orbit.mtop || (orbit.mtop = {});
    var originRequest = orbit.mtop.request;
    orbit.mtop.request = function(options) {
        return mtopMock.apiMap[options.api] ? mtopMock.apiMap[options.api](options) : originRequest(options);
    };
})(window, window.orbit || (window.orbit = {}));
