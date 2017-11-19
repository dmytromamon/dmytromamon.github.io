"use strict";

var tl = new TimelineMax();

TweenLite.set($('.slot-name'), {
	transformPerspective: 500
});

tl.set($('.slot-name').eq(0), {
	rotationX: 25
});
tl.set($('.slot-name').eq(2), {
	rotationX: -25
});

$('#start').click(function () {
	var tl = new TimelineMax();
	var i = $('.slot-name').length;
	var a;
	tl.set($('.slot-container__column'), {
		y: 0,
		webkitFilter: "blur(" + .5 + "px)"
	});
	tl.to($('.slot-container__column'), 2, {
		ease: Circ.easeOut,
		y: -38 * (i - 3) - 5,
		webkitFilter: "blur(" + .5 + "px)"
	}, 0);
	tl.to($('.slot-container__column'), .2, {
		ease: Power2.easeIn,
		y: -38 * (i - 3),
		webkitFilter: "blur(" + 0 + "px)"
	}, 2);
	setTimeout(function () {
		$('.slot-name').eq(i - 1).css('filter', 'blur(0.45px)');
		$('.slot-name').eq(i - 3).css('filter', 'blur(0.45px)');
	}, 2000)

	for (a = 0; a < (i - 3); a++) {
		setTimeout(function () {
			tl = new TimelineMax();
			tl.to($('.slot-name').eq(a), .005, {
				ease: Power3.easeOut,
				rotationX: 25
			}, 0);
			tl.to($('.slot-name').eq(a + 1), .005, {
				ease: Power3.easeOut,
				rotationX: 0
			}, 0);
			tl.to($('.slot-name').eq(a + 2), .005, {
				ease: Power3.easeOut,
				rotationX: -25,
				webkitFilter: "blur(0.25px)"
			}, 0);
		}, 2000 / i);
	};
});

$(document).keypress(function (e) {
	if (e.which == 13) {
		var tl = new TimelineMax();
		var i = $('.slot-name').length;
		var a;
		tl.set($('.slot-container__column'), {
			y: 0,
			webkitFilter: "blur(" + .5 + "px)"
		});
		tl.to($('.slot-container__column'), 2, {
			ease: Circ.easeOut,
			y: -38 * (i - 3) - 5,
			webkitFilter: "blur(" + .5 + "px)"
		}, 0);
		tl.to($('.slot-container__column'), .2, {
			ease: Power2.easeIn,
			y: -38 * (i - 3),
			webkitFilter: "blur(" + 0 + "px)"
		}, 2);
		setTimeout(function () {
			$('.slot-name').eq(i - 1).css('filter', 'blur(0.45px)');
			$('.slot-name').eq(i - 3).css('filter', 'blur(0.45px)');
		}, 2000)

		for (a = 0; a < (i - 3); a++) {
			setTimeout(function () {
				tl = new TimelineMax();
				tl.to($('.slot-name').eq(a), .005, {
					ease: Power3.easeOut,
					rotationX: 25
				}, 0);
				tl.to($('.slot-name').eq(a + 1), .005, {
					ease: Power3.easeOut,
					rotationX: 0
				}, 0);
				tl.to($('.slot-name').eq(a + 2), .005, {
					ease: Power3.easeOut,
					rotationX: -25,
					webkitFilter: "blur(0.25px)"
				}, 0);
			}, 2000 / i);
		};
	}
});