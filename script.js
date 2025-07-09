
//hamburger menu function
    function toggleMenu() {
      const nav = document.getElementById('navMenu');
      nav.classList.toggle('show');
    }




//function: slideshow of the hero section
const heroBanner = document.getElementById("heroBanner");
const playPauseBtn = document.getElementById("playPauseBtn");
const iconPlay = document.getElementById("icon-play");
const iconPause = document.getElementById("icon-pause");
const indicators = document.getElementById("indicators");

const images = [
  "assets/images/hero-bg.jpg",     // 1st
  "assets/images/hero-bg1.jpg",    // 2nd
  "assets/images/hero-bg.jpg",     // 3rd
  "assets/images/hero-bg1.jpg"     // 4th
];


let currentImage = 0;
let intervalId = null;
const delay = 4000;

// Create indicators
images.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("indicator");
  if (index === 0) dot.classList.add("active");
  indicators.appendChild(dot);
});

const indicatorDots = document.querySelectorAll(".indicator");

function showImage(index) {
  heroBanner.style.backgroundImage = `url(${images[index]})`;

  indicatorDots.forEach(dot => dot.classList.remove("active"));
  indicatorDots[index].classList.add("active");
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function startSlideshow() {
  if (!intervalId) {
    intervalId = setInterval(nextImage, delay);
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
  }
}

function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
  iconPlay.style.display = "block";
  iconPause.style.display = "none";
}

playPauseBtn.addEventListener("click", () => {
  intervalId ? stopSlideshow() : startSlideshow();
});

// Initial
showImage(currentImage);
startSlideshow();


//funtion to switch tabs
const buttons = document.querySelectorAll('.tab-btn');
const tabs = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    const targetTab = document.getElementById(target);

    if (!targetTab) return;

    buttons.forEach(b => b.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    btn.classList.add('active');
    targetTab.classList.add('active');
  });
});



//testimonials
// Simple testimonial slider functionality
// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtns = document.querySelectorAll('.prev');
  const nextBtns = document.querySelectorAll('.next');
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    cards[index].classList.add('active');
  }

  function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  prevBtns.forEach(btn => btn.addEventListener('click', prevCard));
  nextBtns.forEach(btn => btn.addEventListener('click', nextCard));
});


//health benefits
// Initialize Glide Slider
document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    perView: 3, // 3 cards visible
    gap: 5,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 500,
    breakpoints: {
      1024: { perView: 2 },
      768: { perView: 1 }
    }
  }).mount();
  
  // Plus button functionality
  document.querySelectorAll('.plus-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.benefit-card');
      // Add your click functionality here
      console.log('Card clicked:', card.querySelector('h3').textContent);
    });
  });
});



//doctor testimonial slider
if (document.querySelector('#almTestimonialGlide')) {
  new Glide('#almTestimonialGlide', {
    type: 'carousel',
    perView: 1,
    autoplay: 5000,
    hoverpause: true,
    animationDuration: 600
  }).mount();
}
