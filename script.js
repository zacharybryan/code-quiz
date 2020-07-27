// var navElement = document.querySelector("#navId");
// console.log(navElement, " Nav Ele");

// var navColElement = document.getElementById("navColDiv");
// console.log(navColElement, " Nav Col Ele");

var timerElement = document.getElementById("quizTimer");
var buttonElement = document.getElementById("startButton");
var welcomeElement = document.getElementById("welcomeContainer")

var quizTimer = 60;

buttonElement.addEventListener("click", function(){
    prepareQuiz();
    // var welcomeElement = display question 1 
})

function prepareQuiz() {
    var timeInterval = setInterval(function() {
      timerElement.textContent = quizTimer + " seconds remaining";
      quizTimer--;
      if (quizTimer === 0) {
        timerElement.textContent = " ";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }


document.appendChild.navId;
navId.appendChild.quizTimer;

// Get questions (5) Mulitple Choice 
// apply score changes/ subtract from timer for incorect answers
// take final timer amount and create score
// add high score
// commit it to the memory thingy 
// pull form the memory to display the high scores added by initals
// Look at activity with commiting memory 
// put final touches on apperance (look at portfolio looks) (d-flex maybe or something like that )
// look into adding sound effects
// create a readME 
