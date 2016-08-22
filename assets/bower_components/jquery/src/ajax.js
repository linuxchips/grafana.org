define(["./core","./var/rnotwhite","./ajax/var/nonce","./ajax/var/rquery","./core/init","./ajax/parseJSON","./ajax/parseXML","./deferred"],function(e,t,n,r){function i(n){return function(r,i){"string"!=typeof r&&(i=r,r="*");var o,a=0,u=r.toLowerCase().match(t)||[];if(e.isFunction(i))for(;o=u[a++];)"+"===o[0]?(o=o.slice(1)||"*",(n[o]=n[o]||[]).unshift(i)):(n[o]=n[o]||[]).push(i)}}function o(t,n,r,i){function o(s){var c;return a[s]=!0,e.each(t[s]||[],function(e,t){var s=t(n,r,i);return"string"!=typeof s||u||a[s]?u?!(c=s):void 0:(n.dataTypes.unshift(s),o(s),!1)}),c}var a={},u=t===v;return o(n.dataTypes[0])||!a["*"]&&o("*")}function a(t,n){var r,i,o=e.ajaxSettings.flatOptions||{};for(r in n)void 0!==n[r]&&((o[r]?t:i||(i={}))[r]=n[r]);return i&&e.extend(!0,t,i),t}function u(e,t,n){for(var r,i,o,a,u=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in u)if(u[i]&&u[i].test(r)){s.unshift(i);break}if(s[0]in n)o=s[0];else{for(i in n){if(!s[0]||e.converters[i+" "+s[0]]){o=i;break}a||(a=i)}o=o||a}return o?(o!==s[0]&&s.unshift(o),n[o]):void 0}function s(e,t,n,r){var i,o,a,u,s,c={},l=e.dataTypes.slice();if(l[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=l.shift())if("*"===o)o=s;else if("*"!==s&&s!==o){if(a=c[s+" "+o]||c["* "+o],!a)for(i in c)if(u=i.split(" "),u[1]===o&&(a=c[s+" "+u[0]]||c["* "+u[0]])){a===!0?a=c[i]:c[i]!==!0&&(o=u[0],l.unshift(u[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}var c=/#.*$/,l=/([?&])_=[^&]*/,f=/^(.*?):[ \t]*([^\r\n]*)$/gm,d=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,p=/^(?:GET|HEAD)$/,h=/^\/\//,m=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,g={},v={},y="*/".concat("*"),b=window.location.href,w=m.exec(b.toLowerCase())||[];return e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:b,type:"GET",isLocal:d.test(w[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":y,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?a(a(t,e.ajaxSettings),n):a(e.ajaxSettings,t)},ajaxPrefilter:i(g),ajaxTransport:i(v),ajax:function(i,a){function d(t,n,r,i){var o,a,c,l,f,d=n;2!==F&&(F=2,E&&clearTimeout(E),x=void 0,T=i||"",P.readyState=t>0?4:0,o=t>=200&&300>t||304===t,r&&(l=u(N,P,r)),l=s(N,l,P,o),o?(N.ifModified&&(f=P.getResponseHeader("Last-Modified"),f&&(e.lastModified[_]=f),f=P.getResponseHeader("etag"),f&&(e.etag[_]=f)),204===t||"HEAD"===N.type?d="nocontent":304===t?d="notmodified":(d=l.state,a=l.data,c=l.error,o=!c)):(c=d,(t||!d)&&(d="error",0>t&&(t=0))),P.status=t,P.statusText=(n||d)+"",o?z.resolveWith(M,[a,d,P]):z.rejectWith(M,[P,d,c]),P.statusCode(q),q=void 0,k&&j.trigger(o?"ajaxSuccess":"ajaxError",[P,N,o?a:c]),O.fireWith(M,[P,d]),k&&(j.trigger("ajaxComplete",[P,N]),--e.active||e.event.trigger("ajaxStop")))}"object"==typeof i&&(a=i,i=void 0),a=a||{};var x,_,T,A,E,C,k,S,N=e.ajaxSetup({},a),M=N.context||N,j=N.context&&(M.nodeType||M.jquery)?e(M):e.event,z=e.Deferred(),O=e.Callbacks("once memory"),q=N.statusCode||{},D={},L={},F=0,I="canceled",P={readyState:0,getResponseHeader:function(e){var t;if(2===F){if(!A)for(A={};t=f.exec(T);)A[t[1].toLowerCase()]=t[2];t=A[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===F?T:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return F||(e=L[n]=L[n]||e,D[e]=t),this},overrideMimeType:function(e){return F||(N.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>F)for(t in e)q[t]=[q[t],e[t]];else P.always(e[P.status]);return this},abort:function(e){var t=e||I;return x&&x.abort(t),d(0,t),this}};if(z.promise(P).complete=O.add,P.success=P.done,P.error=P.fail,N.url=((i||N.url||b)+"").replace(c,"").replace(h,w[1]+"//"),N.type=a.method||a.type||N.method||N.type,N.dataTypes=e.trim(N.dataType||"*").toLowerCase().match(t)||[""],null==N.crossDomain&&(C=m.exec(N.url.toLowerCase()),N.crossDomain=!(!C||C[1]===w[1]&&C[2]===w[2]&&(C[3]||("http:"===C[1]?"80":"443"))===(w[3]||("http:"===w[1]?"80":"443")))),N.data&&N.processData&&"string"!=typeof N.data&&(N.data=e.param(N.data,N.traditional)),o(g,N,a,P),2===F)return P;k=e.event&&N.global,k&&0===e.active++&&e.event.trigger("ajaxStart"),N.type=N.type.toUpperCase(),N.hasContent=!p.test(N.type),_=N.url,N.hasContent||(N.data&&(_=N.url+=(r.test(_)?"&":"?")+N.data,delete N.data),N.cache===!1&&(N.url=l.test(_)?_.replace(l,"$1_="+n++):_+(r.test(_)?"&":"?")+"_="+n++)),N.ifModified&&(e.lastModified[_]&&P.setRequestHeader("If-Modified-Since",e.lastModified[_]),e.etag[_]&&P.setRequestHeader("If-None-Match",e.etag[_])),(N.data&&N.hasContent&&N.contentType!==!1||a.contentType)&&P.setRequestHeader("Content-Type",N.contentType),P.setRequestHeader("Accept",N.dataTypes[0]&&N.accepts[N.dataTypes[0]]?N.accepts[N.dataTypes[0]]+("*"!==N.dataTypes[0]?", "+y+"; q=0.01":""):N.accepts["*"]);for(S in N.headers)P.setRequestHeader(S,N.headers[S]);if(N.beforeSend&&(N.beforeSend.call(M,P,N)===!1||2===F))return P.abort();I="abort";for(S in{success:1,error:1,complete:1})P[S](N[S]);if(x=o(v,N,a,P)){P.readyState=1,k&&j.trigger("ajaxSend",[P,N]),N.async&&N.timeout>0&&(E=setTimeout(function(){P.abort("timeout")},N.timeout));try{F=1,x.send(D,d)}catch(B){if(!(2>F))throw B;d(-1,B)}}else d(-1,"No Transport");return P},getJSON:function(t,n,r){return e.get(t,n,r,"json")},getScript:function(t,n){return e.get(t,void 0,n,"script")}}),e.each(["get","post"],function(t,n){e[n]=function(t,r,i,o){return e.isFunction(r)&&(o=o||i,i=r,r=void 0),e.ajax({url:t,type:n,dataType:o,data:r,success:i})}}),e});