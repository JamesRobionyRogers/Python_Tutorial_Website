
// Page link vairable
var homePage = "index.html"
var loopsPage = "loops.html"
var tryExceptPage = "try-except.html"
var listsPage = "lists.html"
var functionsPage = "functions.html"
var classesPage = "classes.html"

// Tutorial card vairables
var loopsImg = "imgs/loops-card-img.png"
var tryExceptImg = "imgs/try-except-card-img.png"
var listsImg = "imgs/loops-card-img.png"          // var listsImg = "imgs/"
var functionsImg = "imgs/loops-card-img.png"      // var functionsImg = "imgs/"
var classesImg = "imgs/loops-card-img.png"        // var classesImg = "imgs/"


// JQuery setting page links
$(".home-page").attr("href", homePage);
$(".loops-page").attr("href", loopsPage);
$(".try-except-page").attr("href", tryExceptPage);
$(".lists-page").attr("href", listsPage);
$(".functions-page").attr("href", functionsPage);
$(".classes-page").attr("href", classesPage);

// JQuery setting tutorial card images
$(".loops-page img").attr("src", loopsImg);
$(".try-except-page img").attr("src", tryExceptImg);
$(".lists-page img").attr("src", listsImg);
$(".functions-page img").attr("src", functionsImg);
$(".classes-page img").attr("src", classesImg);



$(document).ready(function(){

   // JQuery Nav Dropdown
   $(".dropdown-content").hide()  // hides the dropdown from the benginning

   $('.dropdown').hover(function () {
      $('.dropdown-content').slideDown();
      // $('header').css('padding-bottom', "0px").fadeIn()
   });

   $('.dropdown-content').hover(function () {
      $('.dropdown-content').slideDown();
   }, function (){
      $('.dropdown-content').slideUp();
   });


});
