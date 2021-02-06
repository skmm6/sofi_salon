"use strict";

var burger = document.getElementById('burger-menu');
var menu = document.getElementById('main-menu');

var toggleMenu = function toggleMenu() {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
};

burger.addEventListener('click', toggleMenu);
var navall = document.getElementById('nav-all__burger');
var almenu = document.getElementById('all-menu');

var toggleMenuall = function toggleMenuall() {
  navall.classList.toggle('open');
  almenu.classList.toggle('open');
};

navall.addEventListener('click', toggleMenuall);