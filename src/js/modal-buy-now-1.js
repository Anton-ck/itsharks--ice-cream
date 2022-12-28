(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-buy-now-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-buy-now-1]'),
    modal: document.querySelector('[data-modal-buy-now-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
            document.body.classList.toggle("mobile-open");

    refs.modal.classList.toggle('hidden');
  }
})();
