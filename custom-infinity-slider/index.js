const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = sliderWrapper.querySelectorAll(".slide");

const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");

let width = sliderWrapper.clientWidth;

let lastClickTime = 0;
const delay = 1000;

positioning();

window.addEventListener("resize", positioning);

setInterval(moveRight, 5000);

function positioning() {
    width = sliderWrapper.clientWidth;

    slides.forEach((slide, index) => {
        let x = index * width;
        if (index === slides.length - 1) {
            x = -width;
        }

        slide.setAttribute("data-x", x);
        slide.style.transform = `translateX(${x}px)`;
    });
}

function moveRight() {
    const now = new Date().getTime();
    if (now - lastClickTime < delay) {
        return;
    }

    slides.forEach((slide) => {
        const x = Number(slide.getAttribute("data-x"));
        let newX = x - width;

        if (newX < -(width * (slides.length - 2))) {
            newX = width;
            slide.style.zIndex = -1;
        } else {
            slide.style.zIndex = 1;
        }

        slide.style.transform = `translateX(${newX}px)`;
        slide.setAttribute("data-x", newX);
    });
    lastClickTime = now;
}

function moveLeft() {
    const now = new Date().getTime();

    slides.forEach((slide) => {
        const x = Number(slide.getAttribute("data-x"));
        let newX = x + width;

        if (newX > width * (slides.length - 2)) {
            newX = -width;
            slide.style.zIndex = -1;
        } else {
            slide.style.zIndex = 1;
        }

        slide.style.transform = `translateX(${newX}px)`;
        slide.setAttribute("data-x", newX);
    });
    lastClickTime = now;
}

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);
