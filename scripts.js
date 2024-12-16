const burgerMenu = document.querySelector(".menu-hamburger");
const div = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
  div.style.display = "block";
  burgerMenu.style.display = "none";
});

div.addEventListener("click", () => {
  burgerMenu.style.display = "block";
  div.style.display = "none";
});
