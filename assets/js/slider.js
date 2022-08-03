/* Slider Cards */
var cantidad = 0;
var cont = 0;
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
            initialSlide: 0,
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
    on: {
        slideChange: function () {
            cont++
            $(window).resize(function () {
                var $win = $(this);
                if ($win.width() <= 768) {
                    if (cont === 2 && $(window).width() <= 768) {
                        $(".swiper-slide>div:first-child").css("margin-left", "20px");
                        if (swiper.activeIndex < swiper.previousIndex) {
                            console.log('a')
                            swiper.slideTo(2);
                        }
                    }
                }
            }).resize();
        }
    }
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
                loop: true,
                dots: true
            }
        },
    ],
});

var contr = 0;

$(".slider-nav").on("afterChange", function (e, s, currentSlideIndex) {
    let previousSlideIndex = currentSlideIndex - 1;  
    if (contr === 0 && $(window).width() <= 500) {
        if(previousSlideIndex == 1){
            $('slider-nav').slick('slickGoTo', currentSlideIndex + 1);
        }
        $(".reviews__card:first-child").css("margin-left", '0rem');
    }
    contr++;
}); 