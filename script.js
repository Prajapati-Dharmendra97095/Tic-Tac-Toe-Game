// Tic Tac Toe Games:-
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true; // PlayerX, PlayerO

const winPatterns = [
  // Array form
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    // box.innerText = "X";
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = "true";
    checkwinner();
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (Winner) => {
  msg.innerText = `Congrulation, winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    let positio1nvalue = boxes[pattern[0]].innerText;
    let position2value = boxes[pattern[1]].innerText;
    let position3value = boxes[pattern[2]].innerText;

    if (
      positio1nvalue !== "" &&
      position2value !== "" &&
      position3value !== ""
    ) {
      if (
        positio1nvalue == position2value &&
        position2value == position3value
      ) {
        console.log("Winner", positio1nvalue);
        showWinner(positio1nvalue);
      }
    }
  }
};
newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
