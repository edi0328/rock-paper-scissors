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

//Decide outcome of round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            displayResult(`You win, ${humanChoice} beats ${computerChoice}!`);
        }
    else if (humanChoice != computerChoice) {
        computerScore++;
        displayResult(`You lose, ${computerChoice} beats ${humanChoice}.`);
    }

    else {
        displayResult("Tie!");
    }
}

function displayScore(hScore, cScore) {
    const score = document.querySelector("#score");
    if (hScore == 5) {
        score.textContent = "Human wins!";
        humanScore = 0;
        computerScore = 0;
    }
    else if (cScore == 5) {
        score.textContent = "Computer wins!"
        humanScore = 0;
        computerScore = 0;
    }
    else score.textContent = `Human: ${hScore} Computer: ${cScore}`;
}

function displayResult(result) {
    const res = document.querySelector("#result");
    res.textContent = result;
}

let humanScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", (e) => {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    displayScore(humanScore, computerScore)
})});