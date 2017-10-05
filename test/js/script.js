setInterval(function(){
  $(document).ready(function () {
    var a, scrollTop = $(window).scrollTop();
    if (scrollTop >= $('.section').height()) {
      $('.blue').css('position', 'fixed');
      $('.blue').css('top', '0');
      a = scrollTop;
    }    
    if (scrollTop >= $('.section').height()*2) {
      $('.green').css('position', 'fixed');
      $('.green').css('top', '0');
      a = scrollTop;
    }
    if (scrollTop < $('.section').height()) {
      $('.blue').css('position', 'absolute');
      $('.blue').css('top', '100vh');
      a = scrollTop;
    }    
    if (scrollTop < $('.section').height()*2) {
      $('.green').css('position', 'absolute');
      $('.green').css('top', '200vh');
      a = scrollTop;
    }    
  });
}, 1)