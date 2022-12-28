(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product-3]'),
    closeModalBtn: document.querySelector('[data-modal-close-product-3]'),
    modal: document.querySelector('[data-modal-product-3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
                document.body.classList.toggle("mobile-open");

    refs.modal.classList.toggle('hidden');
  }
})();
