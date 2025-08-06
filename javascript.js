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
    

function getHumanChoice() {
    let HumanResponseU = prompt("Rock, Paper or Scissors?");
    let HumanResponse = HumanResponseU.toLowerCase();
    return HumanResponse;
}

let HumanScore = 0
let ComputerScore = 0
console.log("Human: " + HumanScore)
console.log("Computer: " + ComputerScore)
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock SMASHES Scissors!");
        HumanScore++;
    } else if (humanChoice === "scissors" & computerChoice === "paper") {
        console.log("You win! Scissors SHREDS Paper!");
        HumanScore++;
        } else if (humanChoice === "paper" & computerChoice === "rock") {
        console.log("You win! Paper TOTALLY ENVELOPES Rock!");
        HumanScore++;
        } else if (computerChoice === "rock" & humanChoice === "scissors") {
        console.log("You lose! Rock SMASHES Scissors");
        ComputerScore++;
        } else if (computerChoice === "scissors" & humanChoice === "paper") {
        console.log("You lose! Scissors SHREDS Paper!");
        ComputerScore++;
        } else if (computerChoice === "paper" & humanChoice === "rock") {
        console.log("You lose! Paper TOTALLY ENVELOPES Rock!");
        ComputerScore++;
        } else {
        console.log("It's a total tie! Try again.")
        }
        console.log("Human: " + HumanScore);
        console.log("Computer: " + ComputerScore);
    }


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);