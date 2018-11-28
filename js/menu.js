let menuButton = document.querySelector('.main-nav__toggle');
let menu = document.querySelector('.main-nav');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('main-nav--active')) {
    menu.classList.remove('main-nav--active');
    menuButton.setAttribute("style", 'background-image: url(img/icons/icon-close.svg);');
  } else {
    menu.classList.add('main-nav--active');
    menuButton.setAttribute("style", 'background-image: url(img/icons/icon-menu.svg);');
  }
}
