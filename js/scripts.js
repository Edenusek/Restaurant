const mobilNav = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const menuClick = document.querySelectorAll(".menu__item");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const btnMenu = document.querySelector(".btn-menu");
const menuCart = document.querySelectorAll(".cart");
const index = -1
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

// function changeCard  ()  {
// 	for (let i = 0; i < menuCart.length ; i++) {
// 	if(menuCart[i].classList.contains("avtive")){
// 		menuCart[i].classList.add("display-flex")
// 	}else{

// 	}
// 	// 	menuCart[i].classList.add("display-flex");
// 	}

// }
const handleRightArrow = () => {
	if(menuCart[0].classList.contains("active")){
		menuCart[0].classList.remove("active")
		menuCart[1].classList.add("active")
	}else if (menuCart[1].classList.contains("active")){
		menuCart[1].classList.remove("active")
		menuCart[2].classList.add("active")
	}else{
		menuCart[2].classList.contains("active")
			menuCart[2].classList.remove("active")
			menuCart[0].classList.add("active")
		
	}

	rightArrow.style.color = "royalblue";
	leftArrow.style.color = "#ffffff";
	
};

const handleLeftArrow = () => {
	if(menuCart[2].classList.contains("active")){
		menuCart[2].classList.remove("active")
		menuCart[1].classList.add("active")
	}else if(menuCart[1].classList.contains("active")){
		menuCart[1].classList.remove("active")
		menuCart[0].classList.add("active")
	}else{
		menuCart[0].classList.remove("active")
		menuCart[2].classList.add("active")
	}
	leftArrow.style.color = "royalblue";
	rightArrow.style.color = "#ffffff";
	
};

mobilNav.addEventListener("click", showMobileMenu);
btnRight.addEventListener("click", handleRightArrow);
btnLeft.addEventListener("click", handleLeftArrow);

hideMenu()
