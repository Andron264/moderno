$(function () {
   var mixer = mixitup('.product__inner-box');

   $('.slider-inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3
   });

   $(".rateyo").rateYo({
      rating: 5,
      starWidth: '12px'
   });
});