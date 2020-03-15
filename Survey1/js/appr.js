var frame = 0;
var count;
var d;
var wheel = 0;
var minHeight = $('.wrap').height();
if (minHeight < 620) {
	minHeight = 620;
	wheel = 1;
}

$(function () {
	$('wrap').onwheel = function () {
		return false;
	}
	$.getJSON('data/data.json', function (data) {
		count = data.questions.length;
		setInterval(function () {
			pathBuild();
		}, 5)
	})
});

$('#start').click($.throttle(1000, function () {
	var tl = new TimelineMax();
	tl.to($('.start'), .5, {
		ease: Power3.easeIn,
		y: -minHeight
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
		y: (-minHeight - 4)
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
	tl.to($('.question'), .25, {
		ease: Power3.easeIn,
		y: -minHeight * (frame + 1)
	}, 0);
	for (i = 0; i < count; i++) {
		if (i == frame) {
			var y = $('.point').eq(i).attr('y');
			tl.to($('.point').eq(i), .5, {
				attr: {
					y: y - 150
				},
				opacity: 1
			}, 0);
			$('.point').eq(i).css('pointer-events', 'auto');
		} else if (i == (frame - 1)) {
			var y = $('.point').eq(i).attr('y');
			tl.to($('.point').eq(i), .5, {
				attr: {
					y: y - 150
				}
			}, 0);
		} else {
			var y = $('.point').eq(i).attr('y');
			tl.to($('.point').eq(i), .5, {
				attr: {
					y: y - (minHeight - 300) / 2 / count
				}
			}, 0);
		}
	}
	frame = frame + 1;
	$('#counter').text("Question " + frame + " of " + count);
}));

$('#next').click($.throttle(1000, function () {
	if ((frame > 0) && (frame < count)) {
		var tl = new TimelineMax();
		tl.to($('.container'), .25, {
			ease: Power3.easeIn,
			y: (-minHeight * (frame + 1) - 4)
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 0
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 1
		}, 1);
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
		tl.to($('.question'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * (frame + 1)
		}, 0);
		for (i = 0; i < count; i++) {
			if (i == frame) {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - 150
					},
					opacity: 1
				}, 0);
				$('.point').eq(i).css('pointer-events', 'auto');
				var y = $('.point').eq(i - 1).attr('y');
				tl.to($('.point').eq(i - 1), .5, {
					opacity: 0
				}, 0);
				$('.point').eq(i - 1).css('pointer-events', 'none');
			} else if (i == (frame - 1)) {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - 150
					}
				}, 0);
			} else {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - (minHeight - 300) / 2 / count
					}
				}, 0);
			}
		}
		setTimeout(function () {
			frame = frame + 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
	if (frame == count) {
		var tl = new TimelineMax();
		tl.to($('.finish'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * 2 - 4
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 0
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 1
		}, 1);
		tl.to($('#next'), .25, {
			ease: Power4.easeOut,
			yPercent: 0,
			y: 100
		}, 0);
		tl.to($('#restart'), .25, {
			ease: Power4.easeOut,
			y: -100
		}, 0);
		tl.to($('.container'), .25, {
			ease: Power3.easeIn,
			y: (-minHeight * (frame + 1) - 4)
		}, 0);
		tl.set($('.svg-box:nth-child(' + (frame + 1) + ') > .svg-box'), {
			opacity: 0,
			y: 50
		});
		tl.to($('.question'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * (frame + 1)
		}, 0);
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
		for (i = 0; i < count; i++) {
			if (i == frame) {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - 150
					},
					opacity: 0
				}, 0);
				$('.point').eq(i).css('pointer-events', 'auto');
				var y = $('.point').eq(i - 1).attr('y');
				tl.to($('.point').eq(i - 1), .5, {
					opacity: 0
				}, 0);
				$('.point').eq(i - 1).css('pointer-events', 'auto');
			} else if (i == (frame - 1)) {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - 150
					},
					opacity: 0
				}, 0);
			} else {
				var y = $('.point').eq(i).attr('y');
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y - (minHeight - 300) / 2 / count
					},
					opacity: 0
				}, 0);
			}
		}
		setTimeout(function () {
			frame = frame + 1;
		}, 250);
	}
}));

$('#prev').click($.throttle(1000, function () {
	if ((frame > 1) && (frame < (count + 1))) {
		var tl = new TimelineMax();
		tl.to($('.container'), .25, {
			ease: Power3.easeIn,
			y: (-minHeight * (frame - 1) - 4)
		}, 0);
		tl.to($('#prev'), .25, {
			ease: Power3.easeIn,
			opacity: 0
		}, 0);
		tl.to($('#prev'), .25, {
			ease: Power3.easeIn,
			opacity: 1
		}, 1);
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
		tl.to($('.question'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * (frame - 1)
		}, 0);
		for (i = 0; i < count; i++) {
			if (i == (frame - 2)) {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + 150
					},
					opacity: 1
				}, 0);
				$('.point').eq(i).css('pointer-events', 'auto');
			} else if (i == (frame - 1)) {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + 150
					},
					opacity: 0
				}, 0);
				$('.point').eq(i).css('pointer-events', 'none');
			} else {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + (minHeight - 300) / 2 / count
					}
				}, 0);
			}
		}
		setTimeout(function () {
			frame = frame - 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
	if (frame == count + 1) {
		var tl = new TimelineMax();
		tl.to($('.finish'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * (frame - 1) - 4
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power4.easeOut,
			yPercent: -100,
			y: 0
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 0
		}, 0);
		tl.to($('#next'), .25, {
			ease: Power3.easeIn,
			opacity: 1
		}, 1);
		tl.to($('#restart'), .25, {
			ease: Power4.easeOut,
			y: 0
		}, 0);
		tl.to($('.container'), .25, {
			ease: Power3.easeIn,
			y: (-minHeight * (frame - 1) - 4)
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
		tl.to($('.question'), .25, {
			ease: Power3.easeIn,
			y: -minHeight * (frame - 1)
		}, 0);
		for (i = 0; i < count; i++) {
			if (i == (frame - 2)) {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + 150
					},
					opacity: 1
				}, 0);
				$('.point').eq(i).css('pointer-events', 'auto');
			} else if (i == (frame - 1)) {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + (minHeight - 300) / 2 / count
					}
				}, 0);
				$('.point').eq(i).css('pointer-events', 'none');
			} else {
				var y = $('.point').eq(i).attr('y');
				y = parseInt(y);
				tl.to($('.point').eq(i), .5, {
					attr: {
						y: y + (minHeight - 300) / 2 / count
					}
				}, 0);
			}
		}
		setTimeout(function () {
			frame = frame - 1;
			$('#counter').text("Question " + frame + " of " + count);
		}, 250);
	}
}));

if (wheel == 0) {

	$('.wrap').bind('DOMMouseScroll', $.throttle(1000, function (e) {
		if (frame == 0) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.start'), .25, {
					ease: Power3.easeIn,
					y: -minHeight
				}, 0);
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {}
		}
		if (frame == 1) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
						var y = $('.point').eq(i - 1).attr('y');
						tl.to($('.point').eq(i - 1), .5, {
							opacity: 0
						}, 0);
						$('.point').eq(i - 1).css('pointer-events', 'none');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {}
		}
		if ((frame > 1) && (frame < count)) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
						var y = $('.point').eq(i - 1).attr('y');
						tl.to($('.point').eq(i - 1), .5, {
							opacity: 0
						}, 0);
						$('.point').eq(i - 1).css('pointer-events', 'none');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
				}, 0);
				tl.to($('.container-start'), .25, {
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		if (frame == count) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1) - 4
				}, 0);
				tl.to($('#next'), .25, {
					ease: Power4.easeOut,
					yPercent: 0,
					y: 100
				}, 0);
				tl.to($('#restart'), .25, {
					ease: Power4.easeOut,
					y: -100
				}, 0);
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							},
							opacity: 0
						}, 0);
					}
				}
				$('#counter').text(" ");
				setTimeout(function () {
					frame = frame + 1;
				}, 250);
			} else {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1) - 4
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
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		if (frame == count + 1) {
			if (e.originalEvent.wheelDelta < 0) {} else {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1) - 4
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
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							}
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		return false;
	}));

	$('.wrap').bind('mousewheel', $.throttle(1000, function (e) {
		if (frame == 0) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.start'), .25, {
					ease: Power3.easeIn,
					y: -minHeight
				}, 0);
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {}
		}
		if (frame == 1) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
						var y = $('.point').eq(i - 1).attr('y');
						tl.to($('.point').eq(i - 1), .5, {
							opacity: 0
						}, 0);
						$('.point').eq(i - 1).css('pointer-events', 'none');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {}
		}
		if ((frame > 1) && (frame < count)) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
						var y = $('.point').eq(i - 1).attr('y');
						tl.to($('.point').eq(i - 1), .5, {
							opacity: 0
						}, 0);
						$('.point').eq(i - 1).css('pointer-events', 'none');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							}
						}, 0);
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame + 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			} else {
				var tl = new TimelineMax();
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
				}, 0);
				tl.to($('.container-start'), .25, {
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		if (frame == count) {
			if (e.originalEvent.wheelDelta < 0) {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1) - 4
				}, 0);
				tl.to($('#next'), .25, {
					ease: Power4.easeOut,
					yPercent: 0,
					y: 100
				}, 0);
				tl.to($('#restart'), .25, {
					ease: Power4.easeOut,
					y: -100
				}, 0);
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame + 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame + 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == frame) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y - (minHeight - 300) / 2 / count
							},
							opacity: 0
						}, 0);
					}
				}
				$('#counter').text(" ");
				setTimeout(function () {
					frame = frame + 1;
				}, 250);
			} else {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1) - 4
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
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 0
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		if (frame == count + 1) {
			if (e.originalEvent.wheelDelta < 0) {} else {
				var tl = new TimelineMax();
				tl.to($('.finish'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1) - 4
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
				tl.to($('.container'), .25, {
					ease: Power3.easeIn,
					y: (-minHeight * (frame - 1) - 4)
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
				tl.to($('.question'), .25, {
					ease: Power3.easeIn,
					y: -minHeight * (frame - 1)
				}, 0);
				for (i = 0; i < count; i++) {
					if (i == (frame - 2)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							},
							opacity: 1
						}, 0);
						$('.point').eq(i).css('pointer-events', 'auto');
					} else if (i == (frame - 1)) {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + 150
							}
						}, 0);
						$('.point').eq(i).css('pointer-events', 'none');
					} else {
						var y = $('.point').eq(i).attr('y');
						y = parseInt(y);
						tl.to($('.point').eq(i), .5, {
							attr: {
								y: y + (minHeight - 300) / 2 / count
							}
						}, 0);
					}
				}
				setTimeout(function () {
					frame = frame - 1;
					$('#counter').text("Question " + frame + " of " + count);
				}, 250);
			}
		}
		return false;
	}));

}

$(function () {
	$.getJSON('data/data.json', function (data) {
		var form = '<form id="get-answers" onsubmit="return false;">';
		$.each(data.questions, function (i, f) {
			form = form + '<input class="answerLeft" type="number" hidden="hidden" name="answerLeft" value="50">';
			form = form + '<input class="answerRight" type="number" hidden="hidden" name="answerRight" value="50">';
			var svg = '<div class="svg-box" style="height: ' + (minHeight - 100) + 'px"><div class="container-left"><div class="answer answer-left">' + f.answerLeft + '</div><div class="pointer-canvas__pointer-left">50%</div></div><div class="container-right"><div class="answer answer-right">' + f.answerRight + '</div><div class="pointer-canvas__pointer-right">50%</div></div>';
			svg = svg + '</svg></div>';
			$(svg).appendTo(".container");
			var question = '<div class="question" style="top: ' + (150 + minHeight * (i + 1)) + 'px">' + f.question + '</div>';
			$(question).appendTo(".pointer-canvas");
		});
		form = form + '<input id="submit" type="submit" value="Submit Answers"></form>'
		$(form).appendTo($('.container-finish'));
		var main = '<svg class="svg" viewBox="0 0 320 ' + minHeight + '"><defs><linearGradient id="scroll-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#FA2844"></stop><stop stop-color="#B03171" offset="50%"></stop><stop offset="100%" stop-color="#65399E"></stop></linearGradient></defs><path class="path" stroke="url(#scroll-gradient)" stroke-width="3" fill="none" /></svg>';
		$(main).appendTo(".pointer-canvas");
		$.each(data.questions, function (i, f) {
			count = data.questions.length;
			var arrayY = [];
			//			array[].push();
			var size = (minHeight - 300) / 2 + (minHeight - 300) / 2 * i / count + 300;
			if (i == frame - 1) {
				var size = (minHeight - 300) / 2 + 300;
			}
			var point = '<svg class="point" width="36" height="36" viewBox="0 0 64 64" x="142" y="' + size + '"><circle class="dragger-dot" style="stroke-width: 3px; fill: currentColor;" r="10" cx="32" cy="32"></circle><circle style="stroke-width: 3px; fill: transparent;" r="24" cx="32" cy="32"></circle><path style="color: inherit; stroke-width: 2px; stroke: currentColor; fill: currentColor;" d="M32.2 51.6c-10.9 0-19.8-8.9-19.8-19.8S21.3 12 32.2 12 52 20.9 52 31.8s-8.9 19.8-19.8 19.8zm0-38.7c-10.4 0-18.9 8.5-18.9 18.9s8.5 18.9 18.9 18.9c10.4 0 18.9-8.5 18.9-18.9s-8.5-18.9-18.9-18.9zM57.8 37.3c-.2-.2-.2-.4 0-.6l4.1-4.1-4.1-4.1c-.2-.2-.2-.4 0-.6s.4-.2.6 0l4.4 4.4c.2.2.2.4 0 .6l-4.4 4.4c-.1.1-.4.1-.6 0z M51.2 32.8c-.1-.1-.1-.2-.1-.3 0-.2.2-.4.4-.4h11c.2 0 .4.2.4.4s-.2.4-.4.4h-11c-.1.1-.2 0-.3-.1z M6.2 27.8c.2.2.2.4 0 .6l-4.1 4.1 4.1 4.1c.2.2.2.4 0 .6-.2.2-.4.2-.6 0l-4.4-4.4c-.2-.2-.2-.4 0-.6l4.4-4.4c.1-.2.4-.2.6 0z M12.8 32.2c.1.1.1.2.1.3 0 .2-.2.4-.4.4h-11c-.3.1-.5-.1-.5-.4 0-.2.2-.4.4-.4h11c.2 0 .3 0 .4.1z"></path></svg>'
			$(point).appendTo(".svg");
		});
		$.when($.getJSON('data/data.json')).done(function () {
			$('.point').draggable({
				drag: function (event, ui) {
					var offset = $('.pointer-canvas').offset();
					var position = ui.position;
					var $circle = $(this);
					var i = $(this).index();
					var parent = $circle.parent().offset();
					parent = parent.left;
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
						var parent = $circle.parent().offset();
						parent = -parent.left - 142;
                        var firstCheck = 0
                        if (position.left - parent > 224) {
                          if (firstCheck == 0) {
                            parent = -142;
                            firstCheck = 1;
                          }
                        }
					}
					var radius = 0;
					var percent = Math.round((position.left + radius - parent - 60) / 164 * 100);

					$circle.prop('x').baseVal.value = position.left - parent + radius;
					$('.svg-box:nth-child(' + (i - 1) + ') .container-left .pointer-canvas__pointer-left').text(100 - percent + "%");
					$('.answerLeft').eq(i - 2).attr('value', 100 - percent);
					$('.svg-box:nth-child(' + (i - 1) + ') .container-right .pointer-canvas__pointer-right').text(percent + "%");
					$('.answerRight').eq(i - 2).attr('value', percent);
					$('.svg-box:nth-child(' + (i - 1) + ') > .container-left').css("transform", "translateY(-50%) scale(" + ((100 - percent) / 100 + 1) + ")");
					$('.svg-box:nth-child(' + (i - 1) + ') > .container-right').css("transform", "translateY(-50%) scale(" + (percent / 100 + 1) + ")");
					if ((position.left + radius - parent) > 224) {
						$circle.prop('x').baseVal.value = 224;
						$('.svg-box:nth-child(' + (i - 1) + ') .container-left .pointer-canvas__pointer-left').text(0 + "%");
						$('.svg-box:nth-child(' + (i - 1) + ') .container-right .pointer-canvas__pointer-right').text(100 + "%");
						$('.svg-box:nth-child(' + (i - 1) + ') > .container-left').css("transform", "translateY(-50%) scale(1)");
						$('.svg-box:nth-child(' + (i - 1) + ') > .container-right').css("transform", "translateY(-50%) scale(2)");
						$('.answerLeft').eq(i - 2).attr('value', 0);
						$('.answerRight').eq(i - 2).attr('value', 100);
					}
					if ((position.left + radius - parent) < 60) {
						$circle.prop('x').baseVal.value = 60;
						$('.svg-box:nth-child(' + (i - 1) + ') .container-left .pointer-canvas__pointer-left').text(100 + "%");
						$('.svg-box:nth-child(' + (i - 1) + ') .container-right .pointer-canvas__pointer-right').text(0 + "%");
						$('.svg-box:nth-child(' + (i - 1) + ') > .container-left').css("transform", "translateY(-50%) scale(2)");
						$('.svg-box:nth-child(' + (i - 1) + ') > .container-right').css("transform", "translateY(-50%) scale(1)");
						$('.answerLeft').eq(i - 2).attr('value', 100);
						$('.answerRight').eq(i - 2).attr('value', 0);
					}
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
				$('.answerLeft').eq(i).attr('value', 100);
				$('.answerRight').eq(i).attr('value', 0);
				tl.to($('.container-left').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 2
				}, 0);
				tl.to($('.container-right').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 1
				}, 0);
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
				$('.answerLeft').eq(i).attr('value', 0);
				$('.answerRight').eq(i).attr('value', 100);
				tl.to($('.container-left').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 1
				}, 0);
				tl.to($('.container-right').eq(i), .5, {
					ease: Power4.easeOut,
					scale: 2
				}, 0);
			})
		});
	});
});

function pathBuild() {
	var arrayX = [];
	var arrayY = [];
	var d = "";
	arrayX.push(160.1);
	arrayY.push(-25);
	arrayX.push(160);
	arrayY.push($('.point').eq(0).prop('y').baseVal.value - (minHeight - 300) / 2 / count);
	for (i = 0; i < $('.point').length; i++) {
		arrayX.push($('.point').eq(i).prop('x').baseVal.value + 18);
		arrayY.push($('.point').eq(i).prop('y').baseVal.value + 18);
	}
	arrayX.push(160);
	arrayY.push($('.point').eq(count - 1).prop('y').baseVal.value + (minHeight - 300) / 2 / count);
	arrayX.push(160);
	var height = minHeight;
	arrayY.push(height);
	for (i = 0; i < (arrayX.length - 2); i++) {
		var path = $('.path');
		var p1x = arrayX[i];
		var p1y = arrayY[i];
		var p2x = arrayX[i + 1];
		var p2y = arrayY[i + 1];
		var p3x = arrayX[i + 2];
		var p3y = arrayY[i + 2];

		var d = d + "M" + p1x + ", " + p1y + "C" + p1x + ", " + (p1y + 25) + " " + p2x + ", " + (p2y - 25) + " " + p2x + ", " + p2y + " S" + p3x + ", " + (p3y - 25) + " " + p3x + ", " + p3y;
		path.attr("d", d);
	}
}

$('#restart').click(function () {
	var tl = new TimelineMax();
	tl.to($('.start'), .5, {
		ease: Power3.easeIn,
		y: -minHeight
	}, 0);
	tl.to($('.container'), .5, {
		ease: Power3.easeIn,
		y: (-minHeight - 4)
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

	for (i = 0; i < count; i++) {
		var y = $('.point').eq(0).attr('y');
		y = parseInt(y);
		tl.to($('.point').eq(0), .5, {
			attr: {
				y: (minHeight - 300) / 2 + 150
			},
			opacity: 1
		}, 0);
		var y = $('.point').eq(1).attr('y');
		y = parseInt(y);
		tl.to($('.point').eq(1), .5, {
			attr: {
				y: (minHeight - 300) / 2 + 300
			},
			opacity: 0
		}, 0);
		var y = $('.point').eq(i).attr('y');
		y = parseInt(y);
		tl.to($('.point').eq(i), .5, {
			attr: {
				y: (minHeight - 300) / 2 + 300 + (minHeight - 300) / 2 / count * (i - 1)
			},
			opacity: 0
		}, 0);
	}

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
})

$(document).ready(function () {
	$.when($.getJSON('data/data.json')).done(function () {
		$('#submit-box').on('mouseover', '.last-point', function () {
			var index = $(this).index() - 2;
			var tl = new TimelineMax();
			tl.to($('.question-compare'), .5, {
				ease: Power3.easeOut,
				opacity: 0
			}, 0)
			tl.to($('.question-compare').eq(index), .5, {
				ease: Power3.easeOut,
				opacity: 1
			}, 0)
		});
		$('#submit').click(function () {
			$('#submit-box').css('display', 'flex').fadeIn();

			var main = '<svg class="svg" viewBox="0 0 320 ' + minHeight + '"><defs><linearGradient id="scroll-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#FA2844"></stop><stop stop-color="#B03171" offset="50%"></stop><stop offset="100%" stop-color="#65399E"></stop></linearGradient></defs><path class="compare-path" stroke="url(#scroll-gradient)" stroke-width="3" fill="none" /></svg>';
			$(main).appendTo("#submit-box");

			var arrayX = [];
			var arrayY = [];
			var d = "";
			arrayX.push(160.1);
			arrayY.push(-25);
			arrayX.push(160);
			arrayY.push(0);
			for (i = 0; i < $('.point').length; i++) {
				arrayX.push($('.point').eq(i).prop('x').baseVal.value + 18);
				arrayY.push(minHeight / (count + 1) * (i + 1));
			}
			arrayX.push(160);
			arrayY.push(minHeight);
			arrayX.push(160);
			var height = minHeight + 25;
			arrayY.push(height);
			for (i = 0; i < (arrayX.length - 2); i++) {
				var path = $('.compare-path');
				var p1x = arrayX[i];
				var p1y = arrayY[i];
				var p2x = arrayX[i + 1];
				var p2y = arrayY[i + 1];
				var p3x = arrayX[i + 2];
				var p3y = arrayY[i + 2];

				var d = d + "M" + p1x + ", " + p1y + "C" + p1x + ", " + (p1y + 25) + " " + p2x + ", " + (p2y - 25) + " " + p2x + ", " + p2y + " S" + p3x + ", " + (p3y - 25) + " " + p3x + ", " + p3y;
				path.attr("d", d);
				if ((i > 0) && (i < arrayX.length - 3)) {
					var point = '<svg class="last-point" width="36" height="36" viewBox="0 0 64 64" x="' + (p2x - 18) + '" y="' + (p2y - 18) + '"><circle style="stroke-width: 3px; fill: transparent; stroke: #aaa" r="10" cx="32" cy="32"></circle></svg>';
					$(point).appendTo($('.svg'));
				}
			}

			var main = '<svg class="svg" viewBox="0 0 320 ' + minHeight + '"><path class="overall-path" stroke="#ccc" stroke-width="3" fill="none" /></svg>';
			$(main).prependTo("#submit-box");
			var arrayX = [];
			var arrayY = [];
			arrayX.push(160.1);
			arrayY.push(-25);
			arrayX.push(160);
			arrayY.push(0);
			$.getJSON('data/data.json', function (data) {
				$.each(data.questions, function (i, f) {
					var x = f.overallRight * 164 / 100 + 78;
					arrayX.push(x);
					arrayY.push(minHeight / (count + 1) * (i + 1));
					var text = '<div class="question-compare"><p>' + f.question + '</p></div>';
					$(text).appendTo($('.right-side'));
					$.each(f.links, function (i1, f1) {
						var link = '<a href="' + f1.link + '">' + f1.name + '</a>';
						$(link).appendTo($('.question-compare').eq(i));
					});
				});
				arrayX.push(160);
				arrayY.push(minHeight);
				arrayX.push(160);
				var height = minHeight + 25;
				arrayY.push(height);
			});
			$.when($.getJSON('data/data.json')).done(function () {
				var d = "";
				for (i = 0; i < (arrayX.length - 2); i++) {
					var path = $('.overall-path');
					var p1x = arrayX[i];
					var p1y = arrayY[i];
					var p2x = arrayX[i + 1];
					var p2y = arrayY[i + 1];
					var p3x = arrayX[i + 2];
					var p3y = arrayY[i + 2];

					var d = d + "M" + p1x + ", " + p1y + "C" + p1x + ", " + (p1y + 25) + " " + p2x + ", " + (p2y - 25) + " " + p2x + ", " + p2y + " S" + p3x + ", " + (p3y - 25) + " " + p3x + ", " + p3y;
					path.attr("d", d);
				}
			});
		})
	})
})