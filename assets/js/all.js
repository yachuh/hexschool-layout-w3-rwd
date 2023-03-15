"use strict";

console.log("Hello!");
$(document).ready(function () {
  console.log("HesSchool Hello!");
}); //=== mobile menu ===//

var headerNav = document.querySelector(".headerNav");
var mobileNav = document.querySelector(".mobileNav");
var menuIcon = document.querySelector(".menuIcon");
var closeIcon = document.querySelector(".closeIcon");

function toggleMenu() {
  if (headerNav.classList.contains("showMenu")) {
    headerNav.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    headerNav.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }

  console.log("click"); // headerNav.classList.toggle("");
}

mobileNav.addEventListener("click", toggleMenu);
//# sourceMappingURL=all.js.map
