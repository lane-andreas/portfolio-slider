document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector("#mouse");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    var links = document.querySelectorAll("a, button, #flip");
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

function toggleFlip(part) {
  var text = document.querySelectorAll(part);
  text.forEach(function (box) {
    if (box.classList.contains("flip-content")) {
      // If the box has the class, remove it
      box.classList.remove("flip-content");
    } else {
      // If the box doesn't have the class, add it
      box.classList.add("flip-content");
    }
  });
}

const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;
let isAnimating = false;

const buttons = document.querySelectorAll(".nav-buttons button");
let currentButtonIndex = 0;

function scrollSection(index) {
  if (isAnimating) return;
  if (index === currentSectionIndex) return;

  isAnimating = true;

  sections[currentSectionIndex].style.animation = "clipOut 1s forwards";
  currentSectionIndex = index;
  sections[currentSectionIndex].style.animation = "clipIn 1s forwards";
  buttonColor(index);

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}

function buttonColor(index) {
  buttons[currentButtonIndex].style.color = "var(--dark)";
  currentButtonIndex = index;
  buttons[currentButtonIndex].style.color = "var(--accent)";
}
