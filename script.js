function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    return parseInt(prompt("Enter your choice (rock = 1, paper = 2, scissors = 3):")) - 1;
}
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice)
        return null; //(human won, computer won)
    switch(humanChoice) {
        case 0:
            if(computerChoice === 2)
                return true;
        case 1:
            if(computerChoice === 0)
                return true;
        case 2:
            if(computerChoice === 1)
                return true;
        default:
            return null;
        }
}