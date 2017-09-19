"use strict";

$(document).ready(function() {
  $(function(){
    var tl = new TimelineMax(
      {onComplete:function() {
      this.restart();
  }});
    var i;   
    for (i = 0; i < 171; i++) {
      tl.set($('.ad').eq(i), {ease: Power0.easeNone, opacity: 1}, i/24);
      tl.set($('.ad').eq(i - 1), {ease: Power0.easeNone, opacity: 0}, i/24);
    }
  })
})
