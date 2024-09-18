// Lexical scoping and clouser :Clouser Scoping


// When we return a inner function within the parent function then we return not only function we return whole lexical scope
//the return of child function called clouser which capbel to access whole lexical scope of parent function
// Mozial Mdn example
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


// Different between function and function reference
// Clouser real world issue and solution 
// like we want to change color theme of web site on click event of a button
const greenBtn = document.getElementById("greenBtn");
const redBtn = document.getElementById("redBtn");
const  elem  = document.body
console.log(greenBtn.textContent)
/* 
  greenBtn.onclick = function(){
    elem.style.backgroundColor = "green";
  }
  redBtn.onclick = function() {
    elem.style.backgroundColor = "red";
  }

 */

// if we need implement 50 color or more like changing theme or and model color 
// At this time we need to copy this code as many time as number model or theme we have
// So at this time if we repeating same code multiple time 
//The feature of object oriented programing code should be dry fail 
// To maintain this featuere in this real world example we use to write the code

// We create  a function click handelr

function changeColor(color){
  return function () {
    elem.style.backgroundColor = `${color}`;
  }
  
}
greenBtn.onclick = changeColor("green");
redBtn.onclick = changeColor("red");
