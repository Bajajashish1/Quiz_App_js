 let name = '';
let score = 0;
let category = '';
let currentQuestionIndex = 0;
let timer;
let timeLeft = 20;

const questions = [
  // INDIA
  { id: 1, category: "india", question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Chennai", "Kolkata"], answer: "Delhi" },
  { id: 2, category: "india", question: "Who is known as the Father of the Nation?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"], answer: "Mahatma Gandhi" },
  { id: 3, category: "india", question: "Which river is considered holy in India?", options: ["Ganga", "Yamuna", "Krishna", "Cauvery"], answer: "Ganga" },
  { id: 4, category: "india", question: "Which festival is known as the festival of lights?", options: ["Holi", "Diwali", "Navratri", "Eid"], answer: "Diwali" },
  { id: 5, category: "india", question: "What is the currency of India?", options: ["Rupee", "Dollar", "Yuan", "Dinar"], answer: "Rupee" },
  { id: 6, category: "india", question: "Which is the national animal of India?", options: ["Elephant", "Lion", "Tiger", "Leopard"], answer: "Tiger" },
  { id: 7, category: "india", question: "Which Indian city is known as the Pink City?", options: ["Mumbai", "Jaipur", "Delhi", "Hyderabad"], answer: "Jaipur" },
  { id: 8, category: "india", question: "Who wrote the Indian national anthem?", options: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Lal Bahadur Shastri"], answer: "Rabindranath Tagore" },
  { id: 9, category: "india", question: "In which year did India get independence?", options: ["1945", "1946", "1947", "1950"], answer: "1947" },
  { id: 10, category: "india", question: "Which sport is most popular in India?", options: ["Hockey", "Cricket", "Football", "Tennis"], answer: "Cricket" },

  // CHINA
  { id: 11, category: "china", question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Guangzhou", "Wuhan"], answer: "Beijing" },
  { id: 12, category: "china", question: "Which animal represents the Chinese zodiac year 2024?", options: ["Dragon", "Rabbit", "Snake", "Tiger"], answer: "Dragon" },
  { id: 13, category: "china", question: "What is the currency of China?", options: ["Yuan", "Won", "Rupee", "Dollar"], answer: "Yuan" },
  { id: 14, category: "china", question: "Which Chinese invention is used for telling direction?", options: ["Gunpowder", "Compass", "Paper", "Printing"], answer: "Compass" },
  { id: 15, category: "china", question: "The Great Wall of China was built mainly to protect from which invaders?", options: ["Japanese", "Mongols", "Romans", "Turks"], answer: "Mongols" },
  { id: 16, category: "china", question: "Which Chinese festival celebrates the lunar new year?", options: ["Mid-Autumn Festival", "Spring Festival", "Dragon Boat Festival", "Ghost Festival"], answer: "Spring Festival" },
  { id: 17, category: "china", question: "What is the official language of China?", options: ["Cantonese", "Mandarin", "Hakka", "English"], answer: "Mandarin" },
  { id: 18, category: "china", question: "Which dynasty built the first version of the Great Wall?", options: ["Qin", "Han", "Tang", "Song"], answer: "Qin" },
  { id: 19, category: "china", question: "What is a famous Chinese martial art?", options: ["Karate", "Taekwondo", "Kung Fu", "Judo"], answer: "Kung Fu" },
  { id: 20, category: "china", question: "Which river is known as the 'Mother River of China'?", options: ["Yangtze", "Yellow River", "Pearl River", "Huai River"], answer: "Yellow River" },

  // AMERICA
  { id: 21, category: "america", question: "What is the capital of the USA?", options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], answer: "Washington D.C." },
  { id: 22, category: "america", question: "Which holiday is celebrated on the 4th of July?", options: ["Labor Day", "Thanksgiving", "Independence Day", "Veterans Day"], answer: "Independence Day" },
  { id: 23, category: "america", question: "What is the currency of the USA?", options: ["Pound", "Dollar", "Euro", "Peso"], answer: "Dollar" },
  { id: 24, category: "america", question: "Who was the first President of the USA?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: "George Washington" },
  { id: 25, category: "america", question: "Which mountain range is in western USA?", options: ["Rocky Mountains", "Alps", "Himalayas", "Andes"], answer: "Rocky Mountains" },
  { id: 26, category: "america", question: "Which is the largest state in the USA by area?", options: ["Texas", "California", "Alaska", "Montana"], answer: "Alaska" },
  { id: 27, category: "america", question: "Which city is known as the Big Apple?", options: ["Chicago", "Los Angeles", "New York City", "San Francisco"], answer: "New York City" },
  { id: 28, category: "america", question: "Which sport is considered America's pastime?", options: ["Basketball", "Football", "Baseball", "Hockey"], answer: "Baseball" },
  { id: 29, category: "america", question: "Where is the Statue of Liberty located?", options: ["Washington", "Los Angeles", "New York", "Philadelphia"], answer: "New York" },
  { id: 30, category: "america", question: "Who wrote the Declaration of Independence?", options: ["George Washington", "James Madison", "Thomas Jefferson", "Alexander Hamilton"], answer: "Thomas Jefferson" },

  // DUBAI
  { id: 31, category: "dubai", question: "Which country is Dubai part of?", options: ["Qatar", "Saudi Arabia", "UAE", "Oman"], answer: "UAE" },
  { id: 32, category: "dubai", question: "What is the tallest building in Dubai?", options: ["Burj Khalifa", "Burj Al Arab", "Marina 101", "Princess Tower"], answer: "Burj Khalifa" },
  { id: 33, category: "dubai", question: "What is the currency used in Dubai?", options: ["Dirham", "Dinar", "Riyal", "Dollar"], answer: "Dirham" },
  { id: 34, category: "dubai", question: "Dubai is located on which gulf?", options: ["Persian Gulf", "Red Sea", "Arabian Gulf", "Bay of Bengal"], answer: "Persian Gulf" },
  { id: 35, category: "dubai", question: "Which island is shaped like a palm tree?", options: ["Palm Jumeirah", "The World Islands", "Bluewaters Island", "Al Noor Island"], answer: "Palm Jumeirah" },
  { id: 36, category: "dubai", question: "Which Dubai mall is one of the largest in the world?", options: ["Ibn Battuta Mall", "Mall of the Emirates", "Dubai Mall", "City Centre"], answer: "Dubai Mall" },
  { id: 37, category: "dubai", question: "Which desert surrounds Dubai?", options: ["Thar Desert", "Sahara", "Arabian Desert", "Karakum"], answer: "Arabian Desert" },
  { id: 38, category: "dubai", question: "Which type of government does Dubai follow?", options: ["Democracy", "Constitutional Monarchy", "Absolute Monarchy", "Federal Monarchy"], answer: "Federal Monarchy" },
  { id: 39, category: "dubai", question: "Which famous hotel is built on an artificial island?", options: ["Atlantis", "Ritz Carlton", "Burj Al Arab", "Jumeirah Beach Hotel"], answer: "Burj Al Arab" },
  { id: 40, category: "dubai", question: "Which means of transport is mostly used in the desert?", options: ["Car", "Camel", "Bike", "Bus"], answer: "Camel" }
];

// Capture name
function getName() {
  const input = document.getElementById('name');
  if (!input || input.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }
  name = input.value.trim();
  alert(`Hi ${name}! Now select a topic to start your quiz.`);
}

// Start quiz
function startQuiz(event) {
  if (!name) {
    alert('Please enter your name first.');
    return;
  }

  category = event.target.value;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quiz-container').innerHTML = '';
  loadQuestion();
}

// Load each question
function loadQuestion() {
  const categoryQuestions = questions.filter(q => q.category === category);
  if (currentQuestionIndex >= categoryQuestions.length) {
    document.getElementById('quiz-container').innerHTML = `
      <div class="quiz-over-container">
        <h2 class="quiz-over-title">Quiz Over!</h2>
        <p class="quiz-over-name">Well done, <span>${name}</span>!</p>
        <p class="quiz-over-score">Your final score: <span>${score}/${categoryQuestions.length} (${getPercentage(score, categoryQuestions.length)}%)</span></p>
        <p class="quiz-over-time">Time per question: <span>20s</span></p>
        <div class="quiz-over-thought">
          <em>"Learning never exhausts the mind."</em>
        </div>
      </div>
    `;
    return;
  }

  const q = categoryQuestions[currentQuestionIndex];
  let html = `<h3>Q${currentQuestionIndex + 1}: ${q.question}</h3><div id="answers">`;
  q.options.forEach(option => {
    html += `<button onclick="checkAnswer('${option}')">${option}</button>`;
  });
  html += `</div>
    <p id="score">Score: ${score}</p>
    <p id="percentage">Percentage: ${getPercentage(score, currentQuestionIndex)}%</p>
    <p id="timer">Time: ${timeLeft}s</p>
    <button id="nextBtn" style="display:none;" onclick="nextQuestion()">Next</button>`;
  document.getElementById('quiz-container').innerHTML = html;
  startTimer();
}

// Timer
function startTimer() {
  timeLeft = 20;
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// Answer check
function checkAnswer(selected) {
  const categoryQuestions = questions.filter(q => q.category === category);
  const correctAnswer = categoryQuestions[currentQuestionIndex].answer;

  document.querySelectorAll('#answers button').forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctAnswer) {
      btn.classList.add('correct');
    }
    if (btn.innerText === selected && selected !== correctAnswer) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === correctAnswer) score++;
  document.getElementById("score").innerText = `Score: ${score}`;
  document.getElementById("percentage").innerText = `Percentage: ${getPercentage(score, currentQuestionIndex + 1)}%`;
  document.getElementById("nextBtn").style.display = "block";
  clearInterval(timer);
}

// Next question
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// Calculate percentage
function getPercentage(score, questionsAnswered) {
  if (questionsAnswered === 0) return 0;
  return ((score / questionsAnswered) * 100).toFixed(2);
}
