// script.js
let timer;
let timeLeft = 30;


function startTimer() {
  timeLeft = 30;
  const timerDisplay = document.getElementById("timer");

  timer = setInterval(() => {
    timerDisplay.textContent = `⏳ Time left: ${timeLeft}s`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      alert("⏱️ Time's up!");
      userAnswers[currentQuestion] = null;
      nextQuestion();
    }
  }, 1000);
}





const quizData = [
  {
    question: "Your idea was taken by someone else in a meeting. What do you do?",
    options: [
      "Ignore it, your work will speak",
      "Correct them in front of the team",
      "Talk to them privately",
      "Report them to the manager"
    ]
  },
  {
    question: "You’re asked to complete a task with a tight deadline. What is your response?",
    options: [
      "Accept and try your best",
      "Ask for extension",
      "Delegate parts to others",
      "Say no, quality may suffer"
    ]
  },
  {
    question: "Your teammate is underperforming. What would you do?",
    options: [
      "Help them and give feedback",
      "Inform your manager",
      "Let them be",
      "Do their part silently"
    ]
  },
  {
    question: "You are assigned a task you don’t know. What do you do?",
    options: [
      "Research and try it",
      "Ask a senior",
      "Say no",
      "Wait for someone else"
    ]
  },
  {
    question: "Your manager gives wrong instructions. What do you do?",
    options: [
      "Follow anyway",
      "Ask for clarification",
      "Politely point out mistake",
      "Ignore and do your way"
    ]
  },
  {
    question: "A new member joins your team. What’s your reaction?",
    options: [
      "Ignore them",
      "Help them settle",
      "Compete with them",
      "Just observe quietly"
    ]
  },
  {
    question: "You failed a task. What’s your next move?",
    options: [
      "Blame situation",
      "Accept and analyze",
      "Move on",
      "Ask someone else to do it"
    ]
  },
  {
    question: "You get an urgent mail while off duty. What do you do?",
    options: [
      "Reply immediately",
      "Wait till next day",
      "Inform and help",
      "Ignore"
    ]
  },
  {
    question: "A junior corrects your mistake. What do you do?",
    options: [
      "Get angry",
      "Ignore it",
      "Thank them and fix",
      "Defend yourself"
    ]
  },
  {
    question: "Your friend gets promoted, but you don’t. How do you feel?",
    options: [
      "Happy and motivated",
      "Jealous",
      "Feel it's unfair",
      "Think of quitting"
    ]
  },
  {
    question: "You have 3 tasks, same deadline. What do you do?",
    options: [
      "Start with easiest",
      "Do all together",
      "Prioritize by importance",
      "Ask manager"
    ]
  },
  {
    question: "Team members are arguing. What do you do?",
    options: [
      "Stay out",
      "Try to calm",
      "Take sides",
      "Report to HR"
    ]
  },
  {
    question: "Your code isn’t working. What now?",
    options: [
      "Blame tools",
      "Try randomly",
      "Debug logically",
      "Ask ChatGPT 😄"
    ]
  },
  {
    question: "You missed a deadline. What do you do?",
    options: [
      "Give excuse",
      "Say nothing",
      "Take responsibility",
      "Blame others"
    ]
  },
  {
    question: "You are bored of your current work. What do you do?",
    options: [
      "Ask for new task",
      "Quit silently",
      "Do it anyhow",
      "Complain to friends"
    ]
  },
  {
    question: "A team member is bossy. What do you do?",
    options: [
      "Argue",
      "Ignore",
      "Talk calmly",
      "Report manager"
    ]
  },
  {
    question: "You get negative feedback. What do you do?",
    options: [
      "Defend yourself",
      "Accept and improve",
      "Get demotivated",
      "Ignore"
    ]
  },
  {
    question: "Your idea gets rejected. What now?",
    options: [
      "Insist again",
      "Support new idea",
      "Stop giving ideas",
      "Feel bad"
    ]
  },
  {
    question: "There’s gossip happening. What do you do?",
    options: [
      "Join casually",
      "Walk away",
      "Listen silently",
      "Report it"
    ]
  },
  {
    question: "You’re multitasking but failing. What now?",
    options: [
      "Keep going",
      "Pause and organize",
      "Ask for help",
      "Drop one task"
    ]
  },
  {
    question: "You’re working hard but unnoticed. What now?",
    options: [
      "Work harder",
      "Brag",
      "Ask manager",
      "Work less"
    ]
  },
  {
    question: "You see someone cheating. What do you do?",
    options: [
      "Ignore",
      "Report anonymously",
      "Tell them it’s wrong",
      "Join them 😂"
    ]
  },
  {
    question: "Work with someone you dislike. What do you do?",
    options: [
      "Refuse",
      "Be professional",
      "Argue often",
      "Avoid them"
    ]
  },
  {
    question: "You finish your task early. What next?",
    options: [
      "Relax",
      "Help others",
      "Ask for more work",
      "Leave early"
    ]
  },
  {
    question: "You get 2 job offers – one high pay, one learning. What do you choose?",
    options: [
      "High pay",
      "Good learning",
      "Ask family",
      "Toss a coin 😂"
    ]
  }
];


let currentQuestion = 0;
let userAnswers = [];

const quizBox = document.getElementById("quiz-box");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  clearInterval(timer); // Stop old timer
  const q = quizData[currentQuestion];

  quizBox.innerHTML = `
    <div class="top-row">
      <div class="q-no">Question ${currentQuestion + 1} of ${quizData.length}</div>
      <div id="timer" class="timer-box">⏳ 30s</div>
    </div>

    <div class="question-box">
      <p class="question">${q.question}</p>
    </div>

    <ul class="options">
      ${q.options.map((opt, index) => `<li onclick="selectOption(this, ${index})">${opt}</li>`).join("")}
    </ul>
  `;
  startTimer();
}

function selectOption(element, index) {
  const options = document.querySelectorAll(".options li");
  options.forEach(opt => opt.classList.remove("selected"));
  element.classList.add("selected");
  userAnswers[currentQuestion] = index;
}
nextBtn.addEventListener("click", () => {
  if (userAnswers[currentQuestion] === undefined) {
    alert("Please select an option!");
    return;
  }
  nextQuestion();
});

function nextQuestion() {
  clearInterval(timer);
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  // Count selected answers (A = 0, B = 1, C = 2, D = 3)
  const count = { A: 0, B: 0, C: 0, D: 0 };

  userAnswers.forEach(index => {
    if (index === 0) count.A++;
    else if (index === 1) count.B++;
    else if (index === 2) count.C++;
    else if (index === 3) count.D++;
  });

  // Determine most selected option
  const personalityType = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
  );

  const personalityMap = {
    A: "The Reliable Thinker 🧠 (Stable, Safe, Consistent)",
    B: "The Empathetic Team Player 🤝 (Supportive, Collaborative)",
    C: "The Analytical Problem Solver 🔍 (Smart, Calm, Strategic)",
    D: "The Assertive Challenger ⚡ (Bold, Action-driven)"
  };

  quizBox.innerHTML = `
    <h2>🎉 Quiz Complete!</h2>
    <p>You answered <strong>${userAnswers.length}</strong> questions.</p>
    <p>Your dominant style: <strong>${personalityMap[personalityType]}</strong></p>
    <button onclick="location.reload()">Retake Quiz</button>
  `;

  nextBtn.style.display = "none";
}


// Start the quiz
loadQuestion();
