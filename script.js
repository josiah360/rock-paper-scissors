let options = ['scissors', 'rock', 'paper'];
let playerScore = '';

function computerPlay(){
    let randomSelect = Math.floor(Math.random() * options.length);
    let option = options[randomSelect];
    return option;
}

function gameRound(play, computer) {
    let player = play.toLowerCase();
    let comp = computer.toLowerCase();
    let message;

    switch (true) {
        case (player === 'rock' && comp === 'scissors'):
        case (player === 'scissors' && comp === 'paper'):
        case (player === 'paper' && comp === 'rock'):
            message = `You Won! ${player} beat ${comp}`;
            break;
           
        case (player === 'scissors' && comp === 'rock'):
        case (player === 'paper' && comp === 'scissors'):
        case (player === 'rock' && comp === 'paper'):
            message = `You Lost! ${comp} beats ${player}`;
            break;

        default:
            message = 'It\'s a Draw!';
    }

    return message;
}

let playerSelection = 'scissors';
let computerSelection = computerPlay();

console.log(gameRound(playerSelection, computerSelection));