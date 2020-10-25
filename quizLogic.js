// create variables to
let questions = [
    {
        question: "How many days are in a year?",
        answers: ["24", "7", "365", "12"],
        correctAns: "365"
    },
    {
        question: "What planetary body is larger than the Sun?",
        answers: ["the moon", "the earth", "a comet", "none of these"],
        correctAns: "none of these"
    },
    {
        question: "How many inches are a yard?",
        answers: ["6", "36", "12", "32"],
        correctAns: "36"
    },
    {
        question: "What number is higher than 10K?",
        answers: ["10", "1,000", "10,000", "10,100"],
        correctAns: "10,100"
    },
    {
        question: "What country is famous for anime?",
        answers: ["China", "India", "America", "Japan"],
        correctAns: "Japan"
    }
];

// create variables that reference DOM elements
//let questionEl = document.querySelector("#questions");
let timeEl = document.querySelector("#timeLeft");
let startQuizEl = document.querySelector("#startBtn");
//let answerEl = document.querySelector("#answers");

let countdown = questions.length  * 12;

function startQuiz() {
    startTimer();

}



function startTimer() {
    setInterval(function() {
        countdown--;
        timeEl.textContent = countdown;
    }, 1000);
    if(countdown <= 0) {
        clearInterval(timeEl);
    }
}




// button is clicked for test to begin

startBtn.addEventListener("click", startQuiz);
    
