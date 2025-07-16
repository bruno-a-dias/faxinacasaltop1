// Exemplo didático para exibir imagens dummy. Utilize API ou plugins de terceiros conforme necessidade real.
document.addEventListener('DOMContentLoaded', function () {
    const feed = document.getElementById('instagram-feed');
    const imagens = [
      'assets/img/instagram/foto1.jpg',
      'assets/img/instagram/foto2.jpg',
      'assets/img/instagram/foto3.jpg'
    ];
    imagens.forEach(src => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 text-center';
      col.innerHTML = `<img src="${src}" alt="Faxina em andamento" style="width:100%;border-radius:18px;box-shadow:0 2px 12px #e0ebf2">`;
      feed.appendChild(col);
    });
  });
  