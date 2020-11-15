let playerWins = 0;
let computerWins = 0;

const getMoveName = function(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
		return 'papier';
	} else if(argMoveId == 3){
		return 'nożyce';
	} else {
		printMessage('Taka liczba to ruch spoza gry - ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

const displayResult = function(argComputerMove, argPlayerMove) {
	let message = '';
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		playerWins++;
		message = 'Gracz wygrał!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		message = 'Jest remis!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		computerWins++;
		message = 'Komputer wygrał!';
	} else if ((argComputerMove == 'kamień' || argComputerMove == 'papier' || argComputerMove == 'nożyce') && argPlayerMove == 'nieznany ruch'){
		message = 'Gracz robi głupoty!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
		message = 'Jest remis!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		computerWins++;
		message = 'Komputer wygrał!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		playerWins++;
		message = 'Gracz wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		computerWins++;
		message = 'Komputer wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		playerWins++;
		message = 'Gracz wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		message = 'Jest remis!';
	}
	document.getElementById('result').innerHTML = 'Wynik to: Gracz: ' + playerWins + ' Komputer: ' + computerWins;
	if (playerWins >= 3 || computerWins >= 3){
		document.getElementById('result').innerHTML = 'Koniec gry. Wynik to: Gracz: ' + playerWins + ' Komputer: ' + computerWins;
		document.getElementById('playRock').disabled = true;
		document.getElementById('playPaper').disabled = true;
		document.getElementById('playScissors').disabled = true;
	}
	return message;
}

const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}
