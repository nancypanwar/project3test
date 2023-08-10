const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) {
      index = slides.length - 1;
    } else if (index >= slides.length) {
      index = 0;
    }
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
  }

  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000); // Change slide every 3 seconds

  // Optional: Pause slider on hover
  slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  slider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 3000);
  });

  // Initial slide show
  showSlide(currentIndex);