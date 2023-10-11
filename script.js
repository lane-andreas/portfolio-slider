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

function menuToggle() {
  var nav = document.querySelectorAll(".nav-list");
  nav.forEach(function (item) {
    if (item.classList.contains("menu-open")) {
      item.classList.remove("menu-open");
    } else {
      item.classList.add("menu-open");
    }
  });
}

function flipToggle() {
  const clip = document.querySelectorAll(".clip-section");
  clip.forEach(function (section) {
    // Check the current clip-path value of header
    const currentClipPath =
      section.style.clipPath || getComputedStyle(section).clipPath;

    if (currentClipPath === "polygon(100% 0%, 100% 200%, 100% 200%, 100% 0%)") {
      // If it's the initial value, toggle to the new value
      section.style.clipPath = "polygon(100% 0%, 100% 200%, 0% 200%, 0% 0%)";
    } else {
      // If it's the new value, toggle back to the initial value
      section.style.clipPath =
        "polygon(100% 0%, 100% 200%, 100% 200%, 100% 0%)";
    }
  });
}

const scrollElements = document.querySelectorAll(".scroll");

// Add event listener for scroll
window.addEventListener("scroll", scrollHandler);

// Function to handle scroll event
function scrollHandler() {
  scrollElements.forEach((element) => {
    // Calculate the distance of the element from the top of the viewport
    const distanceToTop = element.getBoundingClientRect().top;

    // Check if the element is within the viewport
    if (distanceToTop < window.innerHeight / 1.5) {
      element.classList.add("animate");
    }
  });
}

// Trigger initial animation on page load
scrollHandler();

function CV() {
  alert("Coming soon! For now, take a look at my projects...");
}
