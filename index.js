/**
 * Created by bcuser on 4/4/18.
 */
var dice1;
var dice2;


function buttonClicked() {
    // ====================================================================================
    // #1 of homework instructions - calculate 2 random integers for the dice.
    // ====================================================================================
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("This is dice 1: " + dice1);
    console.log("This is dice 2: " + dice2);
    
    // ====================================================================================
    // #2 of homework instructions - change dice images based on their value when rolled.
    // ====================================================================================
    //      I think this switch statement should be in its own function, but for now, I 
    //      just wanted to get this working and then when the assignment is finished, we can step
    //      back to look at everything and see how best to organize.
    switch(dice1) {
        case 1:
            document.getElementById("image1").src = "./images/dice-1.jpg";
            break;
        case 2:
            document.getElementById("image1").src = "./images/dice-2.jpg";
            break;
        case 3:
            document.getElementById("image1").src = "./images/dice-3.jpg";
            break;
        case 4:
            document.getElementById("image1").src = "./images/dice-4.jpg";
            break;
        case 5:
            document.getElementById("image1").src = "./images/dice-5.jpg";
            break;
        case 6:
            document.getElementById("image1").src = "./images/dice-6.jpg";
            break;
        default:
            console.log("something's wrong with dice1.");
    } // end of dice 1 switch statement
    
        switch(dice2) {
        case 1:
            document.getElementById("image2").src = "./images/dice-1.jpg";
            break;
        case 2:
            document.getElementById("image2").src = "./images/dice-2.jpg";
            break;
        case 3:
            document.getElementById("image2").src = "./images/dice-3.jpg";
            break;
        case 4:
            document.getElementById("image2").src = "./images/dice-4.jpg";
            break;
        case 5:
            document.getElementById("image2").src = "./images/dice-5.jpg";
            break;
        case 6:
            document.getElementById("image2").src = "./images/dice-6.jpg";
            break;
        default:
            console.log("something's wrong with dice2.");
    } // end of dice 2 switch statement
    
    
    // ====================================================================================
    // #3 of homework instructions - determine a win or lose for each roll.
    // ====================================================================================
    //      The rest of the code below that is commented out is my attempt at #4 of the
    //      homework instructions. I am unable to get it to work right now. The userBalance only
    //      updates once, not each time the button is clicked. Perhaps you can work on #5 and #6
    //      of the homework instructions. I will keep working on this too, but I thought that would
    //      be a good spot to split this assignment.  After it's working, we can discuss moving things
    //      around so the code is well organized, etc.
    
    var winOrLose;
    var rollValue = dice1 + dice2;
//    var userBalance = 5;
//    console.log("user balance is: $" + userBalance);
    
    if(dice1 === dice2) {
        winOrLose = true;
        console.log(winOrLose);
//        userBalance = userBalance + 1;
//        document.getElementById("balance").innerHTML = userBalance;
//        console.log(userBalance);
    } else if (rollValue === 7) {
        winOrLose = true;
        console.log(winOrLose);
//        userBalance = userBalance + 1;
//        document.getElementById("balance").innerHTML = userBalance;
//        console.log(userBalance);
    } else if (rollValue === 11) {
        winOrLose = true;
        console.log(winOrLose);
//        userBalance = userBalance + 1;
//        document.getElementById("balance").innerHTML = userBalance;
//        console.log(userBalance);
    } else {
        winOrLose = false;
        console.log(winOrLose);
//        userBalance = userBalance - 1;
//        document.getElementById("balance").innerHTML = userBalance;
//        console.log(userBalance);
    } // end of if/else statement
}; // end of buttonClicked function



    



