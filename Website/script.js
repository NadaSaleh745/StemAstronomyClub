const menu = document.getElementById("menu");
const list = document.getElementById("list");
const back = document.getElementById("back");
const logo = document.getElementById("logo");

function drop() {
    if(menu.style.height === "0px") {
        menu.style.height = '300px';
        back.style.borderBottom = '1px solid rgb(255, 255, 255, 0.3)';
    }
    else {
        menu.style.height = '0';
        back.style.borderBottom = 'none';
    }
}
list.addEventListener('click', drop);

function home() {
    window.location.href = "home.html";
}
logo.addEventListener('click', home);


let slideIndex = 0; // Current slide index
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlides(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides) {
        slideIndex = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Go to the last slide
    } else {
        slideIndex = index;
    }

    // Apply transform to shift the slides
    const offset = -slideIndex * 100; // Calculate percentage offset
    slidesWrapper.style.transform = `translateX(${offset}%)`;

    // Update the active dot
    updateDots();
}

function plusSlides(n) {
    showSlides(slideIndex + n); // Move to next/previous slide
}

function currentSlide(n) {
    showSlides(n); // Show the slide at the specific index
}

function updateDots() {
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots[slideIndex].classList.add("active");
}

// Initially show the first slide
showSlides(slideIndex);

// Event listeners for arrows
document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(0);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(0);
});

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide(index);
    });
});

let slideIndex2 = 0; // Current slide index
const slidesWrapper2 = document.querySelector('.slides-wrapper2');
const slides2 = document.querySelectorAll('.mySlides2');
const dots2 = document.querySelectorAll('.dot2');
const totalSlides2 = slides2.length;

function showSlides2(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides2) {
        slideIndex2 = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex2 = totalSlides2 - 1; // Go to the last slide
    } else {
        slideIndex2 = index;
    }

    // Apply transform to shift the slides
    const offset = -slideIndex2 * 100; // Calculate percentage offset
    slidesWrapper2.style.transform = `translateX(${offset}%)`;

    // Update the active dot
    updateDots2();
}

function plusSlides2(n) {
    showSlides2(slideIndex2 + n); // Move to next/previous slide
}

function currentSlide2(n) {
    showSlides2(n); // Show the slide at the specific index
}

function updateDots2() {
    // Remove active class from all dots
    dots2.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots2[slideIndex2].classList.add("active");
}

// Initially show the first slide
showSlides2(slideIndex2);

// Event listeners for arrows
document.querySelector(".prev2").addEventListener("click", function() {
    plusSlides2(-1);
});

document.querySelector(".next2").addEventListener("click", function() {
    plusSlides2(1);
});

// Event listeners for dots
dots2.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide2(index);
    });
});

let slideIndex3 = 0; // Current slide index
const slidesWrapper3 = document.querySelector('.slides-wrapper3');
const slides3 = document.querySelectorAll('.mySlides3');
const dots3 = document.querySelectorAll('.dot3');
const totalSlides3 = slides3.length;

function showSlides3(index) {
    // Adjust index for infinite looping
    if (index >= totalSlides3) {
        slideIndex3 = 0; // Go back to the first slide
    } else if (index < 0) {
        slideIndex3 = totalSlides3 - 1; // Go to the last slide
    } else {
        slideIndex3 = index;
    }

    // Apply transform to shift the slides
    const offset = -slideIndex3 * 100; // Calculate percentage offset
    slidesWrapper3.style.transform = `translateX(${offset}%)`;

    // Update the active dot
    updateDots3();
}

function plusSlides3(n) {
    showSlides3(slideIndex3 + n); // Move to next/previous slide
}

function currentSlide3(n) {
    showSlides3(n); // Show the slide at the specific index
}

function updateDots3() {
    // Remove active class from all dots
    dots3.forEach(dot => dot.classList.remove("active"));

    // Add active class to the current dot
    dots3[slideIndex3].classList.add("active");
}

// Initially show the first slide
showSlides3(slideIndex3);

// Event listeners for arrows
document.querySelector(".prev3").addEventListener("click", function() {
    plusSlides3(-1);
});

document.querySelector(".next3").addEventListener("click", function() {
    plusSlides3(1);
});

// Event listeners for dots
dots3.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide3(index);
    });
});