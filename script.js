'use strict';

let check = document.querySelector('.check');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

check.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message.textContent = '⛔ No Number!';
    }
    else if (guess == secretNumber) {
        message.textContent = '🎉 Correct Number';
        number.textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        number.style.width ='30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber? '📈 Too high!' : '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = ' 💥 You lost the game!';
        }
    }
})


let again = document.querySelector('.again');
again.addEventListener('click' , function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'start guessing ...';
    document.querySelector('.score').textContent = score;
    number.textContent = '?';
    number.style.width = '15rem'
    document.querySelector('.guess').value = ' ';
    document.body.style.backgroundColor = '#222';
})