$(function () {
  ///*****Kertotaulu-Karhu by: Markus Tuominen*****\\\
  var firstNum = 0;
  var secondNum = 0;
  var rightAnswer = 0;
  var userAnswer = 0;
  var userAnswerMath = 0;
  var counter = 0;
  var timer = 0;
  var time = 5;

  var music = new Audio();

  //music.src = "sound/music.mp3";
  music.volume = 0.5;
  music.play();
  music.loop = true;

  game();

  function game() {
    randNumbers();
    $("#answer").show();
    // press enter and check if user input is same than right answer
    $("#gameArea").keydown(function (e) {

          if (e.keyCode === 13) {

            userAnswer = parseInt($("#answer").val());
            userAnswerMath = parseInt(userAnswer);
            //console.log(userAnswerMath);
                     if(userAnswerMath === rightAnswer) {
                       counter++;
                       time = 5;
                       //console.log(counter);
                       randNumbers();
                     }
                     else {
                       //console.log(counter);
                       //counter--;
                       randNumbers();
                     }
            }

            //progress if answer is correct
            if(counter === 1) {
                  $("#prog1").css("background-color", "#4CAF50");
              }
            if(counter === 2) {
                  $("#prog2").css("background-color", "#4CAF50");
              }
            if(counter === 3) {
                  $("#prog3").css("background-color", "#4CAF50");
              }
            if(counter === 4) {
                  $("#prog4").css("background-color", "#4CAF50");
              }
            if(counter === 5) {
                  $("#prog5").css("background-color", "#4CAF50");
              }
            if(counter === 6) {
                  $("#prog6").css("background-color", "#4CAF50");
              }
            if(counter === 7) {
                  $("#prog7").css("background-color", "#4CAF50");
              }
            if(counter === 8) {
                  $("#prog8").css("background-color", "#4CAF50");
              }
            if(counter === 9) {
                  $("#prog9").css("background-color", "#4CAF50");
              }
            if(counter === 10) {
                  $("#prog10").css("background-color", "#4CAF50");
              }

          });

    timer = setInterval(function() {
      time--;
      $("#time").html(time);
      if(time < 0) {
        time = 0;
        gameEnd();
      }

    }, 1000);

    //input field stays active
    $('#answer').on('blur',function (event) { var blurEl = $(this); setTimeout(function() {blurEl.focus()},10) });

    //music on/off
    $("#volume").click(function () {

      if(music.paused) {
        $("#volume").html("<i id='volume' class='material-icons'>volume_up</i>");
        music.play();
      }
      else {
        $("#volume").html("<i id='volume' class='material-icons'>volume_off</i>");
        music.pause();
      }

    });
  }

  function randNumbers() {

    $("#answer").val("")

    firstNum = Math.floor(Math.random() * 10) + 1;
    secondNum = Math.floor(Math.random() * 10) + 1;

    $("#firstNum").html(firstNum);
    $("#secondNum").html(secondNum);

    rightAnswer = firstNum * secondNum;
    console.log(rightAnswer);

  }

  function gameEnd() {
    $("#answer").hide();
    $("#infobox").html("Aika umpeutui. Paina enter pelataksesi uudelleen");

    $("#gameArea").keydown(function (e) {

          if (e.keyCode === 13) {
              game();
            }

          });
  }















  });
