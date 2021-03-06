﻿/**
 * Created by bcuser on 4/4/18.
 */
var dice1;
var dice2;

function buttonClicked() {
    // ====================================================================================
    // #1 of homework - calculate 2 random integers for the dice.
    // ====================================================================================
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    console.log("This is dice 1: " + dice1);
    console.log("This is dice 2: " + dice2);
    
    // ====================================================================================
    // #2 of homework - change dice images based on their value when rolled.
    // ====================================================================================
    diceImage("image1", dice1);
    diceImage("image2", dice2);
    
    // ====================================================================================
    // #3 of homework - determine win/lose for each roll and display win/lose text.
    // ====================================================================================

    var winOrLose;
    var rollValue = dice1 + dice2;
    var balance = document.getElementById("balance").innerHTML;
    var turnCount = document.getElementById("turnCount").innerHTML;    
    var buttonBet = document.getElementById("ButtonBet");    
    
    
    // user wins if double, 7, or 11 is rolled 
    if(dice1 === dice2 || rollValue === 7 || rollValue === 11) {
        winOrLose = true;
        document.getElementById("status").innerHTML = "You win!";
        balance++;
        console.log(winOrLose);
    } else {
        winOrLose = false;
        document.getElementById("status").innerHTML = "You lose!";
        balance--;
        console.log(winOrLose);
    } // end of if/else statement
    
    // ====================================================================================
    // #4 of homework - update $ balance and number of turns
    // ====================================================================================
    document.getElementById("balance").innerHTML = balance;
    document.getElementById("turnCount").innerHTML = ++turnCount;
    
    // ====================================================================================
    // #5 of homework - when user balance reached 0, hide button and update game status
    // ====================================================================================    
    if(balance === 0){
        buttonBet.style.display = "none";
        document.getElementById("status").innerHTML = "GAME OVER!";
    }
}; // end of buttonClicked function

// function for updating dice image based on value rolled
function diceImage(HTMLimageID, dice){    
    switch(dice) {
        case 1:
            document.getElementById(HTMLimageID).src = "./images/dice-1.jpg";
            break;
        case 2:
            document.getElementById(HTMLimageID).src = "./images/dice-2.jpg";
            break;
        case 3:
            document.getElementById(HTMLimageID).src = "./images/dice-3.jpg";
            break;
        case 4:
            document.getElementById(HTMLimageID).src = "./images/dice-4.jpg";
            break;
        case 5:
            document.getElementById(HTMLimageID).src = "./images/dice-5.jpg";
            break;
        case 6:
            document.getElementById(HTMLimageID).src = "./images/dice-6.jpg";
            break;
        default:
            console.log("something's wrong with the dice image.");    
    }
}