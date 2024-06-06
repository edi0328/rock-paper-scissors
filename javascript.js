console.log("Hello World!");

//Choose randomly between rock, paper and scissors
function getComputerChoice() {
    let num = Math.random() * 3;
    if (num < 1) return "rock";
    if (num < 2) return "paper";
    if (num < 3) return "scissors";
}

//Get valid choice from user
function getHumanChoice() {
    let choice;
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
            choice = prompt("Rock, paper, scissors!!!").toLowerCase();
    }

    return choice;
}


//Play 5 rounds of rock paper scissors
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    //Decide outcome of round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock") {
                humanScore++;
                console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
            }
        else if (humanChoice != computerChoice) {
            computerScore++;
            return console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
        }
    
        else {
            return console.log("Tie!");
        }
    }

    let humanChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) console.log("You win!");
    else if (computerScore > humanScore) console.log("Computer wins, too bad.");
    else console.log("It's a tie!");
}


