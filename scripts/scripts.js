
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
var listsImg = "imgs/loops-card-img.png";          // var listsImg = "imgs/"
var functionsImg = "imgs/loops-card-img.png";      // var functionsImg = "imgs/"
var classesImg = "imgs/loops-card-img.png";        // var classesImg = "imgs/"


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



$(document).ready(function(){

   // JQuery Nav Dropdown
   $('.dropdown-content').hide();  // hides the dropdown from the benginning

   // toggles between sliding down/up accordingly when clicking "Tutorials"
   $('.dropdown').click(function () {
      $('.dropdown-content').slideToggle();  // did have at just .slideUp()
   });

   // slides up the dropdown if clicking outside of the header/dropdown div
   $('#title-container, .container, .tutorial-cards, .tutorial-title-container, .tutorial-container, footer').click(function () {
      $('.dropdown-content').slideUp();
   });


   // Sticking footer to the bottom of the page  -  Sourced from: https://www.youtube.com/watch?v=Sau3hn7zEUY
   let bodyHeight = $(document).outerHeight();  // gets the full document height .outerHeight() includeds all margins and padding
   let footerHeight = $('footer').outerHeight();

   let bodyWrapperHeight = bodyHeight - footerHeight;
   // setting the body wrapper height
   $('#body-wrapper').css('height', `${bodyWrapperHeight}px`);  // `` is basicly an f string in python

});
