"use strict";

$(document).ready(function () {
  // Your code here
  financeSlider();
  offerSlider();
  officeSlider();
  certSlider();
  articlesSlider();
  reviewsSlider();
  imgPopup();
  headerMenuShow();
  headerSubmenuMenuShow();
  headerSubmenuMenuHidden();
  headerSubmenuMenuShowDesk();
}); // Your functions here

function financeSlider() {
  var swiper = new Swiper(".finance__thumbs", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  var swiper2 = new Swiper(".finance__swiper", {
    spaceBetween: 10,
    speed: 400,
    navigation: {
      nextEl: ".finance__next",
      prevEl: ".finance__prev"
    },
    thumbs: {
      swiper: swiper
    }
  });
}

function offerSlider() {
  var swiper = new Swiper(".offer__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      768: {
        spaceBetween: 24
      },
      1280: {
        spaceBetween: 30
      },
      1366: {
        spaceBetween: 40
      }
    }
  });
}

function officeSlider() {
  var swiper = new Swiper(".office__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      768: {
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.office__next',
      prevEl: '.office__prev'
    }
  });
}

function certSlider() {
  var swiper = new Swiper(".cert__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      768: {
        spaceBetween: 20
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 20
      },
      1920: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.cert__next',
      prevEl: '.cert__prev'
    }
  });
}

function articlesSlider() {
  var swiper = new Swiper(".info__swiper-articles", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      768: {
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 16
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.articles__next',
      prevEl: '.articles__prev'
    }
  });
}

function reviewsSlider() {
  var swiper = new Swiper(".info__swiper-reviews", {
    slidesPerView: 'auto',
    spaceBetween: 12,
    speed: 500,
    breakpoints: {
      768: {
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 16
      },
      1366: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20
      }
    },
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev'
    }
  });
}

function imgPopup() {
  $('.certificate__list').magnificPopup({
    delegate: 'a',
    type: 'image'
  });
}

function headerMenuShow() {
  if ($(window).width() < 1280) {
    $('.header__burger').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('header__burger--active');
      $('.header').toggleClass('header--active');
      $('body').toggleClass('no-scroll');
    });
  }
}

function headerSubmenuMenuShow() {
  if ($(window).width() < 1280) {
    $('.header__main-toggle').on('click', function (e) {
      e.preventDefault();
      $('.header__main-toggle').addClass('header__main-toggle--active');
      $(this).next('.header__main-submenu__wrapper').addClass('header__main-submenu__wrapper--active');
    });
  }
}

function headerSubmenuMenuHidden() {
  if ($(window).width() < 1280) {
    $('.header__main-submenu__prev').on('click', function (e) {
      e.preventDefault();
      $('.header__main-toggle').removeClass('header__main-toggle--active');
      $('.header__main-submenu__wrapper').removeClass('header__main-submenu__wrapper--active');
    });
  }
}

function headerSubmenuMenuShowDesk() {
  if ($(window).width() >= 1280) {
    $('.header__main-toggle').on('click', function (e) {
      e.preventDefault();
      $('.header__main-toggle').removeClass('header__main-toggle--clicked');
      $(this).toggleClass('header__main-toggle--clicked');
      $('body').toggleClass('no-scroll');
    });
  }
} // let headerNav = $('.header__main-nav');
// $(document).mouseup(function (e)) {
//    if(!headerNav.is(e.target) && headerNav.has(e.target).length === 0) {
//       $('.header__main-submenu__wrapper').fadeOut();
//    }
// }