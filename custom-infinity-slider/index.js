console.log("Starting");

const buttonPrev = document.querySelector(".arrow-prev");
const buttonNext = document.querySelector(".arrow-next");
const slides = document.querySelector(".slides");
const slidesCount = document.querySelectorAll(".slides").length;
console.log(slidesCount);
let currentIndex = 0;

const goToSlides = (index) => {
    console.log(index);
    slides.style.transform = `translatex(-${index * 100}%)`;
};

const nextSlides = () => {
    currentIndex = (currentIndex + 1) % slidesCount;
    goToSlides(currentIndex);
};

const prevSlides = () => {
    currentIndex = (currentIndex - 1 + slidesCount) % slidesCount;
    goToSlides(currentIndex);
};

buttonPrev.addEventListener("click", () => {
    
});
buttonNext.addEventListener("click", prevSlides);
