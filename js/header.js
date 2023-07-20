const botaoMenu = document.getElementById('menu__button');
const imgMenuHamburguer = "url(../img/IconeHamburguer.svg)";
const imgMenuFechar = "url(../img/IconeFechar.svg)";
const menuMobile = document.querySelector('.cabecalho__menu-nav');
const menuNav = document.getElementById("menu__nav");
const home = document.getElementById("home");

botaoMenu.addEventListener('click', () => {
    const listaMobile = document.querySelector('.cabecalho__menu-lista');
    
    listaMobile.classList.toggle("cabecalho__menu-lista_active");
    
    if(listaMobile.classList.contains('cabecalho__menu-lista_active')) {
        botaoMenu.style.backgroundImage = imgMenuFechar;
        menuMobile.style.backgroundColor = '#343A40';
        menuNav.classList.toggle("cabecalho__menu-nav_active");
    } else {
        botaoMenu.style.backgroundImage = imgMenuHamburguer;
        menuMobile.style.backgroundColor = 'transparent';
        menuNav.classList.toggle("cabecalho__menu-nav_active");
    }
    
});

home.addEventListener("click", function() {
    location.reload();
  });