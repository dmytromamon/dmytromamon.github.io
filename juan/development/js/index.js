$(document).ready(function () {
  var a = Math.floor(Math.random() * 6) + 4;

  for (i = 0; i < a; i++) {
    var randomW = Math.floor(Math.random() * $(window).width()) + 1;
    var randomH = Math.floor(Math.random() * $(window).height()) + 1;
    var randomS = Math.floor(Math.random() * 60) + 40;
    $('.wrapper').append('<div class="dot simple-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px"></div>');
  };

  for (i = 0; i < a; i++) {
    var currentW = $('.dot').eq(i).position().left;
    var currentH = $('.dot').eq(i).position().top;

    moveDots(currentW, currentH, i)
  }

  $('.wrapper').append('<div class="dot click-dot" style="transform: matrix(1, 0, 0, 1, ' + ($(window).width() / 2 - 50) + ', ' + ($(window).height() / 5 - 50) + '); width: 100px; height: 100px; background: #cb2b30"></div>');

  var tl = new TimelineMax();

  tl.from($('.click-dot'), 1, {
    ease: Power3.easeOut,
    opacity: 0
  }, 3)
  
  var count = $(window).width()*$(window).height()/16000;
  
  var blue = Math.floor(Math.random() * count) + count/4;

  setTimeout(function () {
    for (i = 0; i < blue; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #52b9d8; z-index: ' + z + '"></div>');
    };

    var red = Math.floor(Math.random() * count/2) + count/8;

    for (i = 0; i < red; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #cb2b30; z-index: ' + z + '"></div>');
    };

    var green = Math.floor(Math.random() * count/2) + count/8;

    for (i = 0; i < green; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #1c6f64; z-index: ' + z + '"></div>');
    };

    var violet = Math.floor(Math.random() * count/2) + count/8;

    for (i = 0; i < violet; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #57355d; z-index: ' + z + '"></div>');
    };

    var orange = Math.floor(Math.random() * count/2) + count/8;

    for (i = 0; i < orange; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #f3ae66; z-index: ' + z + '"></div>');
    };

    var yellow = Math.floor(Math.random() * count/2) + count/8;

    for (i = 0; i < yellow; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      
      z = Math.floor(Math.random() * 10) + 1;
      
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #ffe552; z-index: ' + z + '"></div>');
    };
    
  }, 3000);
  
});

function moveDots(w, h, i) {
  setInterval(function () {
    var tl = new TimelineMax();

    var b = Math.random() * 4 + 1;

    tl.to($('.dot').eq(i), 1, {
      ease: Power0.easeNone,
      x: w + b,
      y: h + b
    }, 0)
  }, 1000)
}

function roundDots(w, h, i) {
  var wHalf = $(window).width()/2;
  var hHalf = $(window).height()/2;
  
  var tl = new TimelineMax();
  
  if (w < wHalf) {
    if (h < hHalf) {
      // 1
      var dif = Math.random() * .75 + 0;
      var newW = (Math.random() * wHalf + 1) - wHalf*dif
      var newH = (Math.random() * hHalf + 1) - hHalf*(.75 - dif)
      
      tl.to($('.dot').eq(i), 1, {
        ease: Power3.easeOut,
        x: newW,
        y: newH
      }, 0)
      
      moveDots(newW, newH, i)
    } else {
      // 2
      var dif = Math.random() * .75 + 0;
      var newW = (Math.random() * wHalf + 1) - wHalf*dif
      var newH = (Math.random() * hHalf + hHalf) + hHalf*(.75 - dif)
      
      tl.to($('.dot').eq(i), 1, {
        ease: Power3.easeOut,
        x: newW,
        y: newH
      }, 0)
      
      moveDots(newW, newH, i)
    }
  } else {
    if (h < hHalf) {
      // 3
      var dif = Math.random() * .75 + 0;
      var newW = (Math.random() * wHalf + wHalf) + wHalf*dif
      var newH = (Math.random() * hHalf + 1) - hHalf*(.75 - dif)
      
      tl.to($('.dot').eq(i), 1, {
        ease: Power3.easeOut,
        x: newW,
        y: newH
      }, 0)
      
      moveDots(newW, newH, i)
    } else {
      // 4
      var dif = Math.random() * .75 + 0;
      var newW = (Math.random() * wHalf + wHalf) + wHalf*dif
      var newH = (Math.random() * hHalf + hHalf) + hHalf*(.75 - dif)
      
      tl.to($('.dot').eq(i), 1, {
        ease: Power3.easeOut,
        x: newW,
        y: newH
      }, 0)
      
      if (($('.dot').eq(i).position().left < 50) || ($('.dot').eq(i).position().top < 50) || ($('.dot').eq(i).position().left > ($(window).width() + 50)) || ($('.dot').eq(i).position().top < ($(window).height() + 50))) {
        $('.dot').eq(i).remove;
        console.log(i)
      }
      
      moveDots(newW, newH, i)
    }
  }
}

$(document).on('click', '.click-dot', function () {

  var tl = new TimelineMax();

  tl.from($('.explosion-dot'), 1, {
    ease: Power3.easeIn,
    x: $(window).width() / 2 - 40,
    y: $(window).height() / 2 - 40
  }, 0)
  .to($('.explosion-dot'), 1, {
    ease: Power4.easeOut,
    opacity: 1
  }, 0)
  .to($('.simple-dot'), 1, {
    ease: Power4.easeOut,
    opacity: 0
  }, 0)
  .to($('.click-dot'), 1, {
    ease: Power4.easeOut,
    opacity: 0
  }, 0)
  
  setTimeout(function(){
    $('.simple-dot').remove;
    $('.click-dot').remove;
  }, 1000)
  
  setTimeout(function(){
    for (i = 0; i < $('.dot').length; i++) {
      var currentW = $('.dot').eq(i).position().left;
      var currentH = $('.dot').eq(i).position().top;
      
      roundDots(currentW, currentH, i);
    };
  }, 1000)
})

$(document).on('mousemove', '.explosion-dot', function(){
  var i = $('.explosion-dot').index(this);
  var wHalf = $(window).width()/2;
  var hHalf = $(window).height()/2;
  
  var tl = new TimelineMax();
  
  var w = $('.explosion-dot').eq(i).position().left;
  var h = $('.explosion-dot').eq(i).position().top;
  
  if (w < wHalf) {
    if (h < hHalf) {
      tl.to($('.explosion-dot').eq(i), .5, {
        x: w - 10,
        y: h - 10
      }, 0)
    } else {
      tl.to($('.explosion-dot').eq(i), .5, {
        x: w - 10,
        y: h + 10
      }, 0)
    }
  } else {
    if (h < hHalf) {
      tl.to($('.explosion-dot').eq(i), .5, {
        x: w + 10,
        y: h - 10
      }, 0)
    } else {
      tl.to($('.explosion-dot').eq(i), .5, {
        x: w + 10,
        y: h + 10
      }, 0)
    }
  }
})