const paragraphAbout = document.querySelector(".aboutInformation p");

const text = paragraphAbout.innerHTML;
paragraphAbout.innerHTML = "";
text.split(" ").forEach((char) => {
  const span = document.createElement("span");
  span.innerHTML = char + " ";
  paragraphAbout.appendChild(span);
});

// Select spans after they are added to the DOM
const spans = document.querySelectorAll(".aboutInformation span");

spans.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transition = `color 0.1s ease-in-out`;
    item.style.color = `rgb(0, 169, 244)`;
  });
  item.addEventListener("mouseout", () => {
    item.style.color = `initial`; // Reset color
  });
});
