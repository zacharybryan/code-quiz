// var navElement = document.querySelector("#navId");
// console.log(navElement, " Nav Ele");

// var navColElement = document.getElementById("navColDiv");
// console.log(navColElement, " Nav Col Ele");

var timerElement = document.getElementById("quizTimer");
var buttonElement = document.getElementById("startButton");
var welcomeElement = document.getElementById("welcomeContainer")

var quizTimer = 60;

var questions = [
{
  question: "Which of the following is not a valid JavaScript variable name?",
  choices:[
    "2names",
    "_first_and_last_names",
    "FirstAndLast",
    "None of the above"],
  answer: "2names"
},
{
  question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
  choices:[
    "<SCRIPT>",
    "<BODY>",
    "<HEAD>",
    "<TITLE>"],
  answer: "<SCRIPT>"
},
{
  question: "Which of the following best describes JavaScript?",
  choices:[
    "a low-level programming language.",
    "a scripting language precompiled in the browser.",
    "a compiled scripting language.",
    "an object-oriented scripting language."],
  answer: "an object-oriented scripting language."
},
{
  question: "",
  choices:[""],
  answer: ""
},
{
  question: "",
  choices:[""],
  answer: ""
},]

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

      if (quizTimer > 0) {
       // timerElement.textContent save score 
      }
  
    }, 1000);
  }


document.appendChild.navId;
navId.appendChild.quizTimer;

// Get questions (5) Multiple Choice 

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
