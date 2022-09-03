// Creating UI using DOM vanilla js

// create the main container 
var container = document.getElementById('container');

// creating buttons and attributs
// message box
var msgBox = document.createElement('div');
msgBox.className = 'message-box';
msgBox.id = 'message-box-head';
var message = document.createElement('h2');
message.textContent = ' Well come to the game';
msgBox.appendChild(message)
container.appendChild(msgBox)
console.log(msgBox)
// start button
var btnStart = document.createElement('button');
// play button
// play button rock
var btnRock = document.createElement('button');
// play button paper
var btnPaper = document.createElement('button');
// play button scissor
var btnScissor = document.createElement('button');

// creating msg area
//  report message win or loose
var msgReport = document.createElement('div');
// socore message
var msgScore = document.createElement('div');

















// players of the game human and computer
let player;
let computer;
// global array 
let rosci = ['ROCK', 'PAPER', 'SCISSOR']

// generate a random number from 1 - 3

function getComputerChoice() {
	let numb = Math.floor((Math.random() * 3))
	if (numb === 1) {
		return rosci[0];
	} else if (numb === 2) {
		return rosci[1];
	} else {
		return rosci[2];

	}
}

function playRound() {
	// get the user input and convert to upuper case
	const playerSelection = (prompt('Enter one of "Rock", "paper" "scissor":')).toUpperCase();
	// get the compter input
	const computerSelection = getComputerChoice();
	// winnig condion [0:rock, 1:paper, 2:scissor]
	// if the same draw
	if (playerSelection === computerSelection) {
		// return player;
		return 0;
	}
	// scissors wins paper // player wins computer
	else if (playerSelection === rosci[2] && computerSelection === rosci[1]) {
		// return player;
		return 1;
	}
	// paper wins rock // player wins computer
	else if (playerSelection === rosci[1] && computerSelection === rosci[0]) {
		// return player;
		return 1;
	}
	// rock wins scissor// player wins computer
	else if (playerSelection === rosci[0] && computerSelection === rosci[2]) {
		// return player;
		return 1;
	}
	// the above couldn't meet the compuer wins
	else {
		// return computer;
		return 2;
	}
}


function game() {
	// counting the score from the start and bTs(Both Team to Score)
	let plaWin = 0
	let compWin = 0
	let bTs = 0
	for (let i = 0; i < 3; i++) {
		roundPlay = playRound()
		// add the value depending on return of play round
		// add 1 each time human win
		if (roundPlay === 1) {
			plaWin += 1;
		}
		// add 1 each time computer win
		else if (roundPlay === 2) {
			compWin += 1;
		}
		// add 1 each time score none
		else {
			bTs += 1;
		}
	}
	// consol log winner of the game
	// human win
	if (plaWin > compWin) {
		console.log(`Human won by ${plaWin} to ${compWin}`);
	}
	// computer win
	else {
		console.log(`Computer won by ${compWin} to ${plaWin}`);
	}
	console.log(`Equal result is ${bTs}`)
}