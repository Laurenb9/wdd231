document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("business-cards");

  // Ruta correcta al JSON
  const jsonUrl = "data/members.json";

  fetch(jsonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al cargar el JSON");
      }
      return response.json();
    })
    .then(data => {
      data.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("business-card");

        card.innerHTML = `
          <h3>${member.name}</h3>
          <h4 class="tagline">${member.address}</h4>
          <div class="business-content">
            <img src="images/${member.image}" alt="${member.name} logo" />
            <div class="business-info">
              <p><strong>Phone:</strong> ${member.phone}</p>
              <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Hubo un problema cargando los miembros:", error);
      container.innerHTML = `<p>Error al cargar la información de negocios.</p>`;
    });
});

