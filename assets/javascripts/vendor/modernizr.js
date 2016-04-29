/*!
 * Modernizr v2.7.2
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(k.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?s(o,t):(o=(e+" "+A.join(r+" ")+r).split(" "),c(o,t,n))}function l(){h.input=function(n){for(var r=0,o=n.length;o>r;r++)T[n[r]]=!!(n[r]in x);return T.list&&(T.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),T}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,o,i,a=0,s=e.length;s>a;a++)x.setAttribute("type",o=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&x.style.WebkitAppearance!==n?(g.appendChild(x),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),M[e[a]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.7.2",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",_={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",C=E.split(" "),A=E.toLowerCase().split(" "),S={svg:"http://www.w3.org/2000/svg"},j={},M={},T={},q=[],z=q.slice,O=function(e,n,r,o){var i,a,s,c,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:v+(r+1),u.appendChild(s);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:f).innerHTML+=i,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),g.style.overflow=c),!!a},R=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return O("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},P=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),N={}.hasOwnProperty;d=i(N,"undefined")||i(N.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=z.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(z.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(z.call(arguments)))};return r}),j.flexbox=function(){return u("flexWrap")},j.flexboxlegacy=function(){return u("boxDirection")},j.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},j.canvastext=function(){return!(!h.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},j.webgl=function(){return!!e.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",k.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!e.postMessage},j.websqldatabase=function(){return!!e.openDatabase},j.indexedDB=function(){return!!u("indexedDB",e)},j.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},j.history=function(){return!(!e.history||!history.pushState)},j.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},j.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},j.backgroundsize=function(){return u("backgroundSize")},j.borderimage=function(){return u("borderImage")},j.borderradius=function(){return u("borderRadius")},j.boxshadow=function(){return u("boxShadow")},j.textshadow=function(){return""===t.createElement("div").style.textShadow},j.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},j.cssanimations=function(){return u("animationName")},j.csscolumns=function(){return u("columnCount")},j.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},j.cssreflections=function(){return u("boxReflect")},j.csstransforms=function(){return!!u("transform")},j.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},j.csstransitions=function(){return u("transition")},j.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},j.generatedcontent=function(){var e;return O(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},j.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},j.webworkers=function(){return!!e.Worker},j.applicationcache=function(){return!!e.applicationCache},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS(S.svg,"svg").createSVGRect},j.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==S.svg},j.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(_.call(t.createElementNS(S.svg,"animate")))},j.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(_.call(t.createElementNS(S.svg,"clipPath")))};for(var I in j)d(j,I)&&(f=I.toLowerCase(),h[f]=j[I](),q.push((h[f]?"":"no-")+f));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)i.createElement(s[a]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,r),e}var u,l,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:l,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=y,c(t)}(this,t),h._version=p,h._prefixes=k,h._domPrefixes=A,h._cssomPrefixes=C,h.mq=R,h.hasEvent=P,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=O,h.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+q.join(" "):""),h}(this,this.document);