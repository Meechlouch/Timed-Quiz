// create an arr of obj for Q&A
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

let body = document.body;

// create variables that reference DOM elements
let inputInitials = document.querySelector("#initials");
let saveBtn = document.querySelector("#submit");
let timeLeftId = document.querySelector("#timeLeft");
let startQuizBtnId = document.querySelector("#startBtn");
let answersId = document.querySelector("#choiceOpts");
let input = document.createElement("input");
    input.type = "text";
    input.id = "initials";
    input.max = "3";
    input.placeholder = "Enter your initials here!";
let submitId = document.createElement("button");
    submitId.id = "submit";
    submitId.innerText = "Save";

//create variable that will set timer 
let countdown = questions.length  * 12;
//create variable that will be used as an index ittirator to the array of questions
let i = 0;
//create variable that will clear timer 
let clearTimer;

// event listeners added for buttons
startQuizBtnId.addEventListener("click", startTimer);

//function is called to start timer   
function startTimer() {
    clearTimer = setInterval(function() {
        countdown--;
        timeLeftId.textContent = countdown;

        if(countdown <= 0) {
            quizFinished();
        }
    }, 1000); 
    startQuestions();
}

//function created to get questions for quiz
function startQuestions() {
//variable created to itterate through the questions array    
    let questionNow = questions[i];

//add question to id
    questionId = document.querySelector("#questionSection");
    questionId.textContent = questionNow.question;
//answer buttons will not make replicas when start button is pushed
    answersId.innerHTML = "";
//loop through array answers
    questionNow.answers.forEach(function(ans, ind) {
//create buttons for each answer
        let answersBtns = document.createElement("button");
//answersBtns.setAttribute("class", "ans");
        answersBtns.setAttribute("value", ans);
        answersBtns.textContent = ind + 1 +") " + ans;
        answersId.appendChild(answersBtns);
        answersBtns.addEventListener("click", answersPressed);
    });
}

function answersPressed() {
    if (this.value !== questions[i].correctAns) {
        countdown -= 10;
    }

    i++;
    timeLeftId.textContent = countdown;

    if (i === questions.length) {
        clearInterval(clearTimer);
        quizFinished();
    } else {
        startQuestions();
    }
}

function quizFinished() {
    let finishMessage = "Your score is: " + countdown;
    scoreMessage = document.querySelector("#userScore");
    scoreMessage.textContent = finishMessage;
    let inputParent = document.createElement("div");
    body.appendChild(inputParent)
    inputParent.appendChild(input);
    inputParent.appendChild(submitId);
    saveScore();
}

function saveScore() {
    saveBtn = document.querySelector("#submit");
    saveBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        let saveInitials = document.querySelector("#initials").value;
        localStorage.setItem("initials", saveInitials);

    })
}
  

 