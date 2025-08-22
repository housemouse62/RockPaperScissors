// Computer Turn
function getComputerChoice() {
    let ComputerResponse = Math.floor((Math.random() * 100));
    if (ComputerResponse < 33) {
        CChoice = "rock";
    } else if (ComputerResponse > 66) {
        CChoice = "paper";
    } else {
    CChoice = "scissors";}
    return CChoice;
    }

let rock = document.querySelector("#rock");
rock.addEventListener('click', () => 
    {playRound(humanChoice = "rock", computerChoice = getComputerChoice())
});

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => 
    {playRound(humanChoice = "paper", computerChoice = getComputerChoice())
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => 
    {playRound(humanChoice = "scissors", computerChoice = getComputerChoice())
});

    function playRound() {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        message.textContent = "You win! Rock SMASHES Scissors!";
        humanScore++;
            } else if (humanChoice === "scissors" & computerChoice === "paper") {
        message.textContent = "You win! Scissors SHREDS Paper!";
        humanScore++;
            } else if (humanChoice === "paper" & computerChoice === "rock") {
        message.textContent = "You win! Paper TOTALLY ENVELOPES Rock!";
        humanScore++;
            } else if (computerChoice === "rock" & humanChoice === "scissors") {
        message.textContent = "You lose! Rock SMASHES Scissors";
        computerScore++;
            } else if (computerChoice === "scissors" & humanChoice === "paper") {
        message.textContent = "You lose! Scissors SHREDS Paper!";
        computerScore++;
            } else if (computerChoice === "paper" & humanChoice === "rock") {
        message.textContent = "You lose! Paper TOTALLY ENVELOPES Rock!";
        computerScore++;
            } else {
        message.textContent = "It's a total tie! Try again."
            }
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);

        hS.textContent = `Human Score = ${humanScore}`;
        cS.textContent = `Computer Score = ${computerScore}`;
    };

//Scoreboard 
let humanScore = 0;
let computerScore = 0;

let divScore = document.querySelector("#score");

let hS = document.createElement("p");
hS.textContent = `Human: = ${humanScore}`;

let cS = document.createElement("p");
cS.textContent = `Computer: = ${computerScore}`;

divScore.appendChild(hS);
divScore.appendChild(cS);

console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)

//Messaging
let message = document.createElement("p");
divScore.appendChild(message);
    // if (HumanScore > ComputerScore) {
    //     console.log("YOU WIN!")
    // } else if (HumanScore < ComputerScore) {
    //     console.log("You LOSE!")
    // } else {
    //     console.log("Tie Game!")
    // }





// playGame();