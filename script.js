let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    randomInteger = Math.floor(Math.random() * 10);
    return randomInteger;
}

const getAbsoluteDistance = (userGuess, computerGuess, secretTargetNumber) => {
    let howCloseUser = secretTargetNumber - userGuess;
    let howCloseComputer = secretTargetNumber - computerGuess;
    if (howCloseUser < 0) {
        howCloseUser = howCloseUser * -1;
    }
    if (howCloseComputer < 0) {
        howCloseComputer = howCloseComputer * -1;
        return howCloseUser, howCloseComputer;
    }
}

let howCloseUser;
let howCloseComputer;

const compareGuesses = (howCloseUser, howCloseComputer) => {
    if (howCloseUser < howCloseComputer) {
        return true;
    } else if (howCloseUser > howCloseComputer) {
        return false;
    } else {
        return true;
    }
}   

const updateScore = winnerIs => {
    if (winnerIs === 'human') {
        humanScore++;
    } else if (winnerIs === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}
