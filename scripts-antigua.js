// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Navegación
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add('visible');
    } else if (currentScroll < lastScroll) {
        nav.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botón de scroll
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('#mesopotamia').scrollIntoView({
        behavior: 'smooth'
    });
});

// secion de las sivilizaciones

// Funcionalidad interactiva para los puntos en el mapa
document.querySelectorAll('.map-point').forEach(point => {
point.addEventListener('mouseover', function() {
    alert(`Ciudad: ${this.dataset.city}`);
});
});

// Función para mostrar la línea de tiempo
function showTimelineItems() {
const items = document.querySelectorAll('.period-item');
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        item.classList.add('visible');
    }
});
}

window.addEventListener('scroll', showTimelineItems);