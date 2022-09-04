// Creating UI using DOM vanilla js

// create the main container 
var container = document.getElementById('container');

// creating buttons and attributs
// message box
var msgBox = document.createElement('div');
msgBox.className = 'message-box';
msgBox.id = 'message-box-head';
var message = document.createElement('h2');
var message1 = document.createElement('h5');
message1.textContent = 'You can\'t lose if you don\'t play';
message.textContent = ' Well come to the game ';

msgBox.appendChild(message);
msgBox.appendChild(message1);
container.appendChild(msgBox);
// start button
var btnStart = document.createElement('button');
btnStart.className = 'btn-start';
btnStart.id = 'btn-start';
btnStart.innerText = 'Start';
container.append(btnStart);

// playing area
var playBox = document.createElement('div');
playBox.id = 'playBox';
playBox.className = 'play-box';
container.append(playBox);

// play button rock
var btnRock = document.createElement('button');
btnRock.className = 'btn-rock';
btnRock.id = 'btn-rock';
btnRock.innerText = 'Rock';
btnRock.value = 'ROCK';
playBox.append(btnRock);

// play button paper
var btnPaper = document.createElement('button');
btnPaper.className = 'btn-paper';
btnPaper.id = 'btn-paper';
btnPaper.innerText = 'Paper';
btnPaper.value = 'PAPER';
playBox.append(btnPaper);

// play button scissor
var btnScissor = document.createElement('button');
btnScissor.className = 'btn-scissor';
btnScissor.id = 'btn-scissor';
btnScissor.innerText = 'Scissor';
btnScissor.value = 'SCISSOR';
playBox.append(btnScissor);

// creating msg area
//  report message win or loose
var msgReport = document.createElement('div');
msgReport.className = 'msg-report';
msgReport.id = 'msg-report'
// socore message
var msgScore = document.createElement('div');
msgScore.className = 'msg-score';
msgScore.id = 'msg-score'
container.appendChild(msgScore);



btnStart.addEventListener('click', startGame);
function startGame(e) {
	// playing button appear in the playBox using css style.
	// element of the playbox will have flex 
	// 		as the message and other element added
	playBox.style.display = 'flex';
	// btnStart will disapper from the page after the game is stared
	// and the the greating message also will disappear after the start
	btnStart.style.display = 'none';
	message1.style.display = 'none';
	var message2 = document.createElement('h5');
	message2.innerHTML = 'You Started it, if you don\'t play you LOSE';
	msgBox.appendChild(message2);

}

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissor.addEventListener('click', playRound);



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
function playRound(e) {
	// if (btnRock == true) 
	if (e.target == btnRock) {
		msgScore.innerHTML = '<h1>' + btnRock.value + '</h1>';
	}
	if (e.target == btnPaper){
		msgScore.innerHTML = '<h1>' + btnPaper.value + '</h1>';
	}
	if (e.target == btnScissor){
		msgScore.innerHTML = '<h1>' + btnScissor.value + '</h1>';
	}
}











// function playRound() {
// 	// get the user input and convert to upuper case
// 	const playerSelection = 0;
// 	// get the compter input
// 	const computerSelection = getComputerChoice();
// 	// winnig condition [0:rock, 1:paper, 2:scissor]
// 	// if the same draw
// 	if (playerSelection === computerSelection) {
// 		// return player;
// 		return 0;
// 	}
// 	// scissors wins paper // player wins computer
// 	else if (playerSelection === rosci[2] && computerSelection === rosci[1]) {
// 		// return player;
// 		return 1;
// 	}
// 	// paper wins rock // player wins computer
// 	else if (playerSelection === rosci[1] && computerSelection === rosci[0]) {
// 		// return player;
// 		return 1;
// 	}
// 	// rock wins scissor// player wins computer
// 	else if (playerSelection === rosci[0] && computerSelection === rosci[2]) {
// 		// return player;
// 		return 1;
// 	}
// 	// the above couldn't meet the compuer wins
// 	else {
// 		// return computer;
// 		return 2;
// 	}
// }



// function game() {
// 	// counting the score from the start and bTs(Both Team to Score)
// 	let plaWin = 0
// 	let compWin = 0
// 	let bTs = 0
// 	for (let i = 0; i < 3; i++) {
// 		roundPlay = playRound()
// 		// add the value depending on return of play round
// 		// add 1 each time human win
// 		if (roundPlay === 1) {
// 			plaWin += 1;
// 		}
// 		// add 1 each time computer win
// 		else if (roundPlay === 2) {
// 			compWin += 1;
// 		}
// 		// add 1 each time score none
// 		else {
// 			bTs += 1;
// 		}
// 	}
// 	// consol log winner of the game
// 	// human win
// 	if (plaWin > compWin) {
// 		console.log(`Human won by ${plaWin} to ${compWin}`);
// 	}
// 	// computer win
// 	else {
// 		console.log(`Computer won by ${compWin} to ${plaWin}`);
// 	}
// 	console.log(`Equal result is ${bTs}`)
// }