function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function getHumanChoice() {
    return parseInt(prompt("Enter your choice (rock = 1, paper = 2, scissors = 3):"));
}