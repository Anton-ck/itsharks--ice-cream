(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now-2]'),
    modal: document.querySelector('[data-modal-buy-now-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
