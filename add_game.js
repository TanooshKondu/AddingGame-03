const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const userInput = document.getElementById("userInput");
const gameResult = document.getElementById("gameResult");
const timerElement = document.getElementById("timer"); 

let countdown = 5;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;
        if (countdown === 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time's up!";
            timerElement.style.backgroundColor = "#e81717";
            check();
        }
    }, 1000);
}

function restart() {
    const firstRandomNumber = Math.random() * 100;
    const secondRandomNumber = Math.random() * 100;
    firstNumber.textContent = Math.ceil(firstRandomNumber);
    secondNumber.textContent = Math.ceil(secondRandomNumber);
    userInput.value = "";
    gameResult.textContent = "";
    
    clearInterval(timerInterval);
    countdown = 8;
    timerElement.textContent = countdown;
    startTimer();
}

function check() {
    const firstIntNumber = parseInt(firstNumber.textContent);
    const secondIntNumber = parseInt(secondNumber.textContent);

    const result = firstIntNumber + secondIntNumber;
    const userIntInput = parseInt(userInput.value);
    if (userIntInput === result) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please Try Again!!";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

restart();
