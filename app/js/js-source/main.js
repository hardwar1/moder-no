$(function () {
  //весь код писать внутри что бы дом загрузился первым

  var mixer = mixitup('.products__body');

  $('.header__burger').on('click', function () {
    $('.header__nav-inner').slideToggle();
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

});