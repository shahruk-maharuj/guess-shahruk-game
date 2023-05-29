'use strict';

let score = 20;
let highScore = 0;
let secretNumber = generateSecretNumber();

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function updateScore(score) {
  document.querySelector('.score').textContent = score;
}

function updateNumber(number) {
  document.querySelector('.number').textContent = number;
}

function updateBackground(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function updateNumberWidth(width) {
  document.querySelector('.number').style.width = width;
}

function resetGame() {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  updateScore(score);
  updateNumber('?');
  document.querySelector('.guess').value = '';
  updateBackground('#2e2231');
  updateNumberWidth('15rem');
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number! ⛔️');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    updateNumber(secretNumber);
    updateBackground('#60b347');
    updateNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉');
      score--;
      updateScore(score);
    } else {
      displayMessage('You lost the game! 🤯');
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);

resetGame();