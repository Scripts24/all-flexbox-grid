
//* Menú
const menu = document.getElementById('menu')
const menuBar = document.getElementById('menu-bar')

menuBar.addEventListener('click', function(){
    menu.classList.toggle('show-menu')
})


//* Initialized AOS 
AOS.init();


