class HeroSlider {
  constructor() {
    this.slides = document.querySelectorAll(".hero-slide");
    this.dots = document.querySelectorAll(".hero-dot");
    this.currentSlide = 0;
    this.autoSlideInterval = null;
    this.autoSlideEnabled = true;
    this.autoSlideDuration = 5000; // 5 detik

    this.init();
  }

  init() {
    // Click handler untuk dots
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.pauseAutoSlide();
        this.goToSlide(index);
        // Resume auto-slide setelah user click
        this.resumeAutoSlide();
      });
    });

    // Start auto-slide
    this.startAutoSlide();
  }

  goToSlide(index) {
    // Remove active class dari semua slides dan dots
    this.slides.forEach((slide) => slide.classList.remove("active"));
    this.dots.forEach((dot) => dot.classList.remove("active"));

    // Set slide aktif
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add("active");
    this.dots[this.currentSlide].classList.add("active");
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  startAutoSlide() {
    if (!this.autoSlideEnabled) return;

    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoSlideDuration);
  }

  pauseAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  resumeAutoSlide() {
    this.startAutoSlide();
  }

  toggleAutoSlide() {
    this.autoSlideEnabled = !this.autoSlideEnabled;
    if (this.autoSlideEnabled) {
      this.startAutoSlide();
    } else {
      this.pauseAutoSlide();
    }
  }
}

// Initialize slider saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  const slider = new HeroSlider();
  window.heroSlider = slider; // Expose ke global supaya bisa diakses
});
