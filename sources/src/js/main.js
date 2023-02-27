"use strict";

$(document).ready(function () {
  // Your code here
  financeSlider();
  offerSlider1();
  offerSlider2();
  offerSlider3();
  officeSlider();
  certSlider();
  articlesSlider();
  reviewsSlider1();
  reviewsSlider2();
  reviewsSlider3();
  headerMenuShow();
  headerSubmenuMenuShow();
  headerSubmenuMenuHidden();
  headerSubmenuMenuShowDesk();
  tabsToggle();
  menuScroll();
  footerShow();
  dropdownShow();
  headerSearch();
  rangeSliders();
  selectedItems();
});

// Your functions here

function financeSlider() {
  let swiper = new Swiper(".finance__thumbs", {
    spaceBetween: 16,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  let swiper2 = new Swiper(".finance__swiper", {
    spaceBetween: 10,
    speed: 400,
    navigation: {
      nextEl: ".finance__next",
      prevEl: ".finance__prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

function offerSlider1() {
  let swiper = new Swiper(".offer__swiper-1", {
    slidesPerView: "auto",
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
    navigation: {
      nextEl: ".offer__next-1",
      prevEl: ".offer__prev-1",
    },
  });
}

function offerSlider2() {
  let swiper = new Swiper(".offer__swiper-2", {
    slidesPerView: "auto",
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
    navigation: {
      nextEl: ".offer__next-2",
      prevEl: ".offer__prev-2",
    },
  });
}

function offerSlider3() {
  let swiper = new Swiper(".offer__swiper-3", {
    slidesPerView: "auto",
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
    navigation: {
      nextEl: ".offer__next-3",
      prevEl: ".offer__prev-3",
    },
  });
}

function officeSlider() {
  let swiper = new Swiper(".office__swiper", {
    slidesPerView: "auto",
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
      nextEl: ".office__next",
      prevEl: ".office__prev",
    },
  });
}

function certSlider() {
  let swiper = new Swiper(".cert__swiper", {
    slidesPerView: "auto",
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
      nextEl: ".cert__next",
      prevEl: ".cert__prev",
    },
  });
}

function articlesSlider() {
  let swiper = new Swiper(".info__swiper-articles", {
    slidesPerView: "auto",
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
      nextEl: ".articles__next",
      prevEl: ".articles__prev",
    },
  });
}

function reviewsSlider1() {
  let swiper = new Swiper(".info__swiper-reviews-1", {
    slidesPerView: "auto",
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
      nextEl: ".reviews__next-1",
      prevEl: ".reviews__prev-1",
    },
  });
}

function reviewsSlider2() {
  let swiper = new Swiper(".info__swiper-reviews-2", {
    slidesPerView: "auto",
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
      nextEl: ".reviews__next-2",
      prevEl: ".reviews__prev-2",
    },
  });
}

function reviewsSlider3() {
  let swiper = new Swiper(".info__swiper-reviews-3", {
    slidesPerView: "auto",
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
      nextEl: ".reviews__next-3",
      prevEl: ".reviews__prev-3",
    },
  });
}

function headerSearch() {
  $(".header__search-toggle").on("click", function (e) {
    e.preventDefault();
    $(".header__search").toggleClass("header__search--active");
  });
}

function headerMenuShow() {
  if ($(window).width() < 1280) {
    $(".header__burger").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("header__burger--active");
      $(".header").toggleClass("header--active");
      $("body").toggleClass("no-scroll");
    });
  }
}

function menuScroll() {
  if ($(window).width() < 1280) {
    let lastScrollTop = 0;
    $(window).scroll(function (event) {
      let st = $(this).scrollTop();
      if (st > $(".header__wrapper").outerHeight()) {
        $(".header__wrapper").addClass("header__wrapper--fixed");
      } else if(st == 0) {
        $(".header__wrapper").removeClass("header__wrapper--fixed");
      }
      if (st > lastScrollTop) {
        $(".header__wrapper").removeClass("header__wrapper--visible");
      } else {
        $(".header__wrapper").addClass("header__wrapper--visible");
      }
      lastScrollTop = st;
    });
  }
}

function headerSubmenuMenuShow() {
  if ($(window).width() < 1280) {
    $(".header__main-toggle").on("click", function (e) {
      e.preventDefault();
      let st = $(this).scrollTop();
      $(".header__main-toggle").addClass("header__main-toggle--active");
      $(this)
        .next(".header__main-submenu__wrapper")
        .addClass("header__main-submenu__wrapper--active");
    });
  }
}

function headerSubmenuMenuHidden() {
  if ($(window).width() < 1280) {
    $(".header__main-submenu__prev").on("click", function (e) {
      e.preventDefault();
      $(".header__main-toggle").removeClass("header__main-toggle--active");
      $(".header__main-submenu__wrapper").removeClass(
        "header__main-submenu__wrapper--active"
      );
    });
  }
}

if ($(window).width() >= 1280) {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let scrollTop =
      $(".header__top").outerHeight() + $(".header__menu").outerHeight();

    if (scroll >= scrollTop) {
      $(".header__main").addClass("header__main--fixed");
    } else {
      $(".header__main").removeClass("header__main--fixed");
    }
  });
}

function headerSubmenuMenuShowDesk() {
  if ($(window).width() >= 1280) {
    $(".header__main-toggle").on("click", function (e) {
      e.preventDefault();
      if (!$(this).hasClass("header__main-toggle--clicked")) {
        $(".header__main-toggle--clicked").removeClass(
          "header__main-toggle--clicked"
        );
        $("body").removeClass("no-scroll");
        $(".header__overlay").removeClass("header__overlay--active");
      }
      $(this).toggleClass("header__main-toggle--clicked");
      $(".header__overlay").toggleClass("header__overlay--active");
      $("body").toggleClass("no-scroll");
    });
  }
}

$(".header__overlay").on("click", function (e) {
  $(this).removeClass("header__overlay--active");
  $(".header__main-toggle").removeClass("header__main-toggle--clicked");
  $("body").removeClass("no-scroll");
});

$(window).on("click", function (e) {
  if (
    !e.target.closest(".header__main-item") &&
    $(".header__main-toggle--clicked")[0]
  ) {
    $(".header__main-toggle").removeClass("header__main-toggle--clicked");
    $("body").removeClass("no-scroll");
    $(".header__overlay").removeClass("header__overlay--active");
  }
});

$(document).ready(function () {
  $(".office__popup").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});

$(document).ready(function () {
  $(".cert__popup").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});

function tabsToggle() {
  $(document).ready(function () {
    $(".tabs .tabs__btn").removeClass("tabs__btn--active");
    $(".tabs .tabs__item:first-child .tabs__btn").addClass("tabs__btn--active");
    $(".tab-content").removeClass("tabs-content--active");
    $(".tab-content:first-child").addClass("tabs-content--active");
  });
  $(".tabs__btn").click(function (e) {
    e.preventDefault();
    $(this)
      .parent(".tabs__item")
      .parent(".tabs")
      .find(".tabs__item .tabs__btn")
      .removeClass("tabs__btn--active");
    $(this).addClass("tabs__btn--active");

    let currentTab = $(this).attr("href");
    let currentContent = $(this)
      .parent(".tabs__item")
      .parent(".tabs")
      .attr("data-id");
    $("#" + currentContent)
      .find(".tabs-content")
      .removeClass("tabs-content--active");
    $(currentTab).addClass("tabs-content--active");

    return false;
  });
}

function footerShow() {
  if ($(window).width() < 1280) {
    $(".footer__nav-toggle").click(function (e) {
      e.preventDefault();
      let $this = $(this);
      if ($this.next().hasClass("show")) {
        $this.next().removeClass("show");
        $this.next().slideUp(350);
        $this.removeClass("footer__nav-toggle--active");
      } else {
        $this.addClass("footer__nav-toggle--active");
        $this.next().toggleClass("show");
        $this.next().slideToggle(350);
      }
    });
  }
}

function dropdownShow() {
  $(".dropdown-toggle").click(function (e) {
    e.preventDefault();
    let $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.next().slideUp(350);
      $this.removeClass("dropdown-toggle--active");
    } else {
      $this.addClass("dropdown-toggle--active");
      $this.next().toggleClass("show");
      $this.next().slideToggle(350);
    }
  });
}

function rangeSliders() {
  $(function () {
   $( ".ui-slider-handle" ).draggable();
    $("#slider-range-sum").slider({
      range: "max",
      min: 10000,
      max: 500000,
      value: 100000,
      step: 10000,
      slide: function (event, ui) {
        $("#sum").val(ui.value);
      },
    });
    $("#sum").val($("#slider-range-sum").slider("value"));
  });

  $(function () {
    $("#slider-range-term").slider({
      range: "max",
      min: 1,
      max: 12,
      value: 3,
      step: 1,
      slide: function (event, ui) {
        $("#term").val(ui.value);
      },
    });
    $("#term").val($("#slider-range-term").slider("value"));
  });
}

function selectedItems() {
  $('.location-list').select2({
     placeholder: 'Ваш регион проживания:',
  });
}