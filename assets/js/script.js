// JS para menu navbar
const menu = document.querySelector(".js-menu");
const nav = document.querySelector(".js-navbar");

const header = document.querySelector(".js-header-wrapper");

menu.onclick = clickMenu

function clickMenu() {
    nav.classList.toggle("open");
    menu.classList.toggle("active");
}


const carousels = document.querySelectorAll(".carousel-wrapper");
Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
        type: 'slider',
        startAt: 0,
        perView: 5,
        breakpoints: {
            1500: { perView: 4 },
            1100: { perView: 3 },
            740: { perView: 2 },
            450: { perView: 1}
        },
        gap: 10       
    });
    slider.mount();
});

const carouselSeason = document.querySelectorAll(".carousel-season");
Object.values(carouselSeason).map(carouselS => {
    const slider = new Glide(carouselS, {
        type: 'slider',
        startAt: 0,
        perView: 5,
        breakpoints: {
            1500: { perView: 3 },
            1100: { perView: 3 },
            740: { perView: 2 },
            450: { perView: 0}
        },
        gap: 0,
       
    });
    slider.mount();
});
