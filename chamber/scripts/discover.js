// Cargar JSON y generar cards dinámicamente
async function loadItems() {
  try {
    const response = await fetch("data/items.json");
    const data = await response.json();
    const container = document.getElementById("cards-container");

    data.items.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more">Learn More</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading items.json:", error);
  }
}

// Mensaje de última visita con localStorage
function handleLastVisit() {
  const message = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
      message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      message.textContent = "You last visited 1 day ago.";
    } else {
      message.textContent = `You last visited ${days} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  loadItems();
  handleLastVisit();
});
