'use strict';

// Elements selection
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');

let scores, isPlaying, currentScore, currentPlayer;

const init = function() {

    isPlaying = true;
    currentScore = 0;
    currentPlayer = 0;
    scores = [0, 0];

    dice.classList.add('hidden');

    score1.textContent = 0;
    score2.textContent = 0;

    current1.textContent = 0;
    current2.textContent = 0;

    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
};

init();


const switchPlayer = () => {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentScore = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function() {

    if (isPlaying) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        const url = 'dice-' + randomNumber + '.png';
        dice.setAttribute('src', './assets/' + url);
        dice.classList.remove('hidden');

        if (randomNumber !== 1) {
            currentScore = currentScore + randomNumber;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
        } else {
            // Switch player
            switchPlayer();
        }
    }

});

btnHold.addEventListener('click', function() {

    if (isPlaying) {
        scores[currentPlayer] += currentScore;
        document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];

        if (scores[currentPlayer] >= 20) {
            isPlaying = false;
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }

});

btnNew.addEventListener('click', init);