  $('.on_target_home').each(function(i) {
    $('.on_target_home').eq(i).closest('.can-bulb').css('display', "table-row-group");
    var sum;
    sum = +$('.on_target_home').eq(i).text() + +$('.on_target_away').eq(i).text() + +$('.off_target_home').eq(i).text() + +$('.off_target_away').eq(i).text();
    if ((sum < $('input#shots__min').val()) && ($('input#shots__min').val().length !== 0)) {
      $('.on_target_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if ((sum > $('input#shots__max').val()) && ($('input#shots__max').val().length !== 0)) {
      $('.on_target_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    sum = +$('.score_home').eq(i).text() + +$('.score_away').eq(i).text();
    if ((sum < $('input#goals__min').val()) && ($('input#goals__min').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if ((sum > $('input#goals__max').val()) && ($('input#goals__max').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if (($('input#score__home').val() !== $('.score_home').eq(i).text()) && ($('input#score__home').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");      
    }
    if (($('input#score__away').val() !== $('.score_away').eq(i).text()) && ($('input#score__away').val().length !== 0)) {
      $('.score_away').eq(i).closest('.can-bulb').css('display', "none");          
    }
    sum = +$('.pressure_indicator_home').eq(i).text() + +$('.pressure_indicator_away').eq(i).text();
    if ((sum > $('input#pi__max').val()) && ($('input#pi__max').val().length !== 0)) {
      $('.pressure_indicator_home').eq(i).closest('.can-bulb').css('display', "none");      
    }
    if ((sum < $('input#pi__min').val()) && ($('input#pi__min').val().length !== 0)) {
      $('.pressure_indicator_home').eq(i).closest('.can-bulb').css('display', "none");          
    }
    if ($('#option-1').is(":checked")) {
      sum = +$('.home_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.home_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.home_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-2').is(":checked")) {
      sum = +$('.draw_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.draw_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.draw_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-3').is(":checked")) {
      sum = +$('.away_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.away_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.away_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-4').is(":checked")) {
      sum = +$('.under_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.under_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.under_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-5').is(":checked")) {
      sum = +$('.over_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.over_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.over_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ((+$('.minutes_value_one').text() > $('.time').eq(i).text().slice(0,-1)) || (+$('.minutes_value_two').text() + 40 < $('.time').eq(i).text().slice(0,-1))) {
      $('.time').eq(i).closest('.can-bulb').css('display', "none");          
    }
  });

$('#button-apply').click(function (e){
  $('.on_target_home').each(function(i) {
    $('.on_target_home').eq(i).closest('.can-bulb').css('display', "table-row-group");
    var sum;
    sum = +$('.on_target_home').eq(i).text() + +$('.on_target_away').eq(i).text() + +$('.off_target_home').eq(i).text() + +$('.off_target_away').eq(i).text();
    if ((sum < $('input#shots__min').val()) && ($('input#shots__min').val().length !== 0)) {
      $('.on_target_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if ((sum > $('input#shots__max').val()) && ($('input#shots__max').val().length !== 0)) {
      $('.on_target_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    sum = +$('.score_home').eq(i).text() + +$('.score_away').eq(i).text();
    if ((sum < $('input#goals__min').val()) && ($('input#goals__min').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if ((sum > $('input#goals__max').val()) && ($('input#goals__max').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");
    }
    if (($('input#score__home').val() !== $('.score_home').eq(i).text()) && ($('input#score__home').val().length !== 0)) {
      $('.score_home').eq(i).closest('.can-bulb').css('display', "none");      
    }
    if (($('input#score__away').val() !== $('.score_away').eq(i).text()) && ($('input#score__away').val().length !== 0)) {
      $('.score_away').eq(i).closest('.can-bulb').css('display', "none");          
    }
    sum = +$('.pressure_indicator_home').eq(i).text() + +$('.pressure_indicator_away').eq(i).text();
    if ((sum > $('input#pi__max').val()) && ($('input#pi__max').val().length !== 0)) {
      $('.pressure_indicator_home').eq(i).closest('.can-bulb').css('display', "none");      
    }
    if ((sum < $('input#pi__min').val()) && ($('input#pi__min').val().length !== 0)) {
      $('.pressure_indicator_home').eq(i).closest('.can-bulb').css('display', "none");          
    }
    if ($('#option-1').is(":checked")) {
      sum = +$('.home_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.home_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.home_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-2').is(":checked")) {
      sum = +$('.draw_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.draw_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.draw_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-3').is(":checked")) {
      sum = +$('.away_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.away_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.away_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-4').is(":checked")) {
      sum = +$('.under_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.under_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.under_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ($('#option-5').is(":checked")) {
      sum = +$('.over_od').eq(i).text();
      if ((sum < $('#option__min').val()) && ($('#option__min').val().length !== 0)) {
        $('.over_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
      if ((sum > $('#option__max').val()) && ($('#option__max').val().length !== 0)) {
        $('.over_od').eq(i).closest('.can-bulb').css('display', "none");         
      }
    }
    if ((+$('.minutes_value_one').text() > $('.time').eq(i).text().slice(0,-1)) || (+$('.minutes_value_two').text() + 40 < $('.time').eq(i).text().slice(0,-1))) {
      $('.time').eq(i).closest('.can-bulb').css('display', "none");          
    }
  });
});

