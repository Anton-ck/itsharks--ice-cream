(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-product-2]'),
    modal: document.querySelector('[data-modal-product-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('hidden');
  }
})();
