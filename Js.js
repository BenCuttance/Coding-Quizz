// List of Variables used throughout the code

var quizBtn1 = document.querySelector('.btn1')
var quizBtn2 = document.querySelector('.btn2')
var quizBtn3 = document.querySelector('.btn3')
var quizBtn4 = document.querySelector('.btn4')
var questionSelector = document.querySelector('#question');
var highBtn = document.querySelector('#highBtn')
var submitBtn = document.querySelector('#submitBtn')
var collectName = document.getElementById('fname')
var timeInterval = setInterval(timerEl, 1000)
var retryBtn = document.querySelector('#retryBtn')
var questionContainer = document.querySelector(".container");
var beginBtn = document.querySelector('.beginBtn')
var highScores = document.querySelector('.highScores')
var currentIndex = 0


var timeLeft = 60;


var timerEl = document.getElementById("counter")
var button = document.querySelector(".beginBtn")
var leaderBoard = document.querySelector(".leaderBoard")

// Object holding the quiz question, correct and wrong answers that will be used in the displayQuestion function 

var quizQuestions = [{
    questionString: "String values must be enclosed within ______ when being assinged to variables",

    choices: {
        correct: "Qoutes",
        wrong: ["Commas", "Curly Brackets", "Parenthesis", "Qoutes"]
    }
}, {
    questionString: "Arrays in JavaScript can be used to store?",
    choices: {
        correct: "All of the above",
        wrong: ["Number and String", "Other Arrays", "Booleans", "All of the above"]
    }
}, {

    questionString: "Commonly used data types DO NOT include:",
    choices: {
        correct: "Alerts",
        wrong: ["Alerts", "Strings", "Booleans", "Numbers",]
    }
}, {

    questionString: "The condition in an if / else statement is enclosed with _______",
    choices: {
        correct: "Curly Brackets",
        wrong: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"]

    },



}];


// Function to stop timer, which will be called once the user reaches the end of the quiz

function stopTimer() {
    clearInterval(timeInterval);
}

button.addEventListener("click", beginQuiz);


// Function to call timer once user begins quiz. If counter reaches 0 calls scoreForm function to end game. 

var timeInterval = null;
function countdown() {
    timeInterval = setInterval(function () {

        if (timeLeft > 1) {

            timerEl.textContent = 'Seconds remaining: ' + timeLeft;

            timeLeft--;

        } else if (timeLeft === 1) {

            timerEl.textContent = 'Seconds remaining: ' + timeLeft;
            timeLeft--;
        } else {

            timerEl.textContent = "Seconds remaining: 0"
            scoreForm()

        }
    }, 1000);


}

// changes display of multiples buttons to be hidden from user once the quiz starts. Also makes the questionContainer appear which will hold the quiz for the user to 
// interact with




function changeDisplay() {



    var answerGrid = document.querySelector('#answerButtons')

    questionContainer.style.display = "block";

    beginBtn.style.display = "none";
    highBtn.style.display = "none";
    retryBtn.style.display = "none";

}

// 

function checkAnswer(event) {
    var correctAnswer = quizQuestions[currentIndex].choices.correct;
    var selectedAnswer = event.target.textContent;

    if (correctAnswer == selectedAnswer) {
        alert("Correct")
    } else {
        timeLeft -= 15;
        alert("wrong")
    }
    currentIndex++;


    if (currentIndex >= quizQuestions.length) {

        scoreForm()

    } else {

        displayQuestion()

    }

}

function displayQuestion() {

    questionSelector.textContent = quizQuestions[currentIndex].questionString;

    quizBtn1.textContent = quizQuestions[currentIndex].choices.wrong[0];
    quizBtn2.textContent = quizQuestions[currentIndex].choices.wrong[1];
    quizBtn3.textContent = quizQuestions[currentIndex].choices.wrong[2];
    quizBtn4.textContent = quizQuestions[currentIndex].choices.wrong[3];


}

function beginQuiz() {

    timeLeft = 60
    currentIndex = 0
    quizBtn1.style.display = "block";
    quizBtn2.style.display = "block";
    quizBtn3.style.display = "block";
    quizBtn4.style.display = "block";
    

    timerEl.style.display = "block"

    leaderBoard.style.display = "none"
    // ulScores.style.display = "none"

    countdown()

    changeDisplay()


    quizBtn1.addEventListener('click', checkAnswer)

    quizBtn2.addEventListener('click', checkAnswer)

    quizBtn3.addEventListener('click', checkAnswer)

    quizBtn4.addEventListener('click', checkAnswer)

    displayQuestion()

}


clearInterval(timeInterval);



function scoreForm() {

    stopTimer()

    

    timerEl.textContent = "Seconds remaining:" + timeLeft;
    questionSelector.textContent = "Game Over: Score: " + timeLeft;
    leaderBoard.style.display = "block"


    quizBtn1.style.display = "none";
    quizBtn2.style.display = "none";
    quizBtn3.style.display = "none";
    quizBtn4.style.display = "none";

    submitBtn.style.display = 'block'

    submitBtn.addEventListener('click', endQuiz)
}


var scoreBoard = [];
function endQuiz() {


    scoreBoard.push({ Name: collectName.value, score: timeLeft });

    console.log(scoreBoard);


    // localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));

    appendToStorage("oldScores", JSON.stringify(scoreBoard));

    questionContainer.style.display = "none";
    submitBtn.style.display = "none"
    beginBtn.style.display = "block";
    // ulScores.style.display = "block"

    //   Append that LI to the UL. Give the text content will contain scoreBoard name & Score. 
    var ulScores = document.querySelector("#ulScores");

    for (var i = 0; i < scoreBoard.length; i++) {
        var scoreBoards = scoreBoard[i];


        var li = document.createElement("li");
        li.textContent = scoreBoard;
        li.setAttribute("data-Index", i);

        li.appendChild(submitBtn);
        ulScores.appendChild(li);
    }



}

// array1.forEach(element => console.log(element));



scoreBoard.forEach(element => console.log(element));



function appendToStorage(oldScoreBoard, newScore) {

    var oldScoreBoard = localStorage.getItem("scoreBoard");
    if (oldScoreBoard === null) oldScoreBoard = "";
    localStorage.setItem("scoreBoard", oldScoreBoard + newScore);
}

appendToStorage("oldScores", collectName.value);


