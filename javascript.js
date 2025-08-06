 function getComputerChoice() {
    let ComputerResponse = Math.floor((Math.random() * 100));
    console.log(ComputerResponse);
    if (ComputerResponse < 33) {
        CChoice = "rock";
    } else if (ComputerResponse > 66) {
        CChoice = "paper";
    } else {
    CChoice = "scissors";}
    console.log(CChoice);
    return CChoice;
    }
    

function getHumanChoice() {
    let HumanResponseU = prompt("Rock, Paper or Scissors?");
    let HumanResponse = HumanResponseU.toLowerCase();
    console.log(HumanResponse);
    return HumanResponse.toLowercase;
}

let HumanScore = 0
let ComputerScore = 0

function playRound(humanChoice, computerChoice) {

console.log(humanChoice)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(computerSelection);
console.log(humanSelection);