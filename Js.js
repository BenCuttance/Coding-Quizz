
var timerEl = document.getElementById("counter")
var button = document.querySelector(".beginBtn")
// var quizQuestions = [{
//     questionString: "String values must be enclosed within ______ when being assinged to variables"
//     choices: {
//         correct: "Qoutes",
//         wrong: ["Commas", "Curly Brackets","Parenthesis" ]
//     }
// }, {
//     questionString: "Arrays in JavaScript can be used to store?"
//     choices: {
//         correct: "All of the above",
//         wrong: ["Number and String", "Other Arrays","Booleans" ]
//     }
// }, {

//     questionString: "Commonly used data types DO NOT include:"
//     choices: {
//         correct: "Alerts",
//         wrong: ["Strings", "Booleans","Numbers"]
//     }
// }, {

//     questionString: "The condition in an if / else statement is enclosed with _______"
//     choices: {
//         correct: "Curly Brackets",
//         wrong: ["Quotes", "Parenthesis","Square Brackets"]

//     }

// }];

// function recallHighscores/init()



function countdown(){

var timeLeft = 90;  

var timeInterval = setInterval(function () {

if (timeLeft > 1){ 

    timerEl.textContent ='Seconds remaining: ' + timeLeft; 

timeLeft--;

} else if (timeLeft === 1){

    timerEl.textContent = 'Seconds remaining: ' + timeLeft;
    timeLeft--;
}else {

    timerEl.textContent = 'Seconds remaining: 0';
        }
    }, 1000);
}

// function questionsPrompts()


// Event Listeners

button.addEventListener("click", countdown);

