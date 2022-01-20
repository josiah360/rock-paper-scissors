let playerScore = 0;
let compScore = 0;

// RANDOMLY PICKS A CHOICE BETWEEN ROCK, SCISSORS AND PAPER

function computerPlay(){
    let options = ['scissors', 'rock', 'paper'];
    let randomSelect = Math.floor(Math.random() * options.length);
    let option = options[randomSelect];
    return option;
}

// PLAYS A ROUND OF THE GAME
// ADDS TO SCORE
// PRINTS OUT WINNING MESSAGE

function gameRound(play, computer) {
    let player = play.toLowerCase();
    let comp = computer.toLowerCase();
    let message;

    switch (true) {
        case (player === 'rock' && comp === 'scissors'):
        case (player === 'scissors' && comp === 'paper'):
        case (player === 'paper' && comp === 'rock'):
            message = `You won! ${player} beats ${comp}`;
            playerScore += 1;
            break;
           
        case (player === 'scissors' && comp === 'rock'):
        case (player === 'paper' && comp === 'scissors'):
        case (player === 'rock' && comp === 'paper'):
            message = `You Lost! ${comp} beats ${player}`
            compScore += 1;
            break;

        default:
            message = `It's a draw!`;
            playerScore += 0;
            compScore += 0;
    }

    return message;
}

// TAKES PLAYER INPUT
//LOOPS THE GAMES THE NUMBER OF TIMES SPECIFIED

function game(func, rounds) {
    for(i = 1; i <= rounds; i += 1) {
        let playerSelection = prompt('Enter your choice: paper, rock or scissors');
        let computerSelection = computerPlay();
        console.log(func(playerSelection, computerSelection));
    }
}


//PRINTS OUT THE FINAL RESULT

function printFinalResult(playaScore, compuScore) {
    if(playaScore > compuScore) {
        console.log('YOU WON!');
    }
    else if (playaScore === compuScore) {
        console.log('IT\'S A DRAW!');
    }
    else {
        console.log('YOU LOST!');
    }
}

game(gameRound, 5);
printFinalResult(playerScore, compScore)