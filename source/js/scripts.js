"use strict";

(() => {
  const noJs = document.querySelector('.no-js');
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.nav__toggle');
  const toggleWrapper = document.querySelector('.nav__toggle-wrapper');

  const supportJs = () => {
    noJs.classList.remove('no-js');
  };

  supportJs();

  const toggleMenu = () => {
    menu.classList.toggle('menu--closed');

    if (toggle.classList.contains('nav__toggle--opened')) {
      toggle.classList.remove('nav__toggle--opened');
      toggle.classList.add('nav__toggle--closed');
    } else if (toggle.classList.contains('nav__toggle--closed')) {
      toggle.classList.remove('nav__toggle--closed');
      toggle.classList.add('nav__toggle--opened');
    }

    toggleWrapper.classList.toggle('nav__toggle-wrapper--opened');
    nav.classList.toggle('nav--opened');
  }

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault;
    toggleMenu();
  });
})();
