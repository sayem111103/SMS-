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
    320: {
      slidesPerView: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },

    576: {
        
    }
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
    320: {
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },      
    },

    
    576: {
        
    }
  }
});

$('.show').on("click", function(){
  $('#smartphone_nav').css("left","0")
});

$( ".hide" ).on("click", function(){
  $( "#smartphone_nav" ).css( "left","-100%" )
});
