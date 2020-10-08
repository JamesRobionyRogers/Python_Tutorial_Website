
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
