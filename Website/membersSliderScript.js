document.addEventListener('DOMContentLoaded', () => {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let slideIndex = 0;

    function showSlides(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        slidesWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
        updateDots();
    }

    function currentSlide(n) {
        showSlides(n);
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[slideIndex].classList.add("active");
    }

    function nextSlide() {
        showSlides(slideIndex + 1);
    }

    function prevSlide() {
        showSlides(slideIndex - 1);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentSlide(index);
        });
    });

    document.querySelector('.nav-button-next').addEventListener('click', nextSlide);
    document.querySelector('.nav-button-prev').addEventListener('click', prevSlide);

    showSlides(slideIndex);
});
