// Variables
const menuActivador = document.querySelector(".menu-activador");
const hamburguesa: Element = document.querySelector(".hamburguesa");
const siteNavigationLinks: Element = document.querySelector(
  ".site-navigation-links"
);

menuActivador.addEventListener("click", (e: Event): any => {
  e.preventDefault();
  hamburguesa.classList.toggle("menu-abierto");
  siteNavigationLinks.classList.toggle("effectVisible_y");
});
