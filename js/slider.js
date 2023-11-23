let timer; // Declare the timer variable outside the functions
const slides = document.querySelector(".slider-inner-container").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function autoPlay() {
  nextSlide();
  updateDotIndicator();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 5000);
}

function updateDotIndicator() {
  // Make sure to implement this function if you have indicators
}

// Remove duplicate event listeners
prev.addEventListener("click", function() {
  prevSlide();
  resetTimer();
});

next.addEventListener("click", function() {
  nextSlide();
  resetTimer();
});

resetTimer(); // Initialize the autoplay feature
