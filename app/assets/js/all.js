console.log("Hello!");

$(document).ready(() => {
  console.log("HesSchool Hello!");
});

//=== mobile menu ===//
const headerNav = document.querySelector(".headerNav");
const mobileNav = document.querySelector(".mobileNav");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

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
mobileNav.addEventListener("click", toggleMenu);
