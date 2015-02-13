$(function() {

////Mobile Menu////

   $('a.menu-icon').click(function() {
      $('#social').slideToggle();
   });

////Fix hidden links on window resize////
   
   $(window).resize(function() {
      if ($(window).width() > 950) {
      	$('#social').removeAttr('style');
      }
   });

});