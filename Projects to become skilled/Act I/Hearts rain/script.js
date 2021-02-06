function createHeart() {
  const hearts = ["🧡", "💛", "💚", "💙", "💜", "🖤"];
  let heartRand = Math.floor(Math.random() * hearts.length);
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 1 + 9 + "s";

  heart.innerText = hearts[heartRand];
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
