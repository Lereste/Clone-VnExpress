const navOpen = document.querySelector('.nav__open');
const menuCategory = document.querySelector('.menu__category');

navOpen.addEventListener('click', (event) => {
  event.preventDefault();

  menuCategory.classList.toggle('open');
});

const btnClose = document.querySelector('.btn__close-menu');

btnClose.addEventListener('click', () => {
  menuCategory.classList.remove('open');
});