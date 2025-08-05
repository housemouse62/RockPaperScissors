
function getComputerChoice() {
    let CompChoice = Math.floor((Math.random() * 100));
    if (CompChoice < 33) {
        CChoice = "rock";
    } else if (CompChoice > 66) {
        CChoice = "paper";
    } else {
    CChoice = "scissors";
    }
    console.log(CChoice)
}

function getHumanChoice() {
    let HChoice = prompt("1 for Rock, 2 for Paper or 3 for Scissors?");
    console.log(HChoice);
    if (HChoice == "1") {
        console.log("rock");
    } else if (HChoice == "2") {
        console.log("paper");
    } else if (HChoice == "3") {
        console.log("scissors");
    }
    console.log(HChoice);
}



let HScore = 0; 
let CScore = 0;

console.log(HScore);
console.log(CScore);

if (HChoice === 1 && CChoice = "scissors") {
    (humanScore = HScore + 1);
} else if (HChoice = "2" && CChoice = "rock") {
    (humanScore = HScore + 1);
} else if (HChoice = "3" && CChoice = "paper") {
    (humanScore = HScore + 1);
}   else {
    (computerScore = CScore + 1);
}
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);


getHumanChoice()
getComputerChoice()