(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-product-2]'),
    closeModalBtn: document.querySelector('[data-modal-close-product-2]'),
    modal: document.querySelector('[data-modal-product-2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
                document.body.classList.toggle("mobile-open");

    refs.modal.classList.toggle('hidden');
  }
})();
