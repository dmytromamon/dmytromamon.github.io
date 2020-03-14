$(document).ready(function (e) {

  $(window).scroll(function () {
    if ($(window).scrollTop() > $('.nav-scroller').height()) {
      $('.navbar').addClass('fixed-top');
      $('.navbar').removeClass('static-top');
    } else {
      $('.navbar').removeClass('fixed-top');
      $('.navbar').addClass('static-top');
    }
  });
  
  var tl = new TimelineMax({repeat:-1});
  
  tl.to($('#_34-chat #Path_11'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, .5)
  .to($('#_34-chat #Line_6'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 1)
  .to($('#_34-chat #Line_7'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 1.5)
  .to($('#_36-404_error #Path_14, #_36-404_error #Path_15'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 2.5)
  .to($('#_36-404_error #Rectangle_8'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 3)
  .to($('#_36-404_error #Path_16, #_36-404_error #Path_17'), .5, {
    ease: Power3.easeOut,
    opacity: 1
  }, 3.5)
  .to($('#_28-Settings'), .5, {
    ease: Power3.easeOut,
    rotation: 15,
    transformOrigin: '50% 50%'
  }, 4.5)
  .to($('#_28-Settings'), .5, {
    ease: Power3.easeOut,
    rotation: -10,
    transformOrigin: '50% 50%'
  }, 5)
  .to($('#_28-Settings'), .5, {
    ease: Power3.easeOut,
    rotation: 5,
    transformOrigin: '50% 50%'
  }, 5.5)
  .to($('#_28-Settings'), .5, {
    ease: Power3.easeOut,
    rotation: 0,
    transformOrigin: '50% 50%'
  }, 6)
  .to($('#_17-Wall_clock #Path_1'), 1.5, {
    ease: Power3.easeOut,
    rotation: 360,
    transformOrigin: '0% 50%'
  }, 7)

});
