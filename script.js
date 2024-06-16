
function mostrarTela(sectionId) {
    const sections = document.querySelectorAll('.projetoIntegra');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    }); 
    

}
