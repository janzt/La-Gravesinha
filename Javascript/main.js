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

// ============================================
// menú la máquina del tiempo 
// =============================================

let laMaquinaDelTiempo = document.querySelector(".nav__timemachine");
let MenuMaquinaDelTiempo = document.querySelector(".nav__timemachine__nav");

const maquinaDelTiempoDespliegue = () => {
  if(MenuMaquinaDelTiempo.style.display === "none") {
    MenuMaquinaDelTiempo.style.display = "block";
  } else {
    MenuMaquinaDelTiempo.style.display = "none";
  }
}

laMaquinaDelTiempo.addEventListener("click", maquinaDelTiempoDespliegue);