document.body.addEventListener("mousemove", function (e) {
  var curX = e.clientX;
  var curY = e.clientY;
  document.getElementById("mouse").style.opacity = 1;
  document.getElementById("mouse").style.left = curX - 10 + "px";
  document.getElementById("mouse").style.top = curY - 10 + "px";
});
