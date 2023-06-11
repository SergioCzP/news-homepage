"use strict";

const btnMenu = document.getElementsByClassName("btn-menu")[0];

btnMenu.addEventListener("click", function () {
  if (btnMenu.firstElementChild.classList.contains("btn-menu__icon-close")) {
    btnMenu.firstElementChild.src = "assets/images/icon-menu.svg";
  } else {
    btnMenu.firstElementChild.src = "assets/images/icon-menu-close.svg";
  }
  btnMenu.firstElementChild.classList.toggle("btn-menu__icon-close");
  document.querySelector("body").classList.toggle("body-shadow");
  document
    .getElementsByClassName("nav__container-wd-255")[0]
    .classList.toggle("nav__container-wd-255--active");
});
