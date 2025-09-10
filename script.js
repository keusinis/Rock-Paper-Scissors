const CHOICES = ["rock", "paper", "scissors"];

const scoreState = {
  human: 0,
  computer: 0,
};

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "tie";
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "loose";
}

function updateScore() {
  document.querySelector("#human-score span").textContent = scoreState.human;
  document.querySelector("#computer-score span").textContent = scoreState.computer;
}

function showRoundResult(result, human, computer) {
  let message = {
    empty: "",
    win: "You win!",
    loose: "You loose!",
    tie: "It's a tie!",
  };
  document.querySelector("#human-choice span").textContent = human;
  document.querySelector("#computer-choice span").textContent = computer;
  document.querySelector(".outcome > p").textContent = message[result];
}

function checkGameOver() {
  if (playUpTo === scoreState.computer || playUpTo === scoreState.human)
    resetGame();
}

function resetGame() {
  let winner =
    scoreState.computer > scoreState.human
      ? "Computer won the game"
      : "You won the game";
  alert(winner);
  scoreState.computer = 0;
  scoreState.human = 0;
  updateScore();
  showRoundResult("empty", "", "");
}
const playUpTo = parseInt(prompt("Play up to:", 5));
document.querySelectorAll(".choices > button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const human = btn.id;
    const computer = getComputerChoice();
    const result = playRound(btn.id, computer);
    
    if (result === "win") scoreState.human++;
    if (result === "loose") scoreState.computer++;
    updateScore();
    showRoundResult(result, human, computer);
    checkGameOver();
  });
});