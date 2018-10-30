var mid = $(window).width()/2;
var current = 0;
var gallerySize;

function change(i){
  var midImg = mid - $('.top__img').eq(i).width()/2;
  if (i > 0) {
    for (var a = 0; a < i; a++) {
      midImg = midImg - ($('.top__img').eq(a).width() + 20);
    }
  }
  $('.top__img').css('left', midImg);
}

$('.arrow-left').click(function(){
  if (current > 0) {
    current = current - 1;
  } else {
    current = 0;
  }
})

$('.arrow-right').click(function(){
  if (current < gallerySize) {
    current = current + 1;
  } else {
    current = $('.top__img').lenght;
  }
})

$('.bottom__img').click(function(){
  var number = $(this).index('.bottom__img');
  current = number;
})

$(document).click(function(){
  change(current);
  gallerySize = $('.top__img').length;
})