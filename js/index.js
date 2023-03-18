const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const buttons = document.querySelectorAll(".box");

let x_scores = document.getElementById("x_scores");
let o_scores = document.getElementById("o_scores");
let displayInfo = document.getElementById("display-info");

let x_emoji = document.getElementById("x-emoji");
let o_emoji = document.getElementById("o-emoji");


let x_winnings = 0;
let o_winnings = 0;

x_scores.textContent = "X: " + x_winnings;
o_scores.textContent = "O: " + o_winnings;

displayInfo.innerHTML = "👈 your turn";

function opponentPlay() {
    let position = Math.floor(Math.random() * 9);
    if (buttons[position].textContent === "") {
        buttons[position].innerHTML = "O";
        buttons[position].disabled = true;
        displayInfo.innerHTML = "your turn";
        if (isWinning()) {
            o_winnings++;
            o_scores.innerHTML = "O: " + o_winnings;
            setTimeout(disableAllButtons, 1000);
            displayInfo.innerHTML = "O won"
        } else if (isDraw()) {
            displayInfo.innerHTML = "🤝 It's a Tie 🤝";
        } else {
            displayInfo.innerHTML = "👈 your turn";
        }
    } else {
        opponentPlay();
    }
}

function disableAllButtons() {
    for (let remainingButtons of buttons) {
        if (remainingButtons.innerHTML === "") {
            remainingButtons.disabled = true;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === "") {
            button.innerHTML = "X";
            button.disabled = true;
            if (isWinning()) {
                x_winnings++;
                x_scores.innerHTML = "X: " + x_winnings;
                setTimeout(disableAllButtons, 1000);
                displayInfo.innerHTML = "You won"
            } else if (isDraw()) {
                displayInfo.innerHTML = "🤝 It's a Tie 🤝";
            } else {
                displayInfo.innerHTML = "O's turn 👉";
                setTimeout(opponentPlay, 1000);
            }
        }
    });
});

function restartGame() {
    buttons.forEach((button) => {
        button.innerHTML = "";
        button.disabled = false;
        button.style.backgroundColor = "";
        button.style.color = "";
        displayInfo.innerHTML = "👈 your turn";
    });
}

function isWinning() {
    for (let COMBOS of WINNING_COMBINATIONS) {
        if (
            buttons[COMBOS[0]].textContent === buttons[COMBOS[1]].textContent &&
            buttons[COMBOS[1]].textContent === buttons[COMBOS[2]].textContent &&
            buttons[COMBOS[0]].textContent != ""
        ) {
            const winners = [
                buttons[COMBOS[0]],
                buttons[COMBOS[1]],
                buttons[COMBOS[2]]
            ]

            if (buttons[COMBOS[0]].innerHTML === "O") {
                winners.forEach(winner => {
                    winner.innerHTML = "😂";
                });
            }

            winners.forEach((winner) => {
                winner.style.backgroundColor = "#4b91b1"
                winner.style.color = "#071a42";
            });
            return true;
        }
    }
    return false;
}

function isDraw() {
    if (buttons[0].textContent != "" && buttons[1].textContent != "" && buttons[2].textContent != "" 
        && buttons[3].textContent != "" && buttons[4].textContent != "" && buttons[5].textContent != "" 
        && buttons[6].textContent != "" && buttons[7].textContent != "" && buttons[8].textContent != "" && !isWinning()) {
        return true;
    }
    return false;
}
