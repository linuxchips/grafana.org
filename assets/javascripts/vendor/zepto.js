!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,r=Object(this),i=r.length>>>0,o=0;if("function"!=typeof e)throw new TypeError;if(0==i&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(o in r){n=r[o++];break}if(++o>=i)throw new TypeError}for(;i>o;)o in r&&(n=e.call(t,n,r[o],o,r)),o++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):Z[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&t.__proto__==Object.prototype}function u(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function c(t){return j.call(t,function(t){return null!=t})}function l(t){return t.length>0?E.fn.concat.apply([],t):t}function s(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function f(t){return t in R?R[t]:R[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function d(t,e){return"number"!=typeof e||B[s(t)]?e:e+"px"}function p(t){var e,n;return O[t]||(e=z.createElement(t),z.body.appendChild(e),n=N(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]}function h(t){return"children"in t?S.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function v(t,e,n){for(x in e)n&&(o(e[x])||u(e[x]))?(o(e[x])&&!o(t[x])&&(t[x]={}),u(e[x])&&!u(t[x])&&(t[x]=[]),v(t[x],e[x],n)):e[x]!==A&&(t[x]=e[x])}function g(t,e){return e===A?E(t):E(t).filter(e)}function m(t,n,r,i){return e(n)?n.call(t,r,i):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function _(t,e){var n=t.className,r=n&&n.baseVal!==A;return e===A?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function b(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function w(t,e){e(t);for(var n in t.childNodes)w(t.childNodes[n],e)}var A,x,E,T,C,M,k=[],S=k.slice,j=k.filter,z=window.document,O={},R={},N=z.defaultView.getComputedStyle,B={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,P=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,D=/^(?:body|html)$/i,F=["val","css","html","text","data","width","height","offset"],U=["after","prepend","before","append"],L=z.createElement("table"),Q=z.createElement("tr"),W={tr:z.createElement("tbody"),tbody:L,thead:L,tfoot:L,td:Q,th:Q,"*":z.createElement("div")},q=/complete|loaded|interactive/,$=/^\.([\w-]+)$/,H=/^#([\w-]*)$/,V=/^[\w-]+$/,Z={},J=Z.toString,Y={},K=z.createElement("div");return Y.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=K).appendChild(t),r=~Y.qsa(i,e).indexOf(t),o&&K.removeChild(t),r},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},M=function(t){return j.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){t.replace&&(t=t.replace(P,"<$1></$2>")),e===A&&(e=I.test(t)&&RegExp.$1),e in W||(e="*");var r,i,u=W[e];return u.innerHTML=""+t,i=E.each(S.call(u.childNodes),function(){u.removeChild(this)}),o(n)&&(r=E(i),E.each(n,function(t,e){F.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){if(t){if(e(t))return E(z).ready(t);if(Y.isZ(t))return t;var r;if(u(t))r=c(t);else if(i(t))r=[o(t)?E.extend({},t):t],t=null;else if(I.test(t))r=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==A)return E(n).find(t);r=Y.qsa(z,t)}return Y.Z(r,t)}return Y.Z()},E=function(t,e){return Y.init(t,e)},E.extend=function(t){var e,n=S.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},Y.qsa=function(t,e){var n;return r(t)&&H.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call($.test(e)?t.getElementsByClassName(RegExp.$1):V.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=function(t,e){return t!==e&&t.contains(e)},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=u,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return k.indexOf.call(e,t,n)},E.camelCase=C,E.trim=function(t){return t.trim()},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return l(o)},E.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},E.grep=function(t,e){return j.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:k.forEach,reduce:k.reduce,push:k.push,sort:k.sort,indexOf:k.indexOf,concat:k.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(S.apply(this,arguments))},ready:function(t){return q.test(z.readyState)?t(E):z.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===A?S.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return k.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(j.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return E(M(this.concat(E(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==A)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?S.call(t):E(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return i(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:E(t)},find:function(t){var e,n=this;return e="object"==typeof t?E(t).filter(function(){var t=this;return k.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=E(t));n&&!(i?i.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return g(e,t)},parent:function(t){return g(M(this.pluck("parentNode")),t)},children:function(t){return g(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return g(this.map(function(t,e){return j.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==N(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=E(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=E(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===A?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===A?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;E(this).empty().append(m(this,t,e,n))})},text:function(t){return t===A?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===A?0==this.length||1!==this[0].nodeType?A:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(i(t))for(x in t)y(this,x,t[x]);else y(this,t,m(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===A?this[0]&&this[0][t]:this.each(function(n){this[t]=m(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+s(t),e);return null!==n?b(n):A},val:function(t){return t===A?this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(t){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=m(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=E(this),r=m(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[C(e)]||N(this[0],"").getPropertyValue(e));var r="";if("string"==t(e))n||0===n?r=s(e)+":"+d(e,n):this.each(function(){this.style.removeProperty(s(e))});else for(x in e)e[x]||0===e[x]?r+=s(x)+":"+d(x,e[x])+";":this.each(function(){this.style.removeProperty(s(x))});return this.each(function(){this.style.cssText+=";"+r})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return k.some.call(this,function(t){return this.test(_(t))},f(t))},addClass:function(t){return this.each(function(e){T=[];var n=_(this),r=m(this,t,e,n);r.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||T.push(t)},this),T.length&&_(this,n+(n?" ":"")+T.join(" "))})},removeClass:function(t){return this.each(function(e){return t===A?_(this,""):(T=_(this),m(this,t,e,T).split(/\s+/g).forEach(function(t){T=T.replace(f(t)," ")}),void _(this,T.trim()))})},toggleClass:function(t,e){return this.each(function(n){var r=E(this),i=m(this,t,n,_(this));i.split(/\s+/g).forEach(function(t){(e===A?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=D.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,r.top+=parseFloat(E(e[0]).css("border-top-width"))||0,r.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||z.body;t&&!D.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){E.fn[t]=function(e){var i,o=this[0],u=t.replace(/./,function(t){return t[0].toUpperCase()});return e===A?n(o)?o["inner"+u]:r(o)?o.documentElement["offset"+u]:(i=this.offset())&&i[t]:this.each(function(n){o=E(this),o.css(t,m(this,e,n,o[t]()))})}}),U.forEach(function(e,n){var r=n%2;E.fn[e]=function(){var e,i,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),u=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,o.forEach(function(t){if(u)t=t.cloneNode(!0);else if(!i)return E(t).remove();w(i.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),Y.Z.prototype=E.fn,Y.uniq=M,Y.deserializeValue=b,E.zepto=Y,E}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},r=t.match(/WebKit\/([\d.]+)/),i=t.match(/(Android)\s+([\d.]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),u=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),c=a&&t.match(/TouchPad/),l=t.match(/Kindle\/([\d.]+)/),s=t.match(/Silk\/([\d._]+)/),f=t.match(/(BlackBerry).*Version\/([\d.]+)/),d=t.match(/(BB10).*Version\/([\d.]+)/),p=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),h=t.match(/PlayBook/),v=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),g=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!r)&&(n.version=r[1]),i&&(e.android=!0,e.version=i[2]),u&&(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,".")),o&&(e.ios=e.ipad=!0,e.version=o[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),c&&(e.touchpad=!0),f&&(e.blackberry=!0,e.version=f[2]),d&&(e.bb10=!0,e.version=d[2]),p&&(e.rimtabletos=!0,e.version=p[2]),h&&(n.playbook=!0),l&&(e.kindle=!0,e.version=l[1]),s&&(n.silk=!0,n.version=s[1]),!s&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),v&&(n.chrome=!0,n.version=v[1]),g&&(n.firefox=!0,n.version=g[1]),e.tablet=!!(o||h||i&&!t.match(/Mobile/)||g&&t.match(/Tablet/)),e.phone=!(e.tablet||!(i||u||a||f||d||v&&t.match(/Android/)||v&&t.match(/CriOS\/([\d.]+)/)||g&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,u){if(n=r(n),n.ns)var a=i(n.ns);return(d[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||a.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!u||t.sel==u)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(e,n,r){"string"!=t.type(e)?t.each(e,r):e.split(/\s/).forEach(function(t){r(t,n)})}function u(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return v[t]||t}function c(n,i,c,l,s,f){var p=e(n),h=d[p]||(d[p]=[]);o(i,c,function(e,i){var o=r(e);o.fn=i,o.sel=l,o.e in v&&(i=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?o.fn.apply(this,arguments):void 0}),o.del=s&&s(i,e);var c=o.del||i;o.proxy=function(t){var e=c.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},o.i=h.length,h.push(o),n.addEventListener(a(o.e),o.proxy,u(o,f))})}function l(t,r,i,c,l){var s=e(t);o(r||"",i,function(e,r){n(t,e,r,c).forEach(function(e){delete d[s][e.i],t.removeEventListener(a(e.e),e.proxy,u(e,l))})})}function s(e){var n,r={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(r[n]=e[n]);return t.each(_,function(t,n){r[t]=function(){return this[n]=g,e[t].apply(e,arguments)},r[n]=m}),r}function f(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var d=(t.zepto.qsa,{}),p=1,h={},v={mouseenter:"mouseover",mouseleave:"mouseout"};h.click=h.mousedown=h.mouseup=h.mousemove="MouseEvents",t.event={add:c,remove:l},t.proxy=function(n,r){if(t.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=e(n),i}if("string"==typeof r)return t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,r){c(this,t,e,null,function(t,e){return function(){var n=t.apply(r,arguments);return l(r,e,t),n}})})};var g=function(){return!0},m=function(){return!1},y=/^([A-Z]|layer[XY]$)/,_={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,r){return this.each(function(i,o){c(o,n,r,e,function(n){return function(r){var i,u=t(r.target).closest(e,o).get(0);return u?(i=t.extend(s(r),{currentTarget:u,liveFired:o}),n.apply(u,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){l(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r){return!n||t.isFunction(n)?this.bind(e,n||r):this.delegate(n,e,r)},t.fn.off=function(e,n,r){return!n||t.isFunction(n)?this.unbind(e,n||r):this.undelegate(n,e,r)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),f(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(u,a){i=s("string"==typeof e?t.Event(e):e),i.data=r,i.target=a,t.each(n(a,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(h[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.defaultPrevented}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function u(t,e,r){var i=r.context,o="success";r.success.call(i,t,o,e),n(r,i,"ajaxSuccess",[e,r,t]),c(o,e,r)}function a(t,e,r,i){var o=i.context;i.error.call(o,r,e,t),n(i,o,"ajaxError",[r,i,t]),c(e,r,i)}function c(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function l(){}function s(t){return t&&(t=t.split(";",2)[0]),t&&(t==x?"html":t==A?"json":b.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data))}function p(e,n,r,i){var o=!t.isFunction(n);return{url:e,data:o?n:void 0,success:o?t.isFunction(r)?r:void 0:n,dataType:o?i||r:r}}function h(e,n,r,i){var o,u=t.isArray(n);t.each(n,function(n,a){o=t.type(a),i&&(n=r?i:i+"["+(u?"":n)+"]"),!i&&u?e.add(a.name,a.value):"array"==o||!r&&"object"==o?h(e,a,r,n):e.add(n,a)})}var v,g,m=0,y=window.document,_=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,b=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,A="application/json",x="text/html",E=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,r="jsonp"+ ++m,i=y.createElement("script"),c=function(){clearTimeout(n),t(i).remove(),delete window[r]},s=function(t){c(),t&&"timeout"!=t||(window[r]=l),a(null,t||"abort",f,e)},f={abort:s};return o(f,e)===!1?(s("abort"),!1):(window[r]=function(t){c(),u(t,f,e)},i.onerror=function(){s("error")},i.src=e.url.replace(/=\?/,"="+r),t("head").append(i),e.timeout>0&&(n=setTimeout(function(){s("timeout")},e.timeout)),f)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:A,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(v in t.ajaxSettings)void 0===n[v]&&(n[v]=t.ajaxSettings[v]);r(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),d(n),n.cache===!1&&(n.url=f(n.url,"_="+Date.now()));var i=n.dataType,c=/=\?/.test(n.url);if("jsonp"==i||c)return c||(n.url=f(n.url,"callback=?")),t.ajaxJSONP(n);var p,h=n.accepts[i],m={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,_=n.xhr();n.crossDomain||(m["X-Requested-With"]="XMLHttpRequest"),h&&(m.Accept=h,h.indexOf(",")>-1&&(h=h.split(",",2)[0]),_.overrideMimeType&&_.overrideMimeType(h)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(m["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(m,n.headers||{}),_.onreadystatechange=function(){if(4==_.readyState){_.onreadystatechange=l,clearTimeout(p);var e,r=!1;if(_.status>=200&&_.status<300||304==_.status||0==_.status&&"file:"==y){i=i||s(_.getResponseHeader("content-type")),e=_.responseText;try{"script"==i?(1,eval)(e):"xml"==i?e=_.responseXML:"json"==i&&(e=E.test(e)?null:t.parseJSON(e))}catch(o){r=o}r?a(r,"parsererror",_,n):u(e,_,n)}else a(null,_.status?"error":"abort",_,n)}};var b="async"in n?n.async:!0;_.open(n.type,n.url,b);for(g in n.headers)_.setRequestHeader(g,n.headers[g]);return o(_,n)===!1?(_.abort(),!1):(n.timeout>0&&(p=setTimeout(function(){_.onreadystatechange=l,_.abort(),a(null,"timeout",_,n)},n.timeout)),_.send(n.data?n.data:null),_)},t.get=function(e,n,r,i){return t.ajax(p.apply(null,arguments))},t.post=function(e,n,r,i){var o=p.apply(null,arguments);return o.type="POST",t.ajax(o)},t.getJSON=function(e,n,r){var i=p.apply(null,arguments);return i.dataType="json",t.ajax(i)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,u=e.split(/\s/),a=p(e,n,r),c=a.success;return u.length>1&&(a.url=u[0],i=u[1]),a.success=function(e){o.html(i?t("<div>").html(e.replace(_,"")).find(i):e),c&&c.apply(o,arguments)},t.ajax(a),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},h(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var r=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&("radio"!=r&&"checkbox"!=r||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return r(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function r(t){return t.toLowerCase()}function i(t){return o?o+t:r(t)}var o,u,a,c,l,s,f,d,p="",h={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},v=window.document,g=v.createElement("div"),m=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(h,function(t,n){return g.style[t+"TransitionProperty"]!==e?(p="-"+r(t)+"-",o=n,!1):void 0}),u=p+"transform",y[a=p+"transition-property"]=y[c=p+"transition-duration"]=y[l=p+"transition-timing-function"]=y[s=p+"animation-name"]=y[f=p+"animation-duration"]=y[d=p+"animation-timing-function"]="",t.fx={off:o===e&&g.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:i("TransitionEnd"),animationEnd:i("AnimationEnd")},t.fn.animate=function(e,n,r,i){return t.isPlainObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,r,i)},t.fn.anim=function(r,i,o,p){var h,v,g,_={},b="",w=this,A=t.fx.transitionEnd;if(i===e&&(i=.4),t.fx.off&&(i=0),"string"==typeof r)_[s]=r,_[f]=i+"s",_[d]=o||"linear",A=t.fx.animationEnd;else{v=[];for(h in r)m.test(h)?b+=h+"("+r[h]+") ":(_[h]=r[h],v.push(n(h)));b&&(_[u]=b,v.push(u)),i>0&&"object"==typeof r&&(_[a]=v.join(", "),_[c]=i+"s",_[l]=o||"linear")}return g=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(A,g)}t(this).css(y),p&&p.call(this)},i>0&&this.bind(A,g),this.size()&&this.get(0).clientLeft,this.css(_),0>=i&&setTimeout(function(){w.each(function(){g.call(this)})},0),this},g=null}(Zepto),function(t,e){function n(n,r,i,o,u){"function"!=typeof r||u||(u=r,r=e);var a={opacity:i};return o&&(a.scale=o,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,r,null,u)}function r(e,r,i,o){return n(e,r,0,i,function(){u.call(t(this)),o&&o.call(this)})}var i=window.document,o=(i.documentElement,t.fn.show),u=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,r){return o.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",r)},t.fn.hide=function(t,n){return t===e?u.call(this):r(this,t,"0,0",n)},t.fn.toggle=function(n,r){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,r)})},t.fn.fadeTo=function(t,e,r){return n(this,t,e,null,r)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,o.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return r(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var r=t(this);r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,r){var c=e[a],l=c&&i[c];if(void 0===r)return l||n(e);if(l){if(r in l)return l[r];var s=u(r);if(s in l)return l[s]}return o.call(t(e),r)}function n(e,n,o){var c=e[a]||(e[a]=++t.uuid),l=i[c]||(i[c]=r(e));return void 0!==n&&(l[u(n)]=o),l}function r(e){var n={};return t.each(e.attributes,function(e,r){0==r.name.indexOf("data-")&&(n[u(r.name.replace("data-",""))]=t.zepto.deserializeValue(r.value))}),n}var i={},o=t.fn.data,u=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(r,i){return void 0===i?t.isPlainObject(r)?this.each(function(e,i){t.each(r,function(t,e){n(i,t,e)})}):0==this.length?void 0:e(this[0],r):this.each(function(){n(this,r,i)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[a],r=n&&i[n];r&&t.each(e,function(){delete r[u(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,r,i=a.exec(t);if(i&&i[2]in u&&(n=u[i[2]],r=i[3],t=i[1],r)){var o=Number(r);r=isNaN(o)?r.replace(/^["']|["']$/g,""):o}return e(t,n,r)}var r=t.zepto,i=r.qsa,o=r.matches,u=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,r){return t(this).text().indexOf(r)>-1?this:void 0},has:function(t,e,n){return r.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),c=/^\s*>/,l="Zepto"+ +new Date;r.qsa=function(e,o){return n(o,function(n,u,a){try{var s;!n&&u?n="*":c.test(n)&&(s=t(e).addClass(l),n="."+l+" "+n);var f=i(e,n)}catch(d){throw console.error("error performing selector: %o",o),d}finally{s&&s.removeClass(l)}return u?r.uniq(t.map(f,function(t,e){return u.call(t,e,f,a)})):f})},r.matches=function(t,e){return n(e,function(e,n,r){return(!e||o(t,e))&&(!n||n.call(t,null,r)===t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,r){var i=Math.abs(t-e),o=Math.abs(n-r);return i>=o?t-e>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){l=null,s.last&&(s.el.trigger("longTap"),s={})}function i(){l&&clearTimeout(l),l=null}function o(){u&&clearTimeout(u),a&&clearTimeout(a),c&&clearTimeout(c),l&&clearTimeout(l),u=a=c=l=null,s={}}var u,a,c,l,s={},f=750;t(document).ready(function(){var d,p;t(document.body).bind("touchstart",function(n){d=Date.now(),p=d-(s.last||d),s.el=t(e(n.touches[0].target)),u&&clearTimeout(u),s.x1=n.touches[0].pageX,s.y1=n.touches[0].pageY,p>0&&250>=p&&(s.isDoubleTap=!0),s.last=d,l=setTimeout(r,f)}).bind("touchmove",function(t){i(),s.x2=t.touches[0].pageX,s.y2=t.touches[0].pageY,Math.abs(s.x1-s.x2)>10&&t.preventDefault()}).bind("touchend",function(e){i(),s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?c=setTimeout(function(){s.el.trigger("swipe"),s.el.trigger("swipe"+n(s.x1,s.x2,s.y1,s.y2)),s={}},0):"last"in s&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,s.el.trigger(e),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):u=setTimeout(function(){u=null,s.el.trigger("singleTap"),s={}},250)},0))}).bind("touchcancel",o),t(window).bind("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&!function(t){var e,n;return e=function(t,e,n,r,i){var o,u;return t?(u=t[n](),o={width:["left","right"],height:["top","bottom"]},o[n].forEach(function(e){return u+=parseInt(t.css("padding-"+e),10),r&&(u+=parseInt(t.css("border-"+e+"-width"),10)),i?u+=parseInt(t.css("margin-"+e),10):void 0}),u):null},["width","height"].forEach(function(n){var r,i,o,u,a;return r=n.replace(/./,function(t){return t[0].toUpperCase()}),(i=t.fn)[u="inner"+r]||(i[u]=function(t){return e(this,r,n,!1,t)}),(o=t.fn)[a="outer"+r]||(o[a]=function(t){return e(this,r,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);