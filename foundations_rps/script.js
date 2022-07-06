let choices = ['r', 'p', 's'];

function computerPlay() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}

function playerPlay() {
  let choice = '';
  while (choice !== 'r' && choice !== 'p' && choice !== 's') {
    choice = prompt('Choose r (rock), p (paper), or s (scissors)');
  }

  return choice;
}

function playRound(playerSelection, computerSelection) {
  let winner = '';

  if (playerSelection === 'r' && computerSelection === 's' ||
      playerSelection === 'p' && computerSelection === 'r' ||
      playerSelection === 's' && computerSelection === 'p') {
    winner = 'player';
  }
  else {
    winner = 'computer'
  }
  return winner;
}

function game(n) {
  for (let i = 1; i <= n; i++) {
    alert(`The winner of round ${i}/${n} is: ${playRound(playerPlay(), computerPlay())}`);
  }
}



game(parseInt(prompt('How many games would you like to play?')));


