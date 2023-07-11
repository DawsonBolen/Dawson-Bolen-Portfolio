const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach(carouselButton => {
    carouselButton.addEventListener("click", function () {
        const offSet = carouselButton.dataset.carouselButton === "next" ? 1 : -1;
        const slides = carouselButton.closest("[data-carousel]").querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]");

        let newSlide = [...slides.children].indexOf(activeSlide) + offSet;

        if (newSlide < 0) {
            newSlide = slides.children.length - 1;
        }

        if (newSlide >= slides.children.length) {
            newSlide = 0;
        }

        slides.children[newSlide].dataset.active = true;
        delete activeSlide.dataset.active;

    });
});

const showCarousel = document.getElementById('slider-btn');
const showGallery = document.getElementById('galery-btn');

showCarousel.addEventListener("click", function () {
    const mainParent = showCarousel.closest('#drink-campaign');

    const galleryView = mainParent.querySelector('#drink-campaign-main');
    const sliderView = mainParent.querySelector('#campaign-slider');
    const sliderViewBtn = mainParent.querySelector('#slider-btn');
    const galleryViewBtn = mainParent.querySelector('#galery-btn');

    galleryView.classList.add('hide');
    sliderView.classList.remove('hide');
    sliderViewBtn.classList.add('active-galorslider');
    galleryViewBtn.classList.remove('active-galorslider');
});

showGallery.addEventListener("click", function () {
    const mainParent = showCarousel.closest('#drink-campaign');

    const galleryView = mainParent.querySelector('#drink-campaign-main');
    const sliderView = mainParent.querySelector('#campaign-slider');
    const sliderViewBtn = mainParent.querySelector('#slider-btn');
    const galleryViewBtn = mainParent.querySelector('#galery-btn');

    galleryView.classList.remove('hide');
    sliderView.classList.add('hide');
    sliderViewBtn.classList.remove('active-galorslider');
    galleryViewBtn.classList.add('active-galorslider');
});