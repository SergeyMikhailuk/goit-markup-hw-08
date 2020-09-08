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

//Phone open/close munu
(() => {
  const menuBtn = document
    .querySelector('[data-menu-button]')
    .addEventListener('click', () => {
      menuBtn.classList.toggle('is-open');
    });
})();

//
