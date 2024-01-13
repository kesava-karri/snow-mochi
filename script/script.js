const hamburgerButton = document.querySelector('.menu-hamburger');
let hamburgerOpen = false;
hamburgerButton.addEventListener('click', () => {
  if (!hamburgerOpen) {
    hamburgerButton.classList.add('open');
    hamburgerOpen = true;
  } else {
    hamburgerButton.classList.remove('open');
    hamburgerOpen = false;
  }
});

const list = document.querySelector('.right-header');
hamburgerButton.addEventListener('click', () => {
  list.classList.toggle('show');
});

