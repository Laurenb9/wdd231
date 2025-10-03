// index.js

// --- Menú hamburguesa ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// --- Fecha en el footer ---
const footer = document.querySelector("footer");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML += `<p>&copy; ${year} Box Like a Woman</p>`;
}

// --- Extra opcional: animación suave al hover de tarjetas ---
const cards = document.querySelectorAll(".card, .community-preview article");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    card.style.transform = "translateY(-6px)";
    card.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  });
});
