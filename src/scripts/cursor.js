const cursorFollower = document.querySelector('.cursor-follower');

function isMobileDevice() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

function updateCursorFollower() {
  if (isMobileDevice()) {
    cursorFollower.style.display = 'none'; // Hide cursor follower on mobile
  } else {
    cursorFollower.style.display = 'block'; // Show cursor follower on desktop
  }
}

// Run on page load and window resize
window.addEventListener('load', updateCursorFollower);
window.addEventListener('resize', updateCursorFollower);