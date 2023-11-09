const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let isPlaying = true;
const playButton = document.getElementById('playButton');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function togglePlayPause() {
    if (isPlaying) {
        clearInterval(interval);
        isPlaying = false;
        playButton.innerText = 'Play';
    } else {
        interval = setInterval(nextSlide, 2000); 
        isPlaying = true;
        playButton.innerText = 'Pause';
    }
}

let interval = setInterval(nextSlide, 2000);

playButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
