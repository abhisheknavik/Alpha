const menuButton = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
