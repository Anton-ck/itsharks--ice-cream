(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-location]'),
    closeModalBtn: document.querySelector('[data-modal-close-location]'),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
                document.body.classList.toggle("mobile-open");

    refs.modal.classList.toggle('hidden');
  }
})();
