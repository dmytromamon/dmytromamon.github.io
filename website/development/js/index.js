// Hide Header on on scroll down
jQuery(document).ready(function($) {
  
  if ($(window).width() < 992) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.sidebar').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.sidebar').addClass('sidebar-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.sidebar').removeClass('sidebar-up');
            }
        }

        lastScrollTop = st;
    }
  }
  
  $('.strong-title').viewportChecker({
      classToAdd: 'active',
      repeat: true
  });
});