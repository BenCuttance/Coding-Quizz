
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


var timerEl = document.getElementById("counter")
var button = document.querySelector(".beginBtn")
var leaderBoard = document.querySelector(".leaderBoard")
var quizQuestions = [{
    questionString: "String values must be enclosed within ______ when being assinged to variables",

    choices: {
        correct: "Qoutes",
        wrong: ["Commas", "Curly Brackets", "Parenthesis"]
    }
}, {
    questionString: "Arrays in JavaScript can be used to store?",
    choices: {
        correct: "All of the above",
        wrong: ["Number and String", "Other Arrays", "Booleans"]
    }
}, {

    questionString: "Commonly used data types DO NOT include:",
    choices: {
        correct: "Alerts",
        wrong: ["Strings", "Booleans", "Numbers"]
    }
}, {

    questionString: "The condition in an if / else statement is enclosed with _______",
    choices: {
        correct: "Curly Brackets",
        wrong: ["Quotes", "Parenthesis", "Square Brackets"]

    }

}];

var timeLeft = 60;


function stopTimer (){
    clearInterval(timeInterval);
}


// function recallHighscores/init()
console.log(quizQuestions[0].questionString)
console.log(quizQuestions[0].choices.correct)

function countdown() {

    const timeInterval = setInterval(function () {

        if (timeLeft > 1) {

            timerEl.textContent = 'Seconds remaining: ' + timeLeft;

            timeLeft--;

        } else if (timeLeft === 1) {

            timerEl.textContent = 'Seconds remaining: ' + timeLeft;
            timeLeft--;
        } else {

            timerEl.textContent = "Seconds remaining: 0"
            scoreForm ()
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



function changeDisplay() {

    var beginBtn = document.querySelector('.beginBtn')
    var questionContainer = document.querySelector(".container");
    var answerGrid = document.querySelector('#answerButtons')

    questionContainer.style.display = "block";

    beginBtn.style.display = "none";
    highBtn.style.display = "none";

}


function beginQuiz() {
   
   timerEl.style.display = "block" 
    
   countdown()

    changeDisplay()


questionSelector.textContent = quizQuestions[0].questionString;

quizBtn1.textContent= quizQuestions[0].choices.wrong[0];
quizBtn2.textContent = quizQuestions[0].choices.wrong[1];
quizBtn3.textContent = quizQuestions[0].choices.correct;
quizBtn4.textContent = quizQuestions[0].choices.wrong[2];



quizBtn3.addEventListener('click', function () {

questionSelector.textContent = quizQuestions[1].questionString;

quizBtn1.textContent= quizQuestions[1].choices.wrong[0];
quizBtn2.textContent = quizQuestions[1].choices.wrong[2];
quizBtn3.textContent = quizQuestions[1].choices.wrong[1];
quizBtn4.textContent = quizQuestions[1].choices.correct;

quizBtn4.addEventListener('click', function (){

questionSelector.textContent = quizQuestions[2].questionString;


quizBtn1.textContent= quizQuestions[2].choices.correct;
quizBtn2.textContent = quizQuestions[2].choices.wrong[2];
quizBtn3.textContent = quizQuestions[2].choices.wrong[1];
quizBtn4.textContent = quizQuestions[2].choices.wrong[0];

quizBtn1.addEventListener('click', function (){

questionSelector.textContent = quizQuestions[3].questionString;

quizBtn1.textContent= quizQuestions[3].choices.wrong[1];
quizBtn2.textContent = quizQuestions[3].choices.correct;
quizBtn3.textContent = quizQuestions[3].choices.wrong[0];
quizBtn4.textContent = quizQuestions[3].choices.wrong[2];

quizBtn2.addEventListener('click', function (){

    scoreForm() 



} )


})

})
})
}

// Event Listeners

button.addEventListener("click", beginQuiz);


function scoreForm () {

    stopTimer()
   
    timerEl.textContent = "Seconds remaining:" + timeLeft;
    questionSelector.textContent = "Game Over: Score: " + timeLeft  ;
    leaderBoard.style.display = "block"
    

    quizBtn1.style.display = "none";
    quizBtn2.style.display = "none";
    quizBtn3.style.display = "none";
    quizBtn4.style.display = "none";
    
// submitBtn.addEventListener('click', function(){

// localStorage.setItem("fname", collectName.value)

// })


}


// quizBtn1.addEventListener('click', function () {

//     timeLeft -= 5;
    
//     })
    
//     quizBtn2.addEventListener('click', function () {
    
//         timeLeft -= 5;
        
//         })
    
//     quizBtn4.addEventListener('click', function () {
    
//             timeLeft -= 5;
            
//             })