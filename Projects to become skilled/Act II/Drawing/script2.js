class Drawer {
  constructor(ctx) {
    this.ctx = ctx;
    this.size = 10;
    this.isPressed = false;
    this.color = "black";
    this.x = undefined;
    this.y = undefined;

  }

  drawCircle(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  drawLine(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.size;
    this.ctx.stroke();
  }

  shiftSize() {
    sizeEl.innerText = this.size;
  }
}

const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clr = document.getElementById("clear");
const ctx = canvas.getContext("2d");

const drawer = new Drawer(ctx);

canvas.addEventListener("mousedown", (e) => {
  drawer.isPressed = true;
  drawer.x = e.offsetX;
  drawer.y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
  drawer.isPressed = false;
  drawer.x = undefined;
  drawer.y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (drawer.isPressed) {
    drawer.x2 = e.offsetX;
    drawer.y2 = e.offsetY;
    drawer.drawCircle(drawer.x2, drawer.y2);
    drawer.drawLine(drawer.x, drawer.y, drawer.x2, drawer.y2);
    drawer.x = drawer.x2;
    drawer.y = drawer.y2;
  }
});

increaseBtn.addEventListener("click", () => {
  drawer.size += 3;
  if (drawer.size > 50) {
    drawer.size = 50;
  }
  drawer.shiftSize();
});
decreaseBtn.addEventListener("click", () => {
  drawer.size -= 3;
  if (drawer.size < 5) {
    drawer.size = 5;
  }
  drawer.shiftSize();
});

colorEl.addEventListener("change", (e) => {
  drawer.color = e.target.value;
});

clr.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
