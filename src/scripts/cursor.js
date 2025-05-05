const cursorFollower = document.querySelector('.cursor-follower');

function isMobileDevice() {
  return window.innerWidth <= 768; // Adjust breakpoint as needed
}

function updateCursorFollower() {
  if (isMobileDevice()) {
    if (cursorFollower) {
      cursorFollower.style.display = 'none'; // Hide cursor follower on mobile
      cursorFollower.style.visibility = 'hidden'; // Ensure it's not visible
      document.body.style.cursor = 'default'; // Reset cursor style
    }
  } else {
    if (cursorFollower) {
      cursorFollower.style.display = 'block'; // Show cursor follower on desktop
      cursorFollower.style.visibility = 'visible'; // Ensure it's visible
      document.body.style.cursor = 'none'; // Use custom cursor
    }
  }
}

// Run on page load and window resize
window.addEventListener('load', updateCursorFollower);
window.addEventListener('resize', updateCursorFollower);