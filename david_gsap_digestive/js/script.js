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
//          $('.st6').css('font-size', 9);
//          $('.st21').css('font-size', 32);
//          $('.st23').css('font-size', 17);
//          $('.st26').css('font-size', 12);
//          $('.st29').css('font-size', 16);
//          $('.st31').css('font-size', 5);
//          $('.st32').css('font-size', 19);
//          $('.st33').css('font-size', 22);
//          $('.st37').css('font-size', 15);
//          $('.st38').css('font-size', 20);
        }
      }
    }, 0.01)

$('#First_Section__x28_left-side_x29_').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section1__x28_left_side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section1__x28_left_side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Second_Section__x28_top_x29_').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section2__x28_top_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section2__x28_top_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Third_Section__x28_right-side_x29_').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section3__x28_right-side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section3__x28_right-side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Fourth_Section__x28_bottom_x29_').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section4__x28_bottom_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section4__x28_bottom_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})

var flag=0, flag1=0, flag2=0, flag3=0;
var isTouchDevice = 'ontouchstart' in document.documentElement;
var TouchDevice = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

$(function(){
$('#First_Section__x28_left-side_x29_').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag==0){
          var tl = new TimelineMax(),
              rest = $('#Resting_view'),
              circle = $('#Animation-Section1__x28_left_side_x29_');

          tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);    
        flag=1;
    }
    else {
          var tl = new TimelineMax(),
              rest = $('#Resting_view'),
              circle = $('#Animation-Section1__x28_left_side_x29_');

          tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        flag3=0;
        }
    }
});
})

$(function(){
$('#Second_Section__x28_top_x29_').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag==0){
          var tl = new TimelineMax(),
              rest = $('#Resting_view'),
              circle = $('#Animation-Section2__x28_top_x29_');

          tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
          tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
        flag=1;
    }
    else {
          var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section2__x28_top_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        flag3=0;
        }
    }
});
})

$(function(){
$('#Third_Section__x28_right-side_x29_').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag1==0){
          var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section3__x28_right-side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
        flag1=1;
    }
    else {
          var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section3__x28_right-side_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        flag3=0;
        }
    }
});
})
        

$(function(){
$('#Fourth_Section__x28_bottom_x29_').click(function(){
    if (isTouchDevice || TouchDevice) {
        if (flag2==0){
          var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section4__x28_bottom_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
        flag2=1;
    }
    else {
          var tl = new TimelineMax(),
      rest = $('#Resting_view'),
      circle = $('#Animation-Section4__x28_bottom_x29_');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
        flag=0;
        flag1=0;
        flag2=0;
        flag3=0;
        }
    }
});
})