$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

$(function(){
  var tl = new TimelineMax(),
      body = $('body'),
      title0 = $('.title__row').eq(0),
      title1 = $('.title__row').eq(1),
      par = $('p').eq(0),
      line = $('.line');
  tl.from(body, .5, { ease: Power2.easeOut, opacity: 0 }, 0);
  tl.from(line, 1.25, { ease: Power2.easeOut, css: {"height": 0} }, .5);
  tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
  tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
  tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
  
  var curP = 0;


  
  $('body').bind('mousewheel', function(e){    
    if(e.originalEvent.wheelDelta /120 < 0) {
      if (curP == 0) {
        curP = 1;
        $('html, body').animate({
            scrollTop: $("#move").offset().top
        }, 750);   
        
          var tl = new TimelineMax(),
              title0 = $('.title__row').eq(2),
              title1 = $('.title__row').eq(3),
              title2 = $('.title__row').eq(4),
              title3 = $('.title__row').eq(5),
              progress = $('.st25').eq(0),
              par = $('p').eq(1);
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(title3, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .95);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "0 2080", strokeDashoffset: "-1560"}, .25);
        
      }
      else if (curP == 1) {
        curP = 2; 
        $('html, body').animate({
            scrollTop: $("#choose").offset().top
        }, 750);      
        
          var tl = new TimelineMax(),
              title0 = $('.title__row').eq(6),
              title1 = $('.title__row').eq(7),
              title2 = $('.title__row').eq(8),
              title3 = $('.title__row').eq(9),
              progress = $('.st25').eq(1),
              par = $('.question-block');
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(title3, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .95);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "520 2080", strokeDashoffset: "-1040"}, .25);
         
      }
      else if (curP == 3) {
        curP = 4;   
        $('html, body').animate({
            scrollTop: $("#final").offset().top
        }, 750);   
        
          var tl = new TimelineMax(),
              title0 = $('.title__row').eq(13),
              title1 = $('.title__row').eq(14),
              title2 = $('.title__row').eq(15),
              progress = $('.st25').eq(3),
              par = $('p').eq(3);
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "1560 2080", strokeDashoffset: "0"}, .25);
           
      }
    }
    else{
      if (curP == 1) {
        curP = 0;
        $('html, body').animate({
            scrollTop: $("#enjoy").offset().top
        }, 750);   
        
  var tl = new TimelineMax(),
      title0 = $('.title__row').eq(0),
      title1 = $('.title__row').eq(1),
      par = $('p').eq(0);
  tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
  tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
  tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
        
      }    
      else if (curP == 2) { 
        curP = 1;
        $('html, body').animate({
            scrollTop: $("#move").offset().top
        }, 750);  
        
          var tl = new TimelineMax(),
              title0 = $('.title__row').eq(2),
              title1 = $('.title__row').eq(3),
              title2 = $('.title__row').eq(4),
              title3 = $('.title__row').eq(5),
              progress = $('.st25').eq(0),
              par = $('p').eq(1);
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(title3, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .95);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "0 2080", strokeDashoffset: "-1560"}, .25);
        
      }    
      else if (curP == 3) {
        curP = 2; 
        $('html, body').animate({
            scrollTop: $("#choose").offset().top
        }, 750);      
        
          var tl = new TimelineMax(),
              title0 = $('.title__row').eq(6),
              title1 = $('.title__row').eq(7),
              title2 = $('.title__row').eq(8),
              title3 = $('.title__row').eq(9),
              progress = $('.st25').eq(1),
              par = $('.question-block');
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(title3, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .95);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "520 2080", strokeDashoffset: "-1040"}, .25);
         
      }    
      else if (curP == 4) { 
        curP = 3;
        $('html, body').animate({
            scrollTop: $("#why").offset().top
        }, 750);  
        
        var tl = new TimelineMax(),
              title0 = $('.title__row').eq(10),
              title1 = $('.title__row').eq(11),
              title2 = $('.title__row').eq(12),
              progress = $('.st25').eq(2),
              par = $('p').eq(2);
          tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
          tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
          tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
          tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
          tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "1040 2080", strokeDashoffset: "-520"}, .25);
        
      }      
    }
    
      $('.next').click(function(){
        if (curP == 2) { 
          curP = 3;  
          $('html, body').animate({
              scrollTop: $("#why").offset().top
          }, 750);   

            var tl = new TimelineMax(),
                title0 = $('.title__row').eq(10),
                title1 = $('.title__row').eq(11),
                title2 = $('.title__row').eq(12),
                progress = $('.st25').eq(2),
                par = $('p').eq(2);
            tl.from(title0, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .65);
            tl.from(title1, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .75);
            tl.from(title2, 1, { ease: Power4.easeOut, css: {"left": 25, "opacity": 0} }, .85);
            tl.from(par, 1.25, { ease: Power2.easeOut, css: {"top": 25, "opacity": 0} }, 1.5);
            tl.from(progress, 2, { ease: Power2.easeOut, strokeDasharray: "1040 2080", strokeDashoffset: "-520"}, .25);
        }
      })
        
      $('.move').click(function(){
        if (curP == 2) { 
          curP = 3; 
          $('html, body').animate({
              scrollTop: $("#why").offset().top
          }, 750);      
          $('.loser').fadeOut();    
        }
      })
        $('.lose').click(function(){
          $('.loser').css('display', 'flex').hide().fadeIn(); 
          
          var tl = new TimelineMax(),
              loser = $('.round-loser'),
              par = $('.question-block');
            tl.fromTo(loser, 1, { ease: Bounce.easeOut, scale: .5 }, { ease: Bounce.easeOut, scale: 1 }, 1);
            tl.to(par, 1.25, { ease: Power2.easeOut, css: {"top": 0, "opacity": 1} }, 1.5);
        })
      }
    
  );
})