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
  return x;
  
  /*counts how many times the user have c as an answer*/
}

//UI logic

function generateAnswer() {
  const snakeChoice = document.querySelector("input[name='snake']:checked").value;
  const appleChoice = document.querySelector("input[name='apple']:checked").value;
  const drinkChoice = document.querySelector("input[name='drink']:checked").value;
  const leapAns = parseInt(document.getElementById("leap").value);
  const whatAns = document.getElementById("what").value;
  const cCtr = cCounter(snakeChoice, appleChoice, drinkChoice);


/** User needs to answer the leap year question
correctly for a chance to get the other results or
else they would always have COBOL as their coding 
language since it's the default value **/

  if(whatAns.includes("what"))
  {
    //alert(document.querySelector("input[name='snake']:checked").value);
    document.getElementById("ansDiv").innerText = "Rick Roll";
    document.getElementById("ansDiv").innerHTML = '<iframe width="300" src="https://www.youtube.com/embed/4-UbHw8eDzM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>';
  }
  else if(cCtr === 3 && leapAns === 366)
  {
    document.getElementById("ansDiv").innerHTML = "<h1>C++</h1> <img src='/img/cplus.png' />";
  }
  else if(drinkChoice === "a" && appleChoice != "a" && leapAns === 366)
  {
    document.getElementById("ansDiv").innerHTML = "<h1>Java</h1> <img src='/img/java.png' />";
  }
  else if (snakeChoice === "a" && leapAns === 366) {
    document.getElementById("ansDiv").innerHTML = "<h1>Python</h1> <img src='/img/python.png' />";
  }
  else {
    document.getElementById("ansDiv").innerHTML = "<h1 id='cobol'>COBOL</h1>";
  }
}

window.addEventListener("load", function() {
  const cont = document.getElementById("continue");
  cont.addEventListener("click", generateAnswer);
});