const hamburger = document.querySelector(".js-button");
const close = document.querySelector(".js-img");
const menu = document.querySelector(".js-menu");
const wrapper = document.querySelector(".js-wrapper");
const body = document.body;

hamburger.addEventListener("click", () => {
  if (!menu.classList.contains("menu__active")) {
    menu.classList.add("menu__active");
    close.src = "images/icon-close.svg";
    body.classList.add("body--is-fixed");
    wrapper.style.position = "fixed";
  } else {
    close.src = "images/icon-hamburger.svg";
    menu.classList.remove("menu__active");
    body.classList.remove("body--is-fixed");
    wrapper.style.position = "relative";
  }
});
