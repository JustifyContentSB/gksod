"use strict";

$(document).ready(function () {
  // Your code here
  financeSlider();
  offerSlider();
  officeSlider();
  certSlider();
  articlesSlider();
  reviewsSlider();
  headerMenuShow();
  headerSubmenuMenuShow();
  headerSubmenuMenuHidden();
  headerSubmenuMenuShowDesk();
  tabsToggle();
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
    },
    navigation: {
      nextEl: '.offer__next',
      prevEl: '.offer__prev'
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

      if (!$(this).hasClass('header__main-toggle--clicked')) {
        $('.header__main-toggle--clicked').removeClass('header__main-toggle--clicked');
        $('body').removeClass('no-scroll');
      }

      $(this).toggleClass('header__main-toggle--clicked');
      $('body').toggleClass('no-scroll');
    });
  }
}

$(window).on('click', function (e) {
  if (!e.target.closest('.header__main-item') && $('.header__main-toggle--clicked')[0]) {
    $('.header__main-toggle').removeClass('header__main-toggle--clicked');
    $('body').removeClass('no-scroll');
  }
});

if ($(window).width() >= 1280) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var scrollTop = $('.header__top').outerHeight() + $('.header__menu').outerHeight();

    if (scroll >= scrollTop) {
      $(".header__main").addClass("header__main--fixed");
    } else {
      $(".header__main").removeClass("header__main--fixed");
    }
  });
}

$(document).ready(function () {
  $('.office__popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    }
  });
});
$(document).ready(function () {
  $('.cert__popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    }
  });
});

function tabsToggle() {
  $('.tabs .tabs__btn').removeClass('tabs__btn--active');
  $('.tabs .tabs__item:first-child .tabs__btn').addClass('tabs__btn--active');
  $('.tab-content').removeClass('tabs-content--active');
  $('.tab-content:first').addClass('tabs-content--active');
  $('.tabs__btn').click(function (e) {
    e.preventDefault();
    $(this).parent('.tabs__item').parent('.tabs').find('.tabs__item .tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');
    var currentTab = $(this).attr('href');
    var currentContent = $(this).parent('.tabs__item').parent('.tabs').attr('data-id');
    $('#' + currentContent).find('.tabs-content').removeClass('tabs-content--active');
    $(currentTab).addClass('tabs-content--active');
    return false;
  });
}