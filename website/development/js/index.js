// Hide Header on on scroll down

$(document).ready(function () {

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.sidebar').outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if (Math.abs(lastScrollTop - st) <= delta)
        return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.sidebar').addClass('sidebar-up');
      } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
          $('.sidebar').removeClass('sidebar-up');
        }
      }

      lastScrollTop = st;
    }

  $('.strong-title').viewportChecker({
    classToAdd: 'active',
    repeat: true
  });
});

$('.menu-button').click(function(){
  if ($('.header').hasClass('open-header')) {

    var tl = new TimelineMax();

    tl.staggerFromTo($('.header > *').not('.menu-button'), .75, {
      ease: Power3.easeOut,
      y: 0,
      opacity: 1
    }, {
      ease: Power3.easeOut,
      y: -25,
      opacity: 0
    }, .1)
    setTimeout(function(){
      $('.header').removeClass('open-header');
    }, 700)
  } else {
    $('.header').addClass('open-header');

    var tl = new TimelineMax();

    tl.staggerFromTo($('.header > *').not('.menu-button'), .75, {
      ease: Power3.easeOut,
      y: 25,
      opacity: 0
    }, {
      ease: Power3.easeOut,
      y: 0,
      opacity: 1
    }, .1)
  }
})
