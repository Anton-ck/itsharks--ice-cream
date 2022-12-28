(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-readmore]'),
    closeModalBtn: document.querySelector('[data-modal-close-readmore]'),
    modal: document.querySelector('[data-modal-readmore]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
                document.body.classList.toggle("mobile-open");

    refs.modal.classList.toggle('hidden');
  }
})();