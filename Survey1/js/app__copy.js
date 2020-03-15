var frame = 0;
var count;
$(function () {
	$.getJSON('data/data.json', function (data) {
		count = data.questions.length;
	})
});

$('#start').click(function () {
	var tl = new TimelineMax();
	tl.to($('.start'), .5, {
		ease: Power3.easeIn,
		y: -$(window).height()
	}, 0);
	tl.to($('#prev'), .5, {
		ease: Power4.easeOut,
		yPercent: -100,
		y: 0
	}, 0);
	tl.to($('#next'), .5, {
		ease: Power4.easeOut,
		yPercent: -100,
		y: 0
	}, 0);
	tl.to($('#restart'), .5, {
		ease: Power4.easeOut,
		y: 0
	}, 0);
	tl.to($('.container'), .5, {
		ease: Power3.easeIn,
		y: (-$(window).height() - 4)
	}, 0);
	tl.to($('.container-start'), .25, {
		ease: Power3.easeIn,
		y: -50,
		opacity: 0
	}, 0);
	tl.set($('.svg-box:first-child > .svg-box'), {
		opacity: 0,
		y: 50
	});
	tl.fromTo($('.svg-box:first-child > .svg-box'), .25, {
		ease: Power1.easeIn,
		opacity: 0,
		y: 50
	}, {
		ease: Power1.easeIn,
		opacity: 1,
		y: 0
	}, .25);
	frame = frame + 1;
	$('#counter').text("Question " + frame + " of " + count);
})

$('#next').click(function () {
	if ((frame > 0) && (frame < count)) {
		var tl = new TimelineMax();
		tl.to($('.container'), .5, {
			ease: Power3.easeIn,
			y: (-$(window).height() * (frame + 1) - 4)
		}, 0);
		tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
			opacity: 0,
			y: 50
		});
		tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
			ease: Power1.easeIn,
			opacity: 0,
			y: 50
		}, {
			ease: Power1.easeIn,
			opacity: 1,
			y: 0
		}, .25);
		setTimeout(function () {
			frame = frame + 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
	if (frame == count) {
		var tl = new TimelineMax();
		tl.to($('.finish'), .5, {
			ease: Power3.easeIn,
			y: -$(window).height() * (frame + 1) - 4
		}, 0);
		tl.to($('#next'), .5, {
			ease: Power4.easeOut,
			yPercent: 0,
			y: 100
		}, 0);
		tl.to($('#restart'), .25, {
			ease: Power4.easeOut,
			y: -100
		}, 0);
		tl.to($('.container'), .5, {
			ease: Power3.easeIn,
			y: (-$(window).height() * (frame + 1) - 4)
		}, 0);
		tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
			opacity: 0,
			y: 50
		});
		tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
			ease: Power1.easeIn,
			opacity: 0,
			y: 50
		}, {
			ease: Power1.easeIn,
			opacity: 1,
			y: 0
		}, .25);
		$('#counter').text(" ");
		setTimeout(function () {
			frame = frame + 1;
		}, 250);
	}
});

$('#prev').click(function () {
	if ((frame > 1) && (frame < (count + 1))) {
		var tl = new TimelineMax();
		tl.to($('.container'), .5, {
			ease: Power3.easeIn,
			y: (-$(window).height() * (frame - 1) - 4)
		}, 0);
		tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
			opacity: 0,
			y: -50
		});
		tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
			ease: Power1.easeIn,
			opacity: 0,
			y: -50
		}, {
			ease: Power1.easeIn,
			opacity: 1,
			y: 0
		}, .25);
		setTimeout(function () {
			frame = frame - 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
	if (frame == count + 1) {
		var tl = new TimelineMax();
		tl.to($('.finish'), .5, {
			ease: Power3.easeIn,
			y: -$(window).height() * (frame - 1) - 4
		}, 0);
		tl.to($('#next'), .5, {
			ease: Power4.easeOut,
			yPercent: -100,
			y: 0
		}, 0);
		tl.to($('#restart'), .5, {
			ease: Power4.easeOut,
			y: 0
		}, 0);
		tl.to($('.container'), .5, {
			ease: Power3.easeIn,
			y: (-$(window).height() * (frame - 1) - 4)
		}, 0);
		tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
			opacity: 0,
			y: -50
		});
		tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
			ease: Power1.easeIn,
			opacity: 0,
			y: -50
		}, {
			ease: Power1.easeIn,
			opacity: 1,
			y: 0
		}, .25);
		setTimeout(function () {
			frame = frame - 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
});

//$(window).bind('DOMMouseScroll', $.throttle(200, function (e) {
//	if (frame == 0) {
//		if (e.originalEvent.wheelDelta < 0) {
//			var tl = new TimelineMax();
//			tl.to($('.start'), .5, {
//				ease: Power3.easeIn,
//				y: -$(window).height()
//			}, 0);
//			tl.to($('.container'), .5, {
//				ease: Power3.easeIn,
//				y: (-$(window).height() - 4)
//			}, 0);
//			tl.to($('#prev'), .5, {
//				ease: Power4.easeOut,
//				yPercent: -100,
//				y: 0
//			}, 0);
//			tl.to($('#next'), .5, {
//				ease: Power4.easeOut,
//				yPercent: -100,
//				y: 0
//			}, 0);
//			tl.to($('#restart'), .25, {
//				ease: Power4.easeOut,
//				y: 0
//			}, 0);
//			tl.to($('.container-start'), .5, {
//				ease: Power3.easeIn,
//				y: -50,
//				opacity: 0
//			}, 0);
//			tl.set($('.svg-box:first-child > .svg-box'), {
//				opacity: 0,
//				y: 50
//			});
//			tl.fromTo($('.svg-box:first-child > .svg-box'), .25, {
//				ease: Power1.easeIn,
//				opacity: 0,
//				y: 50
//			}, {
//				ease: Power1.easeIn,
//				opacity: 1,
//				y: 0
//			}, .25);
//			setTimeout(function () {
//				frame = frame + 1;
//				$('#counter').text("Question " + frame + " of " + count);
//			}, 250);
//		} else {}
//	}
//	if (frame == 1) {
//		if (e.originalEvent.wheelDelta < 0) {
//			var tl = new TimelineMax();
//			tl.to($('.container'), .5, {
//				ease: Power3.easeIn,
//				y: (-$(window).height() * (frame + 1) - 4)
//			}, 0);
//			tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
//				opacity: 0,
//				y: 50
//			});
//			tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
//				ease: Power1.easeIn,
//				opacity: 0,
//				y: 50
//			}, {
//				ease: Power1.easeIn,
//				opacity: 1,
//				y: 0
//			}, .25);
//			setTimeout(function () {
//				frame = frame + 1;
//				$('#counter').text("Question " + frame + " of " + count);
//			}, 250);
//		} else {}
//	}
//	if ((frame > 1) && (frame < count)) {
//		if (e.originalEvent.wheelDelta < 0) {
//			var tl = new TimelineMax();
//			tl.to($('.container'), .5, {
//				ease: Power3.easeIn,
//				y: (-$(window).height() * (frame + 1) - 4)
//			}, 0);
//			tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
//				opacity: 0,
//				y: 50
//			});
//			tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
//				ease: Power1.easeIn,
//				opacity: 0,
//				y: 50
//			}, {
//				ease: Power1.easeIn,
//				opacity: 1,
//				y: 0
//			}, .25);
//			setTimeout(function () {
//				frame = frame + 1;
//				$('#counter').text("Question " + frame + " of " + count);
//			}, 250);
//		} else {
//			var tl = new TimelineMax();
//			tl.to($('.container'), .5, {
//				ease: Power3.easeIn,
//				y: (-$(window).height() * (frame - 1) - 4)
//			}, 0);
//			tl.to($('.container-start'), .5, {
//				ease: Power3.easeIn,
//				y: -200,
//				opacity: 0
//			}, 0);
//			tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
//				opacity: 0,
//				y: -50
//			});
//			tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
//				ease: Power1.easeIn,
//				opacity: 0,
//				y: -50
//			}, {
//				ease: Power1.easeIn,
//				opacity: 1,
//				y: 0
//			}, .25);
//			setTimeout(function () {
//				frame = frame - 1;
//				$('#counter').text("Question " + frame + " of " + count);
//			}, 250);
//		}
//	}
//	if (frame == count) {
//		if (e.originalEvent.wheelDelta < 0) {} else {
//			var tl = new TimelineMax();
//			tl.to($('.container'), .5, {
//				ease: Power3.easeIn,
//				y: (-$(window).height() * (frame - 1) - 4)
//			}, 0);
//			tl.to($('.container-start'), .5, {
//				ease: Power3.easeIn,
//				y: -200,
//				opacity: 0
//			}, 0);
//			tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
//				opacity: 0,
//				y: -50
//			});
//			tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
//				ease: Power1.easeIn,
//				opacity: 0,
//				y: -50
//			}, {
//				ease: Power1.easeIn,
//				opacity: 1,
//				y: 0
//			}, .25);
//			setTimeout(function () {
//				frame = frame - 1;
//				$('#counter').text("Question " + frame + " of " + count);
//			}, 250);
//		}
//	}
//	return false;
//}));

$(window).bind('mousewheel', $.throttle(500, function (e) {
	if (frame == 0) {
		if (e.originalEvent.wheelDelta < 0) {
			var tl = new TimelineMax();
			tl.to($('.start'), .5, {
				ease: Power3.easeIn,
				y: -$(window).height()
			}, 0);
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() - 4)
			}, 0);
			tl.to($('#prev'), .25, {
				ease: Power4.easeOut,
				yPercent: -100,
				y: 0
			}, 0);
			tl.to($('#next'), .25, {
				ease: Power4.easeOut,
				yPercent: -100,
				y: 0
			}, 0);
			tl.to($('#restart'), .25, {
				ease: Power4.easeOut,
				y: 0
			}, 0);
			tl.to($('.container-start'), .5, {
				ease: Power3.easeIn,
				y: -50,
				opacity: 0
			}, 0);
			tl.set($('.svg-box:first-child > .svg-box'), {
				opacity: 0,
				y: 50
			});
			tl.fromTo($('.svg-box:first-child > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: 50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame + 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		} else {}
	}
	if (frame == 1) {
		if (e.originalEvent.wheelDelta < 0) {
			var tl = new TimelineMax();
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame + 1) - 4)
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
				opacity: 0,
				y: 50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: 50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame + 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		} else {}
	}
	if ((frame > 1) && (frame < count)) {
		if (e.originalEvent.wheelDelta < 0) {
			var tl = new TimelineMax();
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame + 1) - 4)
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
				opacity: 0,
				y: 50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: 50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame + 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		} else {
			var tl = new TimelineMax();
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame - 1) - 4)
			}, 0);
			tl.to($('.container-start'), .5, {
				ease: Power3.easeIn,
				y: -200,
				opacity: 0
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
				opacity: 0,
				y: -50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: -50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame - 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		}
	}
	if (frame == count) {
		if (e.originalEvent.wheelDelta < 0) {
			var tl = new TimelineMax();
			tl.to($('.finish'), .5, {
				ease: Power3.easeIn,
				y: -$(window).height() * (frame + 1) - 4
			}, 0);
			tl.to($('#next'), .5, {
				ease: Power4.easeOut,
				yPercent: 0,
				y: 100
			}, 0);
			tl.to($('#restart'), .25, {
				ease: Power4.easeOut,
				y: -100
			}, 0);
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame + 1) - 4)
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
				opacity: 0,
				y: 50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: 50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			$('#counter').text(" ");
			setTimeout(function () {
				frame = frame + 1;
			}, 250);
		} else {
			var tl = new TimelineMax();
			tl.to($('.finish'), .5, {
				ease: Power3.easeIn,
				y: -$(window).height() * (frame - 1) - 4
			}, 0);
			tl.to($('#next'), .5, {
				ease: Power4.easeOut,
				yPercent: -100,
				y: 0
			}, 0);
			tl.to($('#restart'), .5, {
				ease: Power4.easeOut,
				y: 0
			}, 0);
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame - 1) - 4)
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
				opacity: 0,
				y: -50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: -50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame - 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		}
	}
	if (frame == count + 1) {
		if (e.originalEvent.wheelDelta < 0) {} else {
			var tl = new TimelineMax();
			tl.to($('.finish'), .5, {
				ease: Power3.easeIn,
				y: -$(window).height() * (frame - 1) - 4
			}, 0);
			tl.to($('#next'), .5, {
				ease: Power4.easeOut,
				yPercent: -100,
				y: 0
			}, 0);
			tl.to($('#restart'), .5, {
				ease: Power4.easeOut,
				y: 0
			}, 0);
			tl.to($('.container'), .5, {
				ease: Power3.easeIn,
				y: (-$(window).height() * (frame - 1) - 4)
			}, 0);
			tl.set($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), {
				opacity: 0,
				y: -50
			});
			tl.fromTo($('.svg-box:nth-child(' + (frame - 1) + ') > .svg-box'), .25, {
				ease: Power1.easeIn,
				opacity: 0,
				y: -50
			}, {
				ease: Power1.easeIn,
				opacity: 1,
				y: 0
			}, .25);
			setTimeout(function () {
				frame = frame - 1;
				$('#counter').text("Question " + frame + " of " + count);
			}, 250);
		}
	}
	return false;
}));

$(function () {
	$.getJSON('data/data.json', function (data) {
		$.each(data.questions, function (i, f) {
			var svg = '<div class="svg-box" style="height: ' + ($(window).height() - 100) + 'px"><div class="question">' + f.question + '</div><div class="container-left"><div class="answer answer-left">' + f.answerLeft + '</div><div class="pointer-canvas__pointer-left">50%</div></div><div class="container-right"><div class="answer answer-right">' + f.answerRight + '</div><div class="pointer-canvas__pointer-right">50%</div></div><svg class="svg" viewBox="0 0 320 350">'
			svg = svg + '<path class="path" stroke="#64B5F6" stroke-width="3" fill="none" />';
			svg = svg + '<svg class="point" width="36" height="36" viewBox="0 0 64 64" x="142" y="' + 160 + '"><circle class="dragger-dot" style="stroke-width: 3px; fill: currentColor;" r="10" cx="32" cy="32"></circle><circle style="stroke-width: 3px; fill: transparent;" r="24" cx="32" cy="32"></circle><path style="color: inherit; stroke-width: 2px; stroke: currentColor; fill: currentColor;" d="M32.2 51.6c-10.9 0-19.8-8.9-19.8-19.8S21.3 12 32.2 12 52 20.9 52 31.8s-8.9 19.8-19.8 19.8zm0-38.7c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9c10.4 0 18.9-8.5 18.9-18.9s-8.5-18.9-18.9-18.9zM57.8 37.3c-.2-.2-.2-.4 0-.6l4.1-4.1-4.1-4.1c-.2-.2-.2-.4 0-.6s.4-.2.6 0l4.4 4.4c.2.2.2.4 0 .6l-4.4 4.4c-.1.1-.4.1-.6 0z M51.2 32.8c-.1-.1-.1-.2-.1-.3 0-.2.2-.4.4-.4h11c.2 0 .4.2.4.4s-.2.4-.4.4h-11c-.1.1-.2 0-.3-.1z M6.2 27.8c.2.2.2.4 0 .6l-4.1 4.1 4.1 4.1c.2.2.2.4 0 .6-.2.2-.4.2-.6 0l-4.4-4.4c-.2-.2-.2-.4 0-.6l4.4-4.4c.1-.2.4-.2.6 0z M12.8 32.2c.1.1.1.2.1.3 0 .2-.2.4-.4.4h-11c-.3.1-.5-.1-.5-.4 0-.2.2-.4.4-.4h11c.2 0 .3 0 .4.1z"></path></svg>';
			svg = svg + '</svg></div>';
			$(svg).appendTo(".container");
		});
		$.when($.getJSON('data/data.json')).done(function () {
			$('.point').draggable({
				drag: function (event, ui) {
					var offset = $('.pointer-canvas').offset();
					var position = ui.position;
					var $circle = $(this);
					var i = $(this).parent().parent().index();
					var parent = $circle.parent().position();
					parent = parent.left;
					var radius = 0;
					var percent = Math.round((position.left + radius - parent - 60) / 164 * 100);

					$circle.prop('x').baseVal.value = position.left - parent + radius;
					$('.pointer-canvas__pointer-left').eq(i).text(100 - percent + "%");
					$('.pointer-canvas__pointer-right').eq(i).text(percent + "%");
					$('.container-left').eq(i).css("transform", "translateY(-50%) scale(" + ((100 - percent) / 100 + 1) + ")");
					$('.container-right').eq(i).css("transform", "translateY(-50%) scale(" + (percent / 100 + 1) + ")");
					if ((position.left + radius - parent) > 224) {
						$circle.prop('x').baseVal.value = 224;
						$('.pointer-canvas__pointer-left').eq(i).text(0 + "%");
						$('.pointer-canvas__pointer-right').eq(i).text(100 + "%");
						$('.container-left').eq(i).css("transform", "translateY(-50%) scale(1)");
						$('.container-right').eq(i).css("transform", "translateY(-50%) scale(2)");
					}
					if ((position.left + radius - parent) < 60) {
						$circle.prop('x').baseVal.value = 60;
						$('.pointer-canvas__pointer-left').eq(i).text(100 + "%");
						$('.pointer-canvas__pointer-right').eq(i).text(0 + "%");
						$('.container-left').eq(i).css("transform", "translateY(-50%) scale(2)");
						$('.container-right').eq(i).css("transform", "translateY(-50%) scale(1)");
					}
					pathBuild();
				}
			});

			$('.container-left').click(function () {
				var i = $('.container-left').index(this);
				var tl = new TimelineMax();

				tl.to($('.point').eq(i), .5, {
					ease: Power4.easeOut,
					attr: {
						x: 60
					}
				}, 0);
				$('.pointer-canvas__pointer-left').eq(i).text(100 + "%");
				$('.pointer-canvas__pointer-right').eq(i).text(0 + "%");
				tl.to($('.container-left').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 2
				}, 0);
				tl.to($('.container-right').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 1
				}, 0);
				setInterval(function () {
					pathBuild();
				}, 5)
			})
			$('.container-right').click(function () {
				var i = $('.container-right').index(this);
				var tl = new TimelineMax();

				tl.to($('.point').eq(i), .5, {
					ease: Power4.easeOut,
					attr: {
						x: 224
					}
				}, 0);
				$('.pointer-canvas__pointer-left').eq(i).text(0 + "%");
				$('.pointer-canvas__pointer-right').eq(i).text(100 + "%");
				tl.to($('.container-left').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 1
				}, 0);
				tl.to($('.container-right').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 2
				}, 0);
				setInterval(function () {
					pathBuild();
				}, 5)
			})

			function pathBuild() {
				for (i = 0; i < $('.point').length; i++) {
					var path = $('.path').eq(i);
					var p1x = 160;
					var p1y = 0;
					var p2x = $('.point').eq(i).prop('x').baseVal.value + 18;
					var p2y = $('.point').eq(i).prop('y').baseVal.value + 18;
					var p3x = 160;
					var p3y = 350;

					var d = "M" + p1x + ", " + p1y + "C" + p1x + ", " + (p1y + 50) + " " + p2x + ", " + (p2y - 50) + " " + p2x + ", " + p2y + " S" + p3x + ", " + (p3y - 50) + " " + p3x + ", " + p3y;
					path.attr("d", d);
				}
			}
			pathBuild();
		});
	});
});

$('#restart').click(function () {
	var tl = new TimelineMax();
	tl.to($('.start'), .5, {
		ease: Power3.easeIn,
		y: -$(window).height()
	}, 0);
	tl.to($('.container'), .5, {
		ease: Power3.easeIn,
		y: (-$(window).height() - 4)
	}, 0);
	tl.to($('.container-start'), .25, {
		ease: Power3.easeIn,
		y: -50,
		opacity: 0
	}, 0);
	tl.set($('.svg-box:first-child > .svg-box'), {
		opacity: 0,
		y: 50
	});
	tl.fromTo($('.svg-box:first-child > .svg-box'), .25, {
		ease: Power1.easeIn,
		opacity: 0,
		y: 50
	}, {
		ease: Power1.easeIn,
		opacity: 1,
		y: 0
	}, .25);
	frame = 1;

	$('#counter').text("Question " + frame + " of " + count);
	tl.to($('.point'), .5, {
		ease: Power4.easeOut,
		attr: {
			x: 142
		}
	}, 0);
	$('.pointer-canvas__pointer-left').text(50 + "%");
	$('.pointer-canvas__pointer-right').text(50 + "%");
	$('.container-left').css("transform", "translateY(-50%) scale(1.5)");
	$('.container-right').css("transform", "translateY(-50%) scale(1.5)");
	setInterval(function () {
		for (i = 0; i < $('.point').length; i++) {
			var path = $('.path').eq(i);
			var p1x = 160;
			var p1y = 0;
			var p2x = $('.point').eq(i).prop('x').baseVal.value + 18;
			var p2y = $('.point').eq(i).prop('y').baseVal.value + 18;
			var p3x = 160;
			var p3y = 350;

			var d = "M" + p1x + ", " + p1y + "C" + p1x + ", " + (p1y + 50) + " " + p2x + ", " + (p2y - 50) + " " + p2x + ", " + p2y + " S" + p3x + ", " + (p3y - 50) + " " + p3x + ", " + p3y;
			path.attr("d", d);
		}
	}, 5)
})