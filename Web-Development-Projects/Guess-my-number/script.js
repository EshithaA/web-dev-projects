'use strict';
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function setMessage(message) {
    document.querySelector('.message').textContent = message;
}

function checkNumber() {

    let guess = Number(document.querySelector('.guess').value);


    //When player wins
    if (guess === num) {
        setMessage('🎉Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = num;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }

    // when player inputs falsy value
    else if (!guess) {
        setMessage('⛔ No number');
    }

    //When player enters wrong number
    else if (guess !== num && score >= 1) {

        setMessage(guess > num ? '📈Too high!' : '📉Too low!');
        score--;

        document.querySelector('.score').textContent = score;
        if (score === 0) {
            setMessage('👎You have lost the game!');
        }
    }
}


function reset() {
    score = 20;
    num = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#34eb74';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    setMessage('Start guessing...');

}

document.querySelector('.check').addEventListener('click', checkNumber);

document.querySelector('.again').addEventListener('click', reset);