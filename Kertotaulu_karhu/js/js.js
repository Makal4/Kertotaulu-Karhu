$(function() {
    ///*****Kertotaulu-Karhu by: Markus Tuominen*****\\\
    var firstNum = 0;
    var secondNum = 0;
    var rightAnswer = 0;
    var userAnswer = 0;
    var counter = 0;
    var falsecounter = 0;
    var timer;
    var time;

    var music = new Audio();

    //music.src = "sound/music.mp3";
    music.volume = 0.5;
    music.play();
    music.loop = true;

    game();

    function game() {
        randNumbers();

        $("#time").html("5");
        time = 5;
        //new game = all progress is back to 0
        counter = 0;
        falsecounter = 0;
        $("#prog1, #prog2, #prog3, #prog4, #prog5, #prog6, #prog7, #prog8, #prog9, #prog10").css("background-color", "#F44336");

        $("#answer").show();
        $("#answer").focus(); //focus on input field wihtout clicking it
        $("#infobox").hide();

        // press enter and check if user input is same than right answer
        $("#gameArea").keydown(function(e) {

            if (e.keyCode === 13) {

                userAnswer = parseInt($("#answer").val());
                //console.log(userAnswerMath);
                if (userAnswer === rightAnswer) {
                    counter++;
                    time = 6;
                    randNumbers();
                } else {
                    falsecounter++;
                    randNumbers();
                }
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
            }

        });

        timer = setInterval(function() {
            time--;
            $("#time").html(time);
            if (time < 0) {
                time = 0;
                window.clearInterval(timer);
                gameEnd();
            }

        }, 1000);

        //input field stays active
        $('#answer').on('blur', function(event) {
            var blurEl = $(this);
            setTimeout(function() {
                blurEl.focus()
            }, 10)
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
        $("#infobox").show();
        $("#time").html("0");
        $("#infobox").html("Aika umpeutui. Paina space pelataksesi uudelleen <br> <button id='play'>Kaka</button>");
        $("#play").click(function() {
            game();
        })

        $("#gameArea").keydown(function(e) {

            if (e.keyCode === 32) {
                console.log("painettu");
                game();
            }

        });
    }









});
