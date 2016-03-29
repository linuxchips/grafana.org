/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function i(e){return t(s.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(a," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var i=s.raw?t:r(t);return e.isFunction(n)?n(i):i}var a=/\+/g,s=e.cookie=function(r,a,l){if(void 0!==a&&!e.isFunction(a)){if(l=e.extend({},s.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setDate(c.getDate()+u)}return document.cookie=[t(r),"=",i(a),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,h=f.length;h>p;p++){var m=f[p].split("="),g=n(m.shift()),v=m.join("=");if(r&&r===g){d=o(v,a);break}r||void 0===(v=o(v))||(d[g]=v)}return d};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}});