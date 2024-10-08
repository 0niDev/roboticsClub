const activityButtons = document.querySelectorAll(".m-activitesButtons");

activityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.open("html/comingsoon.html", "_blank"); // Open in new tab
  });
});
