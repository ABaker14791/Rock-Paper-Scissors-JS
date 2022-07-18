let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundWinner = "player";
    playerPoints.textContent = `player Score: ${playerScore}`;
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  }
}

function computerGuess() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// UI
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const scoreMessage = document.getElementById("scoreMessage");
const playerPoints = document.getElementById("playerPoints");
const computerPoints = document.getElementById("computerPoints");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function handleClick(playerSelection) {
  const computerSelection = computerGuess();

  playRound(playerSelection, computerSelection);

  //   console.log(playerSelection);
  //   console.log(playerScore);
  //   console.log(computerScore);
  console.log(roundWinner);
  //   console.log(computerSelection);
}
