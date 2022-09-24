const mobilNav = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const menuClick = document.querySelectorAll(".menu__item");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const btnMenu = document.querySelector(".btn-menu");
const menuCart = document.querySelectorAll(".cart");

const showMobileMenu = () => {
	menu.classList.toggle("hide");
	mobilNav.classList.toggle(".mobil-nav-active");
};

function hideMenu() {
	for (let i = 0; i < menuClick.length; i++) {
		menuClick[i].addEventListener("click", function () {
			menu.classList.add("hide");
		});
	}
}

function changeCard  ()  {
	for (let i = 0; i < menuCart.length ; i++) {
		menuCart[i].classList.toggle("displayNone");
	}
	// if(menuCart[1].classList.contains("displayNone") && menuCart[2].classList.contains("displayNone" )){
	// 	menuCart[0].classList.add ("displayNone")
	// 	menuCart[1].classList.remove("displayNone")
	// 	menuCart[2].classList == "displayNone"

	// }
};

const handleRightArrow = () => {
	rightArrow.style.color = "royalblue";
	leftArrow.style.color = "#ffffff";

	changeCard();
};

const handleLeftArrow = () => {
	leftArrow.style.color = "royalblue";
	rightArrow.style.color = "#ffffff";

	changeCard();
};

const resetScale = () => {
	btnMenu.style.transform = "scale(1)";
};

mobilNav.addEventListener("click", showMobileMenu);
btnRight.addEventListener("click", handleRightArrow);
btnLeft.addEventListener("click", handleLeftArrow);

hideMenu();
