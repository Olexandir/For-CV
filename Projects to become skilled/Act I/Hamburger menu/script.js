const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

nav.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});


