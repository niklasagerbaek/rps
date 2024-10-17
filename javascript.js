let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to start the game when the user makes a choice
function playGame(playerChoice) {
    // Options for the game
    const choices = ['rock', 'paper', 'scissors'];
    
    // Function to get the computer's choice (randomly)
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);  // Random number between 0 and 2
        return choices[randomIndex];
    }
    
    // Function to determine the winner of each round
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            playerScore++;
            return "You win this round!";
        } else {
            computerScore++;
            return "Computer wins this round!";
        }
    }

    // Get computer's choice
    const computerChoice = getComputerChoice();
    
    // Display the choices
    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
    
    // Determine and display the round result
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('result').textContent = result;
    
    // Increment rounds played
    roundsPlayed++;

    // Check if 5 rounds have been played and announce the final winner
    if (roundsPlayed === 5) {
        announceFinalWinner();
        resetGame();
    }
}

// Function to announce the final winner after 5 rounds
function announceFinalWinner() {
    let finalMessage = '';
    if (playerScore > computerScore) {
        finalMessage = `You are the overall winner! Final score: Player ${playerScore} - Computer ${computerScore}`;
    } else if (computerScore > playerScore) {
        finalMessage = `Computer is the overall winner! Final score: Player ${playerScore} - Computer ${computerScore}`;
    } else {
        finalMessage = `It's a tie overall! Final score: Player ${playerScore} - Computer ${computerScore}`;
    }
    document.getElementById('final-result').textContent = finalMessage;
}

// Function to reset the game (after 5 rounds)
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

// Adding event listeners to the buttons
document.getElementById('rock-btn').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper-btn').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playGame('scissors');
});
