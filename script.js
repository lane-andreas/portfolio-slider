// document.addEventListener("DOMContentLoaded", function () {
//   var cursor = document.createElement("div");
//   cursor.id = "mouse";
//   document.body.appendChild(cursor);

//   document.addEventListener("mousemove", function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var blur = document.querySelector("#mouse-blur");

//   var mouseX = 0;
//   var mouseY = 0;
//   var cursorX = 0;
//   var cursorY = 0;

//   function updateCursor() {
//     var dx = mouseX - cursorX;
//     var dy = mouseY - cursorY;

//     var lagFactor = 0.005;

//     cursorX += dx * lagFactor;
//     cursorY += dy * lagFactor;

//     blur.style.left = cursorX + "px";
//     blur.style.top = cursorY + "px";

//     requestAnimationFrame(updateCursor);
//   }

//   document.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   updateCursor();
// });

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

// Usage: Call the function with the CSS selector of the element you want to apply the effect to.
createCustomCursorEffect("#clip-header");
createCustomCursorEffect("#clip-nav");
// document.addEventListener("DOMContentLoaded", function () {
//   var clip = document.querySelector("#clip");

//   var mouseX = 0;
//   var mouseY = 0;
//   var cursorX = 0;
//   var cursorY = 0;

//   function updateCursor() {
//     var dx = mouseX - cursorX;
//     var dy = mouseY - cursorY;

//     var lagFactor = 1;

//     cursorX += dx * lagFactor;
//     cursorY += dy * lagFactor;

//     clip.style.clipPath =
//       "circle(15vw at " + cursorX + "px" + " " + cursorY + "px" + ")";
//     requestAnimationFrame(updateCursor);
//   }

//   document.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//   });

//   updateCursor();
// });
