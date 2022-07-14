let choices = ['rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll('.js-btn');
let winnerText = document.querySelector('.js-winner');

// Add event handler for each button
buttons.forEach(button => button.addEventListener('click', playGame));


function playGame(e) {
  // Gets the button title
  let playerChoice = e.target.previousElementSibling.textContent.toLowerCase();
  let winner = findWinner(playerChoice, computerChoose());
  winnerText.innerText = winner;
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
    winner = 'computer'
  }
  return winner;
}

//function game(n) { for (let i = 1; i <= n; i++) { alert(`The winner of round ${i}/${n} is: ${playRound(playerPlay(), computerPlay())}`); } }