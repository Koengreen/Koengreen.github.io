window.addEventListener("scroll", function () {
    const progressBars = document.querySelectorAll(".progress-bar");
    const windowHeight = window.innerHeight;
  
    for (let progressBar of progressBars) {
      const progressBarPosition = progressBar.getBoundingClientRect().top;
      const progressBarPercentage = progressBar.getAttribute("data-percentage");
  
      if (progressBarPosition < windowHeight) {
        progressBar.style.width = progressBarPercentage + "%";
        progressBar.classList.add("progress-bar-fill");
      }
    }
  });
  // Get all links with the "smooth-scroll" class
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

// Add click event listener to each link
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target element's ID from the href attribute
    const targetId = link.getAttribute('href');

    // Get the target element
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element smoothly
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// get the photos section element
const photosSection = document.getElementById('photos');

// listen for scroll events
window.addEventListener('scroll', () => {
  // check if the photos section is in the viewport
  if (isElementInViewport(photosSection)) {
    // add a class to the images to trigger the animation
    const images = photosSection.querySelectorAll('img');
    images.forEach((img, index) => {
      img.classList.add(`animate-delay-${index+1}`);
    });
  }
});

// function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

  