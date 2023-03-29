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
}

mobileNav.addEventListener("click", toggleMenu); //=== dropdown menu ===//

var dropdownToggle = document.querySelector(".dropdown-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");

function toggleDropdown() {
  dropdownMenu.classList.toggle("showDropdown");
}

dropdownToggle.addEventListener("click", toggleDropdown);
//# sourceMappingURL=all.js.map
