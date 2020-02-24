$(function () {

  if ($(".products__body").length) {
    var mixer = mixitup('.products__body');
  };

  $('.burger').on('click', function () {
    $('.menu').slideToggle();
    $(this).toggleClass('burger__opened');
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

  $('.popap-login__submit').on('click', function () {
    $(".header-top__log").slideToggle();
    $(".header-top__reg").slideToggle();
    $(".logout").toggleClass('logged');
  });

  $('.header-top__logout').on('click', function () {
    $(".header-top__log").slideToggle();
    $(".header-top__reg").slideToggle();
    $(".logout").toggleClass('logged');
  });

  $('.header-top__log').on('click', function () {
    $('.popap-login').toggleClass('on');
    $('.popap-login').toggleClass('off');
  });

  $('.popap-login__close').on('click', function () {
    $('.popap-login').toggleClass('on');
    $('.popap-login').toggleClass('off');
  });

  $('.popap-login__submit').on('click', function () {
    $('.popap-login').toggleClass('on');
    $('.popap-login').toggleClass('off');
  });

  $('.tabs1__wrapper .tabs1__title').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.tabs1__wrapper').find('.tabs1__item').removeClass('active-tab1').hide();
    $('.tabs1__wrapper .tabs1').find('.tabs1__title').removeClass('active1');
    $(this).addClass('active1');
    $('#' + id).addClass('active-tab1').fadeIn();
    return false;
  });

  $('.up-file').styler({
    locale: 'en',
    locales: {
      'en': {
        filePlaceholder: 'Choose File',
        fileBrowse: 'No File Choosen',
        fileNumber: 'Selected files: %s',
        selectPlaceholder: 'Choose File',
        selectSearchNotFound: 'No matches found',
        selectSearchPlaceholder: 'Search...'
      }
    },
  });

});