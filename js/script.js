
function playGame(playerInput){

    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Ruch komputera to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    printMessage('Wynik gry: ' + displayResult(computerMove, playerMove));

    console.log('Liczenie wyniku:' + playerWins + ',' + computerWins);
}

document.getElementById('playRock').addEventListener('click', function(){
    playGame(1);
;
  });

  document.getElementById('playPaper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('playScissors').addEventListener('click', function(){
    playGame(3);

  });
