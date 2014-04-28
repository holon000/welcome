/*!

	Straightway - Coming soon unique creative Page
 	Copyright (c) 2014, Subramanian

	Author: Subramanian
    Profile: themeforest.net/user/FMedia/

    Version: 1.0.0
	Release Date: February 2014

*/



/* Define required varaibles */
	var isMobile = $(window).width() <= 767;
	var mobileDevice = screen.width < 1024 && screen.height < 1024;
	var isSmartPhone = ((screen.width <= 959) || (screen.height <= 959));
	var ipad = (screen.width === 768 || screen.height === 768) && (screen.width === 1024 || screen.height === 1024) ;
	var lowResDesktop = $(window).width() <= 979;
	var isMobileChk = screen.width < 768;
	var isTouch = false;
	var siteStartOpen = false;
	var scrollPos = 0;
	var flxDelay = 5000;
	var fmUrl = undefined;
	var currentPage_menu = "home";
	var leftMenu = true;
	var pageAlignCenter =  false;
	var onePageVersion =  false;
	var browserWebkit;

	/* set the Final date in YYYY/MM/DD HH:SEC:MIN formate  */
	var countdown_value = '2014/5/15 08:00:00 ';
	var countdown_finish = 'countdown finished';


	/* set top Menu height - to fix the browser bug */
	var topMenuHeight = 60;
	/* Enable/disable Menuauto Hide */
	var menuAutoHide = true;

	var agent;
	var ipadDevice;
	var iPhoneDevice;
	var iVersion;
	var retinaDevice;


	/* preload images are defined here */
	var preLoadImgs = [];

	$(document).ready(function(){

		/* Site Main plug-in initilize */
		jQuery(function($){
			$("body").mainFm();
		});

		retinaDevice = window.devicePixelRatio !== undefined &&  window.devicePixelRatio > 1 ? true : false;

		// Find ipad device
		agent = (window.navigator.userAgent).toLowerCase();
		ipadDevice = agent.indexOf("ipad") > -1;
		iPhoneDevice = agent.indexOf("iphone") > -1;
		iVersion = agent.slice(agent.indexOf("version/")+8,agent.indexOf("version/")+11);

		/* Find touch device */
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		  isTouch = true;
		}

		var iimg = !retinaDevice ? "images/supersized/pause.png" : "images/supersized/pause@2x.png";
		$("#pauseplay").attr("src",iimg);

		if(isTouch){
			$("html, body").css({"overflow-y":"auto"});
		}

		browserWebkit = $.browser.webkit;

	});




/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderimage-borderradius-boxshadow-hsla-opacity-rgba-cssanimations-generatedcontent-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr_=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["­",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.hsla=function(){return A("background-color:hsla(120,40%,100%,.5)"),D(j.backgroundColor,"rgba")||D(j.backgroundColor,"hsla")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr_.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );




/* Tabs, magnificPopup image and Accordion code */


$(document).ready(function(){


/* Fit Text plugin Initialization */

	$(".fittext1").fitText();
	$(".fittext2").fitText(1.2);
	$(".fittext3").fitText(1.1, { minFontSize: '40px', maxFontSize: '75px' });

// FitVids Initialization
	try {  $(".container").fitVids(); } catch (e) { }
	try {  $(".container-fluid").fitVids(); } catch (e) { }


/* magnificPopup plugin Initialization */

	$('.magnificPopup').each(function(){
		var mc = $(this);
		mc.magnificPopup({
		  items: {
			  src: mc.attr("href"),
			  title: mc.attr("data-title") !== undefined ? mc.attr("data-title") : mc.attr("title"),
			  type:'image'
		  },
		  mainClass: 'mfp-with-zoom',
		  removalDelay: 300
		 });
	  });

	  $('.magnificPopup-video').each(function(){
		var mc = $(this);
		mc.magnificPopup({
		  items: {
			  src: mc.attr("href"),
			  title: mc.attr("data-title") !== undefined ? mc.attr("data-title") : mc.attr("title"),
			  type:'iframe'
		  },
		  mainClass: 'mfp-with-zoom',
		  removalDelay: 300
		 });
	  });




	  if($.browser.msie && parseInt($.browser.version, 10) <= 8 || isTouch){
		  $(".frame_slideshow .slides, .frame_slideshow li").css({ "height": "auto" });
		  $(".frame_slideshow").removeClass("frame_slideshow");
		  $(".comment .comment-area, .comment .comment-aut").css({ "width": "600px" });
		  $(".comment .children .comment-area, .comment .children .comment-aut").css({ "width": "530px" });
	  };

	  if($.browser.msie){
		  $('.porImgOver').find(".imageText").css({"visibility":"hidden"});
		  $('.porImgOver').hover(function(){
			  $(this).find(".imageText").css({"visibility":"visible"});
		  },function(){
			  $(this).find(".imageText").css({"visibility":"hidden"});
		  });
	  };

	  var proEventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';

	  if(proEventType === "touchstart"){
		  $(".porImgOver .imageText").hide();
		  $(".porImgOver").addClass("hover_state");

		 $(".porImgOver").bind("click", function(event) {
			 $(".porImgOver").find(".imageText").hide();
			 $(this).find(".imageText").show();
		 });
	  }else{
		  $(".porImgOver").addClass("hover_state");
	  }


	  $('body').find('ul.tabs > li > a').each( function(){
		   $($(this).attr('href')).data("vidd",  $($(this).attr('href')).find('.tabVideo .addVideo') );
	  });

	  $('body').on('click', 'ul.tabs > li > a', function(e) {

		  //Get Location of tab's content
		  var contentLocation = $(this).attr('href');
		  //Let go if not a hashed one
		  if(contentLocation.charAt(0)=="#") {

			  e.preventDefault();

			  //Make Tab Active
			  $(this).parent().siblings().children('a').removeClass('active');
			  $(this).addClass('active');

			  //Show Tab Content & add active class
			  $(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
			  $(contentLocation).css({"opacity":"0"}).animate({"opacity":1},900);

			  $('body').find('ul.tabs > li > a').each( function(){
				  $($(this).attr('href')).find('.tabVideo .addVideo').remove();
			  });

			  $(contentLocation).find('.tabVideo').append($(contentLocation).data("vidd"))

			  $("body").mainFm('scroll_update');

			  $(contentLocation).find('.graph_container').each(function() {
				  $("body").mainFm('graph_display',$(this));
			  });
		   }
		});


		// Graph

		$("body").find('.contentWrapper').each(function(){
			$(this).find('.graph_container').each(function(){
				$(this).find('li').each(function() {
					$(this).each(function() {
						$(this).children(':first-child').css("width",$(this).attr('data-level'));
						$(this).children(':last-child').children(':first-child').text($(this).attr('data-level'));
						$(this).children(':last-child').css({"left": $(this).attr('data-level') });
					});
				});
			});

		});


// Accordion

	setTimeout(function(){

		jQuery(function($){
		  $('.accordion > dt > a').prepend('<span class="closeOpen" ></span>');
			//$('.accordion').attr("data-autoHide");

			$('.accordion').each( function(){

				var allDt = $(this);
				var allPanels = allDt.find(' > dd').hide();
				allDt.find(' dt .closeOpen').css({"background-position":"0px 0px"});

				if($(this).attr("data-openFirstElement") === "true"){
				  $(this).children(":first-child").find(".closeOpen").css({"background-position":"0px -15px"});
				  $(this).children(":first-child").find("a").data('show',true);
				  $target =  $(this).children(":first-child").next();
				  $target.addClass('active').slideDown();
				}


				$(this).find(' > dt > a').click(function() {
					$this = $(this);
					$target =  $this.parent().next();

					$("body").mainFm('intVideoObject', $this);
					$("body").find('.tabVideo').each(function(){
						$(this).find('.vid').remove();
						$(this).find('img').show();
						$(this).find('.video_hover').show().css({"z-index":"5"});
					});


					if($(this).parent().parent().attr("data-autoHide") !== "false"){
						allDt.find(' dt .closeOpen').css({"background-position":"0px 0px"});
						$this.find(".closeOpen").css({"background-position":"0px -15px"});
						$target =  $this.parent().next();
						if(!$target.hasClass('active')){
							allPanels.removeClass('active').slideUp();
							$target.addClass('active').slideDown();
						}
					}else{

						if($this.data('show')){
							$this.data('show',false);
							$this.find('.closeOpen').css({"background-position":"0px 0px"});
							$target.removeClass('active').slideUp();
						}else{
							$this.data('show',true);
							$this.find(".closeOpen").css({"background-position":"0px -15px"});
							$target.addClass('active').slideDown();
						}

					}

					setTimeout(function(){ $("body").mainFm('scroll_update'); },500);

					return false;
				});
			});
		});

		jQuery(function($){
		  var allPanels = $('.accordion_autoHide > dd').hide();
		  $('.accordion_autoHide > dt > a').prepend('<span class="closeOpen" ></span>');
		  $('.accordion_autoHide > dt > a').click(function() {
			$('.accordion_autoHide dt .closeOpen').css({"background-position":"0px 0px"});
			$this = $(this);
			$this .find(".closeOpen").css({"background-position":"0px -15px"});
			$target =  $this.parent().next();
			if(!$target.hasClass('active')){
			  allPanels.removeClass('active').slideUp();
			  $target.addClass('active').slideDown();
			}

			setTimeout(function(){ $("body").mainFm('scroll_update'); },500);
			return false;
		  });
		});




// Accordion Blog

		jQuery(function($){
          $('.accordion_blog > dt > a').prepend('<span class="closeOpen" ></span>');
			//$('.accordion_blog').attr("data-autoHide");

			$('.accordion_blog').each( function(){

				var allDt = $(this);
				var allPanels = allDt.find(' > dd').hide();
				allDt.find(' dt .closeOpen').css({"background-position":"0px 0px"});

				if($(this).attr("data-openFirstElement") === "true"){
                  $(this).children(":first-child").find(".closeOpen").css({"background-position":"0px -25px"});
                  $(this).children(":first-child").find("a").data('show',true);
                  $target =  $(this).children(":first-child").next();
                  $target.addClass('active').slideDown();

				  $target.find("a.lazyload").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});

					$target.find("a.lazyload_single").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});
				}


				$(this).find(' > dt > a').click(function() {
					$this = $(this);
					$target =  $this.parent().next();

					$("body").mainFm('intVideoObject', $this);
					$("body").find('.tabVideo').each(function(){
						$(this).find('.vid').remove();
						$(this).find('img').show();
						$(this).find('.video_hover').show().css({"z-index":"5"});
					});

					$target.find("a.lazyload").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});

					$target.find("a.lazyload_single").each(function(){
						$("body").mainFm('lazyLoadInt', $(this));
					});


					if($(this).parent().parent().attr("data-autoHide") !== "false"){
						allDt.find(' dt .closeOpen').css({"background-position":"0px 0px"});
						$this.find(".closeOpen").css({"background-position":"0px -28px"});
						$target =  $this.parent().next();
						if(!$target.hasClass('active')){
							allPanels.removeClass('active').slideUp();
							$target.addClass('active').slideDown();
						}else{
							$this.find(".closeOpen").css({"background-position":"0px 0px"});
							allPanels.removeClass('active').slideUp();
						}
					}else{

						if($this.data('show')){
							$this.data('show',false);
							$this.find('.closeOpen').css({"background-position":"0px 0px"});
							$target.removeClass('active').slideUp();
						}else{
							$this.data('show',true);
							$this.find(".closeOpen").css({"background-position":"0px -28px"});
							$target.addClass('active').slideDown();
						}

					}

					setTimeout(function(){ $("body").mainFm('scroll_update'); },500);

					return false;
				});
            });
		});

	}, 700);


	});


/* Embed Video player */

(function($) {
	$.fn.embedPlayer = function(url, width, height, autoplay) {

		var $output = '';
		var youtubeUrl = url.match(/watch\?v=([a-zA-Z0-9\-_]+)/);
		var vimeoUrl = url.match(/^http:\/\/(www\.)?vimeo\.com\/(clip\:)?(\d+).*$/);
		var aPlay =  autoplay == "true" ||  autoplay ? true : false;

		if (youtubeUrl) {
			var url_ = 'http://www.youtube.com/embed/' + youtubeUrl[1] + '?html5=1;rel=0;autohide=1';
			if (aPlay) {
				url_ += '&autoplay=1';
			}else{
				url_ += '&autoplay=0';
			}
			$output = $('<iframe style="width: ' + width + '; height: ' + height + ';" src="' + url_ +'&wmode=transparent'+ '" wmode="Opaque" frameborder="0" allowfullscreen ></iframe>');


		} else if (vimeoUrl) {

			var url_ = 'http://player.vimeo.com/video/' + vimeoUrl[3] + '?title=0&byline=0&portrait=0';
			if (aPlay) {
				url_ += '&autoplay=1';
			}else{
				url_ += '&autoplay=0';
			}
			$output = $('<iframe style="width: ' + width + '; height: ' + height + ';" src="' + url_ +'&wmode=transparent'+ '"  wmode="Opaque" frameborder="0" ></iframe>');

		} else {

			$output = $('<p>no video url found - vimeo and youtube supported</p>');
		}

		return this.html($output);
	};
})(jQuery);





// Google map Code



var gMapStore;
var mapPos;
var latlng;
var wHig_ = $(window).height();
var pointerVerPos = wHig_ > 360 ? wHig_/2 - 180 :  wHig_/2 - 75;

function map_initialize() {
  "use strict";

	var map;
	var openedInfoWindow = null;

	mapPos = new google.maps.LatLng(34.05223, -118.24368);
	latlng = mapPos;

	var MY_MAPTYPE_ID = 'custom_style';

  	  var featureOpts = [
    {
      stylers: [
        { visibility: 'simplified' },
        { weight: .5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#222222' }
      ]
    }
  ];



 var styledMapOptions = {

	  name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);



  var companyPos = mapPos;
  var settings = {
	  zoom: 15,
	  center: latlng,
	  mapTypeControl: true,

	  navigationControl: true,
	  navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	  mapTypeId: MY_MAPTYPE_ID};

	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

  	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

	google.maps.Map.prototype.panToWithOffset = function(latlng, offsetX, offsetY) {
		var map = this;
		var ov = new google.maps.OverlayView();
		ov.onAdd = function() {
			var proj = this.getProjection();
			var aPoint = proj.fromLatLngToContainerPixel(latlng);
			aPoint.x = aPoint.x+offsetX;
			aPoint.y = aPoint.y+offsetY;
			map.panTo(proj.fromContainerPixelToLatLng(aPoint));
		};
		ov.draw = function() {};
		ov.setMap(this);
	};

	map.panToWithOffset(latlng, 0, pointerVerPos);

	var contentString = '<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="mapStyle firstHeading">FMediastudios</h4>'+
		'<div id="mapStyle">'+
		'<p class="mapStyle">Leading web design studio</p>'+
		'</div>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var companyImage = new google.maps.MarkerImage('images/map/logo.png',
		new google.maps.Size(100,50),
		new google.maps.Point(0,0),
		new google.maps.Point(50,50)
	);

	var companyShadow = new google.maps.MarkerImage('images/map/logo_shadow.png',
		new google.maps.Size(130,50),
		new google.maps.Point(0,0),
		new google.maps.Point(65, 50));

	/*var companyPos = new google.maps.LatLng(57.0442, 9.9116);*/

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"Høgenhaug",
		zIndex: 3});

	gMapStore = map;

	google.maps.event.addListener(companyMarker, 'click', function() {
		if (openedInfoWindow != null) openedInfoWindow.close();  // <-- changed this
		infowindow.open(map,companyMarker);
		openedInfoWindow = infowindow;
      	google.maps.event.addListener(infowindow, 'closeclick', function() {
		   map.panToWithOffset(latlng, 0, pointerVerPos);
		});
	});

	var mapInterval;
	$(window).resize(function() {
		clearInterval(mapInterval);
		mapInterval = setInterval(function(){
			clearInterval(mapInterval);
			wHig_ = $(window).height();
			mapResizer();
		},700);
	});

}

function mapResizer(){
	pointerVerPos = 0;
	//var winW =   $(window).width() > 1024 ? "100%" : $(window).width();
	try{
		//$("#map_canvas").css({"width": winW });
	gMapStore.panToWithOffset(latlng, 0, pointerVerPos);
	} catch (e) { }
}







/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.4
*
* Requires: 1.2.2+
*/

(function(d){function g(a){var b=a||window.event,i=[].slice.call(arguments,1),c=0,h=0,e=0;a=d.event.fix(b);a.type="mousewheel";if(a.wheelDelta)c=a.wheelDelta/120;if(a.detail)c=-a.detail/3;e=c;if(b.axis!==undefined&&b.axis===b.HORIZONTAL_AXIS){e=0;h=-1*c}if(b.wheelDeltaY!==undefined)e=b.wheelDeltaY/120;if(b.wheelDeltaX!==undefined)h=-1*b.wheelDeltaX/120;i.unshift(a,c,h,e);return d.event.handle.apply(this,i)}var f=["DOMMouseScroll","mousewheel"];d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=
f.length;a;)this.addEventListener(f[--a],g,false);else this.onmousewheel=g},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],g,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);





 /*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },

    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },

    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";

    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }

    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;

    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }

    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }

    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);

    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);




/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});




