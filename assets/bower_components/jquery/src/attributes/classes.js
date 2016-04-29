define(["../core","../var/rnotwhite","../var/strundefined","../data/var/data_priv","../core/init"],function(t,e,n,i){var r=/[\t\r\n\f]/g;t.fn.extend({addClass:function(n){var i,o,s,a,c,l,u="string"==typeof n&&n,d=0,f=this.length;if(t.isFunction(n))return this.each(function(e){t(this).addClass(n.call(this,e,this.className))});if(u)for(i=(n||"").match(e)||[];f>d;d++)if(o=this[d],s=1===o.nodeType&&(o.className?(" "+o.className+" ").replace(r," "):" ")){for(c=0;a=i[c++];)s.indexOf(" "+a+" ")<0&&(s+=a+" ");l=t.trim(s),o.className!==l&&(o.className=l)}return this},removeClass:function(n){var i,o,s,a,c,l,u=0===arguments.length||"string"==typeof n&&n,d=0,f=this.length;if(t.isFunction(n))return this.each(function(e){t(this).removeClass(n.call(this,e,this.className))});if(u)for(i=(n||"").match(e)||[];f>d;d++)if(o=this[d],s=1===o.nodeType&&(o.className?(" "+o.className+" ").replace(r," "):"")){for(c=0;a=i[c++];)for(;s.indexOf(" "+a+" ")>=0;)s=s.replace(" "+a+" "," ");l=n?t.trim(s):"",o.className!==l&&(o.className=l)}return this},toggleClass:function(r,o){var s=typeof r;return"boolean"==typeof o&&"string"===s?o?this.addClass(r):this.removeClass(r):t.isFunction(r)?this.each(function(e){t(this).toggleClass(r.call(this,e,this.className,o),o)}):this.each(function(){if("string"===s)for(var o,a=0,c=t(this),l=r.match(e)||[];o=l[a++];)c.hasClass(o)?c.removeClass(o):c.addClass(o);else(s===n||"boolean"===s)&&(this.className&&i.set(this,"__className__",this.className),this.className=this.className||r===!1?"":i.get(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(r," ").indexOf(e)>=0)return!0;return!1}})});