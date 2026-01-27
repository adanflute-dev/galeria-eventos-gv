fetch('eventos.json')
  .then(r => r.json())
  .then(eventos => {
    const galeria = document.getElementById('galeria');

    eventos.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${ev.imagem}" alt="${ev.titulo}">
        <h3>${ev.titulo}</h3>
        <span class="tag">${ev.categoria}</span>
        <p>📍 ${ev.local}</p>
        <p>📅 ${ev.data} — ${ev.hora}</p>
      `;

      galeria.appendChild(card);
    });
  });
