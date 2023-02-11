// generates a random choice 
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

// actual game code
function playGame(playerChoice, computerChoice) { 
    if(playerChoice === computerChoice) {
        return "Draw!";
    } else if((playerChoice == "rock" && computerChoice == "paper") || 
                (playerChoice == "paper" && computerChoice == "scissors") ||
                (playerChoice == "scissors" && computerChoice == "rock")) {
        computerPoints++;
        return `you Lose! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
    } else {
        userPoints++;
        return `You Won:) ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    }
}

// checks who is winner for total games
function checkWinner(userPoints, computerPoints) {
    if(userPoints > computerPoints) {
        return "You Won the match :)";
    } else if(userPoints < computerPoints) {
        return "You Lose!";
    } else {
        return "Draw";
    }
}

// main function
function game() {
    let count = 1;
    while(count <= 5) {
        let playerChoice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
        let computerChoice = getComputerChoice();
        console.log(playGame(playerChoice, computerChoice));
        count++;
    }
    console.log(checkWinner(userPoints, computerPoints));
}

var userPoints = 0;
var computerPoints = 0;
game();
