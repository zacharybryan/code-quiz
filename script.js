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

// Get questions (5) Multiple Choice 

// Which of the following is not a valid JavaScript variable name?
// A. 2names
// B. _first_and_last_names
// C. FirstAndLast
// D. None of the above
// Ans: A

// ______ tag is an extension to HTML that can enclose any number of JavaScript statements.
// A. <SCRIPT>
// B. <BODY>
// C. <HEAD>
// D. <TITLE>
// Ans: A

// Which of the following best describes JavaScript?
// A. a low-level programming language.
// B. a scripting language precompiled in the browser.
// C. a compiled scripting language.
// D. an object-oriented scripting language.
// Ans: D

// Using _______ statement is how you test for a specific condition.
// A. Select
// B. If
// C. Switch
// D. For
// Ans: B

// The _______ method of an Array object adds and/or removes elements from an array.
// A. Reverse
// B. Shift
// C. Slice
// D. Splice
// Ans: D


// apply score changes/ subtract from timer for incorrect answers
// take final timer amount and create score
// add high score
// commit it to the memory thingy 
// pull form the memory to display the high scores added by initials
// Look at activity with commiting memory 
// put final touches on apperance (look at portfolio looks) (d-flex maybe or something like that )
// look into adding sound effects
// create a readME 
