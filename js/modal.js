// Modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//Form

(() => {
  const elements = document.querySelectorAll('.js-speaker-form');
  elements.forEach(element => {
    element.addEventListener('submit', e => {
      e.preventDefault();
      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );
    });
  });
})();

//Placeholder

document.querySelectorAll('.form-input').forEach(element => {
  element.addEventListener('focusin', e => {
    e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
  });
});
document.querySelectorAll('.form-input').forEach(element => {
  element.addEventListener('focusout', e => {
    e.currentTarget.placeholder = ' ';
  });
});

//Menu

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
