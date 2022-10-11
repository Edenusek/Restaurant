const mobilNav = document.querySelector(".bars");
const menu = document.querySelector(".menu");
const bars = document.querySelectorAll(".bars");
const menuClick = document.querySelectorAll(".menu__item");
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

const inputOrder = document.getElementById("orders-menu");
const ordersError = document.querySelector(".orders-selects-error");
const endPrice = document.querySelector(".end-price");

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

const order = () => {
	ordersAddBtn.style.backgroundColor = "black";
	ordersAddBtn.style.color = "white";
};

const confirmOrders = () => {
	orderBtnConfirm.style.backgroundColor = "black";
	orderBtnConfirm.style.color = "white";
};

const footerDate = () => {
	const footerYear = document.querySelector(".year");
	const date = new Date();
	footerYear.textContent = date.getFullYear();
};

const checkOrdersError = () => {
	if (inputOrder.selectedIndex === 0) {
		ordersError.textContent = "Musisz wybrać zamówenie";
	}
};

const addToBasked = () => {
	const ordersName = document.querySelector(".orders-name");
	const ordersPrice = document.querySelector(".orders-price");
	const basket = document.querySelector(".basket");
	const newOrder = document.createElement("div");
	newOrder.setAttribute("id", ID);
const number = parseFloat(inputOrder.value)
	console.log(number);

	checkOrdersError();

	newOrder.innerHTML = `
	<div class="order">
                    <div class="dish">
                        <span>${inputOrder.value}</span>
                    </div>

                    <div class="price">
                        <span>${parseFloat(inputOrder.value)}</span>
                    </div>

                    <div class="delete-btn-box">
                        <button class="delete-btn" onclick="deleteDish(${ID})"><i class="fa-solid fa-x"></i></button>
                    </div>
                </div>
	`;

	basket.appendChild(newOrder);
	moneyArr.push(parseFloat(inputOrder.value));
	count(moneyArr);

	ID++;
};

const count = money => {
	const newMoney = money.reduce((a, b) => a + b);
	endPrice.textContent = `${newMoney} zł`;
};

const deleteDish = () => {};

mobilNav.addEventListener("click", showMobileMenu);
btnRight.addEventListener("click", handleRightArrow);
btnLeft.addEventListener("click", handleLeftArrow);
reservationBtn.addEventListener("click", reservation);
ordersAddBtn.addEventListener("click", addToBasked);
orderBtnConfirm.addEventListener("click", confirmOrders);

hideMobileMenu();
disabledPastDate();
footerDate();
