const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
  menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

//Скрипт для раскрытия блока portfolio
const portfolioBtn = document.querySelector(".portfolio__btn");
const portfolioList = document.querySelector(".portfolio__list");

function togglePortfolioVisibility() {
  portfolioList.classList.toggle("hide");
}

portfolioBtn.addEventListener("click", togglePortfolioVisibility);
