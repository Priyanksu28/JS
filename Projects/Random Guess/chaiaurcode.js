let Random = parseInt(Math.random() * 100);

const userInput = document.querySelector('#guessField');
const Button = document.querySelector('#subt');
const Prev = document.querySelector('.guesses');
const Remain = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NoGuess = 1;

let playGame = 1;

if (playGame ==1) {
  Button.addEventListener('click', function (value) {
    value.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(userInput);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Enter number more then 1');
  } else if (guess > 100) {
    alert('Enter number les then 100');
  } else {
    prevGuess.push(guess);
    if (NoGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was: ${Random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === Random) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < Random) {
    displayMessage('Your guess is Too low');
  } else if (guess > Random) {
    displayMessage('Your guess is Too high');
  }
}
function displayGuess(guess) {
  userInput.value = '';
  Prev.innerHTML += `${guess} `;
  NoGuess++;
  Remain.innerHTML = `${11 - NoGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="startGame">Start new game</h3>`;
  StartOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  const RestartButton = document.querySelector('#startGame');
  RestartButton.addEventListener('click', function (value) {
    Random = parseInt(Math.random() * 100);
    prevGuess = [];
    NoGuess = 1;
    Prev.innerHTML = '';
    Remain.innerHTML = `${11 - NoGuess}`;
    userInput.removeAttribute('disabled', '');
    StartOver.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}
