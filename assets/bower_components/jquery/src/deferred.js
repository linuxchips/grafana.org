define(["./core","./var/slice","./callbacks"],function(e,t){return e.extend({Deferred:function(t){var n=[["resolve","done",e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),"rejected"],["notify","progress",e.Callbacks("memory")]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return e.Deferred(function(r){e.each(n,function(n,u){var a=e.isFunction(t[n])&&t[n];o[u[1]](function(){var t=a&&a.apply(this,arguments);t&&e.isFunction(t.promise)?t.promise().done(r.resolve).fail(r.reject).progress(r.notify):r[u[0]+"With"](this===i?r.promise():this,a?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?e.extend(t,i):i}},o={};return i.pipe=i.then,e.each(n,function(e,t){var u=t[2],a=t[3];i[t[1]]=u.add,a&&u.add(function(){r=a},n[1^e][2].disable,n[2][2].lock),o[t[0]]=function(){return o[t[0]+"With"](this===o?i:this,arguments),this},o[t[0]+"With"]=u.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(n){var r,i,o,u=0,a=t.call(arguments),c=a.length,s=1!==c||n&&e.isFunction(n.promise)?c:0,l=1===s?n:e.Deferred(),f=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?t.call(arguments):o,i===r?l.notifyWith(n,i):--s||l.resolveWith(n,i)}};if(c>1)for(r=new Array(c),i=new Array(c),o=new Array(c);c>u;u++)a[u]&&e.isFunction(a[u].promise)?a[u].promise().done(f(u,o,a)).fail(l.reject).progress(f(u,i,r)):--s;return s||l.resolveWith(o,a),l.promise()}}),e});