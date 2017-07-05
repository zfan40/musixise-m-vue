var MUSIXISE = undefined;
var JSBridge = {
  setupWebViewJavascriptBridge: function(callback) {
      if (window.WebViewJavascriptBridge) { alert('hh');return callback(WebViewJavascriptBridge); }
      if (window.WVJBCallbacks) { alert('rr');return window.WVJBCallbacks.push(callback); }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
  },
  callHandler:function(evt,data,callback) {
    if (!MUSIXISE) {
        this.setupWebViewJavascriptBridge(function(bridge) {
            MUSIXISE = bridge;
            bridge.callHandler(evt, data, callback)
        })
    } else {
        MUSIXISE.callHandler(evt, data, callback)
    }
  }
}

console.log('JSBridge Activated');
module.exports = JSBridge;
