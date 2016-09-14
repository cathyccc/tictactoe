"use strict";

$(function(){

  $('.square').click(function(){
    if ($(this).text() === ''){
      $(this).text('X');
    }
    else {
      alert("Sorry, this square is occupied.");
    };
  });

});
