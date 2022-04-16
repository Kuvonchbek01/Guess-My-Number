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
const modalWin = document.querySelector('.modal-win-wrapper');
const modalWinAgain = document.querySelector('.modal-win-again')

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
      body.style.background = '#18d13d';
      if (scoreEl > highscoreEl) {
        highscoreEl = scoreEl;
        highscore.textContent = highscoreEl;
      }

      setTimeout(function winner() {
        modalWin.classList.remove('hidden');
        let winmusic = new Audio('2.mp3')
        winmusic.play()
      }, 1000);
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
    setTimeout(function loser() {
      modalWrapper.classList.remove('hidden');
      modalWrapper.classList.remove('hidden');
      let loserMusic = new Audio('3.mp3')
      loserMusic.play()
    }, 1000);
  }
});

againBtn.addEventListener('click', () => {
  againGame();
});

modalAgain.addEventListener('click', () => {
  againGame();
  modalWrapper.classList.add('hidden');
  modalWin.classList.add('hidden')
});

modalWinAgain.addEventListener('click', () => {
  againGame();
  modalWrapper.classList.add('hidden');
  modalWin.classList.add('hidden')
});

function againGame() {
  scoreEl = 20;
  score.textContent = scoreEl;
  body.style.background = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  randomNumber = Math.floor(Math.random() * 20) + 1;
}

// background music
function bodyMusic() {
  const music = new Audio('1.mp3');
  music.play();
}
bodyMusic();
