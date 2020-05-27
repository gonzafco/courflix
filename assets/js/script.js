const carousels = document.querySelectorAll(".carousel-wrapper");
Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel,{
        type:'slider',
        startAt:0,
        perView:5,
        gap:10
    });
    slider.mount();
});

const chaptersWrapper = document.querySelectorAll(".chapters-wrapper");
Object.values(chaptersWrapper).map(carousel => {
    const slider = new Glide(carousel,{
        type:'slider',
        startAt:0,
        perView:5,
        gap:10
    });
    slider.mount();
});


// const prueba = document.getElementById('carousel-wrapper')
// const sliderTest = new Glide('.carousel-wrapper',{
//     type:'slider',
//     startAt:0,
//     perView:1,
//     gap:40
// });
// sliderTest.mount();