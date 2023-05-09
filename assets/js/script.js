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

/*
 hamburgerButtons.forEach( function(hamburgerButton) {
    hamburgerButton.addEventListener("click", function(){
      for (i of mobileNavDisplay) {
        
      }
    });
  });

*/