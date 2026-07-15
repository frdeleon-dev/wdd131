document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;


const mainNav = document.querySelector("nav");
const hamburgerButton = document.querySelector("#menu");


if (hamburgerButton) {
    hamburgerButton.textContent = "☰";


    hamburgerButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        hamburgerButton.classList.toggle("open");


        if (hamburgerButton.classList.contains("open")) {
            hamburgerButton.textContent = "❌";
        } else {
            hamburgerButton.textContent = "☰";
        }
    });
}