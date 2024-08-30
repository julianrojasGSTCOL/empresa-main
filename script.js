let slideIndex = 1;
showSlides(slideIndex);

// Función para avanzar o retroceder en el carrusel
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Función para moverse a una diapositiva específica
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Quitar la clase "active" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar el slide actual y activar el punto correspondiente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let slide2Index = 0;{
const slides = document.querySelectorAll('.carrusel-item');

function showSlide(index) {
     const carouselInner = document.querySelector('.carrusel-inner');
     slideIndex = index;
        if (slide2Index >= slides.length) slide2Index = 0;
        if (slide2Index < 0) slide2Index = slides.length - 1;
        carouselInner.style.transform = 'translateX(' + (-slide2Index * 100) + '%)';
    }

    function nextSlide() {
        showSlide(slide2Index + 1);
    }

    function prevSlide() {
        showSlide(slide2Index - 1);
    }

    showSlide(slide2Index);
}

/*carrusel 2*/

const prevButton = document.querySelector('.carrusel-prev');
const nextButton = document.querySelector('.carrusel-next');
const items = document.querySelector('.carrusel-items');
let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition -= items.clientWidth / 3;
    if (scrollPosition < 0) {
        scrollPosition = 0;
    }
    items.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    scrollPosition += items.clientWidth / 3;
    if (scrollPosition > items.scrollWidth - items.clientWidth) {
        scrollPosition = items.scrollWidth - items.clientWidth;
    }
    items.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
});