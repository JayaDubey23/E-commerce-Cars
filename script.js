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

// for brand slider

const brandSlider = document.getElementById("brandSlider");
const brandItems = brandSlider.querySelectorAll(".brand-item");
const brandPrevBtn = document.getElementById("brandPrevBtn");
const brandNextBtn = document.getElementById("brandNextBtn");

let currentIndex = 0;
const itemWidth = 210; // 200px + 30px gap
const maxIndex = brandItems.length - 5; // Show 5 at a time

function updateSlider() {
  const scrollX = currentIndex * itemWidth;
  brandSlider.style.transform = `translateX(-${scrollX}px)`;
}

brandNextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

brandPrevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

console.log("Testing git change in JS file by Jaya");
