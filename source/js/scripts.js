'use strict';

const navButton = document.querySelector('.main-nav__nav-button'),
      navMain = document.querySelector('.main-nav');

navButton.onclick = function() {
  navMain.classList.toggle('main-nav--open');
}


