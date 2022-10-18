const mobilNav = document.querySelector(".bars");
const menu = document.querySelector(".nav-menu");
const bars = document.querySelectorAll(".bars");
const menuClick = document.querySelectorAll(".nav-menu__item");
const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const btnMenu = document.querySelector(".btn-menu");
const menuCart = document.querySelectorAll(".cart");

const reservationBtn = document.querySelector(".reservation-btn");

const ordersAddBtn = document.querySelector(".orders-add-btn");
const orderBtnConfirm = document.querySelector(".order-btn-confirm");
const ordersPrice = document.querySelector(".orders-price");
const ordersConfirmInfo = document.querySelector(".orders-confirm");

const inputOrder = document.getElementById("orders-menu");
const basket = document.querySelector(".basket");
const ordersError = document.querySelector(".orders-selects-error");
const endPrice = document.querySelector(".end-price");
const btnDeleteAll = document.querySelector(".delete-all");

endPrice.textContent = "0 zł";

let ID = 0;

let moneyArr = [0];

const showMobileMenu = () => {
	menu.classList.toggle("hide");
	mobilNav.classList.toggle("mobil-nav-active");
	bars.classList.toggle("mobil-nav-active");
};

function hideMobileMenu() {
	for (let i = 0; i < menuClick.length; i++) {
		menuClick[i].addEventListener("click", function () {
			menu.classList.toggle("hide");
			mobilNav.classList.toggle("mobil-nav-active");
			bars.classList.toggle("mobil-nav-active");
		});
	}
}

const handleRightArrow = () => {
	if (menuCart[0].classList.contains("active")) {
		menuCart[0].classList.remove("active");
		menuCart[1].classList.add("active");
	} else if (menuCart[1].classList.contains("active")) {
		menuCart[1].classList.remove("active");
		menuCart[2].classList.add("active");
	} else {
		menuCart[2].classList.contains("active");
		menuCart[2].classList.remove("active");
		menuCart[0].classList.add("active");
	}

	rightArrow.style.color = "royalblue";
	leftArrow.style.color = "#ffffff";
};

const handleLeftArrow = () => {
	if (menuCart[2].classList.contains("active")) {
		menuCart[2].classList.remove("active");
		menuCart[1].classList.add("active");
	} else if (menuCart[1].classList.contains("active")) {
		menuCart[1].classList.remove("active");
		menuCart[0].classList.add("active");
	} else {
		menuCart[0].classList.remove("active");
		menuCart[2].classList.add("active");
	}
	leftArrow.style.color = "royalblue";
	rightArrow.style.color = "#ffffff";
};

const reservation = () => {
	const dateInput = document.getElementById("date");
	const timeInpute = document.getElementById("time");
	const personsSelected = document.getElementById("persons");
	const reservationDate = document.querySelector(".reserv-info-date");
	const reservationTime = document.querySelector(".reserv-info-time");
	const reservationError = document.querySelector(".reservation-error");

	if (
		dateInput.value == "" ||
		timeInpute.value == "" ||
		personsSelected.value == "" ||
		personsSelected.selectedIndex == 0
	) {
		reservationError.textContent = "Musisz wypełnić wszystkie pola";
	} else {
		reservationDate.textContent = `Zarezerwowałeś stolik dla ${personsSelected.value} osób,dnia ${dateInput.value}`;
		reservationTime.textContent = `Na godzinę ${timeInpute.value}`;
		reservationError.textContent = "";
	}
};

const disabledPastDate = () => {
	const today = new Date().toISOString().split("T")[0];
	const dateToDisabled = document.getElementsByName("date")[0];
	dateToDisabled.setAttribute("min", today);
};

// ustawienia zegrarka z możliwością wyboru godziny tylko 2 h do przodu//

const reservationTime = () => {
	const timeBlock = document.getElementsByName("time")[0];
	timeBlock.setAttribute("min"(actualTime + 2));
	const actualTime = new Date().toISOString().getHours();
	console.log(actualTime);
};

const footerDate = () => {
	const footerYear = document.querySelector(".year");
	const date = new Date();
	footerYear.textContent = date.getFullYear();
};

const addToBasked = () => {
	const newOrder = document.createElement("div");
	newOrder.setAttribute("id", ID);

	const text = inputOrder.options[inputOrder.selectedIndex].text;
	const textArr = text.split(" ");
	const dishPrice = parseFloat(textArr.slice(-2));

	if (inputOrder.selectedIndex != 0) {
		newOrder.innerHTML = `
		<div class="order">
						<div class="dish">
							<span>${inputOrder.value}</span>
						</div>
	
						<div class="price">
							<span>${dishPrice} zł</span>
						</div>
	
						<div class="delete-btn-box">
							<button class="delete-btn" onclick="deleteDish(${ID})"><i class="fa-solid fa-x"></i></button>
						</div>
					</div>
		`;
		ordersError.textContent = "";
	} else {
		ordersError.textContent = "Musisz wybrać zamówenie";
		return;
	}

	basket.appendChild(newOrder);
	moneyArr.push(parseFloat(dishPrice));
	count(moneyArr);

	ID++;
};

const count = money => {
	const newMoney = money.reduce((a, b) => a + b);
	endPrice.textContent = `${parseFloat(newMoney)} zł`;
};

const deleteDish = id => {
	const deleteOrder = document.getElementById(id);
	const ordersAmount = parseFloat(deleteOrder.childNodes[3]);

	const indexOfOrder = moneyArr.indexOf(ordersAmount);
	console.log(deleteOrder);
	moneyArr.splice(indexOfOrder, 1);
	basket.removeChild(deleteOrder);

	count(moneyArr);
};

const confirmOrder = () => {
	

	if (basket.innerHTML != "" && inputOrder.selectedIndex != 0) {
		ordersConfirmInfo.textContent =
			"Zrealizujemy twoje zamówienie w ciągu 60 minut";
		endPrice.textContent = "0 zł";
		inputOrder.selectedIndex = 0;
		basket.innerHTML = "";
	} else {
		ordersError.textContent = "Musisz wybrać zamówenie";
		ordersConfirmInfo.textContent = "";
	}
};

const deleteAllOdrers = () => {
	endPrice.textContent = "0 zł";
	inputOrder.selectedIndex = 0;
	basket.innerHTML = "";
	ordersConfirmInfo.textContent = "";
	ordersError.textContent = "";
};

mobilNav.addEventListener("click", showMobileMenu);
btnRight.addEventListener("click", handleRightArrow);
btnLeft.addEventListener("click", handleLeftArrow);
reservationBtn.addEventListener("click", reservation);
ordersAddBtn.addEventListener("click", addToBasked);
orderBtnConfirm.addEventListener("click", confirmOrder);
btnDeleteAll.addEventListener("click", deleteAllOdrers);

hideMobileMenu();
disabledPastDate();
footerDate();
