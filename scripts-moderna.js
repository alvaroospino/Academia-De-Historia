document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 200
    });



    // Animación del header al hacer scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});