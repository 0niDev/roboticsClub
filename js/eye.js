const eye1 = document.querySelector(".eyeL2");
const eye2 = document.querySelector(".eyeR2");

const rekt1 = eye1.getBoundingClientRect();
const eye1X = rekt1.left + rekt1.width / 2;
const eye1Y = rekt1.top + rekt1.height / 2;

const rekt2 = eye2.getBoundingClientRect();
const eye2X = rekt2.left + rekt2.width / 2;
const eye2Y = rekt2.top + rekt2.height / 2;
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  if (eye1) {
    const angleDeg = angle(eye1X, eye1Y, mouseX, mouseY);
    eye1.style.transform = `rotate(${angleDeg - 90}deg)`;
  }
  if (eye2) {
    const angleDeg = angle(eye2X, eye2Y, mouseX, mouseY);
    eye2.style.transform = `rotate(${angleDeg - 90}deg)`;
  }
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  return rad * (180 / Math.PI);
}
