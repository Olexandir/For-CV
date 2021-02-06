const text = "Автоматическое вопспроизведение текста. (PetProject)";

let index = 0;

function wt() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(wt, 100);
