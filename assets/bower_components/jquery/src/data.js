define(["./core","./var/rnotwhite","./core/access","./data/var/data_priv","./data/var/data_user"],function(e,t,n,r,i){function o(t,n,r){var o;if(void 0===r&&1===t.nodeType)if(o="data-"+n.replace(a,"-$1").toLowerCase(),r=t.getAttribute(o),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:u.test(r)?e.parseJSON(r):r}catch(c){}i.set(t,n,r)}else r=void 0;return r}var u=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,a=/([A-Z])/g;return e.extend({hasData:function(e){return i.hasData(e)||r.hasData(e)},data:function(e,t,n){return i.access(e,t,n)},removeData:function(e,t){i.remove(e,t)},_data:function(e,t,n){return r.access(e,t,n)},_removeData:function(e,t){r.remove(e,t)}}),e.fn.extend({data:function(t,u){var a,c,l,s=this[0],f=s&&s.attributes;if(void 0===t){if(this.length&&(l=i.get(s),1===s.nodeType&&!r.get(s,"hasDataAttrs"))){for(a=f.length;a--;)f[a]&&(c=f[a].name,0===c.indexOf("data-")&&(c=e.camelCase(c.slice(5)),o(s,c,l[c])));r.set(s,"hasDataAttrs",!0)}return l}return"object"==typeof t?this.each(function(){i.set(this,t)}):n(this,function(n){var r,u=e.camelCase(t);if(s&&void 0===n){if(r=i.get(s,t),void 0!==r)return r;if(r=i.get(s,u),void 0!==r)return r;if(r=o(s,u,void 0),void 0!==r)return r}else this.each(function(){var e=i.get(this,u);i.set(this,u,n),-1!==t.indexOf("-")&&void 0!==e&&i.set(this,t,n)})},null,u,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){i.remove(this,e)})}}),e});