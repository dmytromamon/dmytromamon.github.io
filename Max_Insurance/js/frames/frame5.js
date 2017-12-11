"use string";

$(document).ready(function() {
  
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

var c;
$(document).ready(function() {
  c = $('#frame5').height()

var animateElem = $('#frame5');
var scene = new ScrollMagic.Scene({
    duration: 1500,
    offset: 19000 + $(window).height() * 3 + c
  })
  .setPin('#frame5')
  .addTo(controller);

var animateElem = $('.coins3__coin');
var scene = new ScrollMagic.Scene({
    duration: 1500,
    offset: 19500 + $(window).height() * 2 + $('#frame5').height()
  })
  .setTween('.coins3__coin', {
    y: 0,
    x: 0,
    scale: 1
  })
  .addTo(controller);

var animateElem = $('#balloon');
var scene = new ScrollMagic.Scene({
    duration: 1500,
    offset: 19500 + $(window).height() * 2 + $('#frame5').height()
  })
  .setTween('#balloon', {
    y: 0,
    x: 0,
    scale: 1
  })
  .addTo(controller);
  
})
  
});