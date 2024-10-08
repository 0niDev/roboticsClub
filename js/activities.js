const images = document.querySelectorAll(".robotContainer .img");
const textDiv = document.querySelectorAll(".textDiv");
let textList = [
  "Hello!",
  "Hola!",
  "How are you?",
  "Welcome!",
  "You like the website?",
  "Hope you like the website!",
  "Glad to have you here!",
  "Feel free to explore!",
  "Your feedback is valuable!",
  "Thanks for stopping by!",
  "What brings you here today?",
  "Enjoy your visit!",
  "Looking forward to your thoughts!",
  "Let us know if you need assistance!",
  "Great to see you here!",
  "Discover something new today!",
  "We're here to help!",
  "Curious about our projects?",
  "Check out our latest updates!",
  "Join the conversation!",
  "Explore your interests with us!",
  "Every visit counts—thank you!",
];

function changeText() {
  textDiv.forEach((textDiv) => {
    textDiv.innerHTML = textList[Math.floor(Math.random() * textList.length)];
  });
  setTimeout(changeText, 5000);
}

function randomDirection() {
  images.forEach((img) => {
    // Set a random left position
    const randomLeft = Math.random() * (window.innerWidth - 100); // Random left position
    img.style.left = `${randomLeft}px`;

    // Set a random speed for the animation
    const randomSpeed = 3 + Math.random() * 6; // Speed between 3s and 8s
    img.style.animationDuration = `${randomSpeed}s`;

    // Change animation direction
    img.style.animationDirection = Math.random() > 0.5 ? "normal" : "reverse";
  });
}

changeText();
randomDirection();

const divein = document.querySelectorAll(".DIVEIN");
divein.forEach((divein) => {
  divein.addEventListener("click", () => {
    window.open("html/comingsoon.html", "_blank"); // Opens in a new tab
  });
});
