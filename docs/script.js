fetch('./eventos.json')
  .then(res => res.json())
  .then(eventos => {

    const galeria = document.getElementById('galeria');
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalData = document.getElementById('modal-data');
    const modalGaleria = document.getElementById('modal-galeria');
    const close = document.querySelector('.close');

    eventos.forEach(ev => {

      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');

      // 🔥 CAMINHO CORRETO PARA GITHUB PAGES
      if (ev.imagem && ev.imagem.trim() !== '') {
        img.src = './' + ev.imagem;
      } else {
        img.src = './images/placeholder.jpg';
      }

      img.onerror = () => {
        img.src = './images/placeholder.jpg';
      };

      const content = document.createElement('div');
      content.className = 'content';

      content.innerHTML = `
        <h3>${ev.titulo}</h3>
        <p>${ev.data_inicio}</p>
      `;

      card.appendChild(img);
      card.appendChild(content);
      galeria.appendChild(card);

      // MODAL
      card.addEventListener('click', () => {
        modalTitulo.textContent = ev.titulo;
        modalData.textContent = `${ev.data_inicio} até ${ev.data_fim}`;
        modalGaleria.innerHTML = '';

        if (ev.galeria && ev.galeria.length > 0) {
          ev.galeria.forEach(foto => {
            const i = document.createElement('img');
            i.src = './' + foto;
            i.onerror = () => i.src = './images/placeholder.jpg';
            modalGaleria.appendChild(i);
          });
        } else {
          const i = document.createElement('img');
          i.src = './images/placeholder.jpg';
          modalGaleria.appendChild(i);
        }

        modal.style.display = 'block';
      });
    });

    close.onclick = () => modal.style.display = 'none';
    window.onclick = e => {
      if (e.target === modal) modal.style.display = 'none';
    };

  })
  .catch(err => {
    console.error('Erro ao carregar eventos.json', err);
  });
