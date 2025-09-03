function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, scissors):");
}
function playRound(humanChoice, computerChoice) {
    console.log(`${humanChoice} ${computerChoice}`)
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice)
        return null;
    switch(humanChoice) {
        case "rock":
            if(computerChoice === "scissors")
                return true;
            break;
        case "paper":
            if(computerChoice === "rock")
                return true;
            break;
        case "scissors":
            if(computerChoice === "paper")
                return true;
            break;
        default:
            return null;
        }
        return false;
}

let humanScore = 0;
let computerScore = 0;
for(let i = 0; i < 5; i++) {
    let outcome = playRound(getHumanChoice(), getComputerChoice());
    if(outcome === true)
        humanScore++;
    if(outcome === false)
        computerScore++;
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`);
}