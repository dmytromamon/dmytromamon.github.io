"use strict";

//animate scroll to anchors without closing menu box

$(document).on('click', '.move__anchor-link', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
})

//animate scroll to anchors without closing menu box

//animate scroll to anchors

$(document).on('click', '.anchor-link', function () {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 750);
})

//animate scroll to anchors

//gsap animation of hero image

$(document).ready(function () {
  var tl = new TimelineMax();
  tl.to($('body'), .2, {
    ease: Power4.easeOut,
    opacity: 1
  }, 0);
})

//open contact form

$(document).ready(function () {
  $('.contact-open').click(function(){
    $('#contact').css('transform', 'translateY(0)');
    $('.wrap').css('overflow', 'hidden');
    $('html').css('overflow', 'hidden');
  })
  $('.contact-close').click(function(){
    $('#contact').css('transform', 'translateY(100vh)');
    $('.wrap').css('overflow-y', 'auto');
    $('html').css('overflow-y', 'auto');
  })
})

//open contact form