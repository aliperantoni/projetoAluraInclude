const buttonMenu = document.querySelector(".button__menu");
const menuMobile = document.querySelector(".menuMobile");
let isMenuOpen = false;

// Pegar o botão menu ao clicar no botão

buttonMenu.addEventListener("click", function () {
  isMenuOpen
    ? menuMobile.classList.add("invisivel")
    : menuMobile.classList.remove("invisivel");

  isMenuOpen
    ? buttonMenu.children[0].setAttribute("src", "../assets/openMenu.svg")
    : buttonMenu.children[0].setAttribute("src", "../assets/closeMenu.svg");

  isMenuOpen = !isMenuOpen;
});
