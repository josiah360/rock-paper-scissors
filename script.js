const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const message = document.querySelector('.message');
const human = document.querySelector('.human');
const comp = document.querySelector('.comp');
const humanScore = document.querySelector('.human-score');
const compuScore = document.querySelector('.comp-score');
const playerSelect = document.querySelector('.player-selection');


let playerScore = 0;
let compScore = 0;
let computerSelection;
let playerSelection;

/* Ending elements containing message after game is won or lost*/
let div = document.createElement('div');
body.appendChild(div);

let para = document.createElement('p');
para.className = 'message';

div.appendChild(para)
div.style.display = 'none';

createButton(div)
let button = div.lastElementChild;
resetGame(button);


// RANDOMLY PICKS A CHOICE BETWEEN ROCK, SCISSORS AND PAPER

function computerPlay(){
    let options = ['scissors', 'rock', 'paper'];
    let randomSelect = Math.floor(Math.random() * options.length);
    let option = options[randomSelect];
    return option;
}

// CHECKS PLAYER AND COMPUTER SELECTIONS
// ANNOUNCES RESULT OF THE ROUND
// UPDATES SCORE

function print(elem, message) {
    return elem.textContent = message
}

function gameRound(player, computer) {

    switch (true) {
        case (player === 'rock' && computer === 'scissors'):
        case (player === 'scissors' && computer === 'paper'):
        case (player === 'paper' && computer === 'rock'):
            print(message,`You won! ${player} beats ${computer}`);
            playerScore += 1;
            break;
           
        case (player === 'scissors' && computer === 'rock'):
        case (player === 'paper' && computer === 'scissors'):
        case (player === 'rock' && computer === 'paper'):
            print(message, `You Lost! ${computer} beats ${player}`)
            compScore += 1;
            break;

        default:
            print(message, `It's a draw!`);
            playerScore += 0;
            compScore += 0;
    }
    print(humanScore, playerScore);
    print(compuScore, compScore);
}

function updateImage(choice, computer) {
    if (choice === 'rock') return computer.style.backgroundImage = 'url(img/rock-dark.svg)';

    else if(choice === 'scissors') return computer.style.backgroundImage = 'url(img/scissors-dark.svg)';
    
    else if(choice === 'paper') return computer.style.backgroundImage = 'url(img/paper-dark.svg)'
}

function animate(elem, klass) {
    elem.classList.add(klass);
    setTimeout(function() {
        elem.classList.remove(klass);
    }, 500)
}

function createButton(parent) {
    let button = document.createElement('button');
    button.className = 'play-again';
    button.textContent = 'Play Again';

    parent.appendChild(button);
}

function resetGame(button) {
    button.addEventListener('click', () => {
        let parent = button.parentNode;
        parent.style.display = 'none';
        wrapper.style.display = 'block';
        playerScore = 0;
        compScore = 0;
        print(humanScore, playerScore);
        print(compuScore, compScore);
        print(message, 'Pick your choice');
        human.style.backgroundImage = '';
        comp.style.backgroundImage = '';
    })
}

function scoreBoard() {

    if (playerScore >= 5 || compScore >= 5) {
        wrapper.style.display = 'none';
        div.style.display = 'block';
    }

    if(playerScore === 5) {
        para.textContent = 'You defeated Computer. Congratulations!';
        
    }
    else if(compScore === 5) {
        para.textContent = 'You lost to Computer. Try harder next time'
    }

}



playerSelect.addEventListener('click', event => {
    let button = event.target;
    if(button.className !== 'player-selection') {
        if (button.className === 'rock') {
            playerSelection = 'rock';
            computerSelection = computerPlay()
            human.style.backgroundImage = 'url(img/rock-dark.svg)'
            comp.style.backgroundImage = updateImage(computerSelection, comp)
        }
        else if(button.className === 'scissors') {
            playerSelection = 'scissors';
            computerSelection = computerPlay()
            human.style.backgroundImage = 'url(img/scissors-dark.svg)'
            comp.style.backgroundImage = updateImage(computerSelection, comp)

        }
        else if(button.className === 'paper') {
            playerSelection = 'paper';
            computerSelection = computerPlay()
            human.style.backgroundImage = 'url(img/paper-dark.svg)'
            comp.style.backgroundImage = updateImage(computerSelection, comp)
        }

        if (playerScore < 5 || compScore < 5) {
            gameRound(playerSelection, computerSelection); 
        }
        
        animate(message, 'grow');
        animate(human, 'grow-bg');
        animate(comp, 'grow-bg');

        setTimeout(scoreBoard, 1000)

    }
})









