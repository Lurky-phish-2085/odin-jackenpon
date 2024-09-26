const choices = ['rock', 'paper', 'scissors'];

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

rockBtn.addEventListener('click', () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
  playRound("scissors", getComputerChoice());
});

const resultsDisplay = document.querySelector("#results");
const gameStatsDisplay = document.querySelector("#stats");
const finalResultDisplay = document.querySelector("#final-result");

let round = 1;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    updateResults("It's a tie!")
    round++;
    updateGameStats(round);
    announceFinalResult();

    return;
  }

  const playerWon = (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  if (!playerWon) {
    computerScore++;
    updateResults(`You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
    round++;
    updateGameStats(round);
    announceFinalResult();

    return;
  }

  humanScore++;
  updateResults(`You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
  round++;
  updateGameStats(round);
  announceFinalResult();
}

function getResult() {
  if (humanScore === computerScore) {
    return "It's a TIE!";
  }


  return humanScore > computerScore ? 'You WIN' : 'You LOSE';
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const promptMessage = 'Choose which to use (rock, paper, scissors): ';
  let humanChoice = prompt(promptMessage);

  while (!choices.includes(humanChoice.toLowerCase())) {
    alert('Please try again.');
    humanChoice = prompt(promptMessage);
  }

  return humanChoice;
}

function announceFinalResult() {
  if (round === 6) {
    finalResultDisplay.innerHTML = `<p>${getResult()}</p>`;
    updateResults(result);
    updateGameStats(5);
  }
}

function updateResults(result) {
  const resultMessage = document.createElement("p");
  resultMessage.textContent = `${round}: ${result}`;

  resultsDisplay.insertBefore(resultMessage, resultsDisplay.firstElementChild);
}

function updateGameStats(r = round) {
  gameStatsDisplay.innerHTML = `<p>ROUND: ${r}&emsp;SCORE: ${humanScore}&emsp;CPU: ${computerScore}</p>`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function repeat(times, callback) {
  for (let index = 0; index <= Number(times); index++) {
    callback(index);
  }
}
