// var navElement = document.querySelector("#navId");
// console.log(navElement, " Nav Ele");

// var navColElement = document.getElementById("navColDiv");
// console.log(navColElement, " Nav Col Ele");

var timerElement = document.getElementById("quizTimer");


var quizTimer = 60;
$("#startButton").onClick(function() {
    prepareQuiz ();
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

