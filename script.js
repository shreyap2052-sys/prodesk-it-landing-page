const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
"click",
() => {
document.body.classList.toggle("dark");
});

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener(
"click",
() => {
navLinks.classList.toggle("active");
});