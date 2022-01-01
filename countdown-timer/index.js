const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


function countdown() {
  var endingDate = new Date("01-01-2022");
  var currentDate = new Date();
  var difference = endingDate.getTime() - currentDate.getTime();

  const seconds = difference / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds /3600 % 24);
  const mins = Math.floor(seconds / 60 % 60);
  const secondsLeft = Math.floor(seconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = secondsLeft;
}


  countdown();
  setInterval(countdown, 1000);
