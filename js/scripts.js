const mobilNav = document.querySelector(".mobil-nav")
const menu = document.querySelector(".menu")


const showMobileMenu = () => {
    menu.classList.toggle("menu-active")
    mobilNav.classList.toggle(".mobil-nav-active")
}
mobilNav.addEventListener("click", showMobileMenu)