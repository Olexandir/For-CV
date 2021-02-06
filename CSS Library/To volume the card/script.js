const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const emblem = document.querySelector(".emblem img");
const circle = document.querySelector(".circle");
const info = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");

container.addEventListener("mousemove", (e) => {
  let xZooms = (window.innerWidth / 2 - e.pageX) / 10;
  let yZooms = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = `rotateY(${xZooms}deg) rotateX(${yZooms}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  emblem.style.transform = "translateZ(175px)";
  circle.style.transform = "translateZ(70px)";
  info.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0)";
  emblem.style.transform = "translateZ(0)";
  circle.style.transform = "translateZ(0)";
  info.style.transform = "translateZ(0)";
  sizes.style.transform = "translateZ(0)";
  purchase.style.transform = "translateZ(0)";
});
