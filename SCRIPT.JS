function initializeSlider(rowId) {
    let slider = document.getElementById(rowId);
    let row = slider.closest('.carousel-container');
    let prevButton = row.querySelector('.prev-button');
    let nextButton = row.querySelector('.next-button');
    let currentTranslate = 0;

    // Bottone "next"
    nextButton.addEventListener('click', () => {
        // Sposta a sinistra di 300px
        currentTranslate -= 300;
        // Limita lo scorrimento massimo verso sinistra
        currentTranslate = Math.max(currentTranslate, -slider.scrollWidth + row.offsetWidth);
        slider.style.transform = `translateX(${currentTranslate}px)`;
    });

    // Bottone "prev"
    prevButton.addEventListener('click', () => {
        // Sposta a destra di 300px
        currentTranslate += 300;
        // Limita lo scorrimento massimo verso destra
        currentTranslate = Math.min(currentTranslate, 0);
        slider.style.transform = `translateX(${currentTranslate}px)`;
    });
}

// Inizializza gli slider alla partenza
document.addEventListener("DOMContentLoaded", () => {
    initializeSlider('image-container-1');
    initializeSlider('image-container-2');
    initializeSlider('image-container-3');
});
