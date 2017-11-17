"use strict";

var i;

$('#start').click(function () {
	$('.slot-name').removeClass('active');
	$('.slot-name').eq(1).addClass('active');
	$('.slot-name').css('bottom', 0);
	i = 1;
	myLoop();
});

function myLoop() {
	var tl = new TimelineMax();

	setTimeout(function () {

		TweenLite.set($('.slot-name'), {
			transformPerspective: 500
		});

		$('.slot-name').eq(i).removeClass('active');
		TweenMax.set($('.slot-name').eq(i), {
			webkitFilter: "blur(" + .5 + "px)"
		});
		tl.to($('.slot-name').eq(i), .05, {
			ease: Power3.easeOut,
			rotationX: 20,
			opacity: .8
		}, 0);
		TweenMax.set($('.slot-name').eq(i + 2), {
			webkitFilter: "blur(" + 1 + "px)"
		});
		tl.to($('.slot-name').eq(i + 2), .05, {
			ease: Power3.easeOut,
			rotationX: -20,
			opacity: .8
		}, 0);
		tl.to($('.slot-name').eq(i + 1), .05, {
			ease: Power3.easeOut,
			rotationX: 0,
			opacity: 1
		}, 0);
		TweenMax.set($('.slot-name').eq(i + 1), {
			webkitFilter: "blur(" + 0 + "px)"
		});
		$('.slot-name').eq(i + 1).addClass('active');
		$('.slot-name').css('bottom', i * 25);
		i++;
		if (i < 48) {
			myLoop();
		};
		if (i == 48) {
			$('.slot-name').css('bottom', (i - 1) * 25 + 3);
			$('.slot-name').css("filter", "blur(0px)");
			setTimeout(function () {
				$('.slot-name').css('bottom', (i - 1) * 25 + 0);
			}, 100)
		}
	}, 50);
};