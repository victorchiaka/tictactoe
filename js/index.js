const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let displayInfo = document.getElementById("display-info");

displayInfo.innerHTML = "your turn";

const buttonZero = document.getElementById("box-index0");
const buttonOne = document.getElementById("box-index1");
const buttonTwo = document.getElementById("box-index2");
const buttonThree = document.getElementById("box-index3");
const buttonFour = document.getElementById("box-index4");
const buttonFive = document.getElementById("box-index5");
const buttonSix = document.getElementById("box-index6");
const buttonSeven = document.getElementById("box-index7");
const buttonEight = document.getElementById("box-index8");

const buttons = [
    buttonZero,
    buttonOne,
    buttonTwo,
    buttonThree,
    buttonFour,
    buttonFive,
    buttonSix,
    buttonSeven,
    buttonEight
]

/**
 * This function is supposed to let the computer play for itself,
 * after the player have picked a box
 */
function opponentPlay() {
    let position = Math.floor(Math.random() * 9);
    if (buttons[position].innerHTML === "") {
        displayInfo.innerHTML = "O's turn";
        buttons[position].innerHTML = "O";
        displayInfo.innerHTML = "your turn";
    } else {
        opponentPlay();
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (buttons[i].textContent === "") {
            buttons[i].innerHTML = "X";
            opponentPlay();
        } else {
            // setTimeout(() => {
            //     displayInfo.innerHTML = "not possible"
            // }, 5000);
            displayInfo.innerHTML = "your turn";
        }
    });
}