window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function o(e,t){return typeof e===t}var i,a,s,c="2.6.2",u={},l=!0,f=t.documentElement,d="modernizr",p=t.createElement(d),h=p.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},b=[],x=b.slice,w=function(e,n,r,o){var i,a,s,c,u=t.createElement("div"),l=t.body,p=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:d+(r+1),u.appendChild(s);return i=["&#173;",'<style id="s',d,'">',e,"</style>"].join(""),u.id=d,(l?u:p).innerHTML+=i,p.appendChild(u),l||(p.style.background="",p.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(p)),a=n(u,e),l?u.parentNode.removeChild(u):(p.parentNode.removeChild(p),f.style.overflow=c),!!a},_=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return w("@media "+t+" { #"+d+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},k={}.hasOwnProperty;s=o(k,"undefined")||o(k.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return k.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r}),y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",g.join("touch-enabled),("),d,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(m.call(t.createElementNS(v.svg,"clipPath")))};for(var E in y)s(y,E)&&(a=E.toLowerCase(),u[a]=y[E](),b.push((u[a]?"":"no-")+a));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)s(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof l&&l&&(f.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),p=i=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[h]];return t||(t={},m++,e[h]=m,g[m]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)i.createElement(s[a]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=o(e);return v.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||s(e,r),e}var u,l,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=v,c(t)}(this,t),u._version=c,u._prefixes=g,u.mq=_,u.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+b.join(" "):""),u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,r,o,i,c,u){function l(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in C[n])C[n].hasOwnProperty(r)&&C[n][r].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:c,x:u};1===C[n]&&(g=1,C[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===C[n]?(w.insertBefore(f,x?null:m),h(l,u)):C[n].push(f))}function u(e,t,n,r,i){return y=0,t=t||"j",o(e)?c("c"==t?k:_,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&s()),this}function l(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:m.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,_=b?"object":p?"script":"img",k=p?"script":_,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},A=[],C={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=A.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=S[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=A[n](i);return i}function a(e,o,i,a,s){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,s):(C[c.url]?c.noexec=!0:C[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(u))&&i.load(function(){l(),o&&o(c.origUrl,s,a),u&&u(c.origUrl,s,a),C[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,u);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[c])),a(e[c],f,t,c,u))}else!n&&p()}var s,c,u=!!e.test,l=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(u?e.yep:e.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(E(e))for(c=0;c<e.length;c++)u=e[c],o(u)?a(u,0,f,0):E(u)?d(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},d.addPrefix=function(e,t){S[e]=t},d.addFilter=function(e){A.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,o,c,u){var l,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?s:n||i,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},o),c?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,o,a,c){var u,o=t.createElement("link"),n=c?s:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(u in r)o.setAttribute(u,r[u]);a||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});