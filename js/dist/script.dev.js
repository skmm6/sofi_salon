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

navall.addEventListener('click', toggleMenuall); // tabs

var tabNavs = document.querySelectorAll('.tabs .tabs-nav .tabs-nav__item');
var tabContents = document.querySelectorAll('.tabs .tabs-content .tabs-content__item');
var tabblock = document.querySelector('.tabs');
tabNavs.forEach(function (nav, i) {
  nav.onclick = function (event) {
    event.preventDefault();

    if (!this.classList.contains('active')) {
      document.querySelector('.tabs .tabs-nav .tabs-nav__item.active').classList.remove('active');
      this.classList.add('active');
      document.querySelector('.tabs .tabs-content .tabs-content__item.active').classList.remove('active');
      tabContents[i].classList.add('active');
    }
  };
}); // tabs
// acordion

var accHeaders = document.querySelectorAll('.accordion .accordion-item .accordion-item__header');
var accContent = document.querySelectorAll('.accordion .accordion-item .accordion-item__content');
var accrodblock = document.querySelector('.accordion'); // let acordionOn = function() {

var datasaveH = function datasaveH() {
  accContent.forEach(function (contents, index) {
    contents.setAttribute('data-height', contents.clientHeight);
    contents.style.height = 0;
  });
};

datasaveH();

var acrodadaptiv = function acrodadaptiv() {
  if (document.documentElement.clientWidth > 800) {
    accrodblock.style.display = "none";
  } else if (document.documentElement.clientWidth < 800) {
    accrodblock.style.display = "block";
  }

  if (document.documentElement.clientWidth < 800) {
    tabblock.style.display = "none";
  } else if (document.documentElement.clientWidth > 800) {
    tabblock.style.display = "flex";
  }
};

acrodadaptiv();

window.onresize = function () {
  acrodadaptiv();
  datasaveH();
}; // setTimeout(acrodadaptiv, 1000);
// if(document.documentElement.clientWidth > 710) {
//     accContent.forEach((content, index) => {
//         content.setAttribute('data-height', content.clientHeight)
//         console.log( content.clientHeight);
//     })
// }
//     window.onresize = function() {
// if(document.documentElement.clientWidth  710) {
//     accContent.forEach((content, index) => {
//         console.log(content.clientHeight    );
//         content.setAttribute('data-height', content.clientHeight)
//         content.style.height = 0
//     })
// }
// }


var acrodheight = function acrodheight() {
  accHeaders.forEach(function (header, index) {
    header.onclick = function (event) {
      event.preventDefault();
      var headerOpen = document.querySelector('.accordion .accordion-item .accordion-item__header.open');
      var currentOpen = document.querySelector('.accordion .accordion-item.open');

      if (currentOpen && currentOpen != this.parentNode) {
        currentOpen.classList.remove('open');
        headerOpen.classList.remove('open');
        currentOpen.querySelector('.accordion-item__content').style.height = 0;
      }

      this.classList.toggle('open');
      this.parentNode.classList.toggle('open');

      if (this.parentNode.classList.contains('open')) {
        accContent[index].style.height = accContent[index].getAttribute('data-height') * 1.1 + 'px';
      } else {
        accContent[index].style.height = 0;
      } // if(headerOpen && headerOpen != this) {
      //     header.classList.remove('open')
      // }

    };
  });
};

acrodheight();

window.onresize = function () {
  acrodadaptiv();
};

var bgsize = function bgsize() {}; // }
// acordionOn() 
// acordion