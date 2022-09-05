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
var msgReport = document.createElement('h4');
msgReport.className = 'msg-report';
msgReport.id = 'msg-report'
container.appendChild(msgReport);
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

btnRock.addEventListener('click', playerChoose);
btnPaper.addEventListener('click', playerChoose);
btnScissor.addEventListener('click', playerChoose);

// players of the game human and computer
let player;
let computer;
// global array 
let rosci = ['ROCK', 'SCISSOR', 'PAPER']
var i = 0;
var j = 0;
let scoRecOfComp = 0;
let scoRecOfPly = 0;
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
function playerChoose() {
	// if (btnRock == true) 
	// store the comptuer choose so it can't change during comparation
	i += 1;
	let playerS = '';
	let compChoseValue = getComputerChoice();
	if (this.id == btnRock.id) {
		playerS = this.value;
		msgScore.innerText = `You Choose: ${btnRock.value} Computer choose ${compChoseValue}`;
		if (btnRock.value === compChoseValue) {
			msgScore.innerText.append = '`Tie`';
			j += 1;
		}
		else if (btnRock.value != compChoseValue) {
			if ((btnRock.value === rosci[0]) && compChoseValue === rosci[1]) scoRecOfPly += 1;
			console.log(`${btnRock.value} is not equal to ${compChoseValue}`)
		}
	}
	if (this.id == btnPaper.id) {
		playerS = this.value;
		console.log(i += 1)
		msgScore.innerText = `You Choose: ${playerS} Computer choose ${compChoseValue}  `;
		// return btnPaper.value;
		if (btnPaper.value === compChoseValue) {
			msgScore.innerText= '`Tie`';
			j += 1;
		}
		else if (btnPaper.value != compChoseValue) {
			if ((btnPaper.value === rosci[0]) && compChoseValue === rosci[1]) scoRecOfPly += 1;
			console.log(`${btnPaper.value} is not equal to ${compChoseValue}`)
		}
	}
	if (this.id == btnScissor.id) {
		playerS = this.value;
		console.log(i += 1)
		msgScore.innerText = `You Choose: ${btnScissor.value} Computer choose ${compChoseValue}  `;
		// return btnScissor.value;
		if (btnScissor.value === compChoseValue) {
			msgScore.innerText = '`Tie`';
			j += 1;
		}
		else if (btnScissor.value != compChoseValue) {
			if ((btnScissor.value === rosci[0]) && compChoseValue === rosci[1]) scoRecOfPly += 1;
			console.log(`${btnScissor.value} is not equal to ${compChoseValue}`)
		}
	}
	if (i === 5) {
		msgBox.style.display = 'none';
		playBox.style.display = 'none';
		msgScore.innerText = '';
	}
	console.log(`comp increase ${scoRecOfComp}`);
	console.log(`player increase ${scoRecOfPly}`);
	console.log(`player ${playerS} computer ${compChoseValue}`)
	console.log(`i state ${i} player value ${scoRecOfPly} || computer vlaue ${scoRecOfComp} tie result ${j}`)
}

