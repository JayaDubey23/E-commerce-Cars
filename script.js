// for offer timer

let timeLeft = 360; // 1 hour in seconds
const timerDisplay = document.getElementById('timer');

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

// Initial display
timerDisplay.textContent = formatTime(timeLeft);

// Countdown logic
const countdown = setInterval(() => {
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "Offer Expired!";
  } else {
    timerDisplay.textContent = formatTime(timeLeft);
  }
}, 1000);
