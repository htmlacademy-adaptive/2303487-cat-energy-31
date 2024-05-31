const navMain = document.querySelector('.main-header__wrapper');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__wrapper--nojs');

navToggle.onclick = function () {
  navMain.classList.toggle('main-header__wrapper--opened');
};
