'use strict'

var output = document.getElementById('output');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var result = document.getElementById('result');
var newgame = document.getElementById('newgame');
var round = document.getElementById("round");

newgame.addEventListener('click', start);
rock.addEventListener('click', user);
paper.addEventListener('click', user);
scissors.addEventListener('click', user);

var loses = 0;
var wins = 0;
var games = 0;
var rounds;

// function to new game button

function start() {
    var roundcounter = window.prompt('How many rounds would you like to play?');
    if (!isNaN(roundcounter) && roundcounter > 0) {
        rounds = roundcounter;
        round.innerHTML = 'You have ' + rounds + ' rounds.' + '<br><br>';
    } else {
        round.innerHTML = 'Input needs to be a number' + '<br><br>'
    }
}

function user() {

    // user choice 

    var playerMove = this.id;

    // computer choice function

    var comp = function() {
        var compchoice = Math.floor(Math.random() * 3 + 1);

        if (compchoice == 1) {
            compchoice = "rock";
        }
        if (compchoice == 2) {
            compchoice = "paper";
        }
        if (compchoice == 3) {
            compchoice = "scissors";
        }
        return compchoice;
    }

    function compare(player, compchoice) {
        var compchoice = comp();
        if (player == compchoice) {
            output.innerHTML = 'It`s a tie!';
        } else if (player == 'rock') {
            if (compchoice == 'scissors') {
                wins++;
                output.innerHTML = 'You won! computer choice Scissors';
            } else if (compchoice == 'paper')  {
                loses++;
                output.innerHTML = 'You lost! computer choice Paper';
            }
        } else if (player == 'paper') {
            if (compchoice == 'rock') {
                wins++;
                output.innerHTML = 'You won! computer choice Rock';
            } else if (compchoice == 'scissors')  {
                loses++;
                output.innerHTML = 'You lost! computer choice Scissors';
            }
        } else if (player == 'scissors') {
            if (compchoice == 'paper') {
                wins++;
                output.innerHTML = 'You won! computer choice Paper';
            } else if (compchoice == 'rock')  {
                loses++;
                output.innerHTML = 'You lost! computer choice Rock';
            }
        }
    }

    // round numerator who gives informations

    compare(playerMove, comp);
    games = wins + loses;
    if (games == rounds) {
        gameOver()
    } else if (games > rounds) {
        gameOver()
    }
    result.innerHTML = 'You:' + wins + ' - Computer:' + loses + '<br><br> Games played: ' + games + '.';
}

function gameOver() {
    round.innerHTML = 'Game over! <br><br>Finall result: You:' + wins + ' - Computer:' + loses;
    output.innerHTML = 'Game over, please press the new game button!';
};