$(document).ready(function () {
  var tl = new TimelineMax(),
    svg = $('svg'),
    girl = $('.girl'),
    eye = $('.eye'),
    girlFill = $('.girl__fill'),
    hand = $('.girl__hand'),
    yellow = $('.fill-yellow'),
    girlEyebrow1 = $('.girl__eyebrow1'),
    girlEyebrow2 = $('.girl__eyebrow2'),
    arrow1 = $('.arrow1'),
    icon1 = $('.icon1'),
    icon1h = $('.icon1__hand'),
    icon1R = $('.icon1__rect'),
    rect1 = $('.rect1'),
    rect2 = $('.rect2'),
    rect3 = $('.rect3'),
    rect4 = $('.shelf__rect1'),
    rect5 = $('.shelf__rect2'),
    pc1 = $('.pc1'),
    pc1circle = $('.pc1__circle'),
    pc1play = $('.pc1__play'),
    shelf = $('.shelf'),
    hand1 = $('.shelf__hand'),
    rect3icon = $('.rect3__icon'),
    circle1 = $('.circle1'),
    circle2 = $('.circle2'),
    circle3 = $('.circle3'),
    circleR = $('.circle-rotate'),
    shelfBook1 = $('.shelf__book-inside1'),
    shelfBook2 = $('.shelf__book-inside2'),
    shelfBook3 = $('.shelf__book-inside3'),
    shelfBook4 = $('.shelf__book3'),
    shelfBook4a = $('.shelf__book3__arrow'),
    shelfLine1 = $('.shelf__line6'),
    shelfLine2 = $('.shelf__line1'),
    shelfLine3 = $('.shelf__line2'),
    shelfLine4 = $('.shelf__line3'),
    shelfLine5 = $('.shelf__line4'),
    shelfLine6 = $('.shelf__line7'),
    shelfLine7 = $('.shelf__book2-face__line'),
    shelfLine8 = $('.shelf__line5'),
    shelfCircle1 = $('.shelf__circle4'),
    shelfHat = $('.shelf__hat'),
    row1 = $('.book__row-a'),
    row2 = $('.book__row-b'),
    row3 = $('.book__row-c1'),
    letters = $('.shelf__text__letter'),
    letters1 = $('.shelf__h20__letter'),
    printer = $('.shelf__printer'),
    list = $('.shelf__printer__list'),
    face = $('.shelf__book2-face'),
    tablet = $('.shelf__tablet'),
    tabletColumn = $('.shelf__tablet__column'),
    tabletColumnShadow = $('.shelf__tablet__column-shadow'),
    fillAfter = $('.fill-after'),
    hair = $('.girl__hair');

  //  part1 

  tl.to(svg, .15, {
    ease: Power3.easeOut,
    opacity: 1
  }, 0);
  tl.from(girl, .3, {
    ease: Bounce.easeOut,
    y: 20,
    x: 20,
    scale: .6
  }, 0);
  tl.to(eye, .3, {
    ease: Power0.easeNone,
    scaleY: .6,
    repeat: -1,
    repeatDelay: 5,
    transformOrigin: "50% 50%"
  }, 2);
  tl.to(eye, .3, {
    ease: Power0.easeNone,
    scaleY: 1,
    repeat: -1,
    repeatDelay: 5,
    transformOrigin: "50% 50%"
  }, 2.3);
  tl.from(hair, .6, {
    ease: Bounce.easeOut,
    rotation: -10,
    transformOrigin: "100% 50%"
  }, .3);
  tl.from(girlFill, .9, {
    ease: Power4.easeOut,
    opacity: .7
  }, .45);
  tl.fromTo(hand, 4, {
    ease: Power3.easeOut,
    rotation: -1,
    y: -1,
    x: -2,
    yoyo: true,
    repeat: -1
  }, {
    ease: Power3.easeOut,
    rotation: 1,
    y: 1,
    x: 2,
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%"
  }, 2);
  tl.fromTo(girlEyebrow1, 2, {
    ease: Power3.easeOut,
    rotation: -1,
    y: -1,
    x: -1,
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%"
  }, {
    ease: Power3.easeOut,
    rotation: 0,
    y: 0,
    x: 0,
    yoyo: true,
    repeat: -1
  }, 2);
  tl.fromTo(girlEyebrow2, 2, {
    ease: Power3.easeOut,
    rotation: 1,
    y: -1,
    x: -1,
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%"
  }, {
    ease: Power3.easeOut,
    rotation: 0,
    y: 0,
    x: 0,
    yoyo: true,
    repeat: -1,
    transformOrigin: "50% 50%"
  }, 2);

  //  part2

  tl.from(arrow1, .45, {
    ease: Power4.easeOut,
    scale: 0
  }, .45);
  tl.from(pc1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    y: 25,
    x: 25,
    transformOrigin: "50% 50%"
  }, .6);
  tl.staggerFrom(rect1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    y: -30,
    x: -30,
    rotation: -105,
    transformOrigin: "50% 50%"
  }, .1);
  tl.from(pc1circle, .3, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, .9);
  tl.from(pc1play, .3, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, .9);
  tl.staggerFrom(icon1R, .45, {
    ease: Power4.easeOut,
    scale: 0,
    y: 10,
    x: 10,
    transformOrigin: "75% 75%"
  }, .1);
  tl.from(rect2, .45, {
    ease: Power4.easeOut,
    scale: 0,
    rotation: 180,
    transformOrigin: "50% 50%"
  }, 1.45);
  tl.from(circle1, .9, {
    ease: Power4.easeOut,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 1.05);
  tl.from(rect3, .45, {
    ease: Power4.easeOut,
    scale: 0,
    y: 25,
    x: 25,
    transformOrigin: "50% 50%"
  }, 1.15);
  tl.staggerFrom(rect3icon, .5, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%",    
    repeat: -1,
    yoyo: true,
    repeatDelay: 3
  }, .1);
  tl.from(circle2, .6, {
    ease: Power4.easeOut,
    opacity: 0,
    scale: 0,
    transformOrigin: "50% 50%"
  }, 1.15);
  tl.from(circleR, 10, {
    ease: Power0.easeNone,
    rotation: -360,
    repeat: -1,
    transformOrigin: "50% 50%"
  }, 1);
  tl.from(icon1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    y: 25,
    x: 25,
    transformOrigin: "50% 50%"
  }, 1.35);
  tl.fromTo(icon1h, 1.5, {
    ease: Power3.easeOut,
    rotation: 5,
    y: -2,
    x: -2,
    yoyo: true,
    repeat: -1,
    transformOrigin: "100% 100%"
  }, {
    ease: Power3.easeOut,
    rotation: -5,
    y: 2,
    x: 2,
    yoyo: true,
    repeat: -1,
    transformOrigin: "100% 100%"
  }, 1.65);

  //  part3

  tl.from(shelf, .45, {
    ease: Power4.easeOut,
    scale: 0,
    x: 50,
    transformOrigin: "100% 45%"
  }, 1.5);
  tl.from(shelfBook1, .45, {
    ease: Bounce.easeOut,
    rotation: 25,
    transformOrigin: "50% 100%"
  }, 1.65);
  tl.from(shelfBook2, .45, {
    ease: Bounce.easeOut,
    rotation: 25,
    transformOrigin: "50% 100%"
  }, 1.65);
  tl.from(shelfBook3, .45, {
    ease: Bounce.easeOut,
    rotation: 25,
    transformOrigin: "50% 100%"
  }, 1.65);
  tl.from(shelfCircle1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, 1.8);
  tl.from(shelfLine1, .9, {
    ease: Power4.easeOut,
    rotation: -35,
    scale: 0,
    transformOrigin: "90% 0%"
  }, 1.95);
  tl.from(shelfHat, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, 1.95);
  tl.from(rect4, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, 2.1);
  tl.staggerFrom(letters, .9, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "100% 100%",
    repeat: -1,
    yoyo: true,
    repeatDelay: 2
  }, .1);
  tl.from(shelfLine2, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "0% 0%"
  }, 2.25);

  tl.from(hand1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    x: 50,
    transformOrigin: "100% 50%"
  }, 2.25);
  tl.from(tablet, .45, {
    ease: Power4.easeOut,
    scale: 0,
    x: 50,
    transformOrigin: "100% 100%"
  }, 2.25);
  tl.staggerFrom(tabletColumn, 1, {
    ease: Power4.easeOut,
    scale: 0,
    repeat: -1,
    yoyo: true,
    transformOrigin: "50% 100%"
  }, .1);
  tl.from(tabletColumnShadow, 1, {
    ease: Power4.easeOut,
    scaleY: 0,
    repeat: -1,
    yoyo: true,
    transformOrigin: "50% 100%"
  }, 2.95);
  tl.staggerTo(shelfBook4a, 1, {
    ease: Power4.easeOut,
    y: 3,
    repeat: -1,
    yoyo: true,
    transformOrigin: "50% 50%"
  }, 2.95);  
  tl.from(shelfLine3, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "0% 0%"
  }, 2.4);
  tl.from(rect5, .45, {
    ease: Power4.easeOut,
    scale: 0,
    rotation: -180,
    transformOrigin: "50% 50%"
  }, 2.25);
  tl.from(shelfLine4, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 0%"
  }, 2.55);
  tl.from(circle3, .45, {
    ease: Power4.easeOut,
    opacity: 0,
    transformOrigin: "50% 50%"
  }, 2.7);
  tl.from(shelfLine5, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "100% 50%"
  }, 2.7);
  tl.staggerFrom(row1, .45, {
    ease: Power4.easeOut,
    scale: 0,
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    transformOrigin: "50% 0%"
  }, .1);
  tl.from(shelfLine6, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "0% 0%"
  }, 2.7);
  tl.from(printer, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 50%"
  }, 2.7);
  tl.from(list, .45, {
    ease: Power4.easeOut,
    scaleY: 0,
    skewX: 15,
    transformOrigin: "50% 100%"
  }, 2.85);
  tl.from(shelfLine7, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 0%"
  }, 2.85);
  tl.staggerFrom(letters1, 1, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "100% 100%",
    repeat: -1,
    yoyo: true,
    repeatDelay: 2
  }, .1);
  tl.from(face, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 0%"
  }, 3);
  tl.staggerFrom(row3, .45, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 0%"
  }, .1);
  tl.from(shelfLine8, .5, {
    ease: Bounce.easeOut,
    scale: 0,
    transformOrigin: "0% 50%"
  }, 3);
  tl.from(shelfBook4, .45, {
    ease: Power4.easeOut,
    opacity: 0,
    scale: .5,
    y: -50,
    transformOrigin: "50% 0%"
  }, 2.25);
  tl.from(shelfBook4a, .45, {
    ease: Power4.easeOut,
    y: -5,
    transformOrigin: "50% 50%"
  }, 2.4);
  tl.staggerFrom(row2, .5, {
    ease: Power4.easeOut,
    scale: 0,
    transformOrigin: "50% 0%"
  }, .1);
  
  //  yellows bg's
  
  tl.from(fillAfter, .45, {
    ease: Power4.easeOut,
    opacity: 0
  }, 2.25);  
  
  //  hovers

  $('.fill-yellow').hover(
    function () {
      var tl = new TimelineMax(),
        yellow = $(this);

      tl.to(yellow, .5, {
        ease: Power4.easeOut,
        opacity: .5
      }, 0);
    },
    function () {
      var tl = new TimelineMax(),
        yellow = $(this);

      tl.to(yellow, .5, {
        ease: Power4.easeOut,
        opacity: 1
      }, 0);
    }
  );

  $('.bounce').hover(
    function () {
      var tl = new TimelineMax(),
        bounce = $(this);

      tl.fromTo(bounce, 1, {
        ease: Power0.easeNone,
        rotation: 3,
        transformOrigin: "75% 75%"
      }, {
        ease: Power4.easeOut,
        rotation: 0,
        transformOrigin: "75% 75%"
      }, 0);
    }
  );

  $('.girl').hover(
    function () {
      var tl = new TimelineMax(),
        bounce = $('.girl__hair'),
        bounce2 = $('.fill-bounce');

      tl.fromTo(bounce, 1, {
        ease: Power0.easeNone,
        rotation: 10,
        transformOrigin: "100% 50%"
      }, {
        ease: Power4.easeOut,
        rotation: 0,
        transformOrigin: "100% 50%"
      }, 0);

      tl.fromTo(bounce2, 1, {
        ease: Power0.easeNone,
        rotation: 10,
        transformOrigin: "100% 50%"
      }, {
        ease: Power4.easeOut,
        rotation: 0,
        transformOrigin: "100% 50%"
      }, 0);
    }
  );

});

  //  scroll effects

setInterval(function () {
  $('body').bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 < 0) {
      var tl = new TimelineMax(),
        moveL = $('.moveL'),
        moveTB = $('.moveTB'),
        moveR = $('.moveR');
      tl.to(moveL, .5, {
        ease: Power0.easeNone,
        x: -3,
        y: 3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveL, .5, {
        ease: Power0.easeNone,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
      tl.to(moveTB, .5, {
        ease: Power0.easeNone,
        y: 3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveTB, .5, {
        ease: Power0.easeNone,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
      tl.to(moveR, .5, {
        ease: Power0.easeNone,
        x: 3,
        y: 3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveR, .5, {
        ease: Power0.easeNone,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
    } else {
      var tl = new TimelineMax(),
        moveL = $('.moveL'),
        moveTB = $('.moveTB'),
        moveR = $('.moveR');
      tl.to(moveL, .5, {
        ease: Power0.easeNone,
        x: -3,
        y: -3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveL, .5, {
        ease: Power0.easeNone,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
      tl.to(moveTB, .5, {
        ease: Power0.easeNone,
        y: -3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveTB, .5, {
        ease: Power0.easeNone,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
      tl.to(moveR, .5, {
        ease: Power0.easeNone,
        x: 3,
        y: -3,
        transformOrigin: "50% 50%"
      }, 0);
      tl.to(moveR, .5, {
        ease: Power0.easeNone,
        x: 0,
        y: 0,
        transformOrigin: "50% 50%"
      }, .5);
    }
  })
}, 5000)