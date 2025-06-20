// script
let com = document.querySelector(".computer");
let human = document.querySelector(".human");
let boxes = document.querySelectorAll(".box");
let result = document.querySelector("#result");
let newGame = document.querySelector('#reset')

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function comChoice() {
    const choices = ['stone', 'paper', 'scissor'];
    return choices[getRandomNumber(0, 2)];
};

function checkResult(you, com) {
    if (you === com) {
        result.innerText = "Result: Draw!🙃";
    } else if (
        (you === "stone" && com === "scissor") ||
        (you === "paper" && com === "stone") ||
        (you === "scissor" && com === "paper")
    ) {
        result.innerText = "Result: You Win!🎉";
    } else {
        result.innerText = "Result: Computer Wins!😥";
    }
}

boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        let yourChoice = box.innerText;
        let computerChoice = comChoice();

        human.innerText = yourChoice;
        com.innerText = computerChoice;

        checkResult(yourChoice, computerChoice);
    });
});

newGame.addEventListener('click', () => {
    human.innerText = "your choice";
    com.innerText = "computer choice";
    result.innerText = "Result!"
});



