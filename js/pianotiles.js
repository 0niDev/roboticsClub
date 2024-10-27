const start = document.querySelector(".start");
const game = document.querySelector("#game");
const sco = document.getElementById("score");
const healthDisplay = document.getElementById("health");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");
const text = result_box.querySelector(".score_text");

let a;
let tos = 2400;
let bool1 = (bool2 = bool3 = bool4 = true);
let score = 0;
let health = 3;
let step = 0;
let mar = randomMargin(),
  mar2;

function viewResult() {
  game.style.display = "none";
  result_box.classList.add("activeResult");
  text.innerText = "You've scored " + score + " points";
}

restart.onclick = () => {
  resetGame();
};

function resetGame() {
  start.style.display = "block";
  result_box.classList.remove("activeResult");
  sco.innerText = "Score: 0";
  health = 3;
  updateHealth();
  score = 0;
  step = 0;
  bool1 = bool2 = bool3 = bool4 = true;
  clearInterval(a);
  game.style.display = "none";
}

function speed(e) {
  a = setInterval(appendDiv, e);
}

function appendDiv() {
  const ob = document.createElement("div");

  do {
    mar2 = randomMargin();
  } while (mar === mar2);

  mar = mar2;

  ob.style.marginLeft = mar2 + "%";
  ob.clicked = false;

  setTimeout(moveDown, 100, ob);

  ob.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent default behavior
    if (!ob.clicked) {
      ob.clicked = true;
      ob.style.background = "rgba(0,0,0,0.2)";
      updateScore();
      const audio = new Audio("..\\sound.mp3");
      audio.play();
    }
  });
  ob.addEventListener("mousedown", (event) => {
    event.preventDefault(); // Prevent default behavior
    if (!ob.clicked) {
      ob.clicked = true;
      ob.style.background = "rgba(0,0,0,0.2)";
      updateScore();
      const audio = new Audio("..\\sound.mp3");
      audio.play();
    }
  });

  adjustGameDifficulty();

  document.getElementById("tiles").prepend(ob);
}

function adjustGameDifficulty() {
  if (score >= 300) {
    step = 5;
    tos = 800;
    console.log("Step: " + step);
  } else if (score >= 200) {
    step = 4;
    tos = 800;
    console.log("Step: " + step);
  } else if (score >= 150) {
    step = 3;
    tos = 1000;
    console.log("Step: " + step);
  } else if (score >= 100) {
    step = 2;
    tos = 1200;
    console.log("Step: " + step);
  } else if (score >= 50) {
    step = 1;
    tos = 1600;
    console.log("Step: " + step);
  }

  if (score > 0 && score % 10 === 0) {
    tos = Math.max(tos - 100, 400);
  }
}

function randomMargin() {
  return 25 * Math.floor(Math.random() * 4); // Generates 0, 25, 50, or 75
}

function moveDown(e) {
  e.classList.add("move");

  setTimeout(() => {
    if (!e.style.background || e.style.background === "") {
      health--;
      updateHealth();
      console.log("Tile missed! Health: " + health);

      if (health <= 0) {
        clearInterval(a);
        viewResult();
      }
    }
  }, tos);

  speedAdjustment(step, e);

  setTimeout(removeDiv, tos, e);
}

function speedAdjustment(step, e) {
  if (step === 1) {
    e.classList.add("speedX1");
  } else if (step === 2) {
    e.classList.add("speedX2");
  } else if (step === 3) {
    e.classList.add("speedX3");
  } else if (step === 4) {
    e.classList.add("speedX4");
  } else if (step === 5) {
    e.classList.add("speedX5");
  }
}

function updateScore() {
  score++;
  sco.innerText = "Score: " + score;
}

function updateHealth() {
  healthDisplay.innerText = "Health: " + health;
}

function removeDiv(e) {
  if (!e.style.background || e.style.background === "") {
    if (health <= 0) {
      clearInterval(a);
      viewResult();
    }
  }
  e.remove();
}

function resetBooleans() {
  bool1 = bool2 = bool3 = bool4 = true;
}

start.querySelector("button").onclick = () => {
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  health = 3;
  updateHealth();
  speed(200);
};
