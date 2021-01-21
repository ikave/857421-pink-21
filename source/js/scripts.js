"use strict";

(() => {
  const nav = document.querySelector('.nav');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.nav__toggle');
  const toggleWrapper = document.querySelector('.nav__toggle-wrapper');

  const toggleMenu = () => {
    menu.classList.toggle('menu--closed');
    toggle.classList.toggle('nav__toggle--opened');
    toggleWrapper.classList.toggle('nav__toggle-wrapper--opened');
    nav.classList.toggle('nav--opened');
  }

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault;
    toggleMenu();
  });
})();