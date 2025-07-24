const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const toggleText = menuToggle.querySelector(".toggle-text");
const icon = menuToggle.querySelector("i");

// Función para alternar el menú
function toggleMenu() {
  navMenu.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");

  if (navMenu.classList.contains("active")) {
    toggleText.textContent = "Cerrar";
  } else {
    toggleText.textContent = "Menú";
  }
}

menuToggle.addEventListener("click", toggleMenu);

// Cerrar el menú al hacer clic en un enlace
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Solo cierra si está abierto
    if (navMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
