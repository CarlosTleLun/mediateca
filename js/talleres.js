document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".mostrar-mas");
  const grupos = document.querySelectorAll(".info-talleres-grupo");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idioma = btn.getAttribute("data-idioma");
      const grupo = document.getElementById("info-" + idioma);
      const grupoVisible = !grupo.classList.contains("oculto");

      // Oculta todos los grupos y restablece los botones
      grupos.forEach((g) => g.classList.add("oculto"));
      botones.forEach((b) => (b.textContent = "Mostrar más"));

      if (!grupoVisible) {
        grupo.classList.remove("oculto");
        btn.textContent = "Ocultar";

        // Centrar a mitad de la pantalla
        grupo.scrollIntoView({ behavior: "smooth", block: "center" });

        // Si no se centra bien, puedes ajustar con un pequeño scroll adicional:
        setTimeout(() => {
          window.scrollBy(0, -50); // Ajusta el valor si es necesario
        }, 500);
      }
    });
  });
});
