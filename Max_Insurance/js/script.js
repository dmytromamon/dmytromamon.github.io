"use strict";

//animate scroll to anchors without closing menu box

$(document).on('click', '.move__anchor-link', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
})

//animate scroll to anchors without closing menu box

//animate scroll to anchors

$(document).on('click', '.anchor-link', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
})

//animate scroll to anchors

//gsap animation of hero image

$(document).ready(function () {
  var tl = new TimelineMax();
  tl.to($('body'), .2, {
    ease: Power4.easeOut,
    opacity: 1
  }, 0);
  tl.staggerFrom($('.move-bottom'), 1, {
    ease: Power4.easeOut,
    y: 20,
    opacity: 0
  }, .5);
  tl.from($('#lineart'), 1, {
    ease: Power4.easeOut,
    y: -50,
    opacity: 0
  }, 0);
  tl.from($('.hero__build1'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .15);
  tl.from($('.hero__build2'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .2);
  tl.from($('.hero__build3'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .25);
  tl.from($('.hero__build6'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .3);
  tl.from($('.hero__build5'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    x: 25,
    transformOrigin: "50% 100%"
  }, .35);
  tl.from($('.hero__build4'), .75, {
    ease: Power2.easeOut,
    opacity: 0,
    x: 50,
    transformOrigin: "50% 100%"
  }, .4);
  tl.from($('.hero__electric'), 1, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .75);
  tl.from($('.hero__rocks'), 1.5, {
    ease: Power4.easeOut,
    y: 5,
    opacity: 0
  }, .8);
  tl.from($('.hero__tree'), 1, {
    ease: Power2.easeOut,
    scaleY: 0,
    transformOrigin: "50% 100%"
  }, .85);
  tl.from($('.hero__bench'), 1, {
    ease: Power2.easeOut,
    scaleY: 0,
    transformOrigin: "50% 100%"
  }, .9);
  tl.from($('.hero__windmill'), 1, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 100%"
  }, .95);
  tl.from($('.hero__windmill__rotate'), 30, {
    ease: Power0.easeNone,
    transformOrigin: "50% 50%",
    rotation: -360,
    repeat: -1
  }, 1);
  tl.set($('.hero__bike'), {
    opacity: 0
  }, 0);
  tl.set($('.hero__bike'), {
    opacity: 1
  }, 1);
  tl.from($('.hero__girl'), 1, {
    ease: Power0.easeNone,
    x: -20,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 1);
  tl.fromTo($('.hero__bike'), 10, {
    ease: Power0.easeNone,
    x: 800,
    transformOrigin: "50% 50%",
    repeat: -1,
    repeatDelay: 10
  }, {
    ease: Power0.easeNone,
    x: -225,
    transformOrigin: "50% 50%",
    repeat: -1,
    repeatDelay: 10
  }, 1);
  tl.from($('.hero__tractor'), 1, {
    ease: Power4.easeOut,
    x: 20,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 1.05);
  tl.from($('.hero__cow'), 2, {
    ease: Power4.easeOut,
    x: 10,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 1.1);
  tl.from($('.hero__hay'), 1, {
    ease: Power2.easeOut,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 1.15);
  tl.fromTo($('.hero__dog'), 1, {
    ease: Bounce.easeOut,
    rotation: 0,
    repeat: -1,
    repeatDelay: 18.7,
    transformOrigin: "0% 0%"
  }, {
    ease: Bounce.easeOut,
    rotation: -15,
    repeat: -1,
    repeatDelay: 18.7,
    transformOrigin: "0% 0%"
  }, 9.7);
  tl.to($('.hero__dog'), 1, {
    ease: Bounce.easeOut,
    rotation: 0,
    repeat: -1,
    repeatDelay: 18.7,
    transformOrigin: "0% 0%"
  }, 10.7);
})

  //gsap animation of hero image

$(function () {
  
  //balloon moves  

  setInterval(function () {
    var win = $(window);
    if (win.width() >= 1200) {
      $('.menu-box').css({
        'transform': 'translateY(-100%)',
        'display': 'flex'
      });
//      $('.wrap').css('overflow-y', 'auto');
//      $('body').css('overflow-y', 'auto');
    }
    $('.container-inverse').css('height', $('.container').height());

    var balloon = $('.balloon').offset().top,
      insuranceTop = $('.section-insurance-block').position().top,
      insuranceBottom = $('.section-insurance-block').height() + insuranceTop,
      offset = $(window).scrollTop() + $(window).height() / 2;
    if ((offset >= insuranceTop + $(window).height() / 2 - 100) && (offset <= insuranceBottom + $(window).height() / 2)) {
      $('.balloon-container-scroll').css('left', 0);  
      $('.balloon-container').css('opacity', 1); 
      if ($('body').innerWidth() >= 1100) {
        $('.balloon').css('top', -220 + offset - insuranceTop);
      } else {
        $('.balloon').css('top', 41 + offset - insuranceTop - $(window).height() / 2);
      }
    } else if (offset >= insuranceTop + $(window).height() / 2 - 100) {
      var tl = new TimelineMax();
      tl.to($('.balloon'), .5, {
        scale: 1
      }, 0);
      tl.to($('.balloon-hide'), .5, {
        ease: Power4.easeOut,
        opacity: 1
      }, 0);
      $('.balloon').css('left', '50%');
      tl.to($('.balloon__st4'), .5, {
        ease: Power4.easeOut,
        opacity: .749
      }, 0);
    }
    if (($('.balloon').offset().top >= $('#car-section').offset().top - 100) && ($('.balloon').offset().top <= $('#car-section').offset().top + $('#car-section').height()/2 - 100)) {
      var a = $('#car-svg').width()/1.5;
      $('.balloon-container-scroll').css('left', a);
    }
    if (($('.balloon').offset().top >= $('#farm-section').offset().top - 100) && ($('.balloon').offset().top <= $('#farm-section').offset().top + $('#farm-section').height()/2 - 100)) {
      var a = $('#farm-svg').width()/1.5;
      $('.balloon-container-scroll').css('left', -a);
    }
    if (($('.balloon').offset().top >= $('#business-section').offset().top - 100) && ($('.balloon').offset().top <= $('#business-section').offset().top + $('#business-section').height() - 100)) {
      var a = $('#business-svg').width()*1.5;
      if ($(window).width() >= 1200) {
        $('.balloon-container-scroll').css('left', a);        
      } else {    
        $('.balloon-container-scroll').css({
          left: 0
        });   
      }
    }    
    if ($('.balloon').offset().top > $('#business-svg').position().top + $('#business-svg').height() / 3) {
      $('.balloon-container').css('opacity', 0); 
    }

    if (offset >= insuranceBottom) {
      $('.balloon').css('top', insuranceBottom - $(window).height() - 360)
    }
    if (offset <= insuranceTop + $(window).height() / 2 - 100) {
      $('.balloon').css('top', 41)
    }
  }, 0.1)
});

$(function () {
  var tl = new TimelineMax({
      onComplete: function () {
        this.restart();
      }
    }),
    balloon = $('.balloon-container');

  tl.fromTo(balloon, 3, {
    ease: Power0.easeNone,
    x: 4
  }, {
    ease: Power0.easeNone,
    x: -4
  }, 0);
  tl.fromTo(balloon, 3, {
    ease: Power0.easeNone,
    x: -4
  }, {
    ease: Power0.easeNone,
    x: 4
  }, 5);
});

jQuery(document).ready(function ($) {
  $('.balloon-small-section').viewportChecker({
    repeat: true,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.to($('.balloon'), .5, {
        scale: .5
      }, 0);
      $('.balloon').css('left', '50%');
      tl.to($('.balloon-hide'), .5, {
        ease: Power4.easeOut,
        opacity: 0
      }, 0);
    }
  })
})

//balloon moves

//insurances copys svg animation

jQuery(document).ready(function ($) {
  $('#home-section-paragraph').viewportChecker({
    classToAdd: 'visible',
    repeat: false,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.fromTo($('#home'), 1, {
        ease: Power4.easeOut,
        opacity: 0,
        scale: .5,
        transformOrigin: "50% 50%"
      }, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%"
      }, .25);
      tl.from($('.home__fence'), 1, {
        ease: Power4.easeOut,
        scaleY: 0,
        transformOrigin: "50% 100%"
      }, .5);
      tl.from($('.home__house'), 1, {
        ease: Power4.easeOut,
        x: 20,
        transformOrigin: "0% 50%"
      }, .5);
      tl.from($('.home__building'), 1, {
        ease: Power4.easeOut,
        x: -20,
        transformOrigin: "0% 50%"
      }, .5);
      tl.from($('.home__tree'), 1, {
        ease: Power4.easeOut,
        y: 50,
        transformOrigin: "50% 0%"
      }, .5);
      tl.from($('.home__cloud-left'), 1, {
        ease: Power4.easeOut,
        x: -10,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.home__cloud-middle'), 1, {
        ease: Power4.easeOut,
        x: -10,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.home__cloud-right'), 1, {
        ease: Power4.easeOut,
        x: 10,
        transformOrigin: "50% 50%"
      }, .5);
    }
  });
  $('#car-section').viewportChecker({
    classToAdd: 'visible',
    repeat: false,
    callbackFunction: function () {
      var tl = new TimelineMax();
      tl.fromTo($('#car'), 1, {
        ease: Power4.easeOut,
        opacity: 0,
        scale: .5,
        transformOrigin: "50% 50%"
      }, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%"
      }, .25);
      tl.from($('.car__main-car'), 1, {
        ease: Power4.easeOut,
        x: -50,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.car__main-car__co2'), 1, {
        ease: Power4.easeOut,
        opacity: 0,
        transformOrigin: "100% 100%"
      }, .5);
      tl.from($('.car__wheel'), 1, {
        ease: Power4.easeOut,
        rotation: -45,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.car__cloud-left'), 1, {
        ease: Power4.easeOut,
        x: -15,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.car__cloud-right'), 1, {
        ease: Power4.easeOut,
        x: 15,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.car__back-car'), 1, {
        ease: Power4.easeOut,
        x: 15,
        transformOrigin: "50% 50%"
      }, .5);
    }
  });
  $('#farm-section').viewportChecker({
    classToAdd: 'visible',
    repeat: false,
    callbackFunction: function () {
      var tl = new TimelineMax();
      tl.fromTo($('#farm'), 1, {
        ease: Power4.easeOut,
        opacity: 0,
        scale: .5,
        transformOrigin: "50% 50%"
      }, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%"
      }, .25);
      tl.from($('.farm__tractor'), 1, {
        ease: Power4.easeOut,
        x: -50,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.farm__tractor-wheel'), 1, {
        ease: Power4.easeOut,
        rotation: -45,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.farm__chicken'), 1, {
        ease: Power4.easeOut,
        scale: .25,
        transformOrigin: "50% 100%"
      }, .5);
      tl.from($('.farm__cloud-left'), 1, {
        ease: Power4.easeOut,
        x: -15,
        transformOrigin: "50% 50%"
      }, .5);
      tl.from($('.farm__cloud-right'), 1, {
        ease: Power4.easeOut,
        x: 15,
        transformOrigin: "50% 50%"
      }, .5);
    }
  });
  $('#business-section').viewportChecker({
    classToAdd: 'visible',
    repeat: false,
    callbackFunction: function () {
      var tl = new TimelineMax();
      tl.fromTo($('#business'), 1, {
        ease: Power4.easeOut,
        opacity: 0,
        scale: .5,
        transformOrigin: "50% 50%"
      }, {
        ease: Power4.easeOut,
        opacity: 1,
        scale: 1,
        transformOrigin: "50% 50%"
      }, .25);
      tl.from($('.business__building'), 1, {
        ease: Power4.easeOut,
        x: -20,
        transformOrigin: "0% 50%"
      }, .5);
      tl.from($('.business__girl'), 1, {
        ease: Power4.easeOut,
        x: 20,
        transformOrigin: "0% 50%"
      }, .5);
      tl.from($('.business__flower'), 1, {
        ease: Power4.easeOut,
        scaleY: .25,
        scaleX: .5,
        transformOrigin: "50% 100%"
      }, .5);
    }
  });
});

//insurances copys svg animation

//open contact form

$(document).ready(function () {
  $('.contact-open').click(function(){
    $('#contact').css('transform', 'translateY(0)');
    $('.wrap').css('overflow', 'hidden');
    $('html').css('overflow', 'hidden');
  })
  $('.contact-close').click(function(){
    $('#contact').css('transform', 'translateY(100vh)');
    $('.wrap').css('overflow-y', 'auto');
    $('html').css('overflow-y', 'auto');
  })
})

//open contact form