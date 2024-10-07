const navLinks = document.querySelectorAll(".nav-links div");
let m_navClicked = 0;

// Event listener for each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

function handleLinkClick() {
  // Do nothing if the clicked link is already active
  if (this.classList.contains("active")) {
    return;
  }

  // Handle the transition for the "About" section if it was active
  if (navLinks[2].classList.contains("active")) {
    handleAboutTransition();
  }

  // Remove active class from all links
  navLinks.forEach((item) => item.classList.remove("active"));

  // Handle different link clicks
  if (this.classList.contains("m-navActivities")) {
    handleActivitiesClick();
  } else if (this.classList.contains("m-navHome")) {
    handleHomeClick();
  } else if (this.classList.contains("m-navAbout")) {
    handleAboutClick();
  }

  // Mark the clicked link as active
  this.classList.add("active");
}

// Function to handle "About" section transition
function handleAboutTransition() {
  const m_aboutElement = document.querySelector(".m-about");
  m_aboutElement.classList.remove("flyRightAbout");
  m_aboutElement.classList.add("flyLeftAbout");
}

// Function to handle "Activities" link click
function handleActivitiesClick() {
  m_navClicked = 1;
  showActivitiesText();
  handleWelcomeVisibility(false);
  m_activities.style.display = "block";
  console.log("Started");
}

// Function to handle "Home" link click
function handleHomeClick() {
  m_navClicked = 0;
  showHomeText();
  handleWelcomeVisibility(true);

  setTimeout(() => {
    if (m_navClicked === 0) {
      m_activities.style.display = "none";
    }
  }, 1400);
}

// Function to handle "About" link click
function handleAboutClick() {
  m_navClicked = 2;

  const m_aboutText = document.querySelectorAll(".m-aboutText");
  m_aboutText.forEach((p) => {
    p.textContent = ""; // Clear text
  });

  const m_aboutElement = document.querySelector(".m-about");
  m_aboutElement.classList.remove("flyLeftAbout");
  m_aboutElement.classList.add("flyRightAbout");

  setTimeout(() => {
    typeEffect();
  }, 1000);

  showAboutText();
}

// Function to handle the visibility of the welcome element
function handleWelcomeVisibility(show) {
  const welcomeElement = document.querySelector(".m-welcome");

  if (show) {
    if (welcomeElement.classList.contains("flyUpWelcome")) {
      welcomeElement.classList.remove("flyUpWelcome");
    }
    welcomeElement.classList.add("flyDownWelcome");
    welcomeElement.style.display = "block"; // Ensure it's visible when showing
  } else {
    if (welcomeElement.classList.contains("flyDownWelcome")) {
      welcomeElement.classList.remove("flyDownWelcome");
    }
    welcomeElement.classList.add("flyUpWelcome");
  }
}
