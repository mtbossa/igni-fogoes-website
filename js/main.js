window.onload = () => {
  const $navbarList = document.querySelector(".navbar__list");
  const $buttonOpenMenu = document.querySelector(".navbar__button-open");
  const $buttonCloseMenu = document.querySelector(".navbar__button-close");
  const $menuLinks = document.querySelectorAll(".navbar__link");

  $buttonOpenMenu.addEventListener("click", () => {
    $navbarList.classList.add("navbar__list--visible");
    $buttonCloseMenu.classList.add("navbar__button-close--visible");
  });

  $buttonCloseMenu.addEventListener("click", () => {
    $navbarList.classList.remove("navbar__list--visible");
    $buttonCloseMenu.classList.remove("navbar__button-close--visible");
  });

  $menuLinks.forEach(($element) => {
    $element.addEventListener("click", () => {
      $navbarList.classList.remove("navbar__list--visible");
      $buttonCloseMenu.classList.remove("navbar__button-close--visible");
    });
  });
};
