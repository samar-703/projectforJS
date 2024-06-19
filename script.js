document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choice');
    const resultMessage = document.getElementById('result-message');
    const humanScoreSpan = document.getElementById('human-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const winnerMessage = document.getElementById('winner-message');
    
    let humanScore = 0;
    let computerScore = 0;

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const humanChoice = choice.id;
            const computerChoice = getComputerChoice();
            const winner = determineWinner(humanChoice, computerChoice);

            if (winner === 'human') {
                humanScore++;
                resultMessage.textContent = `You win this round! You chose ${humanChoice}, computer chose ${computerChoice}.`;
            } else if (winner === 'computer') {
                computerScore++;
                resultMessage.textContent = `Computer wins this round! You chose ${humanChoice}, computer chose ${computerChoice}.`;
            } else {
                resultMessage.textContent = `It's a tie! You both chose ${humanChoice}.`;
            }

            humanScoreSpan.textContent = humanScore;
            computerScoreSpan.textContent = computerScore;

            if (humanScore === 5) {
                winnerMessage.textContent = 'Congratulations! You won the game!';
                disableChoices();
            } else if (computerScore === 5) {
                winnerMessage.textContent = 'Sorry, the computer won the game.';
                disableChoices();
            }
        });
    });

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return 'tie';
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'human';
        } else {
            return 'computer';
        }
    }

    function disableChoices() {
        choices.forEach(choice => {
            choice.disabled = true;
            choice.classList.add('disabled');
        });
    }
});
