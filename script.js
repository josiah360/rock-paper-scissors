let options = ['rock', 'paper', 'scissors'];

function computerSelection(){
    let randomSelect = Math.floor(Math.random() * options.length);
    let option = options[randomSelect];
    return option;
}

function playerSelection() {
    
}