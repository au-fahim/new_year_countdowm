// Selector
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countDown = document.querySelector("#countdown");

const year = document.querySelector("#year");
const loader = document.querySelector("#loading");

// select current Year
const currentYear = new Date().getFullYear();

// Creage New year
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// New Year show on Background
year.innerHTML = currentYear + 1;

// Countdown function
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show Spinner before the countdown start
setTimeout(() => {
  loader.remove();
  countDown.style.display = "flex";
}, 1000);

// Run Every Second
setInterval(updateCountdown, 1000);
