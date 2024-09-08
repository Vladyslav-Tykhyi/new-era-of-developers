
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-open-menu]'),
    closeMenuBtn: document.querySelector('[data-close-menu]'),
    menu: document.querySelector('[data-menu]'),
    navigationLinks: document.querySelectorAll('.navigation-menu__link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.navigationLinks.forEach(link =>
    link.addEventListener('click', closeMenuOnLinkClick)
  );

  document.addEventListener('click', closeMenuOnClickOutside);

  function toggleMenu() {
    refs.menu.classList.toggle('is-visible');
    document.body.classList.toggle('no-scroll');

  
    if (refs.menu.classList.contains('is-visible')) {
      refs.openMenuBtn.style.display = 'none';
    } else {
      refs.openMenuBtn.style.display = '';
    }
  }

  function closeMenuOnLinkClick() {
    refs.menu.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
    refs.openMenuBtn.style.display = '';
  }

  function closeMenuOnClickOutside(e) {
    if (!refs.menu.contains(e.target) && !refs.openMenuBtn.contains(e.target)) {
      refs.menu.classList.remove('is-visible');
      document.body.classList.remove('no-scroll');
      refs.openMenuBtn.style.display = '';
    }
  }
})();
