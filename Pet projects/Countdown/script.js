let hourIn = document.querySelector("#hourIn");
let minIn = document.querySelector("#minIn");
let secIn = document.querySelector("#secIn");

let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let hourse;
let minutse;
let secondse;

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

const forInput = document.getElementById("forInput");

forInput.addEventListener("keydown", (e) => {
  if (e.target.classList == "hourIn" && e.keyCode === 13) {
    hour.innerText = e.target.value;
    hourNum = +e.target.value * 3600 * 1000;
    hourIn.value = "";
  }
  if (e.target.classList == "minIn" && e.keyCode === 13) {
    min.innerText = e.target.value;
    minNum = +e.target.value * 60 * 1000;
    minIn.value = "";
  }
  if (e.target.classList == "secIn" && e.keyCode === 13) {
    sec.innerText = e.target.value;
    secNum = +e.target.value * 1000;
    secIn.value = "";
  }
});

/* let targetDate = new Date().getTime() + (1000 * 3600 * 48); */

let minNum = 0;
let hourNum = 0;
let secNum = 0;

function startTime() {
  let targetDate = new Date().getTime() + secNum + minNum + hourNum;
  let currentDate = new Date().getTime();
  let secondsLeft = (targetDate - currentDate) / 1000;

  hourse = parseInt(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;
  minutse = parseInt(secondsLeft / 60);
  secondse = parseInt(secondsLeft % 60);

  hour.innerHTML = addZero(hourse);
  min.innerHTML = addZero(minutse);
  sec.innerHTML = addZero(secondse);

  console.log(secondsLeft);
}

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

start.addEventListener("click", startTime);

setInterval(startTime, 1000);
