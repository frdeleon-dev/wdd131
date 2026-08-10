// Prevent default submit action for the email button

document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault(); 
});