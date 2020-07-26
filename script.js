var navElement = document.getElementById(navId);

var timerElement = document.getElementById(quizTimer);

var quizTimer = 60;

function prepareQuiz() {
    var timeInterval = setInterval(function() {
      timerElement.textContent = quizTimer + " seconds remaining";
      quizTimer--;
        console.log(quizTimer);
      if (quizTimer === 0) {
        timerElement.textContent = " ";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }
prepareQuiz ();
document.appendChild.navId;
navId.appendChild.quizTimer;

