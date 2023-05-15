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
    var content = this.closest(".web-project").children[1];
    var parent = this.parentElement;
    parent.classList.add('hide');
    content.classList.remove('hide');
  });
}


var closeContentButtons = document.querySelectorAll('.x-btn');



for (i = 0; i < closeContentButtons.length; i++) {
  closeContentButtons[i].addEventListener("click", function(){
    var openedContent = this.closest(".web-projects-content");
    var showMoreAgain = this.closest(".web-project").children[0];
    var showIt = showMoreAgain.children[0];
    openedContent.classList.add('hide');
    showIt.classList.remove('hide');
  });
}