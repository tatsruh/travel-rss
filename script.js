const buttonIcon = document.querySelector(".burger-icon");
const buttonIcon2 = document.querySelector(".burger-icon-2");
const arrowLeft = document.querySelector(".arrow-left");
const arrowLeft2 = document.querySelector(".destfirst");
const arrowRight = document.querySelector(".arrow-right");
const arrowRight2 = document.querySelector(".destthird");
const arrowMiddle = document.querySelector(".destsec");
const roundButtonOne = document.querySelector(".round_button_one");
const roundButtonTwo = document.querySelector(".round_button_two");
const roundButtonThree = document.querySelector(".round_button_three");
const carousel = document.querySelector(".destination_cards");

const burgerMenu = document.querySelector(".navbar");
const closeBurgerMenu = () => {
  burgerMenu.classList.toggle("block");
};
console.log(buttonIcon);
buttonIcon.addEventListener("click", closeBurgerMenu);
buttonIcon2.addEventListener("click", closeBurgerMenu);

const animationLeft = () => {
  carousel.classList.add("transitionleft");
  setTimeout(function () {
    carousel.classList.remove("transitionleft");
  }, 3000);
  carousel.classList.remove("right");

  setTimeout(function () {
    carousel.classList.add("left");
  }, 3000);
  roundButtonOne.classList.toggle("active");
  roundButtonTwo.classList.remove("active");
  roundButtonThree.classList.remove("active");
};

const animationRight = () => {
  carousel.classList.add("transitionright");
  setTimeout(function () {
    carousel.classList.remove("transitionright");
  }, 3000);
  carousel.classList.remove("left");

  setTimeout(function () {
    carousel.classList.add("right");
  }, 3000);
  roundButtonThree.classList.toggle("active");
  roundButtonTwo.classList.remove("active");
  roundButtonOne.classList.remove("active");
};
const animationMiddle = () => {
  if (carousel.classList.contains("left")) {
    carousel.classList.add("transitionright");
    setTimeout(function () {
      carousel.classList.remove("transitionright");
    }, 3000);
    carousel.classList.remove("left");

    setTimeout(function () {
      carousel.classList.add("right");
    }, 3000);
    roundButtonThree.classList.toggle("active");
    roundButtonTwo.classList.remove("active");
    roundButtonOne.classList.remove("active");
  } else if (carousel.classList.contains("right")) {
    carousel.classList.add("transitionleft");
    setTimeout(function () {
      carousel.classList.remove("transitionleft");
    }, 3000);
    carousel.classList.remove("right");

    setTimeout(function () {
      carousel.classList.add("left");
    }, 3000);
    roundButtonOne.classList.toggle("active");
    roundButtonTwo.classList.remove("active");
    roundButtonThree.classList.remove("active");
  } else {
  }
};

arrowLeft.addEventListener("click", animationLeft);
arrowRight.addEventListener("click", animationRight);
arrowLeft2.addEventListener("click", animationLeft);
arrowRight2.addEventListener("click", animationRight);
arrowMiddle.addEventListener("click", animationMiddle);
