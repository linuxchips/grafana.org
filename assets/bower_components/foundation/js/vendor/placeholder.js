/*! http://mths.be/placeholder v2.0.8 by @mathias */
!function(t,e,n){function i(t){var e={},i=/^jQuery\d+$/;return n.each(t.attributes,function(t,n){n.specified&&!i.test(n.name)&&(e[n.name]=n.value)}),e}function r(t,e){var i=this,r=n(i);if(i.value==r.attr("placeholder")&&r.hasClass("placeholder"))if(r.data("placeholder-password")){if(r=r.hide().next().show().attr("id",r.removeAttr("id").data("placeholder-id")),t===!0)return r[0].value=e;r.focus()}else i.value="",r.removeClass("placeholder"),i==a()&&i.select()}function s(){var t,e=this,s=n(e),a=this.id;if(""==e.value){if("password"==e.type){if(!s.data("placeholder-textinput")){try{t=s.clone().attr({type:"text"})}catch(o){t=n("<input>").attr(n.extend(i(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":s,"placeholder-id":a}).bind("focus.placeholder",r),s.data({"placeholder-textinput":t,"placeholder-id":a}).before(t)}s=s.removeAttr("id").hide().prev().attr("id",a).show()}s.addClass("placeholder"),s[0].value=s.attr("placeholder")}else s.removeClass("placeholder")}function a(){try{return e.activeElement}catch(t){}}var o,c,l="[object OperaMini]"==Object.prototype.toString.call(t.operamini),u="placeholder"in e.createElement("input")&&!l,d="placeholder"in e.createElement("textarea")&&!l,f=n.fn,h=n.valHooks,p=n.propHooks;u&&d?(c=f.placeholder=function(){return this},c.input=c.textarea=!0):(c=f.placeholder=function(){var t=this;return t.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":r,"blur.placeholder":s}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},c.input=u,c.textarea=d,o={get:function(t){var e=n(t),i=e.data("placeholder-password");return i?i[0].value:e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,e){var i=n(t),o=i.data("placeholder-password");return o?o[0].value=e:i.data("placeholder-enabled")?(""==e?(t.value=e,t!=a()&&s.call(t)):i.hasClass("placeholder")?r.call(t,!0,e)||(t.value=e):t.value=e,i):t.value=e}},u||(h.input=o,p.value=o),d||(h.textarea=o,p.value=o),n(function(){n(e).delegate("form","submit.placeholder",function(){var t=n(".placeholder",this).each(r);setTimeout(function(){t.each(s)},10)})}),n(t).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);