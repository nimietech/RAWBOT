// For the carousel movement
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Switch every 5 second


// For the carousel dot
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Dot click events
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});


// PARTNERS SLIDE
// const prevArrow = document.querySelector('.prev-arrow');
// const nextArrow = document.querySelector('.next-arrow');
// const slider = document.querySelector('.slider');
// let slideIndex = 0;

// prevArrow.addEventListener('click', () => {
//   if (slideIndex > 0) {
//     slideIndex--;
//     updateSlider();
//   }
// });

// nextArrow.addEventListener('click', () => {
//   if (slideIndex < slider.children.length - 1) {
//     slideIndex++;
//     updateSlider();
//   }
// });

// function updateSlider() {
//   const offset = -slideIndex * 180; // Adjust based on the width of the brand logos
//   slider.style.transform = `translateX(${offset}px)`;
// }

// SUBMIT FORM
function submitted() {
  alert("Your request has been submitted successfully!");
}
