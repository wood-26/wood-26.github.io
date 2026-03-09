let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are in the first floor!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tClothing store" + "\n\tBook store" + "\n\t2nd Floor");
    
    function processInput(input){
        if (input.toLowerCase() === "clothing store") {
            locationB();
        } 
        else if (input.toLowerCase() === "book store") {
            locationC(); }
        else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in the clothing store!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tFirst floor");
    
    function processInput(input){
        if (input.toLowerCase() === "first floor") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC() {
    clear();
    print("\nYou are in the book store!");
    print("\nWhere do you want to go next? Say one of these choices:" + "\n\tFirst floor");
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to get off the bus");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
