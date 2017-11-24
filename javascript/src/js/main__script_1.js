var array;

  $('.bulb').click(function(){  
    var i = $('.bulb').index(this),
    id = $('.can-bulb').eq(i).attr('id');
    if ($(this).hasClass("bulb-active") ) {
	} else {      
      $(this).addClass('bulb-active');
      array.push(id);
    }
    $.each( array, function(key, value) {
      var a = $('.bulb-selected').next('.table-block');
      $('#' + value).addClass('bulb-selected');
      $('table').prepend($('#' + value));
      $('table').prepend(a);
    }); 
    
    $('.bulb-active').click(function(){  
      var id, removeItem = $(this).parents('.can-bulb').attr("id");
      $(this).parents('.can-bulb').removeClass('bulb-selected');
      array = $.grep(array, function(value) {
        return value != removeItem;
      });
      $.each( array, function(key, value) {
        var a = $('.bulb-selected').next('.table-block');
        $('#' + value).addClass('bulb-selected');
        $('table').prepend($('#' + value));
        $('table').prepend(a);
      }); 
    });    
  });  


setInterval(function(){
  $.each( array, function(key, value) {
    var a = $('.bulb-selected').next('.table-block');
    $('#' + value).addClass('bulb-selected');
    $('#' + value).closest('.bulb').addClass('bulb-active');
    $('table').prepend($('#' + value));
    $('table').prepend(a);
  }); 
}, 2000);   

$('.bulb').click(function(){ 
  $('.is-active').fadeOut();
}); 

$(function(){
  $('#rangeslider').slider({
    range: true,
    min: 0,
    max: 90,
    values: [ 0, 90 ],
    slide: function( event, ui ) {
      $('#rangedval').html("<span class='minutes_value_one' style='display: inline-block'>" + ui.values[0] + "</span>'" + " - <span class='minutes_value_two' style='display: inline-block'>" + ui.values[1] + "</span>'");
    }
  });
});