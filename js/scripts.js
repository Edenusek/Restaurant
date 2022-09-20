const mobilNav = document.querySelector(".mobil-nav");
const menu = document.querySelector(".menu");

const showMobileMenu = () => {
	menu.classList.toggle("hide");
	mobilNav.classList.toggle(".mobil-nav-active");
};
mobilNav.addEventListener("click", showMobileMenu);
