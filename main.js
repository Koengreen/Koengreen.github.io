

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

const button = document.querySelector("button");
let lightModeOn = true;
const toggleTheme = function () {
  const elements = document.querySelectorAll(
    "body"
  );
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.classList.toggle("dark-mode");

  }
  if (lightModeOn) {
    lightModeOn = false;
  } else {
    lightModeOn = true;
  }

};

button.addEventListener("click", toggleTheme);

const checkTheme = function () {

  const date = new Date();
  console.log(date);
  if (date.getSeconds() > 7 && date.getSeconds() < 17) {
    if (lightModeOn === true) {
      toggleTheme();
    } 
 
  }
  else {
    if (lightModeOn === false) {
      toggleTheme();
    }
  }

};

setInterval(function () {
  console.log("elke seconde uitgevoerd!");

}, 1000);

setInterval(checkTheme, 1000);

