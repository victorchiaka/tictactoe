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
let x_winnings = 0;
let o_winnings = 0;

displayInfo.innerHTML = "your turn";

x_scores.textContent = "X: " + x_winnings;
o_scores.textContent = "O: " + o_winnings;

function opponentPlay() {
  let position = Math.floor(Math.random() * 9);
  if (buttons[position].textContent === "") {
    buttons[position].innerHTML = "O";
    buttons[position].disabled = true;
    displayInfo.innerHTML = "your turn";
    if (isWinning()) {
      // Increments O scores
      o_winnings++;
      o_scores.innerHTML = "O: " + o_winnings;
      setTimeout(() => {
          for (let remainingButtons of buttons) {
            if (remainingButtons.innerHTML === "") {
              remainingButtons.disabled = true;
            }
          }
        },
      1000
      );
      alert("O won"); // remove this later
    }
  } else {
    opponentPlay();
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "") {
      button.innerHTML = "X";
      button.disabled = true;
      if (isWinning()) {
        // Increments X scores
        x_winnings++;
        x_scores.innerHTML = "X: " + x_winnings;
        setTimeout(() => {
            for (let remainingButtons of buttons) {
              if (remainingButtons.innerHTML === "") {
                remainingButtons.disabled = true;
              }
            }
          },
          1000
        );
        alert("X won"); // remove this later
      } else {
        displayInfo.innerHTML = "O's turn";
        setTimeout(
          opponentPlay, 
          1000
        );
      }
    } else {
    }
  });
});

function restartGame() {
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
  });
}

function isWinning() {
  for (let COMBOS of WINNING_COMBINATIONS) {
    if (
      buttons[COMBOS[0]].textContent === buttons[COMBOS[1]].textContent &&
      buttons[COMBOS[1]].textContent === buttons[COMBOS[2]].textContent &&
      buttons[COMBOS[0]].textContent != ""
    ) {
      return true;
    }
  }
  return false;
}
