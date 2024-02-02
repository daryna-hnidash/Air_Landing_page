'use strict';

let slideIndex = 1;

const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');

buttonLeft.addEventListener('click', () => {
  slideIndex--
  showDivs(slideIndex);
});

buttonRight.addEventListener('click', () => {
  slideIndex++
  showDivs(slideIndex);
});

function showDivs(n) {
  const slides = document.querySelectorAll('.carousel__slide');

  if (n > slides.length) {
    slideIndex = 1;
  };

  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('carousel__slide--hidden');
  }

  slides[slideIndex - 1].classList.remove('carousel__slide--hidden');
}
