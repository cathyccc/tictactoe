"use strict";

$(function(){

  var turn = 1

  // allows alternating turns of X's and O's
  $('.square').click(function(){
    if ($(this).text() === ''){
      if (turn%2 === 0){
        $(this).text('O');
      }
      else{
        $(this).text('X');
      }
      turn ++;
      checkWin();
    }
    else {
      alert("Sorry, this square is occupied.");
    };
  });

  // checks if input is a winner
  function checkWin(){
    console.log("Checking winner")
    var one = $("#1").text()
    var two = $("#2").text()
    var three = $("#3").text()
    var four = $("#4").text()
    var five = $("#5").text()
    var six = $("#6").text()
    var seven = $("#7").text()
    var eight = $("#8").text()
    var nine = $("#9").text()
    var displayWinner = function(){
      alert("Congrats! You win!")
    };

    if ((one === "X" && four === "X" && seven === "X" )|| (one === "O" && four === "O" && seven === "O")){
      displayWinner()
    }
    else if ((two === "X" && five === "X" && eight === "X") || (two === "O" && five === "O" && eight === "O")){
      displayWinner()
    }
    else if ((three === "X" && six === "X" && nine === "X") || (three === "O" && six === "O" && nine === "O")){
      displayWinner()
    }
    else if ((one === "X" && five === "X" && nine === "X") || (one === "O" && five === "O" && nine === "O")){
      displayWinner()
    }
    else if ((three === "X" && five === "X" && seven === "X") || (three === "O" && five === "O" && seven === "O")){
      displayWinner()
    }
    else if ((one === "X" && two === "X" && three === "X") || (one === "O" && two === "O" && three === "O")){
      displayWinner()
    }
    else if ((four === "X" && five === "X" && six === "X") || (four === "O" && five === "O" && six === "O")){
      displayWinner()
    }
    else if ((seven === "X" && eight === "X" && nine === "X") || (seven === "O" && eight === "O" && nine === "O")){
      displayWinner()
    }
    else{
    }
  }

});
