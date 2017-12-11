"use strict";

$(document).ready(function () {
	var tl = new TimelineMax();
	tl.to($('body'), .2, {
		ease: Power4.easeOut,
		opacity: 1
	}, 0);
	tl.to($('.House_x5F__x5F_name'), .5, {
		ease: Power4.easeOut,
		opacity: 1,
		y: 0
	}, .5);

	tl.set($('.coins3__coin'), {
		x: -1200,
		y: 103,
		scale: 2.23,
		transformOrigin: "50% 50%"
	})

	tl.set($('#balloon'), {
		x: -1200,
		y: -52,
		scale: 2.23,
		transformOrigin: "50% 50%"
	})
})

$('.mobile__buttons1__button').eq(0).click(function () {
	var tl = new TimelineMax();
	$('.mtc1').css('opacity', 0);
	$('.mobile__buttons1__button').removeClass('active');
	$('.mtc1').eq(0).css('opacity', 1);
	$('.mobile__buttons1__button').eq(0).addClass('active');
	tl.to($('.coin'), .5, {
		ease: Power4.easeOut,
		opacity: 0,
		transformOrigin: "50% 0%"
	}, .5);
})

$('.mobile__buttons1__button').eq(1).click(function () {
	var tl = new TimelineMax();
	$('.mtc1').css('opacity', 0);
	$('.mobile__buttons1__button').removeClass('active');
	$('.mtc1').eq(1).css('opacity', 1);
	$('.mobile__buttons1__button').eq(1).addClass('active');
	tl.to($('.coin'), .5, {
		ease: Power4.easeOut,
		opacity: 1,
		transformOrigin: "50% 0%"
	}, .5);
})

$('.mobile__buttons1__button').eq(2).click(function () {
	var tl = new TimelineMax();
	$('.mtc1').css('opacity', 0);
	$('.mobile__buttons1__button').removeClass('active');
	$('.mtc1').eq(2).css('opacity', 1);
	$('.mobile__buttons1__button').eq(2).addClass('active');
})

$('.mobile__buttons1__button').eq(3).click(function () {
	var tl = new TimelineMax();
	$('.mtc1').css('opacity', 0);
	$('.mobile__buttons1__button').removeClass('active');
	$('.mtc1').eq(3).css('opacity', 1);
	$('.mobile__buttons1__button').eq(3).addClass('active');
})

$('.mobile__buttons1__button').eq(4).click(function () {
	var tl = new TimelineMax();
	$('.mtc1').css('opacity', 0);
	$('.mobile__buttons1__button').removeClass('active');
	$('.mtc1').eq(4).css('opacity', 1);
	$('.mobile__buttons1__button').eq(4).addClass('active');
})

$('.mobile__buttons2__button').eq(0).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(0).css('opacity', 1);
	$('.mobile__buttons2__button').eq(0).addClass('active');
})

$('.mobile__buttons2__button').eq(1).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(1).css('opacity', 1);
	$('.mobile__buttons2__button').eq(1).addClass('active');
})

$('.mobile__buttons2__button').eq(2).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(2).css('opacity', 1);
	$('.mobile__buttons2__button').eq(2).addClass('active');
})

$('.mobile__buttons2__button').eq(3).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(3).css('opacity', 1);
	$('.mobile__buttons2__button').eq(3).addClass('active');
})

$('.mobile__buttons2__button').eq(4).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(4).css('opacity', 1);
	$('.mobile__buttons2__button').eq(4).addClass('active');
})

$('.mobile__buttons2__button').eq(5).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(5).css('opacity', 1);
	$('.mobile__buttons2__button').eq(5).addClass('active');
})

$('.mobile__buttons2__button').eq(6).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(6).css('opacity', 1);
	$('.mobile__buttons2__button').eq(6).addClass('active');
})

$('.mobile__buttons2__button').eq(7).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(7).css('opacity', 1);
	$('.mobile__buttons2__button').eq(7).addClass('active');
})

$('.mobile__buttons2__button').eq(8).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(8).css('opacity', 1);
	$('.mobile__buttons2__button').eq(8).addClass('active');
})

$('.mobile__buttons2__button').eq(9).click(function () {
	var tl = new TimelineMax();
	$('.mtc2').css('opacity', 0);
	$('.mobile__buttons2__button').removeClass('active');
	$('.mtc2').eq(9).css('opacity', 1);
	$('.mobile__buttons2__button').eq(9).addClass('active');
})

jQuery(document).ready(function ($) {
	$('#svg_3').viewportChecker({
		callbackFunction: function () {

			function pathPrepare($el) {
				var lineLength = $el[0].getTotalLength();
				$el.css("stroke-dasharray", lineLength * 3);
				$el.css("stroke-dashoffset", lineLength * 3);
			}

			var $word = $("path.stfr312");
			var $circle = $("circle.stfr312");
			var $polyline = $("polyline.stfr312");

			pathPrepare($word);
			pathPrepare($circle);
			pathPrepare($polyline);

			// build tween
			var tween = new TimelineMax()
				.add(TweenMax.to($word, 0.9, {
					strokeDashoffset: 0,
					ease: Linear.easeNone
				}))
				.add(TweenMax.to($circle, 0.9, {
					strokeDashoffset: 0,
					ease: Linear.easeNone
				}))
				.add(TweenMax.to($polyline, 0.9, {
					strokeDashoffset: 0,
					ease: Linear.easeNone
				}))
		}
	})
})

$('.mobile__buttons3__button').eq(0).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(0).css('opacity', 1);
	$('.mobile__buttons3__button').eq(0).addClass('active');
})

$('.mobile__buttons3__button').eq(1).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(1).css('opacity', 1);
	$('.mobile__buttons3__button').eq(1).addClass('active');
})

$('.mobile__buttons3__button').eq(2).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(2).css('opacity', 1);
	$('.mobile__buttons3__button').eq(2).addClass('active');
})

$('.mobile__buttons3__button').eq(3).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(3).css('opacity', 1);
	$('.mobile__buttons3__button').eq(3).addClass('active');
})

$('.mobile__buttons3__button').eq(4).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(4).css('opacity', 1);
	$('.mobile__buttons3__button').eq(4).addClass('active');
})

$('.mobile__buttons3__button').eq(5).click(function () {
	var tl = new TimelineMax();
	$('.mtc3').css('opacity', 0);
	$('.mobile__buttons3__button').removeClass('active');
	$('.mtc3').eq(5).css('opacity', 1);
	$('.mobile__buttons3__button').eq(5).addClass('active');
})

jQuery(document).ready(function ($) {
	$('#Svg_5').viewportChecker({
		callbackFunction: function () {
			var tl = new TimelineMax();
			tl.from($('.frame4-text1'), .5, {
				ease: Power3.easeOut,
				opacity: 0
			})
			tl.from($('.frame4-text2'), .5, {
				ease: Power3.easeOut,
				opacity: 0
			})
			tl.from($('.frame4-text3'), .5, {
				ease: Power3.easeOut,
				opacity: 0
			})
			tl.from($('.frame4-text4'), .5, {
				ease: Power3.easeOut,
				opacity: 0
			})
		}
	})
})

jQuery(document).ready(function ($) {
	$('#balloon').viewportChecker({
		callbackFunction: function () {
			var tl = new TimelineMax();

			tl.to($('.coins3__coin'), 3, {
				x: 0,
				y: 0,
				scale: 1,
				transformOrigin: "50% 50%"
			}, 0)

			tl.to($('#balloon'), 3, {
				x: 0,
				y: 0,
				scale: 1,
				transformOrigin: "50% 50%"
			}, 0)
		}
	})
})

var current1 = 0;
var current2 = 0;
var current3 = 0;

$("#Svg_1").swipe({
	swipe: function (event, direction, duration, fingerCount, fingerData) {
		if (current1 == 0) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(1).css('opacity', 1);
				$('.mobile__buttons1__button').eq(1).addClass('active');
				tl.to($('.coin'), .5, {
					ease: Power4.easeOut,
					opacity: 1,
					transformOrigin: "50% 0%"
				}, .5);		
				setTimeout(function(){					
					current1 = 1;
				}, 250)
			}
		}
		if (current1 == 1) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(2).css('opacity', 1);
				$('.mobile__buttons1__button').eq(2).addClass('active');
				setTimeout(function(){					
					current1 = 2;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(0).css('opacity', 1);
				$('.mobile__buttons1__button').eq(0).addClass('active');
				tl.to($('.coin'), .5, {
					ease: Power4.easeOut,
					opacity: 0,
					transformOrigin: "50% 0%"
				}, .5);
				setTimeout(function(){					
					current1 = 0;
				}, 250)
			}
		}
		if (current1 == 2) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(3).css('opacity', 1);
				$('.mobile__buttons1__button').eq(3).addClass('active');
				setTimeout(function(){					
					current1 = 3;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(1).css('opacity', 1);
				$('.mobile__buttons1__button').eq(1).addClass('active');
				setTimeout(function(){					
					current1 = 1;
				}, 250)
			}
		}
		if (current1 == 3) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(4).css('opacity', 1);
				$('.mobile__buttons1__button').eq(4).addClass('active');
				setTimeout(function(){					
					current1 = 4;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(2).css('opacity', 1);
				$('.mobile__buttons1__button').eq(2).addClass('active');
				setTimeout(function(){					
					current1 = 2;
				}, 250)
			}
		}
		if (current1 == 4) {			
			if (direction == 'left') {
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc1').css('opacity', 0);
				$('.mobile__buttons1__button').removeClass('active');
				$('.mtc1').eq(3).css('opacity', 1);
				$('.mobile__buttons1__button').eq(3).addClass('active');
				setTimeout(function(){					
					current1 = 3;
				}, 250)
			}
		}
	}
});

$("#Svg_2").swipe({
	swipe: function (event, direction, duration, fingerCount, fingerData) {
		if (current2 == 0) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(1).css('opacity', 1);
				$('.mobile__buttons2__button').eq(1).addClass('active');
				setTimeout(function(){					
					current2 = 1;
				}, 250)
			}
		}
		if (current2 == 1) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(2).css('opacity', 1);
				$('.mobile__buttons2__button').eq(2).addClass('active');
				setTimeout(function(){					
					current2 = 2;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(0).css('opacity', 1);
				$('.mobile__buttons2__button').eq(0).addClass('active');
				setTimeout(function(){					
					current2 = 0;
				}, 250)
			}
		}
		if (current2 == 2) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(3).css('opacity', 1);
				$('.mobile__buttons2__button').eq(3).addClass('active');
				setTimeout(function(){					
					current2 = 3;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(1).css('opacity', 1);
				$('.mobile__buttons2__button').eq(1).addClass('active');
				setTimeout(function(){					
					current2 = 1;
				}, 250)
			}
		}
		if (current2 == 3) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(4).css('opacity', 1);
				$('.mobile__buttons2__button').eq(4).addClass('active');
				setTimeout(function(){					
					current2 = 4;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(2).css('opacity', 1);
				$('.mobile__buttons2__button').eq(2).addClass('active');
				setTimeout(function(){					
					current2 = 2;
				}, 250)
			}
		}
		if (current2 == 4) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(5).css('opacity', 1);
				$('.mobile__buttons2__button').eq(5).addClass('active');
				setTimeout(function(){					
					current2 = 5;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(3).css('opacity', 1);
				$('.mobile__buttons2__button').eq(3).addClass('active');
				setTimeout(function(){					
					current2 = 3;
				}, 250)
			}
		}
		if (current2 == 5) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(6).css('opacity', 1);
				$('.mobile__buttons2__button').eq(6).addClass('active');
				setTimeout(function(){					
					current2 = 6;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(4).css('opacity', 1);
				$('.mobile__buttons2__button').eq(4).addClass('active');
				setTimeout(function(){					
					current2 = 4;
				}, 250)
			}
		}
		if (current2 == 6) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(7).css('opacity', 1);
				$('.mobile__buttons2__button').eq(7).addClass('active');
				setTimeout(function(){					
					current2 = 7;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(5).css('opacity', 1);
				$('.mobile__buttons2__button').eq(5).addClass('active');
				setTimeout(function(){					
					current2 = 5;
				}, 250)
			}
		}
		if (current2 == 7) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(8).css('opacity', 1);
				$('.mobile__buttons2__button').eq(8).addClass('active');
				setTimeout(function(){					
					current2 = 8;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(6).css('opacity', 1);
				$('.mobile__buttons2__button').eq(6).addClass('active');
				setTimeout(function(){					
					current2 = 6;
				}, 250)
			}
		}
		if (current2 == 8) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc2').css('opacity', 0);
				$('.mobile__buttons2__button').removeClass('active');
				$('.mtc2').eq(7).css('opacity', 1);
				$('.mobile__buttons2__button').eq(7).addClass('active');
				setTimeout(function(){					
					current2 = 7;
				}, 250)
			}
		}
	}
});

$(".mobile").eq(3).swipe({
	swipe: function (event, direction, duration, fingerCount, fingerData) {
		if (current3 == 0) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(1).css('opacity', 1);
				$('.mobile__buttons3__button').eq(1).addClass('active');
				setTimeout(function(){					
					current3 = 1;
				}, 250)
			}
		}
		if (current3 == 1) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(2).css('opacity', 1);
				$('.mobile__buttons3__button').eq(2).addClass('active');
				setTimeout(function(){					
					current3 = 2;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(0).css('opacity', 1);
				$('.mobile__buttons3__button').eq(0).addClass('active');
				setTimeout(function(){					
					current3 = 0;
				}, 250)
			}
		}
		if (current3 == 2) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(3).css('opacity', 1);
				$('.mobile__buttons3__button').eq(3).addClass('active');
				setTimeout(function(){					
					current3 = 3;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(1).css('opacity', 1);
				$('.mobile__buttons3__button').eq(1).addClass('active');
				setTimeout(function(){					
					current3 = 1;
				}, 250)
			}
		}
		if (current3 == 3) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(4).css('opacity', 1);
				$('.mobile__buttons3__button').eq(4).addClass('active');
				setTimeout(function(){					
					current3 = 4;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(2).css('opacity', 1);
				$('.mobile__buttons3__button').eq(2).addClass('active');
				setTimeout(function(){					
					current3 = 2;
				}, 250)
			}
		}
		if (current3 == 4) {			
			if (direction == 'left') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(5).css('opacity', 1);
				$('.mobile__buttons3__button').eq(5).addClass('active');
				setTimeout(function(){					
					current3 = 5;
				}, 250)
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(3).css('opacity', 1);
				$('.mobile__buttons3__button').eq(3).addClass('active');
				setTimeout(function(){					
					current3 = 3;
				}, 250)
			}
		}
		if (current3 == 5) {			
			if (direction == 'left') {
			}
			if (direction == 'right') {
				var tl = new TimelineMax();
				$('.mtc3').css('opacity', 0);
				$('.mobile__buttons3__button').removeClass('active');
				$('.mtc3').eq(4).css('opacity', 1);
				$('.mobile__buttons3__button').eq(4).addClass('active');
				setTimeout(function(){					
					current3 = 4;
				}, 250)
			}
		}
	}
});