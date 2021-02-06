const quizData = [
  {
    question: "What is the wild animal?",
    a: "Cat",
    b: "Wolf",
    c: "Hourse",
    correct: "b",
  },
  {
    question: "How many countries are there in UK?",
    a: "4",
    b: "5",
    c: "3",
    correct: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "Texas",
    b: "New York",
    c: "Washington",
    correct: "c",
  },
  {
    question: "Ehat is invincibility?",
    a: "Imune to all damage",
    b: "Imune to moral damage",
    c: "Lack of imune to damage",
    correct: "a",
  },
  {
    question: "What is the London Eye?",
    a: "The spy organisation of the UK",
    b: "The great periscope",
    c: "The great wheel",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  reselect();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function reselect() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Tou  have finished with the score ${score}/${quizData.length} questions</h2>`;
    }
  }
});
