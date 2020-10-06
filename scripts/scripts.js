
// Page link vairable
var homePage = "index.html";
var loopsPage = "loops.html";
var tryExceptPage = "try-except.html";
var listsPage = "lists.html";
var functionsPage = "functions.html";
var classesPage = "classes.html";

// Tutorial card vairables
var loopsImg = "imgs/loops-card-img.png";
var tryExceptImg = "imgs/try-except-card-img.png";
var listsImg = "imgs/lists-card-img.png";
var functionsImg = "imgs/functions-card-img.png";
var classesImg = "imgs/classes-card-img.png";


// Link to a clear page of Repl (Online Python)
var replOnlinePython = "https://repl.it/repls/SoreCluelessService#main.py";

// JQuery setting page links
$(".home-page").attr("href", homePage);
$(".loops-page").attr("href", loopsPage);
$(".try-except-page").attr("href", tryExceptPage);
$(".lists-page").attr("href", listsPage);
$(".functions-page").attr("href", functionsPage);
$(".classes-page").attr("href", classesPage);

// Jquery setting repl link
$('.repl-link').attr("href", replOnlinePython);

// JQuery setting tutorial card images
$(".loops-page img").attr("src", loopsImg);
$(".try-except-page img").attr("src", tryExceptImg);
$(".lists-page img").attr("src", listsImg);
$(".functions-page img").attr("src", functionsImg);
$(".classes-page img").attr("src", classesImg);



// Jquery

$(document).ready(function(){


   // Hamburger Menu

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

   // Mobile dropdown height calc
   let windowHeight = $(window).height();
   let headerHeight = $('header').outerHeight();
   let $dropdownHeight = windowHeight - headerHeight;
   $('.dropdown-content').css('height', `${$dropdownHeight}px`);

   // Dropdown ul padding calcs
   let $dropdownUlPadding = (windowHeight - headerHeight) / 0.2
   $('.dropdown-content ul, .site-map ul').css('height', `${$dropdownUlPadding}px`)




   // JQuery Nav Dropdown
   $('.dropdown-content').hide();  // hides the dropdown from the benginning

   // toggles between sliding down/up accordingly when clicking "Tutorials"
   $('.dropdown').click(function () {
      $('.dropdown-content').slideToggle();
   });

   // slides up the dropdown if clicking outside of the header/dropdown div
   $('#title-container, .container, .tutorial-cards, .tutorial-title-container, .tutorial-container, footer').click(function () {
      $('.dropdown-content').slideUp();
   });


   // setting page vairbles
   let bodyHeight = $(document).outerHeight();
   let footerHeight = $('footer').outerHeight();

   // Defigning updateFooter function
   var updateFooter = function ($bodyHeight, $footerHeight) {
         var $bodyWrapperHeight = $bodyHeight - $footerHeight;
         $('#body-wrapper').css('height', `${$bodyWrapperHeight}px`);
      }

   // Update the footer last to account for the dropdown menu
   updateFooter($(document).outerHeight(), $('footer').outerHeight())

   // Detect screen rotation then updates the footer
   window.addEventListener("orientationchange", function() {
      updateFooter($(document).outerHeight(), $('footer').outerHeight())
   }, false);

   // TODO: Updates footer on screen resize
   // cannot really find a way to do this



});


// Some interesting thing to try for next time:

// Animate on scroll JS library:  https://michalsnik.github.io/aos/
//



//                Sources used for help:

// Footer at Bottom of Page:
// https://www.youtube.com/watch?v=Sau3hn7zEUY

// Screen Rotation Detection:
// https://stackoverflow.com/questions/5498934/detect-change-in-orientation-using-javascript

// Screen Resize Detection:
// https://stackoverflow.com/questions/9828831/jquery-on-window-resize#:~:text=jQuery%20has%20a%20resize%20event,time%20the%20window%20is%20resized.
