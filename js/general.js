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
