$(document).ready(function () {
  var a = Math.floor(Math.random() * 6) + 4;

  for (i = 0; i < a; i++) {
    var randomW = Math.floor(Math.random() * $(window).width()) + 1;
    var randomH = Math.floor(Math.random() * $(window).height()) + 1;
    var randomS = Math.floor(Math.random() * 60) + 40;
    $('.wrapper').append('<div class="dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px"></div>');
  };

  for (i = 0; i < a; i++) {
    var currentW = $('.dot').eq(i).position().left;
    var currentH = $('.dot').eq(i).position().top;

    moveDots(currentW, currentH, i)
  }

  $('.wrapper').append('<div class="dot click-dot" style="transform: matrix(1, 0, 0, 1, ' + ($(window).width() / 2 - 25) + ', ' + ($(window).height() / 5 - 25) + '); width: 100px; height: 100px; background: #cb2b30"></div>');

  var tl = new TimelineMax();

  tl.from($('.click-dot'), 1, {
    ease: Power3.easeOut,
    opacity: 0
  }, 3)
  var blue = Math.floor(Math.random() * 60) + 40;

  setTimeout(function () {
    for (i = 0; i < blue; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #52b9d8"></div>');
    };

    var red = Math.floor(Math.random() * 30) + 20;

    for (i = 0; i < red; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #cb2b30"></div>');
    };

    var green = Math.floor(Math.random() * 30) + 20;

    for (i = 0; i < green; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #1c6f64"></div>');
    };

    var violet = Math.floor(Math.random() * 30) + 20;

    for (i = 0; i < violet; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #57355d"></div>');
    };

    var orange = Math.floor(Math.random() * 30) + 20;

    for (i = 0; i < orange; i++) {
      var randomW = Math.floor(Math.random() * $(window).width()) + 1;
      var randomH = Math.floor(Math.random() * $(window).height()) + 1;
      var randomS = Math.floor(Math.random() * 75) + 10;
      $('.wrapper').append('<div class="dot explosion-dot" style="transform: matrix(1, 0, 0, 1, ' + randomW + ', ' + randomH + '); width: ' + randomS + 'px; height: ' + randomS + 'px; background: #f3ae66"></div>');
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

$(document).on('click', '.click-dot', function () {

  var tl = new TimelineMax();

  tl.from($('.explosion-dot'), 1, {
    ease: Power4.easeOut,
    x: $(window).width() / 2 - 40,
    y: $(window).height() / 2 - 40
  }, 0)
  .to($('.explosion-dot'), 1, {
    ease: Power4.easeOut,
    opacity: 1
  }, 0)
})
