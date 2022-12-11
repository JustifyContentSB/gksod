"use strict";

$(document).ready(function () {
   // Your code here
   offerSlider();
   addressSlider();
   certSlider();
   articlesSlider();
   reviewsSlider();
});

// Your functions here

function offerSlider() {
   let swiper = new Swiper(".offer__swiper", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      speed: 500,
      breakpoints: {
         768: {
            spaceBetween: 24,
         },
         1280: {
            spaceBetween: 30,
         },
         1366: {
            spaceBetween: 40,
         },
      },
   });
}

function addressSlider() {
   let swiper = new Swiper(".address__swiper", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      speed: 500,
      breakpoints: {
         768: {
            spaceBetween: 16,
         },
         1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
         },
         1366: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
         },
      },
      navigation: {
         nextEl: '.address__next',
         prevEl: '.address__prev',
      },
   });
}

function certSlider() {
   let swiper = new Swiper(".cert__swiper", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      speed: 500,
      breakpoints: {
         768: {
            spaceBetween: 20,
         },
         1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
         },
         1920: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 20,
         },
      },
      navigation: {
         nextEl: '.cert__next',
         prevEl: '.cert__prev',
      },
   });
}

function articlesSlider() {
   let swiper = new Swiper(".info__swiper-articles", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      speed: 500,
      breakpoints: {
         768: {
            spaceBetween: 16,
         },
         1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
         },
         1366: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
         },
      },
      navigation: {
         nextEl: '.articles__next',
         prevEl: '.articles__prev',
      },
   });
}

function reviewsSlider() {
   let swiper = new Swiper(".info__swiper-reviews", {
      slidesPerView: 'auto',
      spaceBetween: 12,
      speed: 500,
      breakpoints: {
         768: {
            spaceBetween: 16,
         },
         1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
         },
         1366: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
         },
      },
      navigation: {
         nextEl: '.reviews__next',
         prevEl: '.reviews__prev',
      },
   });
}