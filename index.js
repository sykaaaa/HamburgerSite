$(function(){
  $('.js-btn').on('click',function(){
    $('.l-aside').toggleClass('is-open');
    $('body').toggleClass('is-open');

  });
});