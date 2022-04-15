const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalAgain = document.querySelector('.modal-again');

//score
let scoreEl = 20;

// high score

let highscoreEl = 0;

// Random number

let randomNumber = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener('click', () => {
  if (guess.value) {
    if (guess.value == randomNumber) {
      message.textContent = 'Congratulations!✅';
      number.textContent = randomNumber;
      body.style.background = '#dd02ff';
      if (scoreEl > highscoreEl) {
        highscoreEl = scoreEl;
        highscore.textContent = highscoreEl;
      }
    } else if (guess.value > randomNumber) {
      message.textContent = 'Too high! Try again ';
      scoreEl--;
      score.textContent = scoreEl;
    } else if (guess.value < randomNumber) {
      message.textContent = 'Too low! Try again ';
      scoreEl--;
      score.textContent = scoreEl;
    }
  } else {
    message.textContent = 'Type a number!';
  }

  if (scoreEl <= 0) {
    modalWrapper.classList.remove('hidden');
  }
});

againBtn.addEventListener('click', () => {
  againGame()
});

modalAgain.addEventListener('click', () => {
  againGame()
  modalWrapper.classList.add('hidden')
});


function againGame(){
  scoreEl = 20;
  score.textContent = scoreEl;
  body.style.background = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  randomNumber = Math.floor(Math.random() * 20) + 1;
}