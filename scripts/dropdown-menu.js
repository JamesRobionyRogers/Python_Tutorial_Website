$(document).ready(function(){


   // Mobile Hamburger Menu

   let menuBtn = $('.burger');
   let menuOpen = false;

   menuBtn.click(function () {
         if(!menuOpen) {
            menuBtn.addClass('open');
            menuOpen = true;

            // Mobile dropdown
            $('.dropdown-content').slideToggle();
            $('html').addClass('static');

         } else {
            menuBtn.removeClass('open');
            menuOpen = false;

            // Mobile dropdown
            $('.dropdown-content').slideToggle();
            $('html').removeClass('static');
         }
      });


   // Mobile dropdown contents height calc
   if ($(window).width() <= 812  &&  $(window).width() > 375) {

      let windowHeight = $(window).height();
      let headerHeight = $('header').outerHeight();
      let $dropdownHeight = windowHeight - headerHeight;
      $('.dropdown-content').css('height', `${$dropdownHeight}px`);

      // Dropdown ul padding calcs
      let $dropdownUlPadding = (windowHeight - headerHeight) / 0.2;
      $('.dropdown-content ul, .site-map ul').css('height', `${$dropdownUlPadding}px`);
   }



   // Desktop Nav Dropdown
   $('.dropdown-content').hide();  // hides the dropdown from the benginning

   // toggles between sliding down/up accordingly when clicking "Tutorials"
   $('.dropdown').click(function () {
      $('.dropdown-content').slideToggle();
   });

   // slides up the dropdown if clicking outside of the header/dropdown div
   $('#title-container, .container, .tutorial-cards, .tutorial-title-container, .tutorial-container, footer').click(function () {
      $('.dropdown-content').slideUp();
   });




});
