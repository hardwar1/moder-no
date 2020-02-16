$(function () {

  if ($(".products__body").length) {
    var mixer = mixitup('.products__body');
  };

  $('.header__burger').on('click', function () {
    $('.header__nav-inner').slideToggle();
    $(this).toggleClass('burger__opened');
  });

  $('.log-menu__btn.icon-envelope-o').on('click', function () {
    $('.log-menu__message').slideToggle();
    $(this).toggleClass('active');
  });

  $('.log-menu__btn.icon-bell-o').on('click', function () {
    $('.log-menu__notification').slideToggle();
    $(this).toggleClass('active');
  });

  $('.profile__btn-body').on('click', function () {
    $('.profile__list').slideToggle();
    $(this).toggleClass('active');
  });

  //ibg
  function ibg() {
    document.querySelectorAll(".ibg").forEach(el => {
      if (el.querySelector('img')) {
        el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
      }
    });
  }

  ibg();
  // ibg

  $(".rate-star").rateYo({
    rating: 4.4,
    starWidth: "12px",
    readOnly: true
  });

  $('.trend__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false
  });

  $(".aside__range").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1200,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-large').on('click', function () {
    $('.item--pp').removeClass('item--col');
    $(this).addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.icon-th-list').on('click', function () {
    $('.item--pp').addClass('item--col');
    $(this).addClass('active');
    $('.icon-th-large').removeClass('active');
  });

  $('.sort__rise').on('click', function () {
    $(this).toggleClass('icon-sort-amount-desc');
    $(this).toggleClass('icon-sort-amount-asc');
  });

  $('.header-top__log').on('click', function () {
    $(".header-top__log").slideToggle();
    $(".header-top__reg").slideToggle();
    $(".logout").toggleClass('logged');
  });

  $('.header-top__logout').on('click', function () {
    $(".header-top__log").slideToggle();
    $(".header-top__reg").slideToggle();
    $(".logout").toggleClass('logged');
  });


});