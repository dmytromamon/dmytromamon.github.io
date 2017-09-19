"use strict";

$(document).ready(function() {
  $(function(){
    var tl = new TimelineMax(
      {onComplete:function() {
      this.restart();
  }}
    ),
      i = 0,
      ad = $('.ad');

    for (i = 0; i < 173; i++) { 
      if (i < 10) {
        tl.set(ad, {css:{backgroundImage:'url(img/antenna_and_aircraft_RGB_plusAlpha_0000' + i +'.png)'}}, i/20);
      }
      else if (i < 100) {
        tl.set(ad, {css:{backgroundImage:'url(img/antenna_and_aircraft_RGB_plusAlpha_000' + i +'.png)'}}, i/20);
      } else {
        tl.set(ad, {css:{backgroundImage:'url(img/antenna_and_aircraft_RGB_plusAlpha_00' + i +'.png)'}}, i/20);
      }
    }
  })
})
