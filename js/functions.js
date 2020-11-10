function getMoveName(argMoveId){
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

function displayResult(argComputerMove, argPlayerMove) {
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		return 'Gracz wygrał!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		return 'Jest remis!';
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		return 'Komputer wygrał!';
	} else if ((argComputerMove == 'kamień' || argComputerMove == 'papier' || argComputerMove == 'nożyce') && argPlayerMove == 'nieznany ruch'){
		return 'Gracz robi głupoty!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
		return 'Jest remis!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		return 'Komputer wygrał!';
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		return 'Gracz wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		return 'Komputer wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		return 'Gracz wygrał!';
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
		return 'Jest remis!';
	}
}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}