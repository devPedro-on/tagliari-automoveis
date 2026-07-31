(function () {
  'use strict';

  // Ano no rodapé
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header com sombra ao rolar
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (header) header.style.boxShadow = window.scrollY > 10 ? '0 8px 24px -12px rgba(0,0,0,.5)' : 'none';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // Carrossel de imagens dos carros
  var carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(function (carousel) {
    var track = carousel.querySelector('.car-carousel__track');
    var images = Array.prototype.slice.call(track.querySelectorAll('img'));
    var dotsWrap = carousel.querySelector('.car-carousel__dots');
    var prevBtn = carousel.querySelector('.car-carousel__arrow--prev');
    var nextBtn = carousel.querySelector('.car-carousel__arrow--next');
    var index = 0;
    var timer = null;

    if (images.length === 0) return;

    var dots = images.map(function (_, i) {
      var dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Foto ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
      return dot;
    });

    function render() {
      images.forEach(function (img, i) { img.classList.toggle('is-active', i === index); });
      dots.forEach(function (dot, i) { dot.classList.toggle('active', i === index); });
    }

    function goTo(i) {
      index = (i + images.length) % images.length;
      render();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function restart() {
      if (timer) clearInterval(timer);
      if (images.length > 1) timer = setInterval(next, 4200);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });

    if (images.length < 2) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      if (dotsWrap) dotsWrap.style.display = 'none';
    }

    carousel.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    carousel.addEventListener('mouseleave', restart);

    render();
    restart();
  });
})();
