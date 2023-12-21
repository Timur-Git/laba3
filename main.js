const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
  menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

//Скрипт для раскрытия блока portfolio
const portfolioBtn = document.getElementById("portfolio__btn__id")
const portfolioList = document.getElementById("portfolio__list__id");

function togglePortfolioVisibility() {
  portfolioList.classList.toggle("hide");
}

portfolioBtn.addEventListener("click", togglePortfolioVisibility);
