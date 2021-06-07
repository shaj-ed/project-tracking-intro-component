// Selects DOM
const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");

// Event
hamburger.addEventListener("click", () => {
  header.classList.toggle("show");
});
