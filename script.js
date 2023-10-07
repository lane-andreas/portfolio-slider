document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector("#mouse");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    var links = document.querySelectorAll("a, button");
    links.forEach(function (link) {
      link.addEventListener("mouseenter", function () {
        cursor.classList.add("hovered");
      });

      link.addEventListener("mouseleave", function () {
        cursor.classList.remove("hovered");
      });
    });
  });
});

function createCustomCursorEffect(selector) {
  var clip = document.querySelector(selector);

  var mouseX = 0;
  var mouseY = 0;
  var cursorX = 0;
  var cursorY = 0;

  function updateCursor() {
    var dx = mouseX - cursorX;
    var dy = mouseY - cursorY;

    var lagFactor = 0.03;

    cursorX += dx * lagFactor;
    cursorY += dy * lagFactor;

    clip.style.clipPath =
      "polygon(100.1% 0%, " +
      cursorX +
      "px" +
      " 0%, " +
      cursorX +
      "px" +
      " 100.3%, 100.1% 100.3%)";
    requestAnimationFrame(updateCursor);
  }

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  updateCursor();
}

createCustomCursorEffect("#clip-header");
createCustomCursorEffect("#clip-nav");
createCustomCursorEffect("#clip-about");

function menuToggle() {
  var links = document.querySelectorAll("nav a");
  links.forEach(function (link) {
    if (link.classList.contains("menu-open")) {
      link.classList.remove("menu-open");
    } else {
      link.classList.add("menu-open");
    }
  });
}
