// JS para menu navbar
const menu = document.querySelector(".js-menu");
const nav = document.querySelector(".js-navbar");

menu.onclick = clickMenu

function clickMenu(){
    nav.classList.toggle("open");
    menu.classList.toggle("active");
}

// JS para carouseles 
const carousels = document.querySelectorAll(".carousel-wrapper");
Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
        type: 'slider',
        startAt: 0,
        perView:5,
        breakpoints: {
            1500: { perView: 4 },
            1100: { perView: 3},
            740: { perView: 2 },
            450: { perView: 1 }
        },
        gap: 5
    });
    slider.mount();
});

const chaptersWrapper = document.querySelectorAll(".chapters-wrapper");
Object.values(chaptersWrapper).map(carousel => {
    const slider = new Glide(carousel, {
        type: 'slider',
        startAt: 0,
        perView:5,
        breakpoints: {
            1500: { perView: 4 },
            1100: { perView: 3},
            740: { perView: 2 },
            450: { perView: 1 }
        },
        gap: 5
    });
    slider.mount();
});
// 