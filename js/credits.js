const btnCreditos = document.getElementById("btn-creditos");
const modal = document.getElementById("modal-creditos");
const btnCerrar = document.getElementById("cerrar-modal");

btnCreditos.addEventListener("click", () => {
  modal.style.display = "block";
});

btnCerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
