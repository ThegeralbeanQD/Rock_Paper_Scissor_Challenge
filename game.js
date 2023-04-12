//player needs to pick a gesture / gesture(rock)
//computer needs to pick a gesture / randomiser
//compare the gesture / if else statements
//return results
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame() {
    rl.question('Enter your move (rock, paper, or scissors): ', (choice) => {
        const playerChoice = choice.toLowerCase();
        const moves = ['rock', 'paper', 'scissors'];
        const computerChoice = moves[Math.floor(Math.random() * 3)];
        console.log(`You played ${playerChoice}. The computer played ${computerChoice}.`);

        if (!moves.includes(playerChoice)) {
            console.log('Not a move! Please enter rock, paper, or scissors.');
            playGame();
            return;
        } else if (playerChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            console.log('You win!');
        } else {
            console.log('You lose!');
        }

        rl.question('Play again? (y/n)', (answer) => {
            if (answer.toLowerCase() === 'y') {
                playGame();
            } else {
                console.log('Bye!');
                rl.close();
            }
        });
    });
}

playGame();





