function getComputerChoice() {
	let numb = Math.floor((Math.random() * 3))
	let rosci = ['ROCK', 'PAPER', 'SCISSOR']
	if (numb === 1) {
		return rosci[0];
	} else if (numb === 2) {
		return rosci[1];
	}
	else {
		return rosci[2];

	}
}

function playRound() {
	// get the user input and convert to upuper case
	const playerSelection = (prompt('Enter one of "Rock", "paper" "scissor":')).toUpperCase();
	// get the compter input
	const computerSelection = getComputerChoice();
	if (playerSelection === computerSelection) {
		console.log('One of you must loos! play again!');
	} else {
		return console.log(playerSelection, computerSelection)
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



