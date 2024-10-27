const boxes = document.querySelectorAll(".box");
const startButton = document.getElementById("startButton");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("scoreValue");
const healthDisplay = document.getElementById("healthValue");
const grid = document.getElementById("grid");
const restartMenu = document.getElementById("restartMenu");
const finalScoreDisplay = document.getElementById("finalScore");
const restartButton = document.getElementById("restartButton");

let activeBoxes = [];
let userClicks = [];
let gameStarted = false;
let score = 0;
let health = 3;
let showingActiveBoxes = false;
let winCount = 0;

function startGame() {
  startButton.style.display = "none"; // Hide start button
  grid.style.display = "grid"; // Show grid

  boxes.forEach((box) => {
    box.classList.remove("active");
    box.style.backgroundColor = ""; // Reset to default
  });

  activeBoxes = [];
  userClicks = [];
  message.textContent = "";
  gameStarted = true;
  scoreDisplay.textContent = score; // Display current score
  healthDisplay.textContent = health; // Display current health
  getUserClicks();

  if (health > 0) {
    showActiveBoxes();
  }
}

function showActiveBoxes() {
  const randomIndices = new Set();
  while (randomIndices.size < 3) {
    randomIndices.add(Math.floor(Math.random() * 9));
  }
  activeBoxes = [...randomIndices];
  showingActiveBoxes = true;

  activeBoxes.forEach((index) => {
    boxes[index].classList.add("active");
  });

  let duration = 500 - winCount * 10;
  if (duration < 150) duration = 150;

  setTimeout(() => {
    activeBoxes.forEach((index) => {
      boxes[index].classList.remove("active");
    });
    showingActiveBoxes = false;
  }, duration);
}

function getUserClicks() {
  boxes.forEach((box) => {
    box.addEventListener("touchstart", handleClick);
    box.addEventListener("mousedown", handleClick);
  });
}

function handleClick(event) {
  if (!gameStarted || showingActiveBoxes) return;

  const index = parseInt(event.target.dataset.index);

  // Check if the clicked box is already in userClicks
  if (userClicks.includes(index)) {
    return; // Ignore repeated clicks on the same box
  }

  userClicks.push(index);

  if (activeBoxes.includes(index)) {
    event.target.style.backgroundColor = "red";
    if (userClicks.length === activeBoxes.length) {
      checkWin();
    }
  } else {
    handleLoss();
  }
}

function checkWin() {
  score++;
  winCount++;
  scoreDisplay.textContent = score;
  message.textContent = "You win! Good job! Starting a new round...";
  resetRound();
}

function handleLoss() {
  health--;
  healthDisplay.textContent = health;
  message.textContent = "Wrong box!";

  if (health <= 0) {
    endGame();
    return;
  }

  setTimeout(() => {
    resetRound();
  }, 2000);
}

function endGame() {
  message.textContent = "Game over! Your score: " + score;
  gameStarted = false;
  finalScoreDisplay.textContent = score;
  restartMenu.style.display = "flex";
}

function resetRound() {
  userClicks = [];
  boxes.forEach((box) => {
    box.style.backgroundColor = "";
  });

  startGame();
}

function resetGame() {
  health = 3;
  score = 0;
  winCount = 0;
  scoreDisplay.textContent = score;
  healthDisplay.textContent = health;
  message.textContent = "Game will start in 3 seconds..."; // Display message

  startGame(); // Start the game after 3 seconds
}

startButton.addEventListener("click", () => {
  if (!gameStarted) {
    resetGame();
  }
});

restartButton.addEventListener("click", () => {
  restartButton.innerHTML = "Restarting...";
  setTimeout(() => {
    restartMenu.style.display = "none";
    resetGame();
    restartButton.innerHTML = "Restart Game";
  }, 1000);
});
