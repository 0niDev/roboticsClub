// Select all .boxInner p elements
const texts = document.querySelectorAll(".boxInner p");

// Function to create a hacker effect
function hackerEffect(element) {
  const originalChar = element.innerHTML;

  // Function to randomize character
  function randomizeChar() {
    element.innerHTML = String.fromCharCode(
      Math.floor(Math.random() * 26) + 65
    );
  }

  // Apply random characters every 100 milliseconds
  const intervalId = setInterval(() => {
    randomizeChar();
  }, 50);

  // Revert to the original character after 1 second
  setTimeout(() => {
    clearInterval(intervalId);
    element.innerHTML = originalChar;
  }, 1100);
}

// Apply the hacker effect to all selected elements
texts.forEach(hackerEffect);
