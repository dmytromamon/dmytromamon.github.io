"use strict";

$(document).ready(function(){
  var pageId = $('.wrapper').attr('data-page');
  
  if (pageId == 'home') {
    $('#pageId').html('You are at ' + pageId + ' page!');
  }
})