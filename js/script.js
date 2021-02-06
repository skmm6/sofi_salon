const burger = document.getElementById('burger-menu')
const menu = document.getElementById('main-menu')
const toggleMenu = () => {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
}
burger.addEventListener('click', toggleMenu)


const navall = document.getElementById('nav-all__burger')
const almenu = document.getElementById('all-menu')
const toggleMenuall = () => {
    navall.classList.toggle('open')
    almenu.classList.toggle('open')
}
navall.addEventListener('click', toggleMenuall)
