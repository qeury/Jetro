$(function() {

    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow_prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow_next.svg" alt=""></button>',
        infinite: true,
        arrows: true,
        asNavFor: '.slider__photo',
        autoplay: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.slider__photo').slick({
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        arrows: false,
        focusOnSelect: true
    });

    $('.menu__btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu__btn--active');
    });

    $('.menu__btn--click').click(function(){
       $('.menu__list').fadeToggle();
    });

});
