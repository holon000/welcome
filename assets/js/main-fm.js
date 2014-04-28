/*!
	Straightway - Coming soon unique creative Page
 	Copyright (c) 2014, Subramanian

	Author: Subramanian
    Profile: themeforest.net/user/FMedia/

    Version: 1.0.0
	Release Date: February 2014

	Built using: jQuery 		version:1.6.2	http://jquery.com/
	jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/

 */


(function( $ ){

	function mainFm(selector, params){

		var defaults = $.extend({}, {

				// default variables

				onePage : true,						// Set whether this template will work as one page or separate page

				currentPage : "!home",				// Set the current page

				animationSpeed : 300,				// Default animation speed

				menuAutoHide : undefined, 			// Menu auto hide enable/disable

				homeSliderThumbnail : false			// Home slider thumbnail

			} , params);


// Initialize required variables and objects
			var self = this;
			self.pageHolderHeight_desktop = self.pgHigDesk = "100%";
			self.pageHolderHeight_ipad = self.pgHigIpad = "100%";
			self.winWidth =  self.oriWidth =  $(window).width();
			self.winHeight =   $(window).height();
			self.IE_old = $.browser.msie;
			self.mobile = self.oriWidth <= 959;
			self.midMobile = self.oriWidth <= 767 && self.oriWidth > 479;
			self.minMobile = self.oriWidth <= 480;
			self.mobileDevice = screen.width < 1024 && screen.height < 1024;
			isMobileChk = self.winWidth < 768;
			self.z_mobile = screen.width < 768;

			ipad = (self.oriWidth === 768 || $(window).height() === 768) && (self.oriWidth === 1024 || $(window).height() === 1024) ;
			self.ipadPort = (self.winWidth >= 768 &&  self.winWidth < 1024);
			self.navTop = self.oriWidth <= 959;
			self.aniSpeed = defaults.animationSpeed;
			self.flxDelay =  flxDelay = defaults.slideshowSpeed;

			self.isoAniFin = false;

			self.onePage = onePageVersion = defaults.onePage;

			self.mapLoad = false;

			self.menuAutoHide = defaults.menuAutoHide !== undefined ? defaults.menuAutoHide : menuAutoHide;

			self.bdy = $("body");

			self.pageHeader = $(".header");
			self.foot = $(".footer");
			self.navUl = $('.header_content .nav');
			self.backPage  = $('#backArea');

			self.setting_tool = $(".setting_tools");

			self.bdy.data("width", Number(self.oriWidth));
			self.bdy.data("height", Number($(window).height()));

			self.pageLoaded = false;
			self.homePage = defaults.currentPage;
			self.pageLoadfinished = false;
			self.projFm = false;
			self.apis = [];
			self.ff = -1;

			self.singleBg = true;

			self.animateEnable = !isMobileChk ? true : false;

			self.curPageview;

			self.superSlider = typeof superGalleryInit !== "undefined" && typeof superGalleryInit !== undefined;

			leftMenu = true;
			self.menuLeft = true;

			$(".pgScrollUp, .move_up, .goTop").click(function(){
				self.scrollObj.stop().animate({ scrollTop: "0px" }, 500, "easeInOutQuart" );
			});

			if(!Modernizr_.csstransforms3d && !isTouch && !browserWebkit){
				if($(".container .overlay .middle_align").length > 0){
					$(".overlay .middle_align").css({"top":"20%", "left":"30%"});
				}else{
					$(".overlay .middle_align").css({"top":"30%", "left":"35%"});
				}
			}


			// Set retina support image
			self.bdy.find('img').each(function() {
				if($(this).attr('data-retina') === "yes" && retinaDevice){
					var img_Src = $(this).attr('src').split(".");
					$(this).attr('src', img_Src[0]+"@2x."+ img_Src[1] )
				}
			});


			// create pade fadeout layer
			self.page_Fade = $(".pageFade");

			self.bdy.prepend('<div id="dumDiv" style="position:absolute"> </div>');
			self.dumDiv = self.bdy.children(':first-child');

			self.navArry = [];
			$('.contentWrapper').each(function(){
				var n_spt = $(this);
				if(n_spt.attr("data-id") !== undefined){
					self.navArry.push($(this));
				}
			});

			$(".home_page .page_close").css({"opacity":"0"});

			// Initialize the site after the required time interval


			self.bdy.css("display","block");

			var imgy = !isMobileChk ? 	$(".homeSlider").attr("data-src") : ($(".homeSlider").attr("data-src-small") 	?
			$(".homeSlider").attr("data-src-small")  : $(".homeSlider").attr("data-src"));

			if(imgy !== undefined && imgy !== ""){
				preLoadImgs.push(imgy);
			}else{
				imgy = undefined;
			}


			var ik = 0;
			function intImgLoad (img){

				var $img;
				$img = $('<img />');
				$img.hide();

				$img.attr('src', img).load(function() {

					  if(ik < preLoadImgs.length-1){
						ik = ik+1;
						intImgLoad(preLoadImgs[ik]);
					  }else{
						siteStartOpen = true;
					  }
					  $(this).remove();
				}).error(function () {
					  if(ik < preLoadImgs.length-1){
						ik = ik+1;
						intImgLoad(preLoadImgs[ik]);
					  }else{
						siteStartOpen = true;
					  }
					  $(this).remove();
				}).each(function() {
                  if(this.complete) { $(this).trigger('load'); }
				});
			}

			if(preLoadImgs.length>0){
				intImgLoad(preLoadImgs[ik]);
			}else{
				siteStartOpen = true;
			}


			self.initialize();

			if(self.superSlider){
				superGalleryInit();
			}else{
				superFirLoad = true;
			}


			// Initialize the site after the required time interval
			var intV = setInterval(function() {
				if(superFirLoad){
					clearInterval(intV);
					self.page_Fade.fadeOut(1000, "easeInOutQuart", function(){
						self.page_Fade.remove();
						self.startAnimatePageItems();

					});
				}
			},10);


// Page buttons ==================================================================




			// Cache the Window object
			self.scrollObj = $("body, html");
			self.$html = $("html");
			self.$window = $("body");


			$('.palyPause_slideshow').hover(function(){
				try {
					if(self.superSlider){
						if(!$.supersized.vars.is_paused){ api.playToggle(); }
					}
				} catch (e) { }
			},function(){ });

			$('.contentWrapper').hide();

			$('.single_page .contentWrapper').show();


			// Window scroll event

			if(self.z_mobile){
				$(window).scroll(function() {

					clearInterval(self.scrIntr);
					self.scrIntr = setInterval(function(){
						clearInterval(self.scrIntr);
						self.scrollPos = scrollPos = self.$html.scrollTop() > 0 ?  self.$html.scrollTop() :  self.$window.scrollTop();
						if(self.scrollPos > 150){
							$(".pgScrollUp").fadeIn(200);
						}else{
							$(".pgScrollUp").fadeOut(200);
						}

					},200);
				});
			}


	}


	mainFm.prototype = {

		// Initialize the require objects and variables
		initialize : function(){

			var self = this;

			self.prePg = "";
			self.curPg = "";
			self.menuList = [];

			// Loading object added
			self.bdy.prepend('<div id="preloadImg" style="width:150px; height:150px; visibility:hidden; position:absolute; left:0; top:0; overflow:hidden"> </div>');
			self.dumDiv.addClass('email_loading');
			self.dumDiv.removeClass('email_loading');

			self.nexButton_detailPg = $("a.next_button");
			self.preButton_detailPg = $("a.previous_button");

// Initialize the menu navigation action
			var kk = -1;
			var qq = -1;
			self.rez = false;

			if( parseInt($.browser.version, 10) === 7 && $.browser.msie){
				self.pageHeader.css({"background":"","filter":"none"});
				self.dumDiv.addClass("mobile_menuBg_ie");
				self.pageHeader.css({"background-color": self.dumDiv.css("background-color")});
			}

			try {
				document.createEvent('TouchEvent');
				$(".lightStyle, .darkStyle, .contentWrapper, .setting_tools").bind('click', function() {
				});
			} catch (e) {
				// nothing to do
			}


			$(".header .nav li ul").removeClass("open");
			$(".header .nav li ul").addClass("close");

			if(!isTouch){
				 $(".header .nav li ul").addClass("enableTransition")
			}


			$(".header .nav li a").bind('click', function() {

				if($(this).attr("target") == undefined ){
					return false;
				}else{
					return true;
					}
			});

			$(".logo a").bind('click', function() {
				if($(this).attr("href") !== undefined && $(this).attr("href") !== "" && self.menuAutoHide ){
					self.page_load($('.contentWrapper[data-id$="'+$(this).attr("href")+'"]'));
				}
				$(".header .nav li a").removeClass("active");
				return false;
			});

			$(".page_close").bind('click', function() {
				self.page_load($('.contentWrapper[data-id$="'+$(".logo a").attr("href")+'"]'));
				$(".header .nav li a").removeClass("active");
			});

			$(".showHideMenu").data("open", false);
			$(".showHideMenu").bind('click', function() {
				if(String($(".menu_holder .header").css("display")) === "block"){
					$(".menu_holder .header").css({"display":"none"});
					$(".showHideMenu").data("open", false);
				}else{
					$(".menu_holder .header").css({"display":"block"});
					$(".showHideMenu").data("open", true)
				}
			});


			self.templateSetting();

			self.navUl.each(function() {

				$(this).children().each(function() {
					var slf = $(this).children();
					qq++;
					slf.bind('click', function() {

						var gg =  String($(this).attr("href")).split("#");
						if(gg[0] === self.url){
							self.page_position();
						}


						$(".header .nav li a").removeClass("active");
						$(this).addClass("active");
						$(".menu_holder .header").css({"display":"none"});

						if($(this).attr("href") !== undefined && $(this).attr("href") !== "" && self.menuAutoHide ){
							self.page_load($('.contentWrapper[data-id$="'+$(this).attr("href")+'"]'));
						}
					});

					$(this).find("ul li a").bind('click', function() {
						$(".header .nav li a").removeClass("active_sub");
						$(this).addClass("active_sub");

						if($(this).attr("href") !== undefined && $(this).attr("href") !== "" && self.menuAutoHide){

						}

					});


					$(this).bind('click', function() {

						if(self.onePage){
							$(".header .nav li ul").removeClass("open");
							$(".header .nav li ul").addClass("close");
							$(this).find("ul").removeClass("close");
							$(this).find("ul").addClass("open");
						}else{
							if($(this).find("ul").hasClass("open")){
								$(".header .nav li ul").removeClass("open");
								$(".header .nav li ul").addClass("close");
							}else{
								$(".header .nav li ul").removeClass("open");
								$(this).find("ul").removeClass("close");
								$(this).find("ul").addClass("open");
							}
						}
					});

				});

			});

			$("body").find(".move_down, .move_down_white").each(function(){
				$(this).bind('click', function() {
					var gg =  $(this).attr("href").split("#");
					if(gg[1] === self.url){
						self.page_position();
					}
				});
			});



			if(!isTouch){
				$("html").css({"overflow-y":"auto"})
				$("html").niceScroll({ zindex : 90000000, cursorborder : "0px", cursorcolor : self.scrollColor, cursorwidth:"7px", scrollspeed :70, horizrailenabled:false });
				self.niceScroll_mc = $("html").getNiceScroll();
			}


			$(".openGoogleMap").bind('click', function() {
				if(self.curPageview !== null && self.curPageview !== undefined){
					self.curPageview.find("#map_canvas").each(function (){
						$(this).addClass("openMap");
						setTimeout(function(){
							try{
								if(!self.mapLoad) { map_initialize(); self.mapLoad = true; }
							} catch (e) {
								$(this).html($(this).data("con"));
							}
							mapResizer();

							self.curPageview.find(".m-Scrollbar").each(
							  function(){
								var selg = $(this);
								if(selg.data('added')){
									try{	selg.mCustomScrollbar("update");	} catch (e) { }
								}
							});

						},700);
					});
				}
			});



			// Initialize the mobile button action
			self.navUl.data('view',false);

			self.bdy.find('img').each(function() {
				$(this).data("src",$(this).attr('src'));
			});

			if(isTouch){
				$(".tab-pane").each(function() {
					$(this).removeClass("fade");
					$(this).removeClass("in");
				});
			}

			$(".closeMenu").click(function(){
				self.pageHeader.css({"left":"-250px"});
				self.pageHeader.addClass("noborder");
			});

			// Initialize the window resize function
			clearInterval(self.intr);
			$(window).resize(function() {
				clearInterval(self.intr);
				self.intr = setInterval(function(){clearInterval(self.intr); self.windowRez();},100);
			});

			//Initialize the mobile orientationchange function
			$(window).bind( 'orientationchange', function(){
				self.windowRez();
			});

			self.findDeviceType();

			if(!self.z_mobile){
				self.scrollbarLoad();
			}

			$("#supersized").css( {  "opacity":1, "visibility":"visible" });

			$(".home_page.right_content").css({"left":self.winWidth/2-1});
			$(".home_page.left_content").css({"left":0}, 500);

			 $(".home_page").css({"height":"100%"});
			 self.pg_hig = self.winHeight;
			 if(  self.winHeight < $(".right_Holder").height() ||   self.winHeight < $(".left_Holder").height() )	{
				self.pg_hig = $(".right_Holder").outerHeight() > $(".left_Holder").outerHeight() ?  $(".right_Holder").outerHeight() : $(".left_Holder").outerHeight();
			 }
			 if(!isMobileChk){
				$(".home_page").css({"height":self.pg_hig});
			 }else{
				$(".home_page").css({"height":"auto"});
			 }


			self.page_setup();

			if(!self.z_mobile){
				$('body').find(".m-Scrollbar").each(function(){
					$(this).bind( "mouseover", function() {
						try{
							self.scrollbarLoad(true);
						} catch(e){ }
						$(this).unbind('mouseenter').unbind('mouseover');
					});
				});
			}

			var homAniObj = $('.home_page [data-displayTime]')
			if(self.animateEnable){
				homAniObj.css({"opacity":"0", "bottom":"0", "position":"relative"});
			}


			var gg2 =  window.location.hash.split("#");
			if(gg2[1] !== "!home" && gg2[1] !== undefined){
				setTimeout(function(){
					$(".header .nav li a").removeClass("active");
					$(this).addClass("active");
					$(".menu_holder .header").css({"display":"none"});
					self.page_load($('.contentWrapper[data-id$="'+gg2[1]+'"]'));
					$('.header .nav li a[href="'+gg2[1]+'"]').addClass("active");
					window.location = 	gg2[0]+"#";
				}, 1000);
			}



		},

		startAnimatePageItems : function(){
			var self = this;
			var homAniObj = $('.home_page [data-displayTime]')
			if(self.animateEnable){
				homAniObj.css({"opacity":"0", "bottom":"-20", "position":"relative"});
				homAniObj.animate({"bottom":"-20"}, 10);
				homAniObj.each(function(){
					var nu = Math.abs($(this).attr("data-displayTime"));
					$(this).delay(nu*100).css({"bottom":"20"}).animate({"opacity":"1", "bottom":"0"}, 1000, "easeInOutQuart" )
				});
			}
		},


		findDeviceType : function(){
			var self = this;
			self.oriWidth = $(window).width();
			self.winWidth =   $(window).width();
			self.winHeight =   $(window).height();

			self.ipadPort = (self.winWidth >= 768 &&  self.winWidth < 1024);
			self.mobile = self.winWidth <= 959 && !self.ipadPort;
			self.midMobile = self.winWidth <= 767 && self.winWidth > 479;
			self.minMobile = self.winWidth <= 480;
			isMobileChk = self.winWidth < 768;
			lowResDesktop = self.winWidth <= 979;
			},


		page_setup : function (){

			var self = this;

			self.findDeviceType();

		//	self.animateEnable = !isMobileChk ? true : false;

			self.navTop = true;

			self.pgAdded = false;
			if(self.curPageview !== null && self.curPageview !== undefined){
				if(!isMobileChk){
					self.curPageview.css({"height":self.winHeight});
				}else{
					self.curPageview.css({"height":"auto"});
				}
				self.pgAdded = (self.curPageview.length > 0) ? true : false;
			}


			self.page_reset();

			$(".bodyContainer").css({"min-width":self.winWidth});

			if(!isMobileChk){
				$(".home_page").css({"width":self.winWidth/2,"position":"absolute"});
				$(".bodyContainer").css({"min-height":self.pg_hig});
				$(".menu_holder .header").css({"display":"block"});

				if($(".showHideMenu").data("open")){
					$(".showHideMenu").data("open",false);
				}
			}else{
				$(".home_page").css({"width":self.winWidth,"position":"relative"});
				if(self.pgAdded){
					$(".bodyContainer").css({"min-height":"auto"});
				}else{
					$(".bodyContainer").css({"min-height":"0px"});
				}

				if(!$(".showHideMenu").data("open")){
					$(".menu_holder .header").css({"display":"none"});
				}
			}

			self.pg_hig = self.winHeight;

			var time_ = self.startLoad && !isMobileChk ? 500 : 70;

			setTimeout(function(){

				 $(".home_page").css({"height":"100%"});
				 self.pg_hig = self.winHeight;
				 if(  self.winHeight < $(".right_Holder").height() ||   self.winHeight < $(".left_Holder").height() )	{
					self.pg_hig = $(".right_Holder").outerHeight() > $(".left_Holder").outerHeight() ?  $(".right_Holder").outerHeight() : $(".left_Holder").outerHeight();
				 }

				 $(".home_page").css({"min-height":"100%"});

				 if(!isMobileChk){
					$(".bodyContainer").css({"min-height":self.pg_hig});
					$(".home_page").css({"height":self.pg_hig});
				}else{
					if(self.pgAdded){
						$(".bodyContainer").css({"min-height":"auto"});
					}else{
						$(".bodyContainer").css({"min-height":"0px"});
					}
					$(".home_page").css({"height":"auto"});
				}

				 $('.contentWrapper').each(function(){

					if(!self.z_mobile){
						$(this).css({"height":self.pg_hig});
						if($(this).find(".m-Scrollbar").length < 1){
							$(this).css({"overflow":"auto"});
						}
					}else{
						$(this).css({"height":"auto"});
						$(this).css({"overflow":"auto"});
					}
				 });

			 }, time_);


			// Change the default image in img tag, if mobile version the data-src-small image is assign to the img tag

			if(self.rez && $("body").data("bgType") !== isMobileChk && $("body").data("bgType") !== undefined){
				$("body").data("bgType",isMobileChk);
				$("body").find('.parallax').each(function(){
					var img = !isMobileChk ? $(this).attr("data-src") : ($(this).attr("data-src-small")? $(this).attr("data-src-small")  : $(this).attr("data-src"));
					var imgAtt = !isTouch ? "fixed" : "scroll";
					if(img !== undefined){
						$(this).css({"background-image":"url("+img+")", "background-attachment": imgAtt});
					}
				});
			}

			if(!self.z_mobile){

				setTimeout(function(){

					try{
					self.curPageview.find(".m-Scrollbar").each(
					  function(){
						var selg = $(this);
						selg.find(".mCustomScrollBox").css({"height": self.pg_hig});
						if(selg.data('added')){
							try{	selg.mCustomScrollbar("update");	} catch (e) { }
						}
					});

				   } catch (e) { }

				},500);

				setTimeout(function(){
					try{
						self.niceScroll_mc.resize();
					} catch (e) { }
				}, 750);
			}

		},


		page_load : function (e){
			var self = this;
			self.curPageview = e;

			if(!self.z_mobile){
				setTimeout(function(){
					self.curPageview.find(".m-Scrollbar").each(
						function(){
						$(this).mCustomScrollbar("scrollTo","top");
					});
				}, 1100);
			}

			if(isTouch){
				setTimeout(function(){
					self.curPageview.animate({ scrollTop: "0px" }, 500, "easeInOutQuart" );
				}, 1100);
			}


			$('.contentWrapper').fadeOut(500);
			self.curPageview.delay(500).fadeIn(500);
			self.startLoad = true;

			self.page_setup();

			self.startLoad = false;

		},


		page_reset : function(){
			var self = this;

			if(!isMobileChk){

				$(".home_page").css({"display":"block"});

				if($(".bodyContainer").hasClass("mobile")){
					$(".home_container").removeClass("mobile");
					$(".bodyContainer").removeClass("mobile");
					$(".home_page .logo_holder").append($(".logo"));
					$(".home_page .menu_holder").append($(".header"));
				}

				$(".mobile_header .page_close").css({"display":"none"});

				var sval  = self.winWidth > 1519 ? 475 : 375;

				var r_val = self.pgAdded ? self.winWidth/2+(sval-1) : self.winWidth/2;
				var l_val = self.pgAdded ?  -sval : 0;
				var d_Tim = self.startLoad && self.pgAdded ? 0 : 500;

				if(self.startLoad){
					$(".home_page.right_content").delay(d_Tim).animate({"left": r_val }, 500, "easeInOutQuart" );
					$(".home_page.left_content").delay(d_Tim).animate({"left":l_val}, 500, "easeInOutQuart" );
				}else{
					$(".home_page.right_content").css({"left": r_val });
					$(".home_page.left_content").css({"left": l_val });
				}

				if(self.pgAdded){
					$(".home_page .logo").addClass("leftMove");
					$(".home_page .page_close").animate({"opacity":1}, 500, "easeInOutQuart" );
					$(".home_page.right_content").addClass("home_right_content_border");
				}else{
					setTimeout(function(){
						$(".home_page .logo").removeClass("leftMove");
					}, 500);
					setTimeout(function(){ $(".home_page.right_content").removeClass("home_right_content_border"); }, 850);
					$(".home_page .page_close").css({"opacity":0} );
				}

			}else{

				if(!$(".bodyContainer").hasClass("mobile")){
					$(".home_container").addClass("mobile");
					$(".bodyContainer").addClass("mobile");

					$(".mobile_header .logo_holder").append($(".logo"));
					$(".mobile_header .menu_holder").append($(".header"));
				}

				$(".home_page.right_content").stop().css({"left":0});
				$(".home_page.left_content").stop().css({"left":0});

				$(".home_page .page_close").css({"opacity":"0"});

				if(self.pgAdded){
					$(".mobile_header .page_close").css({"display":"block"});
					$(".home_page").css({"display":"none"});
				}else{
					$(".mobile_header .page_close").css({"display":"none"});
					$(".home_page").css({"display":"block"});
				}

			}

		},


		scrollbarLoad : function(e){

			var self = this;

			if(isTouch){
				$('body').find(".contentWrapper").each(function(){
					$(this).css({"overflow-y":"auto", "-webkit-overflow-scrolling": "touch"});
					$(this).addClass("enablHardwareAcc");
				});
				return;
			}

			$('body').find(".darkStyle .m-Scrollbar, .darkStyle.m-Scrollbar").each(function(){
				$(this).data("scrColor","light-thin");
			});

			$('body').find(".lightStyle .m-Scrollbar, .lightStyle.m-Scrollbar").each( function(){
				$(this).data("scrColor","dark-thin");
			});


			$("body").find(".m-Scrollbar").each(
				  function(){
					  var selg = $(this);
					  if(!selg.data('added')){
						  var scrCol = selg.data("scrColor") !== undefined ? selg.data("scrColor") : "light-thin";
						  selg.mCustomScrollbar({
							  theme: scrCol,
							  autoHideScrollbar:true,
							  scrollInertia: 200,
							  mouseWheelPixels: 320
						  });
					  }else{

						 selg.find(".mCustomScrollBox").css({"height":self.pg_hig})
						 selg.mCustomScrollbar("update");

					 }
				   selg.data('added', true);
			  });

			  $('body').find(".m-Scrollbar-hor, .m-Scrollbar").each(
				  function(){
					if($(this).data('added')){
						$(this).mCustomScrollbar("update");
					}
			   });

		},


		templateSetting : function (){
			var self = this;

			// Settings Code //
			var  ccc = $(".contactPage");

			if($("body").hasClass("white_version")){
				$(".switch").text("Dark Version");
			}

			$(".switch").click(function(){
				if($("body").hasClass("white_version")){
					$(this).text("Light Version");
					$("body").removeClass("white_version");
					$("body").find(".lightStyle").addClass("darkStyle")
					$("body").find(".lightStyle").removeClass("lightStyle");
				}else{
					$(this).text("Dark Version");
					$("body").addClass("white_version");
					$("body").find(".darkStyle").addClass("lightStyle")
					$("body").find(".darkStyle").removeClass("darkStyle");
				}
			});


			$(".switch_page").click(function(){
				if($("body").hasClass("plain_bg")){
					$(this).text("Plain Version");
					$("body").removeClass("plain_bg");
					if($.supersized.vars.is_paused){ api.playToggle(); }
					$("#supersized").show();
				}else{
					$(this).text("Designer Version");
					$("body").addClass("plain_bg");

					if(!$.supersized.vars.is_paused){ api.playToggle(); }
					$("#supersized").hide();
				}

			});


			$(".setting_tools .iButton").click(function(){
				if(self.setting_tool.css("right") === "-1px"){
					self.setting_tool.css({"right":"-161px"});
				}else{
					self.setting_tool.css({"right":"-1px"});
				}
			});


			setTimeout( function(){
				self.setting_tool.animate({"right":"-161px"}, 500);
				}, 3000);

			// End Setting code
		},

// Window Resize function
		windowRez : function (){
			var self = this;
			if(Number(self.bdy.data("width")) !== Number($(window).width()) || Number(self.bdy.data("height")) !== Number($(window).height())){
				self.bdy.data("width", Number($(window).width()));
				self.bdy.data("height", Number($(window).height()));
				self.rez = true;
				self.page_setup();
				self.rez = false;
			}
		}
	};



// Initizlize and create the main plug-in
	$.fn.mainFm = function(params) {
	var $fm = $(this);
		var instance = $fm.data('GBInstance');
		if (!instance) {
			if (typeof params === 'object' || !params){
				return $fm.data('GBInstance',  new mainFm($fm, params));
			}
		} else {
			if (instance[params]) {
				return instance[params].apply(instance, Array.prototype.slice.call(arguments, 1));
			}
		}
	};


})( jQuery );
