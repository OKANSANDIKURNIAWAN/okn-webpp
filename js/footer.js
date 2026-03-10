function initFooterAnimation() {
  const container = document.getElementById("particle-container");
  if (!container) return;

  const particleCount = 100;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < particleCount; i++) {
    const span = document.createElement("span");
    span.classList.add("particle");

    const size = 3 + Math.random() * 6;
    const distance = 10 + Math.random() * 15;
    const position = Math.random() * 100;
    const time = 3 + Math.random() * 3;
    const delay = -1 * (Math.random() * 10);

    span.style.setProperty("--dim", `${size}rem`);
    span.style.setProperty("--uplift", `${distance}rem`);
    span.style.setProperty("--pos-x", `${position}%`);
    span.style.setProperty("--dur", `${time}s`);
    span.style.setProperty("--delay", `${delay}s`);

    fragment.appendChild(span);
  }

  container.appendChild(fragment);
}

window.initFooterAnimation = initFooterAnimation;

document.addEventListener("DOMContentLoaded", initFooterAnimation);
