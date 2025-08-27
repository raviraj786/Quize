const quizData = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", option: true },
      { text: "Hyperlinks Text Manage Logic", option: false },
      { text: "Home Tool Markup Language", option: false },
      { text: "Hyper Text Markup Languages", option: false },
    ],
  },

  {
    question: "Which CSS property changes text color?",
    answers: [
      { text: "font-size", option: false },
      { text: "text-style", option: false },
      { text: "color", option: true },
      { text: "background", option: false },
    ],
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: "<script>", option: true },
      { text: "<js>", option: false },
      { text: "<javascript>", option: false },
      { text: "<code>", option: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", option: true },
      { text: "<!-- -->", option: true },
      { text: "#", option: true },
      { text: "/* */", option: true },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", option: false },
      { text: "Netscape", option: true },
      { text: "Google", option: false },
      { text: "Oracle", option: false },
    ],
  },
];

let curentqutionindex = 0;
let score = 0;

const startscreen = document.querySelector("#start-screen");
const startbtn = document.getElementById("start-button");
const qutionsscreen = document.getElementById("quiz-screen");
const questionElement = document.getElementById("question");
// const scoreElement = document.getElementById("score");
const restartbtn = document.getElementById("restart-btn");
const info_question = document.getElementById("info-question");
const total = document.getElementById("total-question");
const answer_container = document.getElementById("answer-container");

const resultElement = document.getElementById("result-screen");

const nextbtn = document.getElementById("next-btn");

const resultScreen = document.getElementById("result-screen");

const finalScoreElement = document.getElementById("final-score");

const maxScoreElement = document.getElementById("max-score");

const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart");

const progressline = document.getElementById("progress");

function startready() {
  // setTimeout(() => {
  //   console.log("exam start")

  // } , 3000)

  startscreen.classList.remove("active");
  qutionsscreen.classList.add("active");
  startQuiz(quizData[curentqutionindex]);
}

function startQuiz(question) {
  questionElement.innerHTML = question.question;

  answer_container.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer, button));
    answer_container.appendChild(button);
  });
  nextbtn.style.display = "none";
}

function selectAnswer(answer, button) {
  button.style.background = "green";

  

  if (answer.option) {
    score++;
  }

  Array.from(answer_container.children).forEach((btn) => {
    btn.disabled = true;
  });

  nextbtn.style.display = "block";
}

function nextqution() {
  curentqutionindex++;
  info_question.innerText = curentqutionindex+1;
   const progressbarPercent = ((curentqutionindex)/quizData.length) * 100 ;
     progressline.style.width =  progressbarPercent +  '%'

  if (curentqutionindex < quizData.length) {
    startQuiz(quizData[curentqutionindex]);
    // const progressbarPercent = ((curentqutionindex)/quizData.length) * 100 ;

    //  progressline.style.width =  progressbarPercent +  '%'
  } else {
    showResult();
  }
}

function showResult() {
  qutionsscreen.classList.remove("active");
  resultScreen.classList.add("active");

  console.log(score, "ssssssss");
  console.log(quizData.length, "ssssssss");

  finalScoreElement.textContent = score;

  console.log(finalScoreElement.textContent, "Ss");

  maxScoreElement.textContent = quizData.length;

  if (score === quizData.length) {
    resultMessage.textContent = "Excellent!";
  } else if (score >= quizData.length / 2) {
    resultMessage.textContent = "Good job!";
  } else {
    resultMessage.textContent = "Keep studying!";
  }
}

restartBtn.addEventListener("click", () => {
  // resultScreen.classList.remove("active");
  // startscreen.classList.add("active");
});

startbtn.addEventListener("click", startready);
nextbtn.addEventListener("click", nextqution);
