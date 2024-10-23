// Función para el scroll suave
function scrollToContent() {
    document.querySelector('#introduccion').scrollIntoView({
        behavior: 'smooth'
    });
}

// Función para mostrar la información detallada según el período seleccionado
function showPeriod(period) {
    const content = document.getElementById('period-content');
    let periodContent = '';

    // Información detallada para cada período
    if (period === 'paleolitico') {
        periodContent = `
    <h3>Paleolítico</h3>
    <p>El Paleolítico es la primera etapa de la Prehistoria, caracterizada por el uso de herramientas de piedra tallada.</p>
    <h4>Detalles:</h4>
    <ul>
        <li><strong>Duración:</strong> Aproximadamente 2.5 millones de años a.C. hasta el 10,000 a.C.</li>
        <li><strong>Forma de vida:</strong> Nómada, cazadores y recolectores.</li>
        <li><strong>Herramientas:</strong> Hachas de mano, cuchillos, y puntas de lanza de piedra.</li>
    </ul>
    <p>Durante este período, los humanos vivían en pequeños grupos familiares, buscando alimento y refugio en cuevas y abrigos naturales.</p>
`;
    } else if (period === 'mesolitico') {
        periodContent = `
    <h3>Mesolítico</h3>
    <p>El Mesolítico es una etapa de transición entre el Paleolítico y el Neolítico.</p>
    <h4>Detalles:</h4>
    <ul>
        <li><strong>Duración:</strong> Entre el 10,000 a.C. y el 5,000 a.C.</li>
        <li><strong>Forma de vida:</strong> Semisedentaria, desarrollo de la pesca y la domesticación de animales.</li>
        <li><strong>Herramientas:</strong> Microlitos, pequeños fragmentos de piedra afilada.</li>
    </ul>
    <p>El cambio climático al final del último periodo glacial llevó a la evolución de nuevas técnicas de supervivencia.</p>
`;
    } else if (period === 'neolitico') {
        periodContent = `
    <h3>Neolítico</h3>
    <p>El Neolítico es la última etapa de la Prehistoria, marcada por el inicio de la agricultura y la domesticación de animales.</p>
    <h4>Detalles:</h4>
    <ul>
        <li><strong>Duración:</strong> Aproximadamente 5,000 a.C. hasta el 3,000 a.C.</li>
        <li><strong>Forma de vida:</strong> Sedentaria, formación de aldeas y sociedades organizadas.</li>
        <li><strong>Herramientas:</strong> Hoces, molinos de mano y herramientas de piedra pulida.</li>
    </ul>
    <p>Con el desarrollo de la agricultura, los humanos comenzaron a vivir en asentamientos más grandes y permanentes, lo que permitió el crecimiento de las primeras civilizaciones.</p>
`;
    }

    // Actualizar el contenido del div con la nueva información
    content.innerHTML = periodContent;
}