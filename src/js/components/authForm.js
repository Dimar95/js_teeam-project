(() => {
    const refs = {
      openModalBtn: document.querySelector(".theme-icon-dark"),
      closeModalBtn: document.querySelector("[data-modal-close-auth]"),
      modal: document.querySelector("[data-modal-auth]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();