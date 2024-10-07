const navButtons = document.querySelectorAll(".nav-buttons");

navButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.toggle("active");
  });
});

const about = document.querySelector(".aboutpage");
const homepage = document.querySelector(".homepage");
const homePageElement = document.querySelector(".homePage");
const activitiesButton = document.querySelector(".Activiteispage");
const activitiesPage = document.querySelector(".activitiesPage");

homePageElement.style.opacity = "0";
activitiesPage.style.opacity = "0";
document.querySelector(".about-page").style.opacity = "0";

about.addEventListener("click", () => {
  document.querySelector(".about-page").style.opacity = "1";
  setTimeout(() => {
    activitiesPage.style.opacity = "0";
    homePageElement.style.opacity = "0";
  }, 1000);
  if (homePageElement.classList.contains("pageLiftDownback")) {
    homePageElement.classList.remove("pageLiftDownback");
  }
  homePageElement.classList.add("liftup");

  if (activitiesPage.classList.contains("ActiviteispageSlide")) {
    activitiesPage.classList.remove("ActiviteispageSlide");
    activitiesPage.classList.add("ActiviteispageUnSlide");
  }

  // Trigger eyesGoUp animation
  eyes.classList.remove("eyesComeDown");
  eyes.classList.add("eyesGoUp");

  const aboutHeadingSlider = document.querySelector(".aboutHeadingSlider");
  setTimeout(() => {
    aboutHeadingSlider.style.animation = "aboutHeadingSlider 1s forwards";
  }, 1000);
  if (navBarUp) {
    navBar.style.animation = "flyMoreDown 1s forwards";
    navBarUp = false;
  }
});

homepage.addEventListener("click", () => {
  homePageElement.style.opacity = "1";

  setTimeout(() => {
    activitiesPage.style.opacity = "0";
    document.querySelector(".about-page").style.opacity = "0";
  }, 1000);
  homePageElement.classList.remove("liftup");
  homePageElement.classList.add("pageLiftDownback");

  if (activitiesPage.classList.contains("ActiviteispageSlide")) {
    activitiesPage.classList.remove("ActiviteispageSlide");
    activitiesPage.classList.add("ActiviteispageUnSlide");
  }

  // Trigger eyesComeDown animation
  eyes.classList.remove("eyesGoUp");
  eyes.classList.add("eyesComeDown");

  if (navBarUp) {
    navBarUp = false;
    navBar.style.animation = "flyMoreDown 1s forwards";
  }
});

const navBar = document.querySelector(".navBar");
let navBarUp = false;
activitiesButton.addEventListener("click", () => {
  activitiesPage.style.opacity = "1";
  setTimeout(() => {
    homePageElement.style.opacity = "0";
    document.querySelector(".about-page").style.opacity = "0";
  }, 1000);
  navBarUp = true;
  navBar.style.animation = "flyMoreUp 1s forwards";
  activitiesPage.classList.add("ActiviteispageSlide");

  // Trigger eyesGoUp animation
  eyes.classList.remove("eyesComeDown");
  eyes.classList.add("eyesGoUp");
});

// Eyes animation handling
const eyes = document.querySelector(".roboticsHeadingHome");
