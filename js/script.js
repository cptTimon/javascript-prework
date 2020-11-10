function playGame(playerInput){

    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
    computerMove = 'kamień';
    } else if (randomNumber == 2){
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }
    */
    printMessage('Ruch komputera to: ' + computerMove);


    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    } else if (playerInput == '2'){
        playerMove = 'papier';
    } else if (playerInput == '3'){
        playerMove = 'nożyce';
    } else {
        playerMove = 'nieznany ruch';
    }
    */
    printMessage('Twój ruch to: ' + playerMove);

    /* if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Gracz wygrał!');
    } else if (computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Jest remis!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Komputer wygrał!');
    } else if ((computerMove == 'kamień' || computerMove == 'papier' || computerMove == 'nożyce') && playerMove == 'nieznany ruch'){
        printMessage('Gracz robi głupoty!');
    } else if (computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Jest remis!');
    } else if (computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Komputer wygrał!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Gracz wygrał!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Komputer wygrał!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Gracz wygrał!');
    } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('Jest remis!');
    } */

    printMessage('Wynik gry: ' + displayResult(computerMove, playerMove));
}

document.getElementById('playRock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('playPaper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('playScissors').addEventListener('click', function(){
    playGame(3);
  });
