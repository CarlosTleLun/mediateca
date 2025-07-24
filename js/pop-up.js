document.addEventListener("DOMContentLoaded", () => {
  const popups = document.querySelectorAll(".popup-overlay");

  popups.forEach((popup, index) => {
    // Agregar bandera para saber si ya fue cerrado
    popup.dataset.closed = "false";

    // Mostrar con retraso escalonado
    const delay = 1000 + index * 4000;
    setTimeout(() => {
      if (popup.dataset.closed === "false") {
        popup.style.display = "flex";
      }
    }, delay);

    // Botón de cierre
    const closeBtn = popup.querySelector(".popup-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        popup.dataset.closed = "true"; // Marca como cerrado
      });
    }
  });
});
