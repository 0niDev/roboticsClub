const m_robotTextNav = document.querySelector(".m-robotTextNav");
const m_robot_img = document.querySelector(".m-robot img");

const Hometexts = [
  "Welcome to our site!",
  "Yo! what's up?",
  "Hey there!",
  "Welcome!",
];
const AboutTexts = [
  "Learn about us.",
  "Who likes Reading? Nerd!",
  "Damn, there's a lot of words here",
  "Who is gonna read all this",
];
const Activities = [
  "Check out our events.",
  "Join us!",
  "Getting ready for the future?",
  "Wanna see some projects?",
];

let typingIntervalId; // Keep track of typing interval
let imageIntervalId; // Keep track of image toggle interval
let idleIntervalId; // Keep track of idle image interval

// Function to change text and image
function changeTextAndImage(textArray) {
  // Clear any existing intervals before starting a new one
  clearInterval(typingIntervalId);
  clearInterval(imageIntervalId);
  clearInterval(idleIntervalId);
  m_robotTextNav.textContent = ""; // Clear existing text

  // Select a random text from the provided array
  const randomText = textArray[Math.floor(Math.random() * textArray.length)];

  // Initialize variables for typing effect
  let currentIndex = 0;

  // Function to start image toggle
  const startImageToggle = () => {
    let imgToggle = true; // Use a flag to alternate images
    imageIntervalId = setInterval(() => {
      m_robot_img.src = imgToggle ? "robots/2_talking.png" : "robots/2.png";
      imgToggle = !imgToggle; // Toggle the flag
    }, 200); // Change image every 200 ms
  };

  // Function to start idle animation
  const startIdleAnimation = () => {
    let idleToggle = true; // Use a flag to alternate idle images
    idleIntervalId = setInterval(() => {
      m_robot_img.src = idleToggle ? "robots/2.png" : "robots/2a.png"; // Change between idle images
      idleToggle = !idleToggle; // Toggle the flag
    }, 500); // Change image every 500 ms
  };

  // Start the image toggle immediately
  startImageToggle();

  // Function to type letters one by one
  const typeLetter = () => {
    if (currentIndex < randomText.length) {
      m_robotTextNav.textContent += randomText[currentIndex]; // Add the current letter
      currentIndex++;
      typingIntervalId = setTimeout(typeLetter, 50); // Wait 50ms before typing the next letter
    } else {
      // Stop the image toggle after typing
      clearInterval(imageIntervalId); // Clear the interval
      m_robot_img.src = "robots/2.png"; // Reset to the original image
      startIdleAnimation(); // Start idle animation
    }
  };

  // Start typing effect
  typeLetter();
}

// Functions for different sections
function showHomeText() {
  changeTextAndImage(Hometexts);
}

function showAboutText() {
  changeTextAndImage(AboutTexts);
}

function showActivitiesText() {
  changeTextAndImage(Activities);
}

// Example of calling the functions
showHomeText(); // Call this function to show home text
// showAboutText(); // Call this function to show about text
// showActivitiesText(); // Call this function to show activities text
