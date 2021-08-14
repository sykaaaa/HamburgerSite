$(function(){
  $('.js-btn').on('click',function(){
    $('.l-aside').toggleClass('is-open');
    $('.l-blackLayer').toggleClass('is-open');
    $('.p-global-nav').toggleClass('is-open');
    $('.c-button--nav').toggleClass('is-open');
  });
});