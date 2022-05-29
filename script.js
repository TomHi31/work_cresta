$(document).ready(function(){
  $('.burger-btn, .nav-list li a').click(function(){
    $('.burger-btn, .nav-list li a').toggleClass('close');
    $('.nav-wrappeer').fadeToggle(500);
  });

  $('.about-btn').click(function(){
    $('html,body').animate({
      'scrollTop':850
    }, 'slow');
  });

  $('.news-btn').click(function(){
    $('html,body').animate({
      'scrollTop':2000
    }, 'slow');
  });

  $('.contact-btn').click(function(){
    $('html,body').animate({
      'scrollTop':3000
    }, 'slow');
  });

});
