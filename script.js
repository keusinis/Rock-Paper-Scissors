function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    return prompt("Enter your choice (rock, paper, scissors):");
}