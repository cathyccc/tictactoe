"use strict";

$(function(){

  var turn = 1

  $('.square').click(function(){

    if ($(this).text() === ''){
      if (turn%2 === 0){
        $(this).text('O');
      }
      else{
        $(this).text('X');
      }
      turn ++
    }
    else {
      alert("Sorry, this square is occupied.");
    };
  });

});
