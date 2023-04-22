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
  