// DOM elements

const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const daysBar = document.querySelector(".daysBar");
const hoursBar = document.querySelector(".hoursBar");
const minutesBar = document.querySelector(".minutesBar");
const secondsBar = document.querySelector(".secondsBar");

// Variables

const endDate = new Date("1 Jan 2021");

// Functions

function countdown() {
  const today = new Date();
  const totalSeconds = (endDate - today) / 1000;
  const daysLeft = Math.floor(totalSeconds / 3600 / 24);
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds % 60);

  daysBar.style.width = `${daysLeft * 10}px`;
  hoursBar.style.width = `${hoursLeft * 14}px`;
  minutesBar.style.width = `${minutesLeft * 8}px`;
  secondsBar.style.width = `${secondsLeft * 8}px`;

  daysEl.innerHTML = daysLeft;
  hoursEl.innerHTML = format(hoursLeft);
  minutesEl.innerHTML = format(minutesLeft);
  secondsEl.innerHTML = format(secondsLeft);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

// init
countdown();

// Interval
setInterval(countdown, 1000);
