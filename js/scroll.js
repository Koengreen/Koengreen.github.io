const overlay1 = document.querySelector('.overlay-1');
const overlay2 = document.querySelector('.overlay-2');
const threshold = overlay1.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= threshold) {
    overlay2.style.display = 'flex';
  } else {
    overlay2.style.display = 'none';
  }
});
