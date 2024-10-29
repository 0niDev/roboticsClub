const start = document.querySelector(".start");
const game = document.querySelector("#game");
const sco = document.getElementById("score");
const healthDisplay = document.getElementById("health");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");
const text = result_box.querySelector(".score_text");

let score = 0;
let health = 3;
let targets = [];
const maxTargets = 3; // Total number of targets
let gameInterval;

function viewResult() {
  game.style.display = "none";
  result_box.classList.add("activeResult");
  text.innerText = "You've scored " + score + " points";
}

restart.onclick = resetGame;

function resetGame() {
  start.style.display = "block";
  result_box.classList.remove("activeResult");
  sco.innerText = "Score: 0";
  health = 3;
  updateHealth();
  score = 0;
  clearInterval(gameInterval);
  targets.forEach((target) => target.remove());
  targets = [];
  game.style.display = "none";
}

start.querySelector("button").onclick = () => {
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  health = 3;
  updateHealth();
  gameInterval = setInterval(spawnTarget, 1000); // Start with 1-second interval
};

function spawnTarget() {
  const targetCount = Math.min(score >= 1 ? 3 : 1, maxTargets - targets.length); // Spawn up to 3 targets or max remaining slots

  for (let i = 0; i < targetCount; i++) {
    const target = document.createElement("div");
    target.classList.add("target");

    let positionValid = false;
    let left, top;

    // Keep generating random positions until a valid one is found
    while (!positionValid) {
      const minLeft = 100; // Minimum horizontal distance from border
      const maxLeft = game.offsetWidth - 100 - 50; // Target width is 50px
      const minTop = 100; // Minimum vertical distance from border
      const maxTop = game.offsetHeight - 100 - 50;

      left = Math.random() * (maxLeft - minLeft) + minLeft;
      top = Math.random() * (maxTop - minTop) + minTop;

      // Check if the new position is within bounds
      positionValid = true;
    }

    target.style.left = left + "px";
    target.style.top = top + "px";

    game.appendChild(target);
    targets.push(target);

    let size = 20;
    let growing = true;

    // Set initial growth and shrink rates
    let growRate = 1;
    let shrinkRate = 1;
    let TimesizeInterval = 60;
    if (score >= 30) {
      TimesizeInterval = 50;
    }
    if (score >= 50) {
      TimesizeInterval = 40;
    }
    if (score >= 70) {
      TimesizeInterval = 30;
    }
    if (score >= 90) {
      TimesizeInterval = 20;
    }
    if (score >= 120) {
      TimesizeInterval = 10;
    }

    const sizeInterval = setInterval(() => {
      if (growing) {
        size += growRate;
        if (size >= 50) growing = false;
      } else {
        size -= shrinkRate;
        if (size <= 0) {
          clearInterval(sizeInterval);
          target.remove();
          targets = targets.filter((t) => t !== target); // Remove from active targets
          loseHealth();
        }
      }
      target.style.width = size + "px";
      target.style.height = size + "px";
    }, TimesizeInterval / 2);

    target.addEventListener("touchstart", () => {
      clearInterval(sizeInterval);
      target.remove();
      targets = targets.filter((t) => t !== target); // Remove from active targets
      score++;
      updateScore();

      // Increase spawn speed based on score
      const spawnInterval = Math.max(300, 1000 - score * 10); // Decrease interval based on score
      clearInterval(gameInterval);
      gameInterval = setInterval(spawnTarget, spawnInterval);
      const audio = new Audio("..\\sound.mp3");
      audio.play();
    });
    target.addEventListener("mousedown", () => {
      clearInterval(sizeInterval);
      target.remove();
      targets = targets.filter((t) => t !== target); // Remove from active targets
      score++;
      updateScore();

      // Increase spawn speed based on score
      const spawnInterval = Math.max(300, 1000 - score * 10); // Decrease interval based on score
      clearInterval(gameInterval);
      gameInterval = setInterval(spawnTarget, spawnInterval);
      const audio = new Audio("..\\sound.mp3");
      audio.play();
    });
  }
}

function loseHealth() {
  health = Math.max(0, health - 1); // Prevent health from going below 0
  updateHealth();
  if (health <= 0) {
    clearInterval(gameInterval); // Stop the game
    viewResult(); // Show the result screen
  }
}

function updateScore() {
  sco.innerText = "Score: " + score;
}

function updateHealth() {
  healthDisplay.innerText = "Health: " + health;
}
