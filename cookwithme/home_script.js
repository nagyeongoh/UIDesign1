const pinkButtons = document.querySelectorAll(".pink-btn");

pinkButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
    });
});