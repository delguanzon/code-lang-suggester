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
}

//UI logic
function generateAnswer() {
  const snake = document.querySelector("input[name='snake']:checked").value;
  const apple = document.querySelector("input[name='apple']:checked").value;
  const drink = document.querySelector("input[name='drink']:checked").value;
  const leap = parseInt(document.getElementById("leap").value);
  const what = document.getElementById("what").value;
  const cCtr = cCounter(snake, apple, drink); //count how many times user chose c

  if(what.includes("what"))
  {
    //alert(document.querySelector("input[name='snake']:checked").value);
    document.getElementById("ansDiv").innerText = "Rick Roll";
  }
  else if(cCtr === 3 && leap === 366)
  {
    document.getElementById("ansDiv").innerText = "C++";
  }
  else if(drink === "a" && apple != "a" && leap === 366)
  {
    document.getElementById("ansDiv").innerText = "Java";
  }
  else if (snake === "a" && leap === 366) {
    document.getElementById("ansDiv").innerText = "Python";
  }
  else {
    document.getElementById("ansDiv").innerText = "Sorry, we couldn't determine the best language for you.";
  }
}

window.addEventListener("load", function() {
  const cont = document.getElementById("continue");
  cont.addEventListener("click", generateAnswer);
});