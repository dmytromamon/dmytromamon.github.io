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

$('#Circle_1_Transcription_copy_4').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle1-Transcription');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle1-Transcription');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Circle_2_Transport_copy_4').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle2-Transport');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle2-Transport');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Circle_3_Translation_copy_4').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle3-Translation');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle3-Translation');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})
$('#Circle_4_Protein1').hover(function() {
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle4-Protein');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 1}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
}, function(){
  var tl = new TimelineMax(),
      rest = $('#Resting_View'),
      circle = $('#Animation-Circle4-Protein');
  
  tl.to(circle, 1.5, {ease: Power3.easeOut, opacity: 0}, 0);  
  tl.to(rest, 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
  tl.to($('#Circle_4_Protein1'), 1.5, {ease: Power3.easeOut, opacity: 1}, 0); 
})