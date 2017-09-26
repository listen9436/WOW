$(function() {

	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	var w = $(window).innerWidth();
	var h = $(window).height();
	var h2 = $(window).height() - 80;
	$(".content-box").css({
		height: h
	});
	$(".content").css({
		height: h2
	});
	$(".body_shadow").css({
		width: w,
		height: h
	});

	$(window).resize(function() {
		$(".content-box").css({
			height: h
		});
		//		$(".content").css({
		//		height:h2
		//		});
		$(".body_shadow").css({
			width: w,
			height: h
		});
	});

	(function goPAGE() {
		if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			yd();
		} else {
			pc();
		}
	})();

	function pc() {
		var scrollFunc = function(event) {
			var e = event || window.event;

			/*ie和谷歌他俩一样*/
			if(e.wheelDelta) {
				if(e.wheelDelta > 0) {
					/*鼠标向上滚动*/
					/* alert(event.wheelDelta);*/
					topGun();
				} else if(e.wheelDelta < 0) {
					/*鼠标向下滚动*/
					/*alert(event.wheelDelta);*/
					bottomGun();
				}
			} else if(e.detail) {
				if(e.detail > 0) {
					/*鼠标向下*/
					/* alert(event.detail);*/
					bottomGun();
				} else if(e.detail < 0) {
					/*鼠标向上*/
					/*alert(event.detail);*/
					topGun();
				}
			}
		};
		if(document.addEventListener) {
			document.addEventListener("DOMMouseScroll", scrollFunc, false);
			/*火狐浏览器鼠标滚动事件监听   （火狐默认的是事件捕获）*/

		}
		window.onmousewheel = document.onmousewheel = scrollFunc;
		/*谷歌，ie鼠标滚动事件   (谷歌，IE默认的是事件冒泡)*/
		function topGun() {
			if($(".content").scrollTop() <= 80) {
				$(".content").stop().animate({
					top: 2000
				}, 300);
				$(".body_shadow").stop().fadeOut(150, function() {
					$(".content-box").css("display", "none");
					$(".logo_box").stop().removeClass("animated fadeOutUp").addClass("animated fadeInDown");
					$(".search_box").stop().removeClass("active_searchBox");
					$(".search").stop().removeClass("avtive_search");
					$(".sousuo").find("img").attr("src", "images/sousuo.png");
					$(".sousuo").stop().removeClass("active_sousuo");
				});
			}
		}

		function bottomGun() {
			$(".body_shadow").stop().fadeIn(150, function() {
				$(".content-box").css("display", "block");
				$(".logo_box").stop().addClass("animated fadeOutUp");
				$(".search").stop().addClass("avtive_search");
				$(".sousuo").find("img").attr("src", "images/sousuo_active.png");
				$(".search_box").stop().addClass("active_searchBox");
				$(".sousuo").stop().addClass("active_sousuo");
				$(".content").stop().animate({
					top: 80
				}, 300);
			});
		}
	}

	function yd() {
			$(".body_shadow").stop().fadeIn(150, function() {
				$(".content-box").css("display", "block");
				$(".logo_box").stop().addClass("animated fadeOutUp");
				$(".search").stop().addClass("avtive_search");
				$(".sousuo").find("img").attr("src", "images/sousuo_active.png");
				$(".search_box").stop().addClass("active_searchBox");
				$(".sousuo").stop().addClass("active_sousuo");
				$(".content").stop().animate({
					top: 60
				}, 300);
			});
	}
})