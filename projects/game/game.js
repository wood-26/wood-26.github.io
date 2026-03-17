let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here

let timeCount = 30;
//If you need, add any "helper" functions here


//Make one function for each location
function timeStop(){
    clear();
    if (timeCount = 0){
        print("You did not make it in time to see the person.");
    }
}

function movieTheater() {
    clear();
    print("\nYou find the person in the movie theater.");
}

function hallwayATwo() {
    clear();
    print("\nYou are in Hallway A2!");
    print("\nWhere do you want to go next? Say one of these choices:" + "\nmovie theater");
    
    function processInput(input){
        if (input.toLowerCase() === "movie theater"){
            movieTheater();
        timeCount=timeCount-1;
        }
        else{
            stayHere();
            waitThenCall(hallwayATwo);
        }
    }
    waitForInput(processInput);
}
function clothingStore(){
    clear();
    print("\nYou enter the busy clothing store. You do not see the person in the store.");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\thallway b1");
    function processInput(input){
        if (input.toLowerCase() === "hallway b1"){
            hallwayBOne();
        }
        else {
            stayHere();
            waitThenCall(clothingStore);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}
function jewelryStore(){
    clear();
    print("\nYou enter the jewelry store. You do not see the person in the store.");
    print("\nWhere do you want to go next? Say one of these choices:" +"\n\thallway b");

    function processInput(input){
        if (input.toLowerCase() === "hallway b"){
            hallwayBOne();
        }
        else {
            stayHere();
            waitThenCall(jewelryStore);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}
function hallwayBOne() {
    clear();
    print("\nYou are in Hallway B!");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\tClothing Store" + "\n\tJewelry Store");

    function processInput(input){
        if (input.toLowerCase() === "clothing store") {
            clothingStore();
        }
        else if (input.toLowerCase() === "jewelry store") {
            jewelryStore();
        }
        else {
            stayHere();
            waitThenCall(hallwayBOne);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}



function bookStore(){
    clear();
    print("\nYou enter the quiet book store. You do not see the person in the store.");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\thallway b1");

    function processInput(input){
        if (input.toLowerCase() === "hallway b1"){
            hallwayBOne();
        }
        else{
            stayHere();
            waitThenCall(bookStore);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}
function hallwayAOne(){
    clear();
    print("\nYou are in Hallway A!");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\tBook Store");
    
    function processInput(input){
        if (input.toLowerCase() === "book store"){
            bookStore();
        }
        else{
            stayHere();
            waitThenCall(hallwayAOne);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}

function secondFloor() {
    clear();
    print("\nYou are in the second floor!");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\tHallway A2");

    function processInput(input){
        if (input.toLowerCase() === "hallway a2") {
            hallwayATwo();
        }
        else {
            stayHere();
            waitThenCall(secondFloor);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);           
}
function firstFloor() {
    clear();
    print("\nYou are in the first floor!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\thallway a1" + "\n\thallway b" + "\n\tSecond Floor");

    function processInput(input){
        if (input.toLowerCase() === "hallway a1") {
            hallwayAOne();
        }
        else if (input.toLowerCase() === "hallway b") {
            hallwayBOne(); }
        else if (input.toLowerCase() === "second floor") {
            secondFloor();
        }
        else {
            stayHere();
            waitThenCall(firstFloor);
        timeCount=timeCount-1;
        }
    }
    waitForInput(processInput);
}


//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("You are in a mall, trying to find someone. Go through the stores to try and find them.");
    print("Welcome to my game! Press any key to get off the bus");

    function processInput(input){
        firstFloor();
    }
    waitForInput(processInput);
}
