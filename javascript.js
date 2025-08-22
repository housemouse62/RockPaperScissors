/*
Things to do:
- Make the UI look better, at least a little bit. Font, 
    buttons, etc...
- Turn the different processes into different funtions
- Turn conditional logic => tertiary 
- Have messaging say what the computer chose
- Have messaging disappear on MouseDown so that it's
    obvious a new round has happened.
- After the human or computer wins right now the score goes
    to zero with the message, a bit weird feeling as a player.
    Fix it!
*/


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
            };
        if (humanScore === 5) {
            message.textContent = "Your score is 5! WINNER WINNER!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            message.textContent = "Computer takes a fifth win. Game...over...Sorry!";
            humanScore = 0;
            computerScore = 0;
        } else {};
        
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);

        hS.textContent = `Human: ${humanScore}`;
        cS.textContent = `Computer: ${computerScore}`;
    };

//Scoreboard 
let humanScore = 0;
let computerScore = 0;

let divScore = document.querySelector("#score");

let hS = document.createElement("p");
hS.textContent = `Human: ${humanScore}`;

let cS = document.createElement("p");
cS.textContent = `Computer: ${computerScore}`;

divScore.appendChild(hS);
divScore.appendChild(cS);

console.log("Human: " + humanScore)
console.log("Computer: " + computerScore)

//Messaging
let message = document.createElement("p");
divScore.appendChild(message);