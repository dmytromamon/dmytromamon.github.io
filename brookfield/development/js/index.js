$(document).ready(function(){
  var containerWidth = $('.container').width();
  $('.image-box').css('width', $(window).width()/2 + $('.container').width()/12);
  $('.image-box span').css('margin-left', $('.container').css('margin-left'));
  
  var sectionLength = $('section').length;
  for (i = 2; i < sectionLength; i = i + 2) {
    $('.scroll-cta').eq(i).css('margin-left', $('section p').eq(i).position().left + 3)
  }
  
  $(window).on('resize', function(){
    var containerWidth = $('.container').width();
    $('.image-box').css('width', $(window).width()/2 + $('.container').width()/12);
    $('.image-box span').css('margin-left', $('.container').css('margin-left'));

    var sectionLength = $('section').length;
    for (i = 2; i < sectionLength; i = i + 2) {
      $('.scroll-cta').eq(i).css('margin-left', $('section p').eq(i).position().left + 3)
    }
  })
  
  var windowHeight = $(window).height();
  
  $('.dark').viewportChecker({
      classToAdd: 'visible',
      offset: windowHeight - 100, 
      repeat: true,
      callbackFunction: function(){
        $('.header').removeClass('header-dark')
        $('.header').addClass('header-light')
      }
  });
  
  $('.light').viewportChecker({
      classToAdd: 'visible',
      offset: windowHeight - 100, 
      repeat: true,
      callbackFunction: function(){
        $('.header').removeClass('header-light')
        $('.header').addClass('header-dark')
      }
  });
  
  $('.head').viewportChecker({
      classToAdd: 'visible',
      offset: windowHeight - 100, 
      repeat: true,
      callbackFunction: function(){
        $('.header').removeClass('header-dark')
        $('.header').removeClass('header-light')
      }
  });
})