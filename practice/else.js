"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log("test");
let yourName = prompt("What is your name?");
addToBody("Hi " + yourName);
*/

let temp = prompt("What is the temperature outside?");
temp = Number(temp);
if (temp <= 32) {
    addToBody("It's freezing! Stay inside!");
}else if(temp >= 80){
    addtoBody("Go to the beach!");
}else{
    addToBody("Go for a walk"):
}

addToBody("Have a nice day!");


