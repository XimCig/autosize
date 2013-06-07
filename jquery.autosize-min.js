/*!
	jQuery Autosize v1.16.14
	(c) 2013 Jack Moore - jacklmoore.com
	updated: 2013-06-06
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t){var e,o={className:"autosizejs",append:"",callback:!1},n="hidden",i="border-box",s="lineHeight",a='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',r=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],l="oninput",c="onpropertychange",h=t(a).data("autosize",!0)[0];h.style.lineHeight="99px","99px"===t(h).css(s)&&r.push(s),h.style.lineHeight="",t.fn.autosize=function(s){return s=t.extend({},o,s||{}),h.parentNode!==document.body&&t(document.body).append(h),this.each(function(){function o(){if(e=w,h.className=s.className,d=parseInt(b.css("maxHeight"),10),t.each(r,function(t,e){h.style[e]=b.css(e)}),l in w){var o=w.style.width;w.style.width="0px",w.offsetWidth,w.style.width=o}}function a(){var t,i,a;e!==w&&o(),h.value=w.value+s.append,h.style.overflowY=w.style.overflowY,a=parseInt(w.style.height,10),h.style.width=Math.max(b.width(),0)+"px",h.scrollTop=0,h.scrollTop=9e4,t=h.scrollTop,d&&t>d?(t=d,i="scroll"):p>t&&(t=p),t+=f,w.style.overflowY=i||n,a!==t&&(w.style.height=t+"px",x&&s.callback.call(w,w))}var p,d,u,w=this,b=t(w),f=0,x=t.isFunction(s.callback);b.data("autosize")||((b.css("box-sizing")===i||b.css("-moz-box-sizing")===i||b.css("-webkit-box-sizing")===i)&&(f=b.outerHeight()-b.height()),p=Math.max(parseInt(b.css("minHeight"),10)-f||0,b.height()),u="none"===b.css("resize")||"vertical"===b.css("resize")?"none":"horizontal",b.css({overflow:n,overflowY:n,wordWrap:"break-word",resize:u}).data("autosize",!0),c in w?l in w?w[l]=w.onkeyup=a:w[c]=function(){"value"===event.propertyName&&a()}:w[l]=a,t(window).on("resize",function(){active=!1,a()}),b.on("autosize",function(){active=!1,a()}),a())})}})(window.jQuery||window.Zepto);