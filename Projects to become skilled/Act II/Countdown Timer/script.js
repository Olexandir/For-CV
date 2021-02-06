const yourDate = "14 Apr 2021";

const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

function countdown() {
  const yourDateDate = new Date(yourDate);
  const currentDate = new Date();

  const sec = (yourDateDate - currentDate) / 1000;

  const days = Math.floor(sec / 3600 / 24);
  const hours = Math.floor(sec / 3600) % 24;
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = Math.floor(sec) % 60;

  daysEL.innerHTML = addZero(days);
  hoursEL.innerHTML = addZero(hours);
  minutesEL.innerHTML = addZero(minutes);
  secondsEL.innerHTML = addZero(seconds);
}

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
