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
  }
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
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
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const endGameModal = document.getElementById("endGameModal");
const overlay = document.getElementById("overlay");
const winnerHeading = document.getElementById("winnerHeading");
const winnerText = document.getElementById("winnerText");
const playAgainBtn = document.getElementById("playAgainBtn");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));
playAgainBtn.addEventListener("click", newGame);

function handleClick(playerSelection) {
  const computerSelection = computerGuess();

  playRound(playerSelection, computerSelection);
  updateScore();

  if (playerSelection === "rock") {
    playerSign.setAttribute("class", "fa-solid fa-hand-back-fist");
  } else if (playerSelection === "paper") {
    playerSign.setAttribute("class", "fa-solid fa-hand");
  } else {
    playerSign.setAttribute("class", "fa-solid fa-hand-scissors");
  }

  if (computerSelection === "rock") {
    computerSign.setAttribute("class", "fa-solid fa-hand-back-fist");
  } else if (computerSelection === "paper") {
    computerSign.setAttribute("class", "fa-solid fa-hand");
  } else {
    computerSign.setAttribute("class", "fa-solid fa-hand-scissors");
  }
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreMessage.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    scoreMessage.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreMessage.textContent = "You lost!";
  }

  if (playerScore === 5 || computerScore === 5) {
    return showEndGameModal();
  }
  playerPoints.textContent = `Player Score: ${playerScore}`;
  computerPoints.textContent = `Computer Score: ${computerScore}`;
}

function showEndGameModal() {
  if (playerScore === 5) {
    winnerHeading.textContent = "Winner!";
    winnerText.textContent = "You defeated the computer and won the game!";
  } else {
    winnerHeading.textContent = "You lose!";
    winnerText.textContent = "Beaten by a computer!";
  }

  overlay.classList.toggle("active");
  endGameModal.classList.toggle("active");
}

// TODO: Reset scores rather than refreshing page
function newGame() {
  window.location.reload();
}
