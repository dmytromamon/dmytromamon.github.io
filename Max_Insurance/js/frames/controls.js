"use string";

$(document).ready(function() {
  
var frame = 0;
var shuffle1 = 0;
var shuffle2 = 0;
var shuffle3 = 0;
var shuffle4 = 0;
var shuffle5 = 0;
var shuffle6 = 0;
var shuffle7 = 0;
var shuffle8 = 0;
var shuffle9 = 0;
var shuffle10 = 0;
var shuffle11 = 0;
var shuffle12 = 0;
var shuffle13 = 0;
var shuffle14 = 0;
var shuffle15 = 0;
var shuffle16 = 0;
var shuffle17 = 0;
var shuffle18 = 0;
var shuffle19 = 0;

//@@@@@@@@@@@@KEYS ANIMATION

var tl = new TimelineMax();
tl.to($('.bottom-key'), .5, {
  ease: Power3.easeOut,
  attr: {
    fill: "#94D5D1"
  }
}, 0)
tl.to($('.bottom-key'), .5, {
  ease: Power3.easeOut,
  attr: {
    fill: "#00A59A"
  }
}, .5)
tl.to($('.bottom-key'), .5, {
  ease: Power3.easeOut,
  attr: {
    fill: "#94D5D1"
  }
}, 1)
tl.to($('.bottom-key'), .5, {
  ease: Power3.easeOut,
  attr: {
    fill: "#00A59A"
  }
}, 1.5)
tl.to($('.bottom-key'), .5, {
  ease: Power3.easeOut,
  attr: {
    fill: "#94D5D1"
  }
}, 2)
tl.to($('#keys'), 1, {
  ease: Power3.easeOut,
  y: -500
}, 3)

//@@@@@@@@@@@@KEYS ANIMATION

//@@@@@@@@@@@@FRAMES

setInterval(function () {
  var height = $(window).scrollTop();
  if (height < 1550) {
    frame = 1;
  }
  if ((height >= 1550) && (height < 2550)) {
    frame = 2;
    if (shuffle1 == 0) {
      $('.shuffle1').ShuffleText([
        'V',
        'V2G IN3'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 15
      });
      shuffle1 = 1;
    }
  }
  if ((height >= 2550) && (height < 3550)) {
    frame = 3;
    if (shuffle2 == 0) {
      $('.shuffle2').ShuffleText([
        '0',
        '43.451744'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 15
      });
      shuffle2 = 1;
    }
  }
  if ((height >= 3550) && (height < 4550)) {
    frame = 4;
    if (shuffle3 == 0) {
      $('.shuffle3').ShuffleText([
        '0, 0',
        '43.451744, -80.488200 '
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 15
      });
      shuffle3 = 1;
    }
  }
  if ((height >= 4550) && (height < 5550)) {
    frame = 5;
  }
  if ((height >= 5550) && (height < 6050 + $(window).height())) {
    frame = 6;
    if (shuffle4 == 0) {
      $('.shuffle4').ShuffleText([
        'D',
        'DISTANCE TO WATER'
      ], {
        loop: false,
        delay: 500,
        shuffleSpeed: 10
      });
      shuffle4 = 1;
    }
  }
  if ((height >= 6050 + $(window).height()) && (height < 6550 + $(window).height())) {
    frame = 7;
    if (shuffle5 == 0) {
      $('.shuffle5').ShuffleText([
        'D',
        'DISTANCE TO FOREST'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle5 = 1;
    }
  }
  if ((height >= 6550 + $(window).height()) && (height < 7050 + $(window).height())) {
    frame = 8;
    if (shuffle6 == 0) {
      $('.shuffle6').ShuffleText([
        'E',
        'ELEVATION'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle6 = 1;
    }
  }
  if ((height >= 7050 + $(window).height()) && (height < 7550 + $(window).height())) {
    frame = 9;
    if (shuffle7 == 0) {
      $('.shuffle7').ShuffleText([
        'N',
        'NUMBER OF FLOORS'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle7 = 1;
    }
  }
  if ((height >= 7550 + $(window).height()) && (height < 8050 + $(window).height())) {
    frame = 10;
    if (shuffle8 == 0) {
      $('.shuffle8').ShuffleText([
        'V',
        'VINYL SIDING'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle8 = 1;
    }
  }
  if ((height >= 8050 + $(window).height()) && (height < 8550 + $(window).height())) {
    frame = 11;
    if (shuffle9 == 0) {
      $('.shuffle9').ShuffleText([
        'F',
        'FIVE YEAR OLD ROOF'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle9 = 1;
    }
  }
  if ((height >= 8550 + $(window).height()) && (height < 9050 + $(window).height())) {
    frame = 12;
    if (shuffle10 == 0) {
      $('.shuffle10').ShuffleText([
        'N',
        'NO BASEMENT'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle10 = 1;
    }
  }
  if ((height >= 9050 + $(window).height()) && (height < 9550 + $(window).height())) {
    frame = 13;
    if (shuffle11 == 0) {
      $('.shuffle11').ShuffleText([
        'P',
        'PVC PLUMBING'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle11 = 1;
    }
  }
  if ((height >= 9550 + $(window).height()) && (height < 10050 + $(window).height() * 2)) {
    frame = 14;
    if (shuffle12 == 0) {
      $('.shuffle12').ShuffleText([
        'A',
        'AND MANY MORE...'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle12 = 1;
    }
  }
  if ((height >= 10050 + $(window).height() * 2) && (height < 12500 + $(window).height() * 3)) {
    frame = 15;
    if (shuffle13 == 0) {
      $('.shuffle13').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 500,
        shuffleSpeed: 10
      });
      shuffle13 = 1;
    }
  }
  if ((height >= 12500 + $(window).height() * 3) && (height < 13050 + $(window).height() * 3)) {
    frame = 16;
    if (shuffle14 == 0) {
      $('.shuffle14').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle14 = 1;
    }
  }
  if ((height >= 13050 + $(window).height() * 3) && (height < 14050 + $(window).height() * 3)) {
    frame = 17;
    if (shuffle15 == 0) {
      $('.shuffle15').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle15 = 1;
    }
  }
  if ((height >= 14050 + $(window).height() * 3) && (height < 15050 + $(window).height() * 3)) {
    frame = 18;
    if (shuffle16 == 0) {
      $('.shuffle16').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle16 = 1;
    }
  }
  if ((height >= 15050 + $(window).height() * 3) && (height < 16050 + $(window).height() * 3)) {
    frame = 19;
    if (shuffle17 == 0) {
      $('.shuffle17').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle17 = 1;
    }
  }
  if ((height >= 16050 + $(window).height() * 3) && (height < 17050 + $(window).height() * 3)) {
    frame = 20;
    if (shuffle18 == 0) {
      $('.shuffle18').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle18 = 1;
    }
  }
  if ((height >= 17050 + $(window).height() * 3) && (height < 18050 + $(window).height() * 3)) {
    frame = 21;
    if (shuffle19 == 0) {
      $('.shuffle19').ShuffleText([
        '3',
        '349 588 390'
      ], {
        loop: false,
        delay: 1,
        shuffleSpeed: 10
      });
      shuffle19 = 1;
    }
  }
  if ((height >= 18050 + $(window).height() * 3) && (height < 19050 + $(window).height() * 3)) {
    frame = 22;
    $('body').css('background', '#00313c')
  }
  if (height >= 19050 + $(window).height() * 3) {
    frame = 23;
  }
}, 100);

//@@@@@@@@@@@@FRAMES

//@@@@@@@@@@@@BUTTONS

$('.button1-1').click(function () {
  $("html, body").animate({
    scrollTop: 1000
  }, 500);
})
$('.button1-2').click(function () {
  $("html, body").animate({
    scrollTop: 2000
  }, 500);
})
$('.button1-3').click(function () {
  $("html, body").animate({
    scrollTop: 3000
  }, 500);
})
$('.button1-4').click(function () {
  $("html, body").animate({
    scrollTop: 4000
  }, 500);
})
$('.button1-5').click(function () {
  $("html, body").animate({
    scrollTop: 5000
  }, 500);
})

$('.button2-1').click(function () {
  $("html, body").animate({
    scrollTop: 5500 + $(window).height()
  }, 500);
})
$('.button2-2').click(function () {
  $("html, body").animate({
    scrollTop: 6250 + $(window).height()
  }, 500);
})
$('.button2-3').click(function () {
  $("html, body").animate({
    scrollTop: 6750 + $(window).height()
  }, 500);
})
$('.button2-4').click(function () {
  $("html, body").animate({
    scrollTop: 7250 + $(window).height()
  }, 500);
})
$('.button2-5').click(function () {
  $("html, body").animate({
    scrollTop: 7750 + $(window).height()
  }, 500);
})
$('.button2-6').click(function () {
  $("html, body").animate({
    scrollTop: 8250 + $(window).height()
  }, 500);
})
$('.button2-7').click(function () {
  $("html, body").animate({
    scrollTop: 8750 + $(window).height()
  }, 500);
})
$('.button2-8').click(function () {
  $("html, body").animate({
    scrollTop: 9250 + $(window).height()
  }, 500);
})
$('.button2-9').click(function () {
  $("html, body").animate({
    scrollTop: 9750 + $(window).height()
  }, 500);
})

$('.button4-1').click(function () {
  $("html, body").animate({
    scrollTop: 12750 + $(window).height() * 3
  }, 500);
})
$('.button4-2').click(function () {
  $("html, body").animate({
    scrollTop: 13750 + $(window).height() * 3
  }, 500);
})
$('.button4-3').click(function () {
  $("html, body").animate({
    scrollTop: 14750 + $(window).height() * 3
  }, 500);
})
$('.button4-4').click(function () {
  $("html, body").animate({
    scrollTop: 15750 + $(window).height() * 3
  }, 500);
})
$('.button4-5').click(function () {
  $("html, body").animate({
    scrollTop: 16750 + $(window).height() * 3
  }, 500);
})
$('.button4-6').click(function () {
  $("html, body").animate({
    scrollTop: 17750 + $(window).height() * 3
  }, 500);
})
$('.button4-7').click(function () {
  $("html, body").animate({
    scrollTop: 18750 + $(window).height() * 3
  }, 500);
})

//@@@@@@@@@@@@BUTTONS

//@@@@@@@@@@@@CONTROLS

$(document).keydown(function (e) {
  if (frame == 1) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 2000
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      return false;
    }
  }
  if (frame == 2) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 3000
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    }
  }
  if (frame == 3) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 4000
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 2000
      }, 500);
      return false;
    }
  }
  if (frame == 4) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 5000
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 3000
      }, 500);
      return false;
    }
  }
  if (frame == 5) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 5550 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 4000
      }, 500);
      return false;
    }
  }
  if (frame == 6) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 6050 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 5000
      }, 500);
      return false;
    }
  }
  if (frame == 7) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 6550 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 5550 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 8) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 7050 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 6050 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 9) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 7550 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 6550 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 10) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 8050 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 7050 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 11) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 8550 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 7550 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 12) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 9050 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 8050 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 13) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 9550 + $(window).height()
      }, 500);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 8550 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 14) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 11050 + $(window).height() * 2
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 9050 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 15) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 12500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 9550 + $(window).height()
      }, 500);
      return false;
    }
  }
  if (frame == 16) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 13500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 11050 + $(window).height() * 2
      }, 500);
      return false;
    }
  }
  if (frame == 17) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 14500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 12500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 18) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 15500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 13500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 19) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 16500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 14500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 20) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 17500 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 15500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 21) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: 19000 + $(window).height() * 3
      }, 1000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 16500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 22) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      $("html, body").animate({
        scrollTop: $('body').height() - $('.footer').height() - $(window).height() - 116
      }, 5000);
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 17500 + $(window).height() * 3
      }, 500);
      return false;
    }
  }
  if (frame == 23) {
    if ((e.keyCode == 40) || (e.keyCode == 39)) {
      return false;
    }
    if ((e.keyCode == 38) || (e.keyCode == 37)) {
      $("html, body").animate({
        scrollTop: 19000 + $(window).height() * 3
      }, 5000);
      return false;
    }
  }
})

$("#Svg_1").swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    if (frame == 1) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 2000
        }, 100);
      }
    }
    if (frame == 2) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 3000
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 0
        }, 100);
      }
    }
    if (frame == 3) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 4000
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 2000
        }, 100);
      }
    }
    if (frame == 4) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 5000
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 3000
        }, 100);
      }
    }
    if (frame == 5) {
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 4000
        }, 100);
      }
    }
  }
});

$("#Svg_9").swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    if (frame == 6) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 6050 + $(window).height()
        }, 100);
      }
    }
    if (frame == 7) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 6550 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 5550 + $(window).height()
        }, 100);
      }
    }
    if (frame == 8) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 7050 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 6050 + $(window).height()
        }, 100);
      }
    }
    if (frame == 9) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 7550 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 6550 + $(window).height()
        }, 100);
      }
    }
    if (frame == 10) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 8050 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 7050 + $(window).height()
        }, 100);
      }
    }
    if (frame == 11) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 8550 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 7550 + $(window).height()
        }, 100);
      }
    }
    if (frame == 12) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 9050 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 8050 + $(window).height()
        }, 100);
      }
    }
    if (frame == 13) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 9550 + $(window).height()
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 8550 + $(window).height()
        }, 100);
      }
    }
    if (frame == 14) {
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 9050 + $(window).height()
        }, 100);
      }
    }
  }
});

$("#Svg_3").swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    if (frame == 16) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 13500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 17) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 14500 + $(window).height() * 3
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 12500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 18) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 15500 + $(window).height() * 3
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 13500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 19) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 16500 + $(window).height() * 3
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 14500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 20) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 17500 + $(window).height() * 3
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 15500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 21) {
      if (direction == "left") {
        $("html, body").animate({
          scrollTop: 18500 + $(window).height() * 3
        }, 100);
      }
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 16500 + $(window).height() * 3
        }, 100);
      }
    }
    if (frame == 22) {
      if (direction == "right") {
        $("html, body").animate({
          scrollTop: 17500 + $(window).height() * 3
        }, 100);
      }
    }
  }
});
  
});