"use strict";
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-morph');
  const nav = document.querySelector('.nav-morph');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  const menuLinks = document.querySelectorAll('.nav-morph__link');
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.querySelector('.nav-morph__text').style.transform = 'translateY(-100%)';
      link.querySelector('.nav-morph__hover').style.transform = 'translateY(-100%)';
    });

    link.addEventListener('mouseleave', () => {
      link.querySelector('.nav-morph__text').style.transform = 'translateY(0)';
      link.querySelector('.nav-morph__hover').style.transform = 'translateY(0)';
    });
  });
});

$(function () {
  const toTopButton = $(".top-button-again");
  const scrollHeight = 100;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollHeight) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });
  
  toTopButton.click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});