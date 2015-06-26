////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    ////////////////////////////////////////////////
    /*           Write Your Code Below            */
    ////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move;
    move = move || getInput();
    /* Your Expression */
    ;
}


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move;
    move = move || randomPlay();
    /* Your Expression */
    ;
    return

}


function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else {
        winner = "tie";
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var playerMove = getInput();
    var computerMove = randomPlay();
    var winner = getWinner(playerMove, computerMove);
    while (playerWins < 5 && computerWins < 5) {
        if (winner === "player") {
            console.log("Player wins!" + "Player chose" + playerMove + "while computer chose " + computerMove + "the score is currently" + playerWins + "to" + computerWins);
            playerWins++;
        } else if (winner === "computer") {
            console.log("Computer wins!" + "Computer chose" + computerMove + "player chose" + playerMove + "the score is currently" + playerWins + "to" + computerWins);
            computerWins++;
        } else(winner === "tie") {
            console.log("It is a tie!" + "the score is currently" + playerWins + "to" + computerWins);
        }
    }
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
