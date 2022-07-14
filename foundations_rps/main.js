let choices = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll('.js-btn');
let roundNumber = document.querySelector('.js-game');

let roundCounter = 1;

// Keeps track of sins
let winCount = {
    'player': 0,
    'computer': 0
};


updateRoundCount(roundCounter);

// Add event handler for each button
buttons.forEach(button => button.addEventListener('click', playRound));





function playRound(e) {
  // Sets the choice string to the button title
  let playerChoice = e.target.previousElementSibling.textContent.toLowerCase();
  let winner = findWinner(playerChoice, computerChoose());

  winCount[`${winner}`]++;
    // Updates text on screen with wins
  let roundWinnerText = document.querySelector(`.js-${winner}`);
  roundWinnerText.innerText = `${winner}: ${winCount[`${winner}`]}/5`;

  if (winCount[`${winner}`] < 5) {
  roundCounter++;
  updateRoundCount(roundCounter);
  }
  else {
    endGame(winner);
  }
}


function computerChoose() {
  let choice = choices[Math.floor(Math.random() * 3)];
  return choice;
}


function findWinner(playerSelection, computerSelection) {
  let winner;

  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = 'player';
  }
  else {
    winner = 'computer';
  }
  return winner;
}


function updateRoundCount(count) {
  roundNumber.textContent = `Game #${count}`;
}

function endGame(winner) {
  document.querySelector('.js-winner').innerText = `${winner.toUpperCase()} wins!`;
  buttons.forEach(button => button.removeEventListener('click', playRound));
}