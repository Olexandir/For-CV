class Text {
  constructor(text) {
    this.text = text;
    this.counter = 0;
  }
  write() {
    document.body.innerText = this.text.slice(0, this.counter);
    this.counter++;
    if (this.counter > this.text.length) {
      this.counter = 0;
    }
  }
  autoWrite() {
    setInterval(this.write.bind(this), 300);
  }
}

let a = "Автоматическое вопспроизведение текста. (PetProject)";

let text = new Text(a);
text.autoWrite();
