document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// 2. MENÚ HAMBURGUESA RESPONSIVO
const mainNav = document.querySelector("nav");
const hamburgerButton = document.querySelector("#menu");

// Inicializar el símbolo de la hamburguesa
if (hamburgerButton) {
    hamburgerButton.textContent = "☰";

    // Evento de clic para abrir/cerrar el menú
    hamburgerButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        hamburgerButton.classList.toggle("open");

        // Cambiar el icono entre '☰' y '❌'
        if (hamburgerButton.classList.contains("open")) {
            hamburgerButton.textContent = "❌";
        } else {
            hamburgerButton.textContent = "☰";
        }
    });
}