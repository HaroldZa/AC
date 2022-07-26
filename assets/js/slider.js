/* Slider Cards */
var cantidad = 0;
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            spaceBetween: 350,
            loop: true,
            initialSlide: 0, //this one accept a number according to docs
            slidesPerView:2, //number or 'auto'
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

/* Slider work */
var cantidad = 0;
var swiper = new Swiper(".mySwiper_work", {
    slidesPerView: 2,
    grid: {
        rows: 2
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* Slider Reviews */
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
    ],
});