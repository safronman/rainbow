$(document).ready(function () {

  $('.reviews__slider').slick({
    dots: true,
    adaptiveHeight: true,
    prevArrow: $('.reviews__arrow--prev'),
    nextArrow: $('.reviews__arrow--next'),
  });

  $('.price__slider').slick({
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 5000,
        settings: "unslick"
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})
