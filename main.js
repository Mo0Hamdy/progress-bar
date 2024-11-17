const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const resetButton = document.getElementById('resetButton');

let progress = 0;

function updateProgressBar(newProgress) {
  progress = newProgress;
  progressBar.style.width = progress + '%';
  progressText.textContent = progress + '%';
}

function resetProgressBar() {
  progress = 0;
  updateProgressBar(progress);
}

// Example: Simulate progress increase over time
const intervalId = setInterval(() => {
  if (progress < 100) {
    updateProgressBar(progress + 5);
  } else {
    clearInterval(intervalId);
  }
}, 500);

resetButton.addEventListener('click', resetProgressBar);