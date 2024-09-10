const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const promptMessage = 'Choose which to use (rock, paper, scissors): '
  let humanChoice = prompt(promptMessage);

  while (!choices.includes(humanChoice.toLowerCase())) {
    alert('Please try again.')
    humanChoice = prompt(promptMessage);
  }

  return humanChoice;
}
