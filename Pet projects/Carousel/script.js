let main = document.getElementById("container");
let images = document.querySelectorAll("img");

class Card {
  constructor(container, images) {
    this.interval = setInterval(this.run.bind(this), 1500);
    this.images = images;
    this.container = container;
    this.counter = 0;
    this.imgLen = this.images.length;
  }
  run() {
    this.counter++;
    if (this.counter > this.imgLen - 1) {
      this.counter = 0;
    }
    this.container.style.transform = `translateX(${-this.counter * 600}px)`;
  }
}

let card = new Card(main, images);

card.interval();
