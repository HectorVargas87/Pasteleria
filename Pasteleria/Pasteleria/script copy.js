// script.js
/*
document.addEventListener("DOMContentLoaded", function () {
    // Carrusel de imágenes en la sección 1
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;
    console.log(totalImages);

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.transform = `translateX(${100 * (i - index)}%)`;
            console.log(image);
            console.log(i, index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000); // Cambiar imagen cada 5 segundos

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

    // Initial display
    showImage(currentIndex);
});