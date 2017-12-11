"use string";

var tl = new TimelineMax();

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

var tl = new TimelineMax();

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

var animateElem = $('.coins3__coin');
var scene = new ScrollMagic.Scene({
    duration: $('#frame5').height() * 3 / 7,
    offset: 19500 + $(window).height() * 3 + $('#frame5').height() * 3 / 7
  })
  .setTween('.coins3__coin', {
    y: 0,
    x: 0,
    scale: 1
  })
  .addTo(controller);

var animateElem = $('#balloon');
var scene = new ScrollMagic.Scene({
    duration: $('#frame5').height() * 3 / 7,
    offset: 19500 + $(window).height() * 3 + $('#frame5').height() * 3 / 7
  })
  .setTween('#balloon', {
    y: 0,
    x: 0,
    scale: 1
  })
  .addTo(controller);