
$(document).ready(function(){


   let darkMode = localStorage.getItem('darkMode');
   const darkModeToggle = $('.drk-mode');

   const enableDarkMode = function(){
      // 1. add darkmode class
      $(':root').addClass('dark-mode-colours');
      $('.fa-moon').addClass('drk-mode-icon');
      $('header, footer').css('box-shadow', '0px 0px 24px 10px rgba(0,0,0,0.2)');
      $('.dropdown-content').css('box-shadow', '0px 8px 8px 0px rgba(0,0,0,0.2)');
      // 2. update darkmode to local storage
      localStorage.setItem('darkMode', 'enabled');
   }

   const disableDarkMode = function(){
      // 1. add darkmode class
      $(':root').removeClass('dark-mode-colours');
      $('.fa-moon').removeClass('drk-mode-icon');
      // 2. update darkmode to local storage
      localStorage.setItem('darkMode', null);
   }

   // Set darkmode to condition it was last used in
   if (darkMode == 'enabled') {
      $(':root').css("--background-color", "#24252A");
      enableDarkMode();
   }

   darkModeToggle.click(function () {
         darkMode = localStorage.getItem('darkMode');
         if (darkMode !== 'enabled') {
            enableDarkMode();

         } else {
            disableDarkMode();

         }

   });



});
