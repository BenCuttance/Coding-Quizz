
// var currentQuestion0
var quizBtn1 = document.querySelector('.btn1')
var quizBtn2 = document.querySelector('.btn2')
var quizBtn3 = document.querySelector('.btn3')
var quizBtn4 = document.querySelector('.btn4')
var questionSelector = document.querySelector('#question');
var highBtn = document.querySelector('#highBtn')
var submitBtn = document.querySelector('#subnitBtn')
var collectName = document.getElementById('fname')
var timeInterval = setInterval(timerEl, 1000)
var retryBtn = document.querySelector('#retryBtn')


var timerEl = document.getElementById("counter")
var button = document.querySelector(".beginBtn")
var leaderBoard = document.querySelector(".leaderBoard")
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
        wrong: ["Alerts", "Strings", "Booleans", "Numbers", ]
    }
}, {

    questionString: "The condition in an if / else statement is enclosed with _______",
    choices: {
        correct: "Curly Brackets",
        wrong: ["Quotes","Curly Brackets", "Parenthesis", "Square Brackets"]

    }, 

// }, {

//         questionString: "Game Over, Score:", 
    


}];

var timeLeft = 60;


function stopTimer() {
    clearInterval(timeInterval);
}


// function recallHighscores/init()


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
            // timerEl.textContent = 'Seconds remaining: 0';
            // questionSelector.textContent = "Game Over!    Score: " + timeLeft;
            // quizBtn1.style.display = "none";
            // quizBtn2.style.display = "none";
            // quizBtn3.style.display = "none";
            // quizBtn4.style.display = "none";
            // leaderBoard.style.display = "block"



        }
    }, 1000);


}


var currentIndex = 0

function changeDisplay() {

    var beginBtn = document.querySelector('.beginBtn')
    var questionContainer = document.querySelector(".container");
    var answerGrid = document.querySelector('#answerButtons')

    questionContainer.style.display = "block";

    beginBtn.style.display = "none";
    highBtn.style.display = "none";
    retryBtn.style.display = "none";

}

function checkAnswer(event){
var correctAnswer = quizQuestions[currentIndex].choices.correct;
var selectedAnswer = event.target.textContent;

if ( correctAnswer == selectedAnswer) {
    alert("Correct")
} else { timeLeft -=15;
    alert("wrong")
}
currentIndex++;


if (currentIndex >= quizQuestions.length) {

    scoreForm() 

} else {

displayQuestion ()

}

}

function displayQuestion () {

    questionSelector.textContent = quizQuestions[currentIndex].questionString;

    quizBtn1.textContent = quizQuestions[currentIndex].choices.wrong[0];
    quizBtn2.textContent = quizQuestions[currentIndex].choices.wrong[1];
    quizBtn3.textContent = quizQuestions[currentIndex].choices.wrong[2];
    quizBtn4.textContent = quizQuestions[currentIndex].choices.wrong[3];

   
}

function beginQuiz() {

    timerEl.style.display = "block"

    leaderBoard.style.display = "none"

    countdown()

    changeDisplay()


    quizBtn1.addEventListener('click', checkAnswer)

    quizBtn2.addEventListener('click', checkAnswer)

    quizBtn3.addEventListener('click', checkAnswer)

    quizBtn4.addEventListener('click', checkAnswer)

    displayQuestion()



    // quizBtn3.addEventListener('click', function () {

    //     questionSelector.textContent = quizQuestions[1].questionString;

    //     quizBtn1.textContent = quizQuestions[1].choices.wrong[0];
    //     quizBtn2.textContent = quizQuestions[1].choices.wrong[2];
    //     quizBtn3.textContent = quizQuestions[1].choices.wrong[1];
    //     quizBtn4.textContent = quizQuestions[1].choices.correct;

    //     quizBtn4.addEventListener('click', function () {

    //         questionSelector.textContent = quizQuestions[2].questionString;


    //         quizBtn1.textContent = quizQuestions[2].choices.correct;
    //         quizBtn2.textContent = quizQuestions[2].choices.wrong[1];
    //         quizBtn3.textContent = quizQuestions[2].choices.wrong[2];
    //         quizBtn4.textContent = quizQuestions[2].choices.wrong[0];


    //         quizBtn1.addEventListener('click', function () {

    //             questionSelector.textContent = quizQuestions[3].questionString;

    //             quizBtn1.textContent = quizQuestions[3].choices.wrong[1];
    //             quizBtn2.textContent = quizQuestions[3].choices.correct;
    //             quizBtn3.textContent = quizQuestions[3].choices.wrong[0];
    //             quizBtn4.textContent = quizQuestions[3].choices.wrong[2];

    //             quizBtn2.addEventListener('click', function () {

    //                 scoreForm()



    //             })


    //         })

    //     })
    // })
}

// Event Listeners

button.addEventListener("click", beginQuiz);
clearInterval(timeInterval);

function scoreForm() {

    stopTimer()

    timerEl.textContent = "Seconds remaining:" + timeLeft;
    questionSelector.textContent = "Game Over: Score: " + timeLeft;
    leaderBoard.style.display = "block"

    retryBtn.style.display = "block"
    quizBtn1.style.display = "none";
    quizBtn2.style.display = "none";
    quizBtn3.style.display = "none";
    quizBtn4.style.display = "none";

    // submitBtn.addEventListener('click', function(){

    // localStorage.setItem("fname", collectName.value)

    // })


}



function retryQuiz() {

    quizBtn1.style.display = "block";
    quizBtn2.style.display = "block";
    quizBtn3.style.display = "block";
    quizBtn4.style.display = "block";

    timeLeft = 60;
leaderBoard.style.display = "none"
retryBtn.style.display = "none"
    

    checkAnswer()
    beginQuiz()


}

retryBtn.addEventListener('click', retryQuiz)


