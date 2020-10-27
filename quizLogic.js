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

// create variables that reference DOM elements

let timeEl = document.querySelector("#timeLeft");
let startQuizBtn = document.querySelector("#startBtn");
let answersEl = document.querySelector("#choiceOpts");

//create variable that will set timer 
let countdown = questions.length  * 12;
//create variable that will be used as an index ittirator to the array of questions
let i = 0;
//create variable that will clear timer 
let clearTimer;




// button is clicked for test to begin
startQuizBtn.addEventListener("click", startTimer);

//function is called to start  timer and ask series of questions   
function startTimer() {
    clearTimer = setInterval(function() {
        countdown--;
        timeEl.textContent = countdown;

        if(countdown <= 0) {
            timeEl.textContent = "";
            clearInterval(clearTimer);
        }
    }, 1000); 
    startQuestions();
}

//function created to get questions for quiz
function startQuestions() {
//variable created to itterate through the questions array    
    let questionNow = questions[i];

//add question to id
    questionEl = document.querySelector("#questionSection");
    questionEl.textContent = questionNow.question;
//answer buttons will not make replicas when start button is pushed
    answersEl.innerHTML = "";
//loop through array answers
    questionNow.answers.forEach(function(ans, ind) {
//create buttons for each answer
        let answersBtns = document.createElement("button");
//answersBtns.setAttribute("class", "ans");
        answersBtns.setAttribute("value", ans);
        answersBtns.textContent = ind + 1 +") " + ans;
        answersEl.appendChild(answersBtns);
        answersBtns.addEventListener("click", answersPressed);
    });
}

function answersPressed() {
    if (this.value !== questions[i].correctAns) {
        countdown -= 10;
    }
    i++
    if (i === questions.length) {
        console.log("Over");
        clearInterval(timeEl);
    } else {
        startQuestions();
    }
}