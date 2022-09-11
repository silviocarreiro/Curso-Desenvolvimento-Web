
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;


$(document).on("keydown", function (tecla) {
    if (started === false) {
        nextSequence();
        started = true;
    }
})

function nextSequence () {
    userClickedPattern = [];

    var randomNumber =  Math.round(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    cor = $("#" + randomChosenColor).attr("id");

    playSound(cor);
    $("h1").html("Level " + level);
    level++;
}

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    cor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(cor);
    animatePress(cor);
    checkAnswer(userClickedPattern.length-1);
})

function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress (currentColor) {
    
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

function checkAnswer (currentLevel)  {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("sucess");
        
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        } 
    } else {
        var errado = new Audio("sounds/wrong.mp3");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("h1").html("Game over, press any key to restart");
        startOver();
        errado.play();
        console.log("wrong");
    }
}

function startOver() {
    gamePattern = [];
    level = 0;
    started = false;
}
