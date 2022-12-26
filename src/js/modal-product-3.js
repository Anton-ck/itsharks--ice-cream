(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product-3]'),
    closeModalBtn: document.querySelector('[data-modal-close-product-3]'),
    modal: document.querySelector('[data-modal-product-3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
