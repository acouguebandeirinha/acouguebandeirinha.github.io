// script.js — ativar menu e dropdown (acessível)
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = mainMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  // Dropdowns (toggle por clique — funciona no mobile)
  document.querySelectorAll('.dropdown').forEach(function (dd) {
    const btn = dd.querySelector('.dropdown-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (ev) {
      ev.stopPropagation();
      const isOpen = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  // fechar menus ao clicar fora
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown.open').forEach(function (dd) {
      dd.classList.remove('open');
      const btn = dd.querySelector('.dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', false);
    });
    if (mainMenu && mainMenu.classList.contains('open')) {
      mainMenu.classList.remove('open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', false);
    }
  });
});

document.querySelectorAll('.dropdown > a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // previne pular para topo
    e.stopPropagation();
    const dropdown = link.parentElement;
    const isOpen = dropdown.classList.toggle('open');
  });
});

