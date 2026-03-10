function initGlobalUI() {
  // Render feather icons if available.
  if (window.feather) {
    window.feather.replace();
  }

  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  if (!hamburgerMenu || !sidebar || !closeSidebar) {
    return;
  }

  hamburgerMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.add("show");
  });

  closeSidebar.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.remove("show");
  });

  document.addEventListener("click", function (e) {
    if (!sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
      sidebar.classList.remove("show");
    }
  });
}

window.initGlobalUI = initGlobalUI;

document.addEventListener("DOMContentLoaded", initGlobalUI);

// slide hero
function initHeroSlider() {
  if (typeof window === "undefined") {
    return;
  }

  const slider = document.querySelector(".hero-slider");
  const slides = slider
    ? Array.from(slider.querySelectorAll(".hero-slide"))
    : [];
  const dots = Array.from(document.querySelectorAll(".hero-dot"));
  if (!slider || !slides.length) {
    return;
  }

  let activeIndex = slides.findIndex((slide) =>
    slide.classList.contains("active"),
  );
  if (activeIndex === -1) {
    activeIndex = 0;
  }

  const setSlide = (index) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === index));
  };

  const goToNext = () => {
    activeIndex = (activeIndex + 1) % slides.length;
    setSlide(activeIndex);
  };

  const startAuto = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(goToNext, 5500);
  };

  const stopAuto = () => {
    clearInterval(heroTimer);
  };

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      activeIndex = idx;
      setSlide(activeIndex);
      startAuto();
    });
  });

  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

  setSlide(activeIndex);
  startAuto();
}
