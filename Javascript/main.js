
document.querySelector('.menu-btn').addEventListener('click',() =>{
     document.querySelector('.nav-menu-center').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.contenido-principal', { delay:500});
ScrollReveal().reveal('.banner-one', { delay:500});
ScrollReveal().reveal('.banner-two', { delay:500});