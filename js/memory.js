const boxes = document.querySelectorAll(".box");
const startButton = document.getElementById("startButton");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("scoreValue");
const healthDisplay = document.getElementById("healthValue");
const grid = document.getElementById("grid"); // Add reference to the grid

let activeBoxes = [];
let userClicks = [];
let gameStarted = false;
let score = 0;
let health = 3;
let showingActiveBoxes = false; // New variable to track if active boxes are being shown
let winCount = 0; // Track the number of wins

function startGame() {
  // Hide the start button and show the grid
  startButton.style.display = "none"; // Hide start button
  grid.style.display = "grid"; // Show grid

  // Reset all boxes to ensure no colors are left from the previous game
  boxes.forEach((box) => {
    box.classList.remove("active");
  });

  activeBoxes = [];
  userClicks = [];
  message.textContent = "";
  gameStarted = true;
  scoreDisplay.textContent = score; // Display current score
  healthDisplay.textContent = health; // Display current health
  getUserClicks();

  // Only show active boxes if health is greater than 0
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
  showingActiveBoxes = true; // Set to true when showing active boxes

  activeBoxes.forEach((index) => {
    boxes[index].classList.add("active");
  });

  // Set the timeout duration based on the number of wins
  let duration = 100; // Default duration

  setTimeout(() => {
    activeBoxes.forEach((index) => {
      boxes[index].classList.remove("active");
    });
    showingActiveBoxes = false; // Set to false after hiding active boxes
  }, duration);
}

function getUserClicks() {
  boxes.forEach((box) => {
    box.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  if (!gameStarted || showingActiveBoxes) return; // Allow clicks only if boxes are not being shown

  const index = parseInt(event.target.dataset.index);
  userClicks.push(index);

  if (activeBoxes.includes(index)) {
    // Change background color to red when clicked correctly
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
  winCount++; // Increment win count
  scoreDisplay.textContent = score;
  message.textContent = "You win! Good job! Starting a new round...";
  resetRound();
}

function handleLoss() {
  health--;
  healthDisplay.textContent = health;
  message.textContent = "Wrong box!";

  if (health <= 0) {
    message.textContent = "Game over! Your score: " + score;
    gameStarted = false; // Stop the game
    return; // Do not restart the game automatically
  }

  setTimeout(() => {
    resetRound(); // Continue the game if health > 0
  }, 2000); // Wait before restarting
}

function resetRound() {
  userClicks = [];
  // Reset box colors
  boxes.forEach((box) => {
    box.style.backgroundColor = ""; // Reset to default
  });

  startGame(); // Start a new round immediately
}

function resetGame() {
  health = 3; // Reset health
  score = 0; // Reset score
  winCount = 0; // Reset win count
  scoreDisplay.textContent = score; // Display reset score
  healthDisplay.textContent = health; // Display reset health
  startGame(); // Start the game again
}

// Start a new game when the button is clicked
startButton.addEventListener("click", () => {
  if (!gameStarted) {
    resetGame(); // Reset the game only if it's not already started
  }
});
