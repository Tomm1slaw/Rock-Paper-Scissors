'use strict'

var output = document.getElementById('output');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var result = document.getElementById('result');

rock.addEventListener('click', user);
paper.addEventListener('click', user);
scissors.addEventListener('click', user);

var loses = 0;
var wins = 0;
var games = 0;  

function user(){

// user choice 

	var playerMove = this.id;

// computer choice function

var comp = function() {
	var compchoice = Math.floor(Math.random() * 3 + 1);

	if (compchoice == 1) {
       compchoice = "rock";
    } if (compchoice == 2) {
       compchoice = "paper";
    } if (compchoice == 3) {
       compchoice = "scissors";
	}
	return compchoice;
} 

function compare (player, compchoice) {
	var compchoice = comp();
     if (player === compchoice){
       output.innerHTML = 'It`s a tie!<br>';
     } else if (player == 'rock'){
        if (compchoice == 'scissors') {
         wins++;
         output.innerHTML = 'You won! computer choice Scissors<br>';
        } else if (compchoice == 'paper')  {
          loses++;
          output.innerHTML = 'You lost! computer choice Paper<br>';
        } 
      } else if (player == 'paper'){
        if (compchoice == 'rock') {
          wins++;
         output.innerHTML = 'You won! computer choice Rock<br>';
        } else if (compchoice == 'scissors')  {
          loses++;
          output.innerHTML = 'You lost! computer choice Scissors<br>';
        } 
      } else if (player == 'scissors'){
        if (compchoice == 'paper') {
          wins++;
          output.innerHTML = '<You won! computer choice Paper<br>';
        } else if (compchoice == 'rock')  {
          loses++;
          output.innerHTML = 'You lost! computer choice Rock<br>';
        } 
   } 
}

// round numerator who gives informations

compare (playerMove,comp);
  games = wins + loses;
  
  result.innerHTML = 'User: '+playerMove+ '<br> Computer: '+comp + '<br><br>'; 
  result.innerHTML = 'You:'+wins+ ' - Computer:'+loses+ '<br><br> Games played: '+games+'.';
}