function playGame() {
    // Options for the game
    const choices = ['rock', 'paper', 'scissors'];
    
    // Function to get the computer's choice (randomly)
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);  // Random number between 0 and 2
        return choices[randomIndex];
    }
    
    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'paper' && computerChoice === 'rock')
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }

    // Get player's choice from the prompt
    const playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    
    // Validate player's input
    if (!choices.includes(playerChoice)) {
        console.log("Invalid choice, please choose rock, paper, or scissors.");
        return;
    }

    // Get computer's choice
    const computerChoice = getComputerChoice();
    
    // Show choices
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    // Determine and display the winner
    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}

// Play the game
playGame();