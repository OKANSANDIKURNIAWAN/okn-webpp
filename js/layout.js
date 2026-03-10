function getCurrentPageName() {
  const path = window.location.pathname;
  const fileName = path.split("/").pop() || "home.html";
  return fileName.toLowerCase();
}

function createSharedLayout() {
  const currentPage = getCurrentPageName();

  const navItems = [
    { href: "home.html", label: "HOME" },
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
    '<img src="img/genre komedi/balas budi.jpeg" alt="Poster" class="sidebar-img" loading="lazy" style="margin-top: 1rem" />' +
    '<p style="margin-top: 1rem">27 November 2025</p>' +
    '<a href="genre.html?slug=balas-budi" style="color: #fff; text-decoration: underline">Lihat semua rilis</a>' +
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
    '<div class="footer-column">' +
    "<h4>Company</h4>" +
    '<a href="aboutus.html">About</a>' +
    '<a href="#">Careers</a>' +
    "</div>" +
    '<div class="footer-column">' +
    "<h4>Resources</h4>" +
    '<a href="#">Help Center</a>' +
    '<a href="#">Privacy</a>' +
    '<a href="contact.html">Contact</a>' +
    "</div>" +
    '<div class="footer-column">' +
    "<h4>Social</h4>" +
    '<a href="#">Instagram</a>' +
    '<a href="#">Twitter</a>' +
    "</div>" +
    "</div>" +
    "</footer>";

  document.body.insertAdjacentHTML("afterbegin", headerMarkup);
  document.body.insertAdjacentHTML("beforeend", svgFilterMarkup);
  document.body.insertAdjacentHTML("beforeend", sidebarMarkup);
  document.body.insertAdjacentHTML("beforeend", footerMarkup);
}

createSharedLayout();
