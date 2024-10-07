const boxesContainer = document.querySelector(".boxes");

const startup = document.querySelector(".startup");
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var rows = Math.ceil(windowHeight / (windowWidth / 17)); // Calculate rows

function createBoxes() {
  boxesContainer.innerHTML = ""; // Clear the boxes before creating new ones
  var rows = Math.ceil(windowHeight / (windowWidth / 17)); // Calculate rows
  let headerRows;

  if ((rows - 1) % 2 == 0) {
    headerRows = (rows - 3) / 2;
  } else {
    headerRows = (rows - 2) / 2;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 17; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.classList.add("i" + i);
      box.classList.add("j" + j);
      const boxInner = document.createElement("div");
      boxInner.classList.add("boxInner");
      box.appendChild(boxInner);

      if (headerRows === i) {
        switch (j + 1) {
          case 5:
            boxInner.appendChild(document.createElement("p")).innerHTML = "R";
            break;
          case 6:
            boxInner.appendChild(document.createElement("p")).innerHTML = "o";
            break;
          case 7:
            boxInner.appendChild(document.createElement("p")).innerHTML = "b";
            break;
          case 8:
            boxInner.appendChild(document.createElement("p")).innerHTML = "o";
            break;
          case 9:
            boxInner.appendChild(document.createElement("p")).innerHTML = "t";
            break;
          case 10:
            boxInner.appendChild(document.createElement("p")).innerHTML = "i";
            break;
          case 11:
            boxInner.appendChild(document.createElement("p")).innerHTML = "c";
            break;
          case 12:
            boxInner.appendChild(document.createElement("p")).innerHTML = "s";
            break;
          case 13:
            boxInner.appendChild(
              document.createElement("p")
            ).innerHTML = `<svg  class="robotSvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M84.9,11.6l-1.4,20.1c-0.1,0.9-0.8,1.6-1.7,1.6l0,0c-1,0-1.7-0.8-1.7-1.7v-6.5c0-4.6-3.8-8.4-8.4-8.4H28.4  c-4.6,0-8.4,3.8-8.4,8.4v6.6c0,1-0.8,1.7-1.7,1.7h0c-0.9,0-1.7-0.7-1.7-1.6l-1.4-20.1C15,10.7,14.3,10,13.4,10h-1.7  c-1,0-1.7,0.8-1.7,1.7v30.6c0,0.6,0.3,1.2,0.9,1.5l8.3,4.7c0.5,0.3,0.9,0.9,0.9,1.5v4.9c0,4.6,3.8,8.4,8.4,8.4h43.2  c4.6,0,8.4-3.8,8.4-8.4v-4.9c0-0.6,0.3-1.2,0.9-1.5l8.3-4.7c0.5-0.3,0.9-0.9,0.9-1.5V11.7c0-1-0.8-1.7-1.7-1.7h-1.7  C85.7,10,84.9,10.7,84.9,11.6z M73.3,56.7H28.4c-1,0-1.7-0.8-1.7-1.7V25.1c0-1,0.8-1.7,1.7-1.7h43.2c1,0,1.7,0.8,1.7,1.7L73.3,56.7  L73.3,56.7z"/><path d="M10,78.7V87c0,1.7,1.3,3,3,3h0.7c1.7,0,3-1.3,3-3v-3.4c0-1.3,0.9-2.5,2.2-2.9c18.3-5.3,44-5.3,62.3,0  c1.3,0.4,2.2,1.5,2.2,2.9V87c0,1.7,1.3,3,3,3H87c1.7,0,3-1.3,3-3v-8.3c0-1.3-0.8-2.4-2-2.8c-21.5-7.9-54.5-7.9-76,0  C10.8,76.3,10,77.5,10,78.7z"/><path d="M58.4,43.3c0.9,0,1.6,0.8,1.3,1.7c-0.9,3.8-5,6.6-9.8,6.6c-4.8,0-8.8-2.8-9.8-6.6c-0.2-0.9,0.5-1.7,1.3-1.7  C45.3,43.3,54.7,43.3,58.4,43.3z"/><path d="M58.7,31.7h6c1.1,0,2,0.9,2,2v1c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-1C56.7,32.6,57.6,31.7,58.7,31.7z"/><path d="M35.3,31.7h6c1.1,0,2,0.9,2,2v1c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2v-1C33.3,32.6,34.2,31.7,35.3,31.7z"/></svg>`;
            break;
        }
      }
      if (headerRows + 1 === i) {
        switch (j + 1) {
          case 7:
            boxInner.appendChild(document.createElement("p")).innerHTML = "C";
            break;
          case 8:
            boxInner.appendChild(document.createElement("p")).innerHTML = "l";
            break;
          case 9:
            boxInner.appendChild(document.createElement("p")).innerHTML = "u";
            break;
          case 10:
            boxInner.appendChild(document.createElement("p")).innerHTML = "b";
            break;
          case 11:
            boxInner.appendChild(document.createElement("p")).innerHTML = "!";
            break;
        }
      }
      if (Math.ceil(rows - rows / 3) + 1 === i && j + 1 === 9) {
        boxInner.style.animation = "arrowAnimation 1s forwards";
        boxInner.appendChild(
          document.createElement("span")
        ).innerHTML = `<svg class="arrowSvg" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="#000">
<path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        setTimeout(() => {
          boxInner.style.animation = "arrowIdle 1s 0.5s infinite";
        }, 1000);
        box.addEventListener("click", () => {
          const boxes = document.querySelectorAll(".box");
          const totalCols = 17;
          const visited = new Set();
          let row = i;
          let col = j + 1;
          const queue = [{ row, col, delay: 0 }];

          while (queue.length > 0) {
            const { row: r, col: c, delay } = queue.shift();

            if (
              r >= 0 &&
              c >= 0 &&
              r < Math.ceil(windowHeight / (windowWidth / 17)) &&
              c < 17 &&
              !visited.has(r * totalCols + c)
            ) {
              visited.add(r * totalCols + c);
              const index = r * totalCols + c;
              const box = boxes[index];
              const boxInner = box.querySelector(".boxInner");
              setTimeout(() => {
                boxInner.classList.toggle("shrink");
                box.classList.toggle("noBorder");
                box.classList.toggle("BoxDisappear");
              }, delay);

              // Add neighbors to the queue with increasing delay
              queue.push({ row: r - 1, col: c, delay: delay + 50 });
              queue.push({ row: r + 1, col: c, delay: delay + 50 });
              queue.push({ row: r, col: c - 1, delay: delay + 50 });
              queue.push({ row: r, col: c + 1, delay: delay + 50 });

              setTimeout(() => {
                const startup = document.querySelector(".startup");
                startup.style.zIndex = -10;
              }, 1000);
            }
            const text_container =
              document.querySelectorAll(".text-containers");
            for (let i = 0; i < text_container.length; i++) {
              text_container[i].style.animation = "islandsLoad 1s 1s forwards";
            }
            // islandsTyping(document.querySelector(".s-text"));
            // islandsTyping(document.querySelector(".t-text"));
            // islandsTyping(document.querySelector(".e-text"));
            // islandsTyping(document.querySelector(".m-text"));
          }
          const nav = document.querySelector(".navBar");
          nav.style.display = "block";
          nav.style.animation = "flyupnav 2s forwards";
          const startupStatus = document.querySelector(".startup");
          console.log("done");
          startupStatus.classList.remove("startUpActive");
          document.querySelector(".homePage").style.opacity = "1";
          homePageElement.classList.add("pageLiftDownback");
          eyes.classList.add("eyesComeDown");
          writeMessage();
          setTimeout(() => {
            startup.style.display = "none";
            changeColor();
          }, 1000);
        });

        // Attach click event listener to each box
      }
      if (!(Math.ceil(rows - rows / 3) + 1 === i && j + 1 === 9)) {
        box.addEventListener("click", () => animateWaveEffect(i, j));
      }

      boxesContainer.appendChild(box);
    }
  }
}

function islandsTyping(t) {
  let tText = t.innerHTML;
  t.innerHTML = "";
  setTimeout(() => {
    tText.split("").forEach((char, index) => {
      setTimeout(() => {
        t.innerHTML += char;
      }, 10 * index); // Increase delay for each character
    });
  }, 1500);
}

function animateWaveEffect(row, col) {
  const boxes = document.querySelectorAll(".box");
  const totalCols = 17;
  const visited = new Set();
  const queue = [{ row, col, delay: 0 }];

  while (queue.length > 0) {
    const { row: r, col: c, delay } = queue.shift();

    if (
      r >= 0 &&
      c >= 0 &&
      r < Math.ceil(windowHeight / (windowWidth / 17)) &&
      c < 17 &&
      !visited.has(r * totalCols + c)
    ) {
      visited.add(r * totalCols + c);
      const index = r * totalCols + c;
      const box = boxes[index];
      const boxInner = box.querySelector(".boxInner");

      setTimeout(() => {
        boxInner.classList.toggle("shrink");
        box.classList.toggle("noBorder");
      }, delay);

      // Add neighbors to the queue with increasing delay
      queue.push({ row: r - 1, col: c, delay: delay + 50 });
      queue.push({ row: r + 1, col: c, delay: delay + 50 });
      queue.push({ row: r, col: c - 1, delay: delay + 50 });
      queue.push({ row: r, col: c + 1, delay: delay + 50 });
    }
  }
}

createBoxes();
setTimeout(() => {
  animateWaveEffect(Math.ceil(rows / 2), 8);
}, 400);
animateWaveEffect(Math.ceil(rows / 2), 8);
addEventListener("resize", function () {
  if (startup.classList.contains("startUpActive")) {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    createBoxes();
  }
});
