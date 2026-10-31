const slidesData = [
  {
    video: './video-bg/dubai.mp4',
    title: 'Futuristic Luxury <br> <span>In Dubai</span>',
    text: 'Experience iconic skyscrapers, world-class dining, and breathtaking desert safaris tailored for the discerning modern traveler.'
  },
  {
    video: './video-bg/malta.mp4',
    title: 'Historic Charms <br> <span>Of Malta</span>',
    text: 'Discover timeless architecture, crystal-clear Mediterranean bays, and centuries of rich heritage tucked away in luxury coastal sanctuaries.'
  },
  {
    video: './video-bg/maldives.mp4',
    title: 'Tropical Paradise <br> <span>In Maldives</span>',
    text: 'Escape to private overwater villas, endless turquoise lagoons, and pristine white-sand beaches designed for ultimate relaxation.'
  },
  {
    video: './video-bg/thailand.mp4',
    title: 'Exotic Escapes <br> <span>To Thailand</span>',
    text: 'Experience iconic skyscrapers, world-class dining, and breathtaking desert safaris tailored for the discerning modern traveler.'
  },
  {
    video: './video-bg/cruise.mp4',
    title: 'Unforgettable <span>CRUISES</span>',
    text: 'Sail across the world’s most spectacular oceans on luxury liners offering five-star amenities, gourmet dining, and panoramic sea views.'
  }
];

const heroSection = document.getElementById('hero');

// Если мы не на главной странице, прерываем выполнение скрипта, чтобы он не влиял на другие элементы
if (!heroSection) {
  // Выход
} else {
  let currentIndex = 0;

  const titleElem = heroSection.querySelector('.hero__title');
  const textElem = heroSection.querySelector('.hero__text');
  const currentCounter = heroSection.querySelector('.hero__current');
  const totalCounter = heroSection.querySelector('.hero__total');
  const btnPrev = heroSection.querySelector('.hero__btn-prev');
  const btnNext = heroSection.querySelector('.hero__btn-next');
  const videoElem = heroSection.querySelector('.hero__video-bg');

  if (totalCounter) {
    totalCounter.textContent = String(slidesData.length).padStart(2, '0');
  }

  function updateSlide(index) {
    const slide = slidesData[index];

    if (videoElem) {
      videoElem.src = slide.video;
      videoElem.load();
      videoElem.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }

    if (titleElem) titleElem.innerHTML = slide.title;
    if (textElem) textElem.textContent = slide.text;
    if (currentCounter) currentCounter.textContent = String(index + 1).padStart(2, '0');
  }

  updateSlide(currentIndex);

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slidesData.length;
      updateSlide(currentIndex);
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
      updateSlide(currentIndex);
    });
  }
}




