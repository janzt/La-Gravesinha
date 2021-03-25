//===============
//Despliegue de menú responsive en media queries
//===============================================

let button = document.querySelector(".btn-responsive");
let blackMenu = document.querySelector(".nav__responsive__menu");

function despliegue() {
  if (blackMenu.style.display === "none") {
    blackMenu.style.display = "block";
  } else {
    blackMenu.style.display = "none";
  }
}
button.addEventListener("click", despliegue);
