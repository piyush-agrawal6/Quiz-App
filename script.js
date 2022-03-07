const quizData = [
  {
    question: "An HTML document is saved with the ____ extension.",
    a: ".htl",
    b: ".htm",
    c: ".html",
    d: ".hl",
    ans: "c",
  },
  {
    question: "What is the fullform of HTML ?",
    a: "Hyper Text Markup language",
    b: "hyper text",
    c: "hyper",
    d: "markup language",
    ans: "a",
  },
  {
    question: "Who is the Prime Minister of India ?",
    a: "Piyush Agrawal",
    b: "Indira  Gandhi",
    c: "You",
    d: "Narendra Modi",
    ans: "d",
  },
  {
    question: " What is the current year?",
    a: "2000",
    b: "2022",
    c: "1950",
    d: "2050",
    ans: "b",
  },
];

const question = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const submit = document.getElementById("btn");
const answers = document.querySelectorAll(".answer");
const showScore = document.getElementById("showScore");

let currentQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  question.innerHTML = currentQuizData.question;
  optionA.innerHTML = currentQuizData.a;
  optionB.innerHTML = currentQuizData.b;
  optionC.innerHTML = currentQuizData.c;
  optionD.innerHTML = currentQuizData.d;
}

const getCheckAnswer = () => {
  let answer;

  answers.forEach((currAnsEle) => {
    if (currAnsEle.checked) {
      answer = currAnsEle.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizData[currentQuestion].ans) {
    score++;
  }
  console.log(score);
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
    <div class="score"> <h3> You Scored ${score}/${quizData.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button></div>
    `;
    showScore.classList.remove("showArea");
  }
});
