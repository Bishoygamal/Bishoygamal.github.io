/*globals $:false */
$(function () {
  'use strict';
$('html').niceScroll();

//Change Header height
$('.header').height($(window).height());
    
//Scroll to features
$('.header .arrows i').click(function() {
       $('html,body').animate({
           scrollTop: $('.features').offset().top 
       },500);
});
// show up hidden Items
    $('.show-more').click( function() {
       $('.our-work .hidden').fadeToggle(2000); 
    });
//  Check Testimonials
    var leftArrow= $('.testim .fa-chevron-left'),
        rightArrow= $('.testim .fa-chevron-right');
    function checkClients(){
        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    };
    
    checkClients();
     $('.testim i').click(function () {
       if($(this).hasClass('fa-chevron-right')) {
           $('.testim .active').fadeOut(100, function() {
              $(this).removeClass('active').next('.client').addClass('active').fadeIn();
               checkClients();
           });
           
       }else{
              $('.testim .active').fadeOut(100, function() {
              $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
               checkClients();
           }); 
           
       }
    });
});
