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