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

const buttons = document.querySelectorAll(".box");

/**
 * This function is supposed to let the computer play for itself,
 * after the player have picked a box
 */
function opponentPlay() {
    let position = Math.floor(Math.random() * 9);
    if (buttons[position].textContent === "") {
        displayInfo.innerHTML = "O's turn";
        buttons[position].innerHTML = "O";
        displayInfo.innerHTML = "your turn";
    } else {
        opponentPlay();
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "") {
            button.innerHTML = "X";
            opponentPlay();
        } else {
            displayInfo = "your turn";
        }
    });
});

function restartGame() {
    buttons.forEach((button) => {
        button.innerHTML = "";
    });
}

// right a function that get's the position of each button of first x and secondly o, then pass it to an array and match it with the WINNING_COMBINATIONS array and see if that pattern exist in the in array, if so then echo the winner as maybe an alert(), then fixe it well and improve the logic and ui