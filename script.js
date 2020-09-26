// var navElement = document.querySelector("#navId");
// console.log(navElement, " Nav Ele");

// var navColElement = document.getElementById("navColDiv");
// console.log(navColElement, " Nav Col Ele");

var timerElement = document.getElementById("quizTimer");
var buttonElement = document.getElementById("startButton");
var welcomeElement = document.getElementById("welcomeContainer");
var highScoreTextBox = document.getElementById("highScoreTextBox");
var testContainerElement = document.getElementById("testContainer");
var score = ""

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
  question: "Using _______ statement is how you test for a specific condition.",
  choices:[
    "Select",
    "If",
    "Switch",
    "For"],
  answer: "If"
},
{
  question: "The _______ method of an Array object adds and/or removes elements from an array.",
  choices:[
    "Reverse",
    "Shift",
    "Slice",
    "Splice"],
  answer: "Splice"
}];

buttonElement.addEventListener("click", function(){
    prepareQuiz();
})

function prepareQuiz() {
  clearScreen ();
  displayText ();
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
  function clearScreen () {
    var welcomeElement = document.getElementById("welcomeContainer");
    welcomeElement.setAttribute("class","hide"); 
  }

  function displayText () {
    var newP = document.getElementById(highscoreTextBox).createElement("p")
    newP.textContent = questions[0].question;
    testContainerElement.appendChild(newP);

    for (let index = 0; index < questions[0].choices.length; index++) {
      const choice = questions[0].choices[index];
      console.log(choice, "choice");
      var choiceButton = document.createElement("button");
      choiceButton.value = choice;
      choiceButton.innerHTML = choice;
      choiceButton.setAttribute("content", choice)
      document.addEventListener("click", checkAnswer);
      testContainerElement.appendChild(choiceButton);


    }


  }
  function checkAnswer (event) {
    if (event.target)  
    console.log(event.target);
  }
  function score () {

  }

// get value of button comepare to answer in array and give as score 

// score increase total

// timer deduction for wrong answers 
document.appendChild.navId;
navId.appendChild.quizTimer;

// (done) Get questions (5) Multiple Choice 




// apply score changes/ subtract from timer for incorrect answers
// take final timer amount and create score
// add high score
// commit it to the memory thingy 
// pull form the memory to display the high scores added by initials
// Look at activity with commiting memory 
// put final touches on apperance (look at portfolio looks) (d-flex maybe or something like that )
// look into adding sound effects
// create a readME 
