(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-product-1]'),
    modal: document.querySelector('[data-modal-product-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
