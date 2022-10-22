//Global Variable
let nameUser = "";

//business logic
function cCounter(choice1, choice2, choice3) {
  
  let x = 0;
  if(choice1 === "c"){
    x++;
  }
  if(choice2 === "c"){
    x++;
  }
  if(choice3 === "c"){
    x++;
  }
  return x; //counts how many times the user have c as an answer and return the value  
}

//UI logic

function showNameForm(event){
  event.preventDefault();
  document.getElementById("ansDiv").removeAttribute("class");
  const form2 = document.getElementById("nameForm");
  document.getElementById("continue").style.display = "none";
  form2.addEventListener("submit",generateAnswer);
}

function generateAnswer(event) {
  event.preventDefault();
  nameUser = document.getElementById("name").value.split(" ")[0];

//Block Variables
  let firstName = nameUser.charAt(0).toUpperCase() + nameUser.slice(1);
  const snakeChoice = document.querySelector("input[name='snake']:checked").value;
  const appleChoice = document.querySelector("input[name='apple']:checked").value;
  const drinkChoice = document.querySelector("input[name='drink']:checked").value;
  const leapAns = parseInt(document.getElementById("leap").value);
  const whatAns = document.getElementById("what").value;
  const cCtr = cCounter(snakeChoice, appleChoice, drinkChoice);

//Premade Text
  const javaTxt = firstName + ", you love coffee so much that you don't bleed blood but a thick goo of black liquid gold which is really just coffee. JAVA is the language for people like you who are always on the grind. Make sure to get some sleep every once in a while!";

  const cplusText = "Consistency is a key to progress. At least that's what you believe in," + firstName + ". C++ is the coding language for Do-ers like you! There's no need to reinvent the wheel, am I right?"

  const pythonText = "THERE'S A SNAKE IN MY BOOT! Snakes are the most misunderstood creatures in the world. Snakes can't even compare to humans. If you love snakes " + firstName + " then Python is the language for you. Have you tried Snake sticks?"

  const cobolText = "COBOL is an old language. How old are you anyway, " + firstName +"?"


/** User needs to answer the leap year question
correctly for a chance to get the other results or
else they would always have COBOL as their coding 
language since it's the default value **/

  if(whatAns.includes("what")) {
    document.getElementById("ansDiv").innerHTML ='<iframe width="300" src="https://www.youtube.com/embed/4-UbHw8eDzM?controls=0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
    document.getElementById("ansDiv").innerHTML += "<h2>Congrats! "+firstName+" You found an easter egg!<h2><h3>Enjoy these happy monkeys!<h3>";
  }
  else if(cCtr === 3 && leapAns === 366) {
    document.getElementById("ansDiv").innerHTML = "<h1>C++</h1> <img src='/img/cplus.png' />";
    document.getElementById("ansDiv").innerHTML += "<p>" + cplusText + "<p>"
  }
  else if(drinkChoice === "a" && appleChoice != "a" && leapAns === 366) {
    document.getElementById("ansDiv").innerHTML = "<h1>Java</h1> <img src='/img/java.png' />";
    document.getElementById("ansDiv").innerHTML += "<p>" + javaTxt + "<p>"
  }
  else if (snakeChoice === "a" && leapAns === 366) {
    document.getElementById("ansDiv").innerHTML = "<h1>Python</h1> <img src='/img/python.png' />";
    document.getElementById("ansDiv").innerHTML += "<p>" + pythonText + "<p>"
  }
  else {
    document.getElementById("ansDiv").innerHTML = "<h1 id='cobol'>COBOL</h1>";
    document.getElementById("ansDiv").innerHTML += "<p>" + cobolText + "<p>"
  }

  document.getElementById("ansDiv").innerHTML += '<br><a href="#" id="clear" onClick="window.location.reload();">Clear form and Try again</a>';
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", showNameForm);
});