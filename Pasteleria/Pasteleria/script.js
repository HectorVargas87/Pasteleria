// script.js
/*
document.addEventListener("DOMContentLoaded", function () {

    // Carrusel de pasteles más vendidos en la sección 3
    let currentBestSellerIndex = 0;
    const bestSellers = document.querySelectorAll('.best-seller-item');
    const totalBestSellers = bestSellers.length;

    function showBestSeller(index) {
        bestSellers.forEach((seller, i) => {
            const adjustment = i < index ? -100 : (i > index ? 100 : 0);
            seller.style.transform = `translateX(${adjustment}%)`;
        });
    }

    function nextBestSeller() {
        currentBestSellerIndex = (currentBestSellerIndex + 1) % totalBestSellers;
        showBestSeller(currentBestSellerIndex);
    }

    setInterval(nextBestSeller, 5000); // Cambiar pastel más vendido cada 5 segundos
});
*/
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('image-carousel');
    let currentIndex = 0;
    console.log(carousel);

    function showImage(index) {
        const position = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + position + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Obtén todos los elementos del carrusel
    var carouselItems = document.querySelectorAll('.best-seller-item');
    
    // Inicializa el índice del elemento actual
    var currentIndex2 = 0;
    
    // Establece la función del carrusel
    function showNextItem() {
        // Oculta todos los elementos del carrusel
        carouselItems.forEach(function(item) {
            item.style.display = 'none';
        });
        
        // Muestra el elemento actual
        carouselItems[currentIndex2].style.display = 'block';
        
        // Incrementa el índice para mostrar el siguiente elemento
        currentIndex2 = (currentIndex2 + 1) % carouselItems.length;
    }
    
    // Establece la función setInterval para cambiar los elementos cada 3 segundos
    setInterval(showNextItem, 3000);
    
    // Ejecuta showNextItem() inicialmente para mostrar el primer elemento inmediatamente
    showNextItem();
    // Initial display
    showImage(currentIndex);
});