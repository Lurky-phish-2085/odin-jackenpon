const choices = ['rock', 'paper', 'scissors'];

playGame();

function playGame() {
  const rounds = 5;

  let humanScore = 0;
  let computerScore = 0;

  repeat(rounds, () => {
    playRound(getHumanChoice(), getComputerChoice());
  });

  const result = humanScore > computerScore ? 'You WIN' : 'You LOSE';
  alert(result);
  displayScores();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert("It's a tie!");
      return;
    }

    const playerWon = (humanChoice === 'rock' && computerChoice === 'scissors') || 
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper');

    if (!playerWon) {
      alert(`You Lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
      computerScore++;
      displayScores();
      return;
    }

    alert(`You Win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
    humanScore++;
    displayScores();
  }

  function displayScores() {
    alert(`SCORES\n\nPLAYER: ${humanScore}\nCPU: ${computerScore}`);
  }
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

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function repeat(times, callback) {
  for (let i = 0; i <= Number(times); i++) {
    callback();
  }
}
