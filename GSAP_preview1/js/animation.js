$(document).ready(function(){
    var tl = new TimelineMax();
    $(function(){
		tl.from($('body'), .2, {ease:Power1.easeIn, opacity: 0}, 0)
        tl.from($('.animate__hello'), .2, {ease:Power1.easeIn, top: 20, opacity: 0}, 1);
        tl.from($('.logo__letter'), .2, {ease:Power1.easeIn, top: 100, opacity: 0}, 1);
    })
	setTimeout(function(){
		$('.animate__hello').addClass('animate__hide');
		$('.animate__logo').addClass('animate__hide');
    },1201);
})