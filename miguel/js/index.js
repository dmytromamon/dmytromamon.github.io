'use strict';

var dif = -$(window).height() / 2 + 480;

$(document).ready(function () {

  if ($(window).width() > 767) {
  
  // arrow down animation

  var tl = new TimelineMax();
  tl.to($('.arrow-down'), .75, {
    ease: Power3.easeOut,
    top: 10,
    yoyo: true,
    repeat: -1
  }, 0)

  // calculate path lengths

  function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $kiteline = $("path#kiteline");
  pathPrepare($kiteline);

  var $wallet1 = $("path#wallet1");
  pathPrepare($wallet1);
  var $wallet2_1 = $("path#walletpart2-1");
  pathPrepare($wallet2_1);
  var $wallet8_1 = $("path#walletpart8-1");
  pathPrepare($wallet8_1);
  var $wallet8_2 = $("path#walletpart8-2");
  pathPrepare($wallet8_2);
  var $wallet8_3 = $("path#walletpart8-3");
  pathPrepare($wallet8_3);
  var $walletline = $("path#walletline");
  pathPrepare($walletline);

  var $transfers1 = $("path#transfers1");
  pathPrepare($transfers1);
  var $transfers1_1 = $("path#transferspart1-1");
  pathPrepare($transfers1_1);
  var $transfers9 = $("path#transfers9");
  pathPrepare($transfers9);
  var $transfers10 = $("path#transfers10");
  pathPrepare($transfers10);
  var $transfers11 = $("path#transfers11");
  pathPrepare($transfers11);
  var $transfersline = $("path#transfersline");
  pathPrepare($transfersline);

  var $educate1 = $("path#educate1");
  pathPrepare($educate1);
  var $educateline = $("path#educateline");
  pathPrepare($educateline);

  // init controller
  var controller = new ScrollMagic.Controller();

  // set positions
  var walletoffset = $('#wallet').position().top;
  var transfersoffset = $('#transfers').position().top;
  var educateoffset = $('#educate').position().top;

  // build scene

  // kite line drawing

  var kiteline = new TimelineMax()
    .add(TweenMax.to($kiteline, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: walletoffset / 1.5 - 140 + dif,
      offset: 0,
      tweenChanges: true,
      reverse: false
    })
    .setTween(kiteline)
    //    .addIndicators({
    //      name: "kiteline animation"
    //    })
    .addTo(controller);

  // kite line drawing

  var scene = new ScrollMagic.Scene({
      duration: 70,
      offset: walletoffset - 140 + dif,
      reverse: false
    })
    .setPin(".phone-box")
    //    .addIndicators({
    //      name: "pin phone box"
    //    })
    .addTo(controller);

  var animateElem = $('.arrow-down');
  var scene = new ScrollMagic.Scene({
      duration: 70,
      offset: walletoffset + dif
    })
    .setTween(".arrow-down", {
      opacity: 0
    })
    //    .addIndicators({
    //      name: "arrow fade out"
    //    })
    .addTo(controller);

  // wallet line drawing

  var wallet1 = new TimelineMax()
    .add(TweenMax.to($wallet1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: walletoffset - 70 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(wallet1)
    //    .addIndicators({
    //      name: "wallet1 animation"
    //    })
    .addTo(controller);

  var wallet2_1 = new TimelineMax()
    .add(TweenMax.to($wallet2_1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: walletoffset + 350 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(wallet2_1)
    .addTo(controller);

  var wallet8_1 = new TimelineMax()
    .add(TweenMax.to($wallet8_1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: walletoffset + 1300 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(wallet8_1)
    .addTo(controller);

  var wallet8_2 = new TimelineMax()
    .add(TweenMax.to($wallet8_2, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: walletoffset + 1350 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(wallet8_2)
    .addTo(controller);

  var wallet8_3 = new TimelineMax()
    .add(TweenMax.to($wallet8_3, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: walletoffset + 1400 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(wallet8_3)
    .addTo(controller);

  var walletline = new TimelineMax()
    .add(TweenMax.to($walletline, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 935,
      offset: walletoffset + 2000 - 70 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(walletline)
    //    .addIndicators({
    //      name: "walletline animation"
    //    })
    .addTo(controller);

  // wallet line drawing

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: walletoffset - 70 + dif
    })
    .setPin(".wrapper")
    //    .addIndicators({
    //      name: "pin wallet section"
    //    })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      duration: 935,
      offset: walletoffset + 2000 - 70 + dif,
      reverse: false
    })
    .setPin(".phone-box")
    //    .addIndicators({
    //      name: "pin phone box"
    //    })
    .addTo(controller);

  // transfers line drawing

  var transfers1 = new TimelineMax()
    .add(TweenMax.to($transfers1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: transfersoffset + 2000 - 35 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfers1)
    //    .addIndicators({
    //      name: "transfers1 animation"
    //    })
    .addTo(controller);

  var transfers1_1 = new TimelineMax()
    .add(TweenMax.to($transfers1_1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: transfersoffset + 2000 - 35 + 250 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfers1_1)
    .addTo(controller);

  var transfers9 = new TimelineMax()
    .add(TweenMax.to($transfers9, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 50,
      offset: transfersoffset + 2000 - 35 + 2000 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfers9)
    .addTo(controller);

  var transfers10 = new TimelineMax()
    .add(TweenMax.to($transfers10, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 50,
      offset: transfersoffset + 2000 - 35 + 2000 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfers10)
    .addTo(controller);

  var transfers11 = new TimelineMax()
    .add(TweenMax.to($transfers11, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 50,
      offset: transfersoffset + 2000 - 35 + 2000 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfers11)
    .addTo(controller);

  var transfersline = new TimelineMax()
    .add(TweenMax.to($transfersline, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 900,
      offset: transfersoffset + 4000 - 35 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(transfersline)
    //    .addIndicators({
    //      name: "transfersline animation"
    //    })
    .addTo(controller);

  // transfers line drawing

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: transfersoffset + 2000 - 35 + dif
    })
    .setPin(".wrapper")
    //    .addIndicators({
    //      name: "pin transfers section"
    //    })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      duration: 900,
      offset: transfersoffset + 4000 - 35 + dif,
      reverse: false
    })
    .setPin(".phone-box")
    //    .addIndicators({
    //      name: "pin phone box"
    //    })
    .addTo(controller);

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: educateoffset + 4000 - 35 + dif
    })
    .setPin(".wrapper")
    //    .addIndicators({
    //      name: "pin transfers section"
    //    })
    .addTo(controller);

  // educate line drawing

  var educate1 = new TimelineMax()
    .add(TweenMax.to($educate1, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 2000,
      offset: educateoffset + 4000 - 35 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(educate1)
    //    .addIndicators({
    //      name: "educate1 animation"
    //    })
    .addTo(controller);

  var educateline = new TimelineMax()
    .add(TweenMax.to($educateline, 2, {
      strokeDashoffset: 0,
      ease: Linear.easeNone
    }))

  var scene = new ScrollMagic.Scene({
      duration: 200,
      offset: educateoffset + 6000 - 35 + dif,
      tweenChanges: true,
      reverse: false
    })
    .setTween(educateline)
    //    .addIndicators({
    //      name: "educateline animation"
    //    })
    .addTo(controller);

  // educate line drawing
    
    }
})

// smooth scroll to anchor section

$(document).on('click', 'a[href="#wallet"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).position().top - 70
  }, 500);
});

$(document).on('click', 'a[href="#signup"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).position().top + 6000
  }, 1500);
});

// animate logotype eyes on mousemove

$(window).mousemove(function (e) {
  var change;
  var xpos = e.clientX;
  var ypos = e.clientY;
  xpos = xpos / 2;
  ypos = ypos / 4;
  $('.logo-eye').css('transform', 'translate(' + (0 + (xpos / 480)) + 'px,' + (0 + (ypos / 300)) + 'px)');
});

// animate trees color on rollover

$('.trees-illustrations polygon, .trees-illustrations path').on('mouseover', function () {
  var tl = new TimelineMax();
  tl.fromTo($(this), 3, {
    ease: Power3.easeOut,
    fill: '#74AFB0'
  }, {
    ease: Power3.easeOut,
    fill: '#94CFD0'
  }, 0)
})

// animate key illustration on rollover

$('#key').on('mouseover', function () {
  var tl = new TimelineMax();
  tl.fromTo($(this), 2, {
    ease: Power3.easeOut,
    rotation: 10,
    transformOrigin: '50% 50%'
  }, {
    ease: Power3.easeOut,
    rotation: 0,
    transformOrigin: '50% 50%'
  }, 0)
})
