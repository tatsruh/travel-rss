const buttonIcon = document.querySelector(".burger-icon");
const buttonIcon2 = document.querySelector(".burger-icon-2");

const burgerMenu = document.querySelector(".navbar");
const closeBurgerMenu = () => {
  burgerMenu.classList.toggle("block");
};
console.log(buttonIcon);
buttonIcon.addEventListener("click", closeBurgerMenu);
buttonIcon2.addEventListener("click", closeBurgerMenu);
