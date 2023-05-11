var hamburgerButtons = document.querySelectorAll('.hamburger-menu');
var mobileNavDisplay = document.querySelectorAll('.mobile-nav');
var closebuttons = document.querySelectorAll('.close-button');

for (i = 0; i < hamburgerButtons.length; i++) {
  hamburgerButtons[i].addEventListener("click", showDisplay);
}

function showDisplay() {
  for (x = 0; x < mobileNavDisplay.length; x++) {
    mobileNavDisplay[x].classList.remove('hide');
  }
}

closebuttons.forEach(function(closeButton) {
  closeButton.addEventListener("click", function() {
    var shownDisplay = closeButton.parentElement;
    shownDisplay.classList.add('hide');
  });
});


//for slide show gallery on projects page

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var showMoreButtons = document.querySelectorAll('.read-more');
var projectCards = document.querySelectorAll('.web-project');
var sitesAndApps = document.querySelector('#sitesandapps');

var showMore = document.querySelectorAll('.show-more');

showMore.addEventListener("click", function(event){

});






showMoreButtons.forEach(function (i) {
  i.addEventListener("click", function(event){
    let projectDescriptions = document.querySelectorAll('.web-projects-content');
    var element = event.target;
   
    let order = i.getAttribute('data-index');
    let contentIndex = (order * 1) - 1;

    projectDescriptions[contentIndex].classList.remove('hide');
   
  });
});


/*

var showMoreButtons = document.querySelectorAll('.read-more');
var projectDescriptions = document.querySelectorAll('.web-projects-content');
var y;
for (i = 0; y < showMoreButtons.length; y ++) {
  showMoreButtons[y].addEventListener("click", function(){
    var elements = document.getElementsByClassName('').children
  
  });
}

function showDescription() {
 var descrip = 
}


*/
/*
 for (let x = 0; x < projectDescriptions.length; x++) {
    projectDescriptions[x].classList.remove('hide');
  }

  projectDescriptions[y].classList.remove('hide');
*/


/*
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

*/

/*
sitesAndApps.forEach(function (i) {
  i.addEventListener("click", function(event){
    var element = event.target;
    if (element.matches("button") === true) {
      var currentContent = element.parentElement.children;
      currentContent[1].classList.remove('hide');
    }
  });
});


*/

/*

projectCards.addEventListener("click", function(event){
  var element = event.target;
  let currentContent = element.parentElement;
  let theContent =currentContent.parentElement.children;
  if (element.matches("button") === true) {
    
    theContent[1].classList.remove('hide');
  }
})

*/