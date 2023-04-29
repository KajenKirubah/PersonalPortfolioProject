export // Function to smoothly scroll to a given position (y) over a specified duration
function smoothScrollTo(y, duration) {
  // Store the initial scroll position (window.pageYOffset)
  const start = window.pageYOffset;
  // Store the starting time of the animation
  const startTime = "now" in window.performance ? performance.now() : new Date().getTime();

  // An easing function (easeInOutQuad) for smooth animation
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // The main animation function that updates the scroll position for each frame
  const animation = (currentTime) => {
    // Calculate the elapsed time since the animation started
    const elapsedTime = currentTime - startTime;
    // Calculate the next scroll position using the easing function
    const nextY = easeInOutQuad(elapsedTime, start, y - start, duration);
    // Update the scroll position
    window.scrollTo(0, nextY);

    // If the elapsed time is less than the specified duration, continue animating
    if (elapsedTime < duration) {
      requestAnimationFrame(animation);
    }
  };

  // Start the animation by calling the animation function
  requestAnimationFrame(animation);
}

// Select all links with a hash (e.g., #section) in the href attribute
const links = document.querySelectorAll('a[href^="#"]');

// For each link, add a click event listener
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Prevent the default behavior (jumping to the target section)
    e.preventDefault();

    // Find the target section using the href attribute of the link
    const target = document.querySelector(link.getAttribute("href"));
    // Calculate the target position (200px above the target section)
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 200;

    // Call the smoothScrollTo function with the target position and a duration of 1000ms (1 second)
    smoothScrollTo(targetPosition, 1000);
  });
});


