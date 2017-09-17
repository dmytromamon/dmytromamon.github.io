    setInterval(function () {
      var win = $(window),
        aspect = 1366 / 768; //this = window
      if (win.width() <= 1365) {
        $('.infographic-container').css('width', win.width());
        $('.infographic-container').css('height', 'auto');
        $('svg').css('width', win.width());
        $('svg').css('height', win.width() / aspect);
      }
      if (win.height() <= win.width() / aspect) {
        $('.infographic-container').css('height', win.height());
        $('.infographic-container').css('width', 'auto');
        $('svg').css('height', win.height());
      }
      if ((win.height() >= 768) && (win.width() >= 1366)) {
        $('.infographic-container').css('height', 768);
        $('.infographic-container').css('width', '100%');
        $('svg').css('height', '100%');
        $('svg').css('width', '100%');
      } else {
        if (win.height() < win.width()) {
          $('.st4').css('font-size', 30);
          $('.st5').css('font-size', 30);
          $('.st7').css('font-size', 26);
          $('.st8').css('font-size', 28);
          $('.st9').css('font-size', 16);
          $('.st10').css('font-size', 20);
          $('.st11').css('font-size', 22);
          $('.st13').css('font-size', 12);
        }
      }
    }, .01)

$('.proteins__left').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      left = $('#Animation_Human-body__x28_Left-side_x29_');
  
  tl.to(left, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      left = $('#Animation_Human-body__x28_Left-side_x29_');
  
  tl.to(left, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('.proteins__center').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      center = $('#Animation_Body-anatomy__x28_middle_x29_');
  
  tl.to(center, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      center = $('#Animation_Body-anatomy__x28_middle_x29_');
  
  tl.to(center, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('.proteins__right').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      right = $('#Animation_Skeleton__x28_right-side_x29_');
  
  tl.to(right, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      right = $('#Animation_Skeleton__x28_right-side_x29_');
  
  tl.to(right, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
        
        
var flag=0, flag1=0, flag2=0;
var isTouchDevice = 'ontouchstart' in document.documentElement;
var TouchDevice = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

$(function(){
$('.proteins__center').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag==0){
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              center = $('#Animation_Body-anatomy__x28_middle_x29_');

          tl.to(center, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);   
        flag=1;
    }
    else {
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              center = $('#Animation_Body-anatomy__x28_middle_x29_');

          tl.to(center, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
        flag=0;
        flag1=0;
        flag2=0;
        }
    }
});
})

$(function(){
$('.proteins__left').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag1==0){
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              left = $('#Animation_Human-body__x28_Left-side_x29_');

          tl.to(left, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
        flag1=1;
    }
    else {
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              left = $('#Animation_Human-body__x28_Left-side_x29_');

          tl.to(left, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        }
    }
});
})
        

$(function(){
$('.proteins__right').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag2==0){
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              right = $('#Animation_Skeleton__x28_right-side_x29_');

          tl.to(right, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
        flag2=1;
    }
    else {
          var tl = new TimelineMax(),
              rest = $('#Resting_View'),
              right = $('#Animation_Skeleton__x28_right-side_x29_');

          tl.to(right, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        }
    }
});
})
        
