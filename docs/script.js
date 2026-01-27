fetch("https://seusite.com/api/eventos.php")
  .then(res => res.json())
  .then(eventos => {
    const galeria = document.getElementById("galeria")
    galeria.innerHTML = ""

    eventos.forEach(ev => {
      galeria.innerHTML += `
        <div class="card">
          <img src="${ev.image}">
          <h3>${ev.title}</h3>
          <p>${ev.location}</p>
          <small>${ev.date} ${ev.start_time} às ${ev.end_time}</small>
        </div>
      `
    })
  })
