document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll('.img-instagram');
    const modal = document.getElementById('modal-img');
    const modalImg = document.getElementById('img-modal-ampliada');
    const closeBtn = document.querySelector('.close-modal');
  
    imagens.forEach(img => {
      img.style.cursor = "pointer";
      img.addEventListener('click', function () {
        modal.classList.add('open');
        modalImg.src = this.src;
        modalImg.alt = this.alt || "";
      });
    });
  
    function fecharModal() {
      modal.classList.remove('open');
      modalImg.src = "";
    }
  
    closeBtn.addEventListener('click', fecharModal);
  
    modal.addEventListener('click', function (e) {
      if (e.target === modal) fecharModal();
    });
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) fecharModal();
    });
  });
  