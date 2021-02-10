const hearts = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤"];

class Heart {
  constructor(options) {
    this.class = options.class;
    this.colors = options.colors;
  }

  createHeart() {
    const heart = document.createElement("div");
    let random = Math.floor(Math.random() * this.colors.length);

    heart.classList.add(this.class);
    heart.innerText = this.colors[random];
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 1 + 9 + "s";
  }
  deleteHeart() {
    let heart = document.querySelector(".heart");
    heart.remove();
  }
}

export { Heart, hearts };
