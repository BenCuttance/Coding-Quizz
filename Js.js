



timeLeft = 90;

function countdown(){

timeLeft--;
document.getElementById("counter").innerHTML = String( timeLeft );
if (timeLeft > 0) {
    setTimeout(countdown, 1000);
}
};
 


// function recallHighscores()

// function startButton()

setTimeout(countdown, 1000);

// function questionsPrompts()


