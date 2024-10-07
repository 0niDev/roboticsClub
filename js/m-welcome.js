const welcomeHeading = document.querySelector(".m-welcome h1");
let WelcomeHeadingText = welcomeHeading.innerHTML;

welcomeHeading.innerHTML = "";
WelcomeHeadingText.split("").forEach((element, index) => {
  setTimeout(() => {
    welcomeHeading.innerHTML += element;
  }, 200 * index);
});

const getStarted = document.querySelector(".getStarted");
const m_activities = document.querySelector(".m-activities");
getStarted.addEventListener("click", () => {
  getStarted.classList.add("buttonShrinknGrow");
});
