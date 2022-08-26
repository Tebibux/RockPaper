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
		console.log('One of you must loos! play again!');
	}
	// scissors wins paper 
	else if (playerSelection === rosci[2] && computerSelection === rosci[1]) {
		console.log('player win');
	}
	// paper wins rock 
	else if (playerSelection === rosci[1] && computerSelection === rosci[0]) {
		console.log('player win');
	}
	// rock wins scissor
	else if (playerSelection === rosci[0] && computerSelection === rosci[2]) {
		console.log('player win');
	}
	else{
		console.log('compouter win')
	}
}


function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound());
	}
}
// //if playerSelection ==  computerSelection
// if (playerSelection ==! computerSelection) {
// 	// 		return = "Message!"
// 	return ('You Lose! Paper beats Rock');
// }


// }



