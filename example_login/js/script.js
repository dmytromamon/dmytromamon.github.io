var flag = 0;

$(function(){
  $('.menu-button').click(function(){
   if (flag==0){    
    $('.menu-block').css("display", "flex").hide().fadeIn();
    $('body').css('overflow', 'hidden');
    $('.menu-button').addClass('close-button');
    flag=1;
  }
  else { 
    $('.menu-block').fadeOut();
    $('body').css('overflow-y', 'auto');
    $('.menu-button').removeClass('close-button');
    flag=0;
    }
  });
});

var w = window.innerWidth;

$(function(){
  $('.slide-link').click(function(){
    if (w < 576) {
      $('.menu-block').fadeOut();
      $('body').css('overflow-y', 'auto');
      $('.menu-button').removeClass('close-button');
      flag=0;  
    }
  })
});

$(document).on('click', '.slide-link', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
});