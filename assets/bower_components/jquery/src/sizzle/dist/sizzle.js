/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
!function(t){function e(t,e,n,r){var i,o,u,a,c,l,s,p,h,v;if((e?e.ownerDocument||e:F)!==N&&z(e),e=e||N,n=n||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return n;if(!r&&B){if(11!==a&&(i=yt.exec(t)))if(u=i[1]){if(9===a){if(o=e.getElementById(u),!o||!o.parentNode)return n;if(o.id===u)return n.push(o),n}else if(e.ownerDocument&&(o=e.ownerDocument.getElementById(u))&&L(e,o)&&o.id===u)return n.push(o),n}else{if(i[2])return K.apply(n,e.getElementsByTagName(t)),n;if((u=i[3])&&w.getElementsByClassName)return K.apply(n,e.getElementsByClassName(u)),n}if(w.qsa&&(!I||!I.test(t))){if(p=s=P,h=e,v=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(l=T(t),(s=e.getAttribute("id"))?p=s.replace(bt,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",c=l.length;c--;)l[c]=p+d(l[c]);h=_t.test(t)&&f(e.parentNode)||e,v=l.join(",")}if(v)try{return K.apply(n,h.querySelectorAll(v)),n}catch(g){}finally{s||e.removeAttribute("id")}}}return S(t.replace(ct,"$1"),e,n,r)}function n(){function t(n,r){return e.push(n+" ")>x.cacheLength&&delete t[e.shift()],t[n+" "]=r}var e=[];return t}function r(t){return t[P]=!0,t}function i(t){var e=N.createElement("div");try{return!!t(e)}catch(n){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function o(t,e){for(var n=t.split("|"),r=t.length;r--;)x.attrHandle[n[r]]=e}function u(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||V)-(~t.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function c(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function l(t){return r(function(e){return e=+e,r(function(n,r){for(var i,o=t([],n.length,e),u=o.length;u--;)n[i=o[u]]&&(n[i]=!(r[i]=n[i]))})})}function f(t){return t&&"undefined"!=typeof t.getElementsByTagName&&t}function s(){}function d(t){for(var e=0,n=t.length,r="";n>e;e++)r+=t[e].value;return r}function p(t,e,n){var r=e.dir,i=n&&"parentNode"===r,o=q++;return e.first?function(e,n,o){for(;e=e[r];)if(1===e.nodeType||i)return t(e,n,o)}:function(e,n,u){var a,c,l=[U,o];if(u){for(;e=e[r];)if((1===e.nodeType||i)&&t(e,n,u))return!0}else for(;e=e[r];)if(1===e.nodeType||i){if(c=e[P]||(e[P]={}),(a=c[r])&&a[0]===U&&a[1]===o)return l[2]=a[2];if(c[r]=l,l[2]=t(e,n,u))return!0}}}function h(t){return t.length>1?function(e,n,r){for(var i=t.length;i--;)if(!t[i](e,n,r))return!1;return!0}:t[0]}function v(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);return r}function g(t,e,n,r,i){for(var o,u=[],a=0,c=t.length,l=null!=e;c>a;a++)(o=t[a])&&(!n||n(o,r,i))&&(u.push(o),l&&e.push(a));return u}function m(t,e,n,i,o,u){return i&&!i[P]&&(i=m(i)),o&&!o[P]&&(o=m(o,u)),r(function(r,u,a,c){var l,f,s,d=[],p=[],h=u.length,m=r||v(e||"*",a.nodeType?[a]:a,[]),y=!t||!r&&e?m:g(m,d,t,a,c),_=n?o||(r?t:h||i)?[]:u:y;if(n&&n(y,_,a,c),i)for(l=g(_,p),i(l,[],a,c),f=l.length;f--;)(s=l[f])&&(_[p[f]]=!(y[p[f]]=s));if(r){if(o||t){if(o){for(l=[],f=_.length;f--;)(s=_[f])&&l.push(y[f]=s);o(null,_=[],l,c)}for(f=_.length;f--;)(s=_[f])&&(l=o?tt(r,s):d[f])>-1&&(r[l]=!(u[l]=s))}}else _=g(_===u?_.splice(h,_.length):_),o?o(null,u,_,c):K.apply(u,_)})}function y(t){for(var e,n,r,i=t.length,o=x.relative[t[0].type],u=o||x.relative[" "],a=o?1:0,c=p(function(t){return t===e},u,!0),l=p(function(t){return tt(e,t)>-1},u,!0),f=[function(t,n,r){var i=!o&&(r||n!==k)||((e=n).nodeType?c(t,n,r):l(t,n,r));return e=null,i}];i>a;a++)if(n=x.relative[t[a].type])f=[p(h(f),n)];else{if(n=x.filter[t[a].type].apply(null,t[a].matches),n[P]){for(r=++a;i>r&&!x.relative[t[r].type];r++);return m(a>1&&h(f),a>1&&d(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(ct,"$1"),n,r>a&&y(t.slice(a,r)),i>r&&y(t=t.slice(r)),i>r&&d(t))}f.push(n)}return h(f)}function _(t,n){var i=n.length>0,o=t.length>0,u=function(r,u,a,c,l){var f,s,d,p=0,h="0",v=r&&[],m=[],y=k,_=r||o&&x.find.TAG("*",l),b=U+=null==y?1:Math.random()||.1,w=_.length;for(l&&(k=u!==N&&u);h!==w&&null!=(f=_[h]);h++){if(o&&f){for(s=0;d=t[s++];)if(d(f,u,a)){c.push(f);break}l&&(U=b)}i&&((f=!d&&f)&&p--,r&&v.push(f))}if(p+=h,i&&h!==p){for(s=0;d=n[s++];)d(v,m,u,a);if(r){if(p>0)for(;h--;)v[h]||m[h]||(m[h]=G.call(c));m=g(m)}K.apply(c,m),l&&!r&&m.length>0&&p+n.length>1&&e.uniqueSort(c)}return l&&(U=b,k=y),v};return i?r(u):u}var b,w,x,A,E,T,C,S,k,M,j,z,N,R,B,I,O,D,L,P="sizzle"+1*new Date,F=t.document,U=0,q=0,$=n(),Q=n(),W=n(),H=function(t,e){return t===e&&(j=!0),0},V=1<<31,Z={}.hasOwnProperty,J=[],G=J.pop,Y=J.push,K=J.push,X=J.slice,tt=function(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",rt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=rt.replace("w","w#"),ot="\\["+nt+"*("+rt+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",ut=":("+rt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),ct=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ft=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),st=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(ut),pt=new RegExp("^"+it+"$"),ht={ID:new RegExp("^#("+rt+")"),CLASS:new RegExp("^\\.("+rt+")"),TAG:new RegExp("^("+rt.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+ut),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},vt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,mt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_t=/[+~]/,bt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),xt=function(t,e,n){var r="0x"+e-65536;return r!==r||n?e:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},At=function(){z()};try{K.apply(J=X.call(F.childNodes),F.childNodes),J[F.childNodes.length].nodeType}catch(Et){K={apply:J.length?function(t,e){Y.apply(t,X.call(e))}:function(t,e){for(var n=t.length,r=0;t[n++]=e[r++];);t.length=n-1}}}w=e.support={},E=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return e?"HTML"!==e.nodeName:!1},z=e.setDocument=function(t){var e,n,r=t?t.ownerDocument||t:F;return r!==N&&9===r.nodeType&&r.documentElement?(N=r,R=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",At,!1):n.attachEvent&&n.attachEvent("onunload",At)),B=!E(r),w.attributes=i(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=i(function(t){return t.appendChild(r.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=mt.test(r.getElementsByClassName),w.getById=i(function(t){return R.appendChild(t).id=P,!r.getElementsByName||!r.getElementsByName(P).length}),w.getById?(x.find.ID=function(t,e){if("undefined"!=typeof e.getElementById&&B){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},x.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){return t.getAttribute("id")===e}}):(delete x.find.ID,x.filter.ID=function(t){var e=t.replace(wt,xt);return function(t){var n="undefined"!=typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),x.find.TAG=w.getElementsByTagName?function(t,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=w.getElementsByClassName&&function(t,e){return B?e.getElementsByClassName(t):void 0},O=[],I=[],(w.qsa=mt.test(r.querySelectorAll))&&(i(function(t){R.appendChild(t).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&I.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||I.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+P+"-]").length||I.push("~="),t.querySelectorAll(":checked").length||I.push(":checked"),t.querySelectorAll("a#"+P+"+*").length||I.push(".#.+[+~]")}),i(function(t){var e=r.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&I.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||I.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),I.push(",.*:")})),(w.matchesSelector=mt.test(D=R.matches||R.webkitMatchesSelector||R.mozMatchesSelector||R.oMatchesSelector||R.msMatchesSelector))&&i(function(t){w.disconnectedMatch=D.call(t,"div"),D.call(t,"[s!='']:x"),O.push("!=",ut)}),I=I.length&&new RegExp(I.join("|")),O=O.length&&new RegExp(O.join("|")),e=mt.test(R.compareDocumentPosition),L=e||mt.test(R.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},H=e?function(t,e){if(t===e)return j=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n?n:(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===r||t.ownerDocument===F&&L(F,t)?-1:e===r||e.ownerDocument===F&&L(F,e)?1:M?tt(M,t)-tt(M,e):0:4&n?-1:1)}:function(t,e){if(t===e)return j=!0,0;var n,i=0,o=t.parentNode,a=e.parentNode,c=[t],l=[e];if(!o||!a)return t===r?-1:e===r?1:o?-1:a?1:M?tt(M,t)-tt(M,e):0;if(o===a)return u(t,e);for(n=t;n=n.parentNode;)c.unshift(n);for(n=e;n=n.parentNode;)l.unshift(n);for(;c[i]===l[i];)i++;return i?u(c[i],l[i]):c[i]===F?-1:l[i]===F?1:0},r):N},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==N&&z(t),n=n.replace(st,"='$1']"),w.matchesSelector&&B&&(!O||!O.test(n))&&(!I||!I.test(n)))try{var r=D.call(t,n);if(r||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,N,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==N&&z(t),L(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==N&&z(t);var n=x.attrHandle[e.toLowerCase()],r=n&&Z.call(x.attrHandle,e.toLowerCase())?n(t,e,!B):void 0;return void 0!==r?r:w.attributes||!B?t.getAttribute(e):(r=t.getAttributeNode(e))&&r.specified?r.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],r=0,i=0;if(j=!w.detectDuplicates,M=!w.sortStable&&t.slice(0),t.sort(H),j){for(;e=t[i++];)e===t[i]&&(r=n.push(i));for(;r--;)t.splice(n[r],1)}return M=null,t},A=e.getText=function(t){var e,n="",r=0,i=t.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=A(t)}else if(3===i||4===i)return t.nodeValue}else for(;e=t[r++];)n+=A(e);return n},x=e.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,xt),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,xt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ht.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&dt.test(n)&&(e=T(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,xt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=$[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&$(t,function(t){return e.test("string"==typeof t.className&&t.className||"undefined"!=typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(at," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),u="last"!==t.slice(-4),a="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,c){var l,f,s,d,p,h,v=o!==u?"nextSibling":"previousSibling",g=e.parentNode,m=a&&e.nodeName.toLowerCase(),y=!c&&!a;if(g){if(o){for(;v;){for(s=e;s=s[v];)if(a?s.nodeName.toLowerCase()===m:1===s.nodeType)return!1;h=v="only"===t&&!h&&"nextSibling"}return!0}if(h=[u?g.firstChild:g.lastChild],u&&y){for(f=g[P]||(g[P]={}),l=f[t]||[],p=l[0]===U&&l[1],d=l[0]===U&&l[2],s=p&&g.childNodes[p];s=++p&&s&&s[v]||(d=p=0)||h.pop();)if(1===s.nodeType&&++d&&s===e){f[t]=[U,p,d];break}}else if(y&&(l=(e[P]||(e[P]={}))[t])&&l[0]===U)d=l[1];else for(;(s=++p&&s&&s[v]||(d=p=0)||h.pop())&&((a?s.nodeName.toLowerCase()!==m:1!==s.nodeType)||!++d||(y&&((s[P]||(s[P]={}))[t]=[U,d]),s!==e)););return d-=i,d===r||d%r===0&&d/r>=0}}},PSEUDO:function(t,n){var i,o=x.pseudos[t]||x.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[P]?o(n):o.length>1?(i=[t,t,"",n],x.setFilters.hasOwnProperty(t.toLowerCase())?r(function(t,e){for(var r,i=o(t,n),u=i.length;u--;)r=tt(t,i[u]),t[r]=!(e[r]=i[u])}):function(t){return o(t,0,i)}):o}},pseudos:{not:r(function(t){var e=[],n=[],i=C(t.replace(ct,"$1"));return i[P]?r(function(t,e,n,r){for(var o,u=i(t,null,r,[]),a=t.length;a--;)(o=u[a])&&(t[a]=!(e[a]=o))}):function(t,r,o){return e[0]=t,i(e,null,o,n),e[0]=null,!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(t){return t=t.replace(wt,xt),function(e){return(e.textContent||e.innerText||A(e)).indexOf(t)>-1}}),lang:r(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,xt).toLowerCase(),function(e){var n;do if(n=B?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===R},focus:function(t){return t===N.activeElement&&(!N.hasFocus||N.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return t.disabled===!1},disabled:function(t){return t.disabled===!0},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,t.selected===!0},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!x.pseudos.empty(t)},header:function(t){return gt.test(t.nodeName)},input:function(t){return vt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:l(function(){return[0]}),last:l(function(t,e){return[e-1]}),eq:l(function(t,e,n){return[0>n?n+e:n]}),even:l(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:l(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:l(function(t,e,n){for(var r=0>n?n+e:n;--r>=0;)t.push(r);return t}),gt:l(function(t,e,n){for(var r=0>n?n+e:n;++r<e;)t.push(r);return t})}},x.pseudos.nth=x.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})x.pseudos[b]=c(b);s.prototype=x.filters=x.pseudos,x.setFilters=new s,T=e.tokenize=function(t,n){var r,i,o,u,a,c,l,f=Q[t+" "];if(f)return n?0:f.slice(0);for(a=t,c=[],l=x.preFilter;a;){(!r||(i=lt.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),c.push(o=[])),r=!1,(i=ft.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ct," ")}),a=a.slice(r.length));for(u in x.filter)!(i=ht[u].exec(a))||l[u]&&!(i=l[u](i))||(r=i.shift(),o.push({value:r,type:u,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?e.error(t):Q(t,c).slice(0)},C=e.compile=function(t,e){var n,r=[],i=[],o=W[t+" "];if(!o){for(e||(e=T(t)),n=e.length;n--;)o=y(e[n]),o[P]?r.push(o):i.push(o);o=W(t,_(i,r)),o.selector=t}return o},S=e.select=function(t,e,n,r){var i,o,u,a,c,l="function"==typeof t&&t,s=!r&&T(t=l.selector||t);if(n=n||[],1===s.length){if(o=s[0]=s[0].slice(0),o.length>2&&"ID"===(u=o[0]).type&&w.getById&&9===e.nodeType&&B&&x.relative[o[1].type]){if(e=(x.find.ID(u.matches[0].replace(wt,xt),e)||[])[0],!e)return n;l&&(e=e.parentNode),t=t.slice(o.shift().value.length)}for(i=ht.needsContext.test(t)?0:o.length;i--&&(u=o[i],!x.relative[a=u.type]);)if((c=x.find[a])&&(r=c(u.matches[0].replace(wt,xt),_t.test(o[0].type)&&f(e.parentNode)||e))){if(o.splice(i,1),t=r.length&&d(o),!t)return K.apply(n,r),n;break}}return(l||C(t,s))(r,e,!B,n,_t.test(t)&&f(e.parentNode)||e),n},w.sortStable=P.split("").sort(H).join("")===P,w.detectDuplicates=!!j,z(),w.sortDetached=i(function(t){return 1&t.compareDocumentPosition(N.createElement("div"))}),i(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||o("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&i(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||o("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),i(function(t){return null==t.getAttribute("disabled")})||o(et,function(t,e,n){var r;return n?void 0:t[e]===!0?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:t.Sizzle=e}(window);