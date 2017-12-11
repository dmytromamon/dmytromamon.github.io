"use string";

$(document).ready(function() {   

var animateElem = $('#frame3');
var scene = new ScrollMagic.Scene({
    duration: 2000,
    offset: 10500 + $(window).height() * 2
  })
  .setPin('#frame3')
  .addTo(controller);

$('.draw-trigger').css('top', 10000 + $(window).height() * 2.5)

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength * 3);
  $el.css("stroke-dashoffset", lineLength * 3);
}

var $dot = $("path.stfr212");
pathPrepare($dot);

var tween = new TimelineMax()
  .add(TweenMax.to($dot, 2, {
    strokeDashoffset: 0,
    ease: Linear.easeNone
  }))

var scene = new ScrollMagic.Scene({
    duration: 1500,
    triggerElement: ".draw-trigger",
    tweenChanges: true
  })
  .setTween(tween)
  .addTo(controller);
  
});