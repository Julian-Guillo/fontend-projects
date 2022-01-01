const quizData = [{
  question: "How old is Florin?",
  a: "10",
  b: "26",
  c: "17",
  d: "110",
  correct: "c",
}, {
  question: "What was the most used programming language in 2019?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "a",
}, {
  question: "Who is the President of US",
  a: "Julián Guilló",
  b: "Joe Biden",
  c: "Jackie Chan",
  d: "Joe Bidones",
  correct: "b",
}, {
  question: "What does HTML stand for",
  a: "Hypertext Markup Language",
  b: "Hypersonic Tendency to Melting Lantane",
  c: "Hola Terratenientes Malhechores Lingüistas",
  d: "Hypertext Marking Language",
  correct: "a",
}, {
  question: "Have you made it to the end of the quizz?",
  a: "Yes",
  b: "No",
  c: "Yes, my life is that boring",
  d: "Hakuna Matata",
  correct: "c",
}]


const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

// Function to load the next question
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Function to check what answer has been selected
function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

// Funtion to deselect answer when the next question is loaded
function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  })
}

submitBtn.addEventListener('click', () => {
  // check what answer has been selected
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    // check if anwer is correct, update score
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    currentQuiz++;
    // get next question
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}` +
       `questions</h2> <button onclick="location.reload()">Reload</button>`;
    }

  }

});
