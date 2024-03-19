const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "scissors" ||
        userInput === "paper"
    ) {
        return userInput;
    } else {
        return "Error, please type: rock, paper or scissors.";
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "This game is a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Sorry, computer won!";
        } else {
            return "Congratulations, you won!";
        }
    }
};

const playGame = () => {
    //const userChoice = getUserChoice("paper");
    let userChoice = prompt("please type rock, paper or scissors:");
    //return userChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice.toLowerCase()}`); // parameter case-insensitive
    console.log(`The computer threw: ${computerChoice}`);

    console.log(determineWinner(userChoice.toLowerCase(), computerChoice)); //toLowerCase - parameter case-insensitive
};

playGame();
