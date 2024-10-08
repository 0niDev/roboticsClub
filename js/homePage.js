const pcHomeRobotMessage = document.querySelector(".pcHomeRobotMessage p");

robotMessages = [
  "welcome!",
  "Hey there!",
  "Wanna look around?",
  "Try hovering on the heading above!",
];

// Function to write the message in spans (words wrapped in spans and letters within those spans)
function writeMessage() {
  // Clear the current message
  pcHomeRobotMessage.innerHTML = "";

  // Pick a random message from the list
  const randomMessage =
    robotMessages[Math.floor(Math.random() * robotMessages.length)];

  // Split message into words
  randomMessage.split(" ").forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span"); // Create a span for each word

    // Split each word into letters and wrap each letter in a span
    word.split("").forEach((char) => {
      const charSpan = document.createElement("span");
      charSpan.style.color = "white"; // Set initial color to white
      charSpan.innerHTML = char; // Add the character
      wordSpan.appendChild(charSpan); // Append each letter to the word span
    });

    pcHomeRobotMessage.appendChild(wordSpan); // Append the word span to the message

    // Add a space after each word except the last one
    if (wordIndex < randomMessage.split(" ").length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.innerHTML = "&nbsp;"; // Non-breaking space
      pcHomeRobotMessage.appendChild(spaceSpan);
    }
  });
}

// Function to change the color of the spans one by one
function changeColor() {
  const spans = pcHomeRobotMessage.querySelectorAll("span span"); // Select each character span
  let index = 0;
  const colorChangeSpeed = 100; // Speed of color change (in milliseconds)

  function updateColor() {
    if (index < spans.length) {
      spans[index].style.color = "black"; // Change color to black
      index++;
      setTimeout(updateColor, colorChangeSpeed); // Continue until all spans change color
    }
  }

  updateColor();
}
registerButtonPc = document.querySelector(".registerButtonPc");
registerButtonPc.addEventListener("click", onRegisterButtonPcClickListener);
function onRegisterButtonPcClickListener() {
  window.open("html/registerNow.html", "_blank");
}
