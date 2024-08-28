// script.js

document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.random-photo');

    function randomPosition() {
        photos.forEach(photo => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            photo.style.transform = `translate(${x}vw, ${y}vh)`;
        });
    }

    function showRandomImages() {
        photos.forEach(photo => {
            photo.style.opacity = '0';
            setTimeout(() => {
                photo.style.opacity = '1';
            }, Math.random() * 3000); // Aparece en un intervalo aleatorio
        });
    }

    setInterval(() => {
        randomPosition();
        showRandomImages();
    }, 3000); // Cambia la posición y la visibilidad cada 3 segundos
});
