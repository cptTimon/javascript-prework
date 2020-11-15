
{
	const playGame = function(playerInput) {

		clearMessages();
		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		const computerMove = getMoveName(randomNumber);

		printMessage('Ruch komputera to: ' + computerMove);

		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);
		console.log(playerMove,computerMove);

		printMessage('Twój ruch to: ' + playerMove);

		printMessage('Wynik gry: ' + displayResult(computerMove, playerMove));

		console.log('Liczenie wyniku:' + playerWins + ',' + computerWins);
	}

	document.getElementById('playRock').addEventListener('click', function () {
		playGame(1);
	});

	document.getElementById('playPaper').addEventListener('click', function () {
		playGame(2);
	});

	document.getElementById('playScissors').addEventListener('click', function () {
		playGame(3);
	});
}