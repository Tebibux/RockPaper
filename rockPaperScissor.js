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
		return player;
	}
	// scissors wins paper // player wins computer
	else if (playerSelection === rosci[2] && computerSelection === rosci[1]) {
		return player;
	}
	// paper wins rock // player wins computer
	else if (playerSelection === rosci[1] && computerSelection === rosci[0]) {
		return player;
	}
	// rock wins scissor// player wins computer
	else if (playerSelection === rosci[0] && computerSelection === rosci[2]) {
		return player;
	}
	// the above couldn't meet the compuer wins
	else {
		return computer;
	}
}


function game() {
	// counting the score from the start
	let plaWin = 0
	let compWin = 0
	for (let i = 0; i < 5; i++) {
		if (player === playRound()) {
			console.log(player);
		}
		else {
			console.log(computer);
		}
	}
}