const mobilNav = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const menuClick = document.querySelectorAll(".menu__item")
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const btnMenu = document.querySelector(".btn-menu")
const menuCart = document.querySelectorAll(".cart")
console.log("🚀 ~ file: scripts.js ~ line 8 ~ menuCart", menuCart)





const showMobileMenu = () => {
	menu.classList.toggle("hide");
	mobilNav.classList.toggle(".mobil-nav-active");
};


function hideMenu () {
	for(let i = 0; i < menuClick.length; i++) {
		menuClick[i].addEventListener("click", function (){
			menu.classList.add("hide")

		})
	}
}


const menuSliderRight = () => {
	for (let i = 0; i<menuCart.length; i++){
	if(menuCart[0].style.display = "flex"){
		menuCart[1].style.display = "flex"
		menuCart[0].style.display = "none"

	}else if (menuCart[1].style.display = "flex"){
		menuCart[2].style.display = "flex"
		menuCart[2].style.display = "none"
	}else if (menuCart[2].style.display = "flex"){
		menuCart[0].style.display = "flex"
		menuCart[2].style.display = "none"
	}
}

}
mobilNav.addEventListener("click", showMobileMenu);
btnRight.addEventListener("click", menuSliderRight)

hideMenu()