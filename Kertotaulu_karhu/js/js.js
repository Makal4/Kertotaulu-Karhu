$(function() {
  ///*****Kertotaulu-Karhu by: Markus Tuominen*****\\\
  var firstNum;
  var secondNum;
  var rightAnswer;
  var userAnswer;
  var counter;
  var falsecounter;
  var timer;
  var time;

  var music = new Audio();

  music.src = "sound/music.mp3";
  music.volume = 0.2;
  music.play();
  music.loop = true;

  game();

  // press enter and check if user input is same than right answer
  $("#gamearea").keydown(function(e) {

    if (e.keyCode === 13) {

      userAnswer = parseInt($("#answer").val());
      // rightAnswer = firstNum * secondNum;
      console.log("oikea vastaus " + rightAnswer);
      console.log("sinun vastaus " + userAnswer);
      //console.log(userAnswerMath);
      if (userAnswer === rightAnswer) {
        counter++;
        time = 6;
        randNumbers();
        console.log("vastaus oikein!");
      } else {
        falsecounter++;
        randNumbers();
        console.log("vastaus väärin!");
      }
      //console.log(rightAnswer);
    }

    //progress if answer is correct
    if (counter === 1) {
      $("#prog1").css("background-color", "#4CAF50");
    }
    if (counter === 2) {
      $("#prog2").css("background-color", "#4CAF50");
    }
    if (counter === 3) {
      $("#prog3").css("background-color", "#4CAF50");
    }
    if (counter === 4) {
      $("#prog4").css("background-color", "#4CAF50");
    }
    if (counter === 5) {
      $("#prog5").css("background-color", "#4CAF50");
    }
    if (counter === 6) {
      $("#prog6").css("background-color", "#4CAF50");
    }
    if (counter === 7) {
      $("#prog7").css("background-color", "#4CAF50");
    }
    if (counter === 8) {
      $("#prog8").css("background-color", "#4CAF50");
    }
    if (counter === 9) {
      $("#prog9").css("background-color", "#4CAF50");
    }
    if (counter === 10) {
      $("#prog10").css("background-color", "#4CAF50");
      gameEnd();
    }

  });

  function game() {
    userAnswer = 0;
    rightAnswer = 0;
    firstNum = 0;
    secondNum = 0;
    time = 5;
    counter = 0;
    falsecounter = 0;

    randNumbers();

    $("#time").html("5");
    $("#prog1, #prog2, #prog3, #prog4, #prog5, #prog6, #prog7, #prog8, #prog9, #prog10").css("background-color", "#F44336");

    $("#gamearea").show();
    $("#endgamearea").hide();
    $("#answer").show();
    $("#answer").focus(); //focus on input field wihtout clicking it

    timer = setInterval(function() {
      time--;
      $("#time").html(time);
      if (time < 0) {
        time = 0;
        gameEndTime();
      }

    }, 1000);

    //input field stays active
    $('#answer').on('blur', function(event) {
      var blurEl = $(this);
      setTimeout(function() {
        blurEl.focus();
      }, 10);
    });

    //music on/off
    $("#volume").click(function() {
      if (music.paused) {
        $("#volume").html("<i id='volume' class='material-icons'>volume_up</i>");
        music.play();
      } else {
        $("#volume").html("<i id='volume' class='material-icons'>volume_off</i>");
        music.pause();
      }
    });
  }

  function randNumbers() {
    $("#answer").val("");

    firstNum = Math.floor(Math.random() * 10) + 1;
    secondNum = Math.floor(Math.random() * 10) + 1;
    rightAnswer = firstNum * secondNum;

    $("#firstnum").html(firstNum);
    $("#secondnum").html(secondNum);
  }

  function gameEnd() {
      window.clearInterval(timer);

      $("#gamearea").hide();
      $("#endgamearea").show();
      $("#time").html("0");
      $("#infobox").html("Voitit pelin! Vastasit väärin " + falsecounter + " kertaa. <br> <button id='play'>Pelaa uudelleen</button>");
      $("#infobox").css("color", "#4CAF50");

      $("#play").click(function() {
        game();
      });
  }

  function gameEndTime() {
    window.clearInterval(timer);

    $("#gamearea").hide();
    $("#endgamearea").show();
    $("#time").html("0");
    $("#infobox").html("Aika umpeutui. Vastasit väärin " + falsecounter + " kertaa. <br> <button id='play'>Pelaa uudelleen</button>");
    $("#infobox").css("color", "#F44336");

    $("#play").click(function() {
      game();
    });


  }









});
