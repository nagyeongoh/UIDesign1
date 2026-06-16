const pinkButtons = document.querySelectorAll('.opt');

pinkButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});