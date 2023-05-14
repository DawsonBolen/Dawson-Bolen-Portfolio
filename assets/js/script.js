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






var projectCards = document.querySelectorAll('.web-project');
var sitesAndApps = document.querySelector('#sitesandapps');


var showMoreButtons = document.querySelectorAll('.read-more');
var content = document.querySelectorAll('.web-projects-content ');

// console.log("hello");
// for (i of showMoreButtons) {
//   i.addEventListener('click', function() {
//     console.log(this);
//     var content = this.closest(".web-proj").children[1];
//     content.classList.remove('hide');
//   });
// }

for (i = 0; i < showMoreButtons.length; i++) {
  showMoreButtons[i].addEventListener("click", function(){
    console.log(this);
    var content = this.closest(".web-project").children[1];
    content.classList.remove('hide');
  });
}


/*
for (i = 0; i < showMoreButtons.length; i++) {
  showMoreButtons[i].addEventListener("click", function(){
    console.log(this);
    var content = this.closest(".web-proj").children[1];
    content.classList.remove('hide');
  });
}

/

/*
showMoreButtons.forEach(function (i) {
  i.addEventListener("click", function(event){
    let projectDescriptions = document.querySelectorAll('.web-projects-content');
    var element = event.target;
   


    projectDescriptions.classList.remove('hide');
   
  });
});
*/

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