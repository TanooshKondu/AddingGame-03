# AddingGame-03
100days100projects #challenge


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adding Game</title>
    <link rel="stylesheet" href="add_game.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>
<body>
    <div class="text-center card">
        <h1>Adding Game</h1>
        <img src="https://i.imgur.com/ugL1FHQ.png" class="image" />
        <div class="bg-container pt-5 pb-3">
            <span class="number m-2" id="firstNumber"></span>
            <span class="operator m-1">+</span>
            <span class="number m-2" id="secondNumber"></span>
            <span class="operator m-1">=</span>
            <input class="user-input" type="text" id="userInput" />
            <div class="mt-4 mb-4">
                <div class="timer">
                    Time left: <span id="timer">8</span> seconds
                </div>
                <button id="checkButton" class="btn btn-primary mr-3" onclick="check()">
                    Check
                </button>
                <button id="restartButton" class="btn btn-primary" onclick="restart()">
                    Restart
                </button>
            </div>
            <p class="game-result" id="gameResult"></p>
        </div>
    </div>
    <script src="add_game.js"></script>
</body>
</html>

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");
body{
    background:url("https://i.imgur.com/zz5KXZT.jpg");
    background-size: cover;
}

.card{
    width:85%;
    max-width: 470px;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
    position:relative;
    background-color: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items:center;
}

h1 {
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 3px;
    font-family:Arial, Helvetica, sans-serif;
    color:coral;
    font-size:38px;
    font-weight: 800;
}

.image {
    width:100%;
    max-width: 470px;
    height: 100%;
    display:flex;
    justify-content: center;
}

.bg-container {
    background-color: #212121;
    width:100%;
    max-width: 470px;
    height:100%;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 20px 15px;
    text-align: center;
    border: 2px solid rgba(0, 0, 0, 1.3);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 1);
}

.number {
    color: #323f4b;
    background-color: #cbd2d9;
    font-family: "Roboto";
    font-size: 30px;
    font-weight: bold;
    border-style: solid;
    border-width: 8px;
    border-color: #e4e7eb;
    border-radius: 12px;
    padding-left: 8px;
    padding-right: 8px;
}

.operator {
    color: #c4c4c4;
    font-family: "Roboto";
    font-size: 40px;
}

.user-input {
    text-align: center;
    color: #323f4b;
    background-color: #cbd2d9;
    font-family: "Roboto";
    font-size: 30px;
    font-weight: bold;
    width: 142px;
    height: 60px;
    border-style: solid;
    border-width: 8px;
    border-color: #e4e7eb;
    border-radius: 12px;
    margin: 20px;
}

.game-result {
    color: #ffffff;
    background-color: #f5f7fa;
    font-family: "Roboto";
    font-size: 24px;
    font-weight: 500;
}
.timer {
    color: #ffffff;
    font-family: "Roboto";
    font-size: 24px;
    margin-top: 10px;
}

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
