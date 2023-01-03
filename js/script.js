$(function(){
    $('.banner-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,        
        prevArrow:".ban-left",
        nextArrow:".ban-right",
        cssEase: 'linear'
      });    
})

var swiper = new Swiper(".mySwiper", {
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 0,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    
  }
});

var swipe = new Swiper(".mySwipe", {
  autoplay: true,
  slidesPerView: 8,
  spaceBetween: 0,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    
  }
});