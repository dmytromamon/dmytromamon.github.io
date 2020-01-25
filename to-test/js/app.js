$(document).ready(function () {
  $(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top + ($id.css('padding-top').slice(0, -2) - 55);

    // animated top scrolling
    $('body, html').animate({
      scrollTop: pos
    }, 1500);
  });

  var tlMouse = new TimelineMax({
    onComplete: function () {
      this.restart();
    }
  });

  tlMouse.fromTo($('.mouse__arrow').eq(0), .7, {
      ease: Power3.easeOut,
      y: -2
    }, {
      ease: Power3.easeOut,
      y: 0
    }, 1)
    .fromTo($('.mouse__arrow').eq(1), .7, {
      ease: Power3.easeOut,
      y: -2
    }, {
      ease: Power3.easeOut,
      y: 0
    }, 1.5)
    .to($('.mouse__arrow'), .5, {
      ease: Power3.easeOut,
      y: -2
    }, 3)

  var tl = new TimelineMax();

  tl.to($('.head__copy, .section__note'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 1)

  $('#video h3').viewportChecker({
    classToAdd: 'visible',
    repeat: false
  });

  $('#video p').viewportChecker({
    classToAdd: 'visible',
    repeat: false
  });

  var numberCal = 0,
    numberWheel = 0;

  $('#tabs, #learn-more').viewportChecker({
    repeat: true,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.set($('.wheel1-circle'), {
          ease: Power3.easeOut,
          strokeDashoffset: 1218
        }, 0)
        .set($('.calendar-rectangle'), {
          ease: Power3.easeOut,
          height: 0,
          attr: {
            y: 441
          }
        }, 0)
        .set($('.wheel2-circle'), {
          ease: Power3.easeOut,
          strokeDashoffset: 1218
        }, 0)

      numberCal = 0;
      numberWheel = 0;
    }
  });

  $('#wheel1').viewportChecker({
    repeat: true,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.to($('.wheel1-circle'), 2, {
        ease: Power3.easeOut,
        strokeDashoffset: 304
      }, .5)
    }
  });

  $('#calendar').viewportChecker({
    repeat: true,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.to($('.calendar-rectangle'), 2, {
        ease: Power3.easeOut,
        height: 420,
        attr: {
          y: 21
        }
      }, .5)
      var print = '$' + numberCal + 'm';
      $('.infographics__calendar').html(print);

      setInterval(function () {
        if (numberCal < 7) {
          numberCal = $('.calendar-rectangle').css('height').slice(0, -2) / 70;
          numberCal = Math.round(numberCal);
          print = '$' + numberCal + 'm';
          $('.infographics__calendar').html(print);
        }
      }, 200)
    }
  });

  $('#wheel2').viewportChecker({
    repeat: true,
    callbackFunction: function () {
      var tl = new TimelineMax();

      tl.to($('.wheel2-circle'), 2, {
        ease: Power3.easeOut,
        strokeDashoffset: 218
      }, .5)
      var print = numberWheel + '%';
      $('.infographics__wheel2').html(print);

      setInterval(function () {
        if (numberWheel < 101) {
          numberWheel = (1216 - $('.wheel2-circle').css('stroke-dashoffset').slice(0, -2)) / 12;
          numberWheel = Math.round(numberWheel);
          print = numberWheel + '%';
          $('.infographics__wheel2').html(print);
        }
      }, 20)
    }
  });
  
  var controller, scene;
  
  initScrollMagic();

  function initScrollMagic() {
    // init controller
    controller = new ScrollMagic.Controller();

    $(function () { // wait for document ready

      var frames1 = 48,
        frames2 = 65,
        frames3 = 47;

      for (i = frames1; i >= 0; i--) {
        var a = i;
        if (i < 10) {
          i = '0' + i;
        }
        $('.animation__block').eq(0).append('<img id="img1-' + a + '" src="img/animation1/Pipette_Plexus_WhiteBG00' + i + '.jpg" alt="">')
      }

      for (i = frames2; i >= 0; i--) {
        var a = i;
        if (i < 10) {
          i = '0' + i;
        }
        $('.animation__block').eq(1).append('<img id="img1-' + a + '" src="img/animation2/trash_final_whiteBG00' + i + '.jpg" alt="">')
      }

      for (i = frames3; i >= 0; i--) {
        var a = i;
        if (i < 10) {
          i = '0' + i;
        }
        $('.animation__block').eq(2).append('<img id="img1-' + a + '" src="img/animation3/clock_final_whiteBG00' + i + '.jpg" alt="">')
      }
      
      scene = new ScrollMagic.Scene({
          triggerElement: '#text1',
          offset: $(window).height() / 2,
          duration: 2300 + $(window).height() / 2
        })
        .setPin('#text1')
        .addTo(controller);
      
      scene = new ScrollMagic.Scene({
          triggerElement: '#text2',
          offset: $(window).height() / 2,
          duration: 2300 + $(window).height() / 2
        })
        .setPin('#text2')
        .addTo(controller);
      
      scene = new ScrollMagic.Scene({
          triggerElement: '#text3',
          offset: $(window).height() / 2,
          duration: 2300 + $(window).height() / 2
        })
        .setPin('#text3')
        .addTo(controller);

      function checkElements(container, frames, trigger) {

        for (i = frames; i >= 0; i--) {
          if (i == frames) {
            var id = trigger + ' #img1-0';
            scene = new ScrollMagic.Scene({
                triggerElement: container,
                offset: $(window).height() / 2 + (700 / frames) * i,
                duration: 800
              })
              .setClassToggle(id, 'displayed')
              .addTo(controller);
          } else {
            var id = trigger + ' #img1-' + (frames - i);
            scene = new ScrollMagic.Scene({
                triggerElement: container,
                offset: $(window).height() / 2 + (700 / frames) * i,
                duration: 700 / frames
              })
              .setClassToggle(id, 'displayed')
              .addTo(controller);
          }
        }

        for (i = 0; i < frames; i++) {
          var id = trigger + ' #img1-' + i;
          scene = new ScrollMagic.Scene({
              triggerElement: container,
              offset: $(window).height() / 2 + (700 / frames) * i + 1500,
              duration: 700 / frames
            })
            .setClassToggle(id, 'displayed')
            .addTo(controller);
        }
      }

      checkElements('#text1', frames1, '#trigger1');
      checkElements('#text2', frames2, '#trigger2');
      checkElements('#text3', frames3, '#trigger3');

      scene = new ScrollMagic.Scene({
          triggerElement: "#text1",
          offset: $(window).height() / 2 + 700,
          duration: 800
        })
        .setClassToggle('#text1', 'showText')
        .addTo(controller);

      scene = new ScrollMagic.Scene({
          triggerElement: "#text2",
          offset: $(window).height() / 2 + 700,
          duration: 800
        })
        .setClassToggle('#text2', 'showText')
        .addTo(controller);

      scene = new ScrollMagic.Scene({
          triggerElement: "#text3",
          offset: $(window).height() / 2 + 700,
          duration: 800
        })
        .setClassToggle('#text3', 'showText')
        .addTo(controller);

      // build scene
      scene = new ScrollMagic.Scene({
          triggerElement: ".tabs-pin",
          triggerHook: 0,
//          offset: -83,
          duration: 3000
        })
        .setPin(".tabs-pin")
        .addTo(controller);

      scene = new ScrollMagic.Scene({
          triggerElement: "#tabs",
          offset: $('#tabs h3').closest('.row').height() + $(window).height() / 2 + parseInt($('#tabs').css('padding-top').slice(0, -2)) - 1000,
          duration: 2000
        })
        .setClassToggle('#tab1, #content1', 'active')
        .addTo(controller);

      scene = new ScrollMagic.Scene({
          triggerElement: "#tabs",
          offset: $('#tabs h3').closest('.row').height() + $(window).height() / 2 + parseInt($('#tabs').css('padding-top').slice(0, -2)) + 1000,
          duration: 1000
        })
        .setClassToggle('#tab2, #content2', 'active')
        .addTo(controller);

      scene = new ScrollMagic.Scene({
          triggerElement: "#tabs",
          offset: $('#tabs h3').closest('.row').height() + $(window).height() / 2 + parseInt($('#tabs').css('padding-top').slice(0, -2)) + 2000,
          duration: 4000
        })
        .setClassToggle('#tab3, #content3', 'active')
        .addTo(controller);
    });
  }

  $(document).on('click', '.tab', function () {
    var i = $('.tab').index(this);
    var pos = $('#video').offset().top + $('#video').height() + $('#tabs h3').closest('.row').height() + $(window).height() / 2 + parseInt($('#tabs').css('padding-top').slice(0, -2)) + 1000 * i + 600;

    $('body, html').animate({
      scrollTop: pos
    }, 1000);
  })

  var count_particles, update;
  count_particles = document.querySelector('.js-count-particles');
  update = function () {
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
})
