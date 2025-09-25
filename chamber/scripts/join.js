// join.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");
  const timestampInput = document.getElementById("timestamp");

  if (form) {
    // Autocompletar timestamp al cargar
    if (timestampInput) {
      timestampInput.value = new Date().toISOString();
    }

    form.addEventListener("submit", () => {
      // Capturar los datos del form
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Guardar en localStorage
      localStorage.setItem("formData", JSON.stringify(data));
      // ⚡ No usamos preventDefault → deja redirigir al thankyou.html
    });
  }
});
