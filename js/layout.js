function getCurrentPageName() {
  const path = window.location.pathname;
  const fileName = path.split("/").pop() || "index.html";
  return fileName.toLowerCase();
}

function createSharedLayout() {
  const currentPage = getCurrentPageName();

  const navItems = [
    { href: "index.html", label: "HOME" },
    { href: "film.html", label: "FILM & SERIES" },
    { href: "aboutus.html", label: "ABOUT US" },
    { href: "contact.html", label: "CONTACT" },
  ];

  const navLinks = navItems
    .map(function (item) {
      const activeClass = item.href === currentPage ? "active" : "";
      return (
        '<a href="' +
        item.href +
        '" class="' +
        activeClass +
        '">' +
        item.label +
        "</a>"
      );
    })
    .join("\n        ");

  const headerMarkup =
    '<header class="header">' +
    '<div class="top-bar">' +
    '<div class="logo-section">' +
    '<img src="img/general/logo.jpeg" alt="Logo" class="logo-img" />' +
    '<div class="logo">INMOEC</div>' +
    "</div>" +
    '<div class="hamburger-menu" id="hamburgerMenu">' +
    "<span></span><span></span><span></span>" +
    "</div>" +
    "</div>" +
    '<nav class="nav-menu">' +
    navLinks +
    "</nav>" +
    "</header>";

  const sidebarMarkup =
    '<aside class="sidebar" id="sidebar">' +
    '<div class="sidebar-header">' +
    '<span class="chevron" id="closeSidebar"><i data-feather="chevron-left"></i></span>' +
    "</div>" +
    '<div class="sidebar-content">' +
    '<h2 class="sidebar-title">Rilis Baru</h2>' +
    '<p class="sidebar-movie-tittle">Balas Budi</p>' +
    '<a href="film-detail.html?slug=balas-budi" style="display: inline-block; width: 100%; text-decoration: none;">' +
    '<img src="img/genre/62.jpeg" alt="Poster" class="sidebar-img" loading="lazy" style="margin-top: 1rem; cursor: pointer; transition: transform 0.3s ease;" />' +
    "</a>" +
    '<p style="margin-top: 1rem">27 November 2025</p>' +
    '<a href="film-detail.html?slug=balas-budi" style="color: #fff; text-decoration: underline">Lihat semua rilis</a>' +
    "</div>" +
    "</aside>";

  const svgFilterMarkup =
    '<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg">' +
    "<defs>" +
    '<filter id="liquid-effect">' +
    '<feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />' +
    '<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="liquid" />' +
    "</filter>" +
    "</defs>" +
    "</svg>";

  const footerMarkup =
    '<footer class="footer-section">' +
    '<div class="gooey-animations" id="particle-container"></div>' +
    '<div class="footer-content">' +
    '<div class="footer-left">' +
    "<p class='footer-title'>VINMOEC</p>" +
    "<p class='footer-desc'>Situs informasi film & series Indonesia Tahun 2025.</p>" +
    "</div>" +
    '<div class="footer-right">' +
    '<div class="footer-columns">' +
    '<div class="footer-column">' +
    "<h4>MENU</h4>" +
    '<a href="index.html">Home</a>' +
    '<a href="film.html">Film & Series</a>' +
    '<a href="aboutus.html">About Us</a>' +
    '<a href="contact.html">Contact</a>' +
    "</div>" +
    '<div class="footer-column">' +
    "<h4>INFORMATION</h4>" +
    '<a href="#">Privacy Policy</a>' +
    '<a href="#">Terms & Conditions</a>' +
    '<a href="#">Disclaimer</a>' +
    "</div>" +
    '<div class="footer-social-icons">' +
    '<a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>' +
    '<a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>' +
    '<a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
    '<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="footer-bottom">' +
    "<p>© 2025 CINMOEV — Created by Team 4</p>" +
    "</div>" +
    "</footer>";

  document.body.insertAdjacentHTML("afterbegin", headerMarkup);
  document.body.insertAdjacentHTML("beforeend", svgFilterMarkup);
  document.body.insertAdjacentHTML("beforeend", sidebarMarkup);
  document.body.insertAdjacentHTML("beforeend", footerMarkup);
}

createSharedLayout();
