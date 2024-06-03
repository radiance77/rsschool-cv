const headerNav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-link');

function navToggle() {
  if (!headerNav.classList.contains('header__nav_active')) {
    headerNav.classList.add('header__nav_active');
    burger.classList.add('burger_active');
    burger.style.position = 'fixed';
  } else if (headerNav.classList.contains('header__nav_active')) {
    headerNav.classList.remove('header__nav_active');
    burger.classList.remove('burger_active');
    burger.style.position = 'absolute';
  }
}

burger.addEventListener('click', navToggle);

navLinks.forEach((link) => {
  link.addEventListener('click', navToggle);
});
