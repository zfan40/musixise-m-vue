!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,a){for(var c,s,u=0,d=[];u<r.length;u++)s=r[u],i[s]&&d.push.apply(d,i[s]),i[s]=0;for(c in a)e[c]=a[c];for(n&&n(r,a);d.length;)d.shift().call(null,t);if(a[0])return o[0]=0,t(0)};var o={},i={1:0};return t.e=function(e,n){if(0===i[e])return n.call(null,t);if(void 0!==i[e])i[e].push(n);else{i[e]=[n];var o=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.async=!0,r.src=t.p+""+e+"."+({0:"_common/post-common",2:"follow-relationship/index",3:"musixiser-detail/index",4:"work-update/index"}[e]||e)+".js",o.appendChild(r)}},t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){!function(){function e(){clearTimeout(n),n=setTimeout(t,300)}function t(){o.rem=i.getBoundingClientRect().width/10,i.style.fontSize=o.rem+"px"}var n,o=window,i=document.documentElement,r="addEventListener";t(),i.setAttribute("data-dpr",o.devicePixelRatio),o[r]("resize",e),o[r]("pageshow",function(t){t.persisted&&e()})}()}]);