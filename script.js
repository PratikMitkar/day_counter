// Array of background images
const backgroundImages = [
  'url("./peakpx (1).jpg")',
  'url("./peakpx (2).jpg")',
  'url("./peakpx.jpg")',
  'url("./wallpapersden.jpg")',
  'url("./wallpapersden1.jpg")',
  'url("./wallpapersden2.jpg")',
  // Add more image URLs as needed
];

let currentImageIndex = 0;
const backgroundOverlay = document.querySelector('.background-overlay');

// Function to change the background image
function changeBackgroundImage() {
  backgroundOverlay.style.backgroundImage = backgroundImages[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

// Change the background image every 30 minutes
setInterval(changeBackgroundImage, 3 * 60 * 1000); // 30 minutes in milliseconds
changeBackgroundImage(); // Initial call to set the first image

function calculateTimeLeft(targetDate) {
  const now = new Date(); // Real-time from system clock
  const target = new Date(targetDate);
  const timeDiff = target - now;

  // Handle cases where the target date has passed
  if (timeDiff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function updateCounter() {
  const targetDate = '2078-01-01T00:00:00'; // Set your target date and time here
  const { days, hours, minutes, seconds } = calculateTimeLeft(targetDate);

  // Update the counter display
  document.getElementById('time-left').textContent =
    `${days} d : ${hours} h : ${minutes} m : ${seconds} s`;
}

// Initial call to set the counter
updateCounter();

// Update the counter every second based on real-time clock
setInterval(updateCounter, 1000);
