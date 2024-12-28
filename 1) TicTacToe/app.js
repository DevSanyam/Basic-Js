let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let count = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turnO = !turnO;
    box.disabled = true;
    count++;
    if (count > 4) {
      if (checkWinner()) {
        disableAll();
        return;
        
      }
    }
    if (count == boxes.length) {
      displayMSG("draw");
    }
  });
});

function checkWinner() {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        displayMSG(`Congratulation!!! the winner is ${pos1Val}`);
        return true;
      }
    }
  }
  return false;
}

function displayMSG(message) {
  const existingHeader = document.querySelector(".winner");
  if (existingHeader) {
    existingHeader.remove();
  }
  const header = document.createElement("h1");
  header.innerText = message;
  header.classList.add("winner-header");
  header.classList.add("winner");
  resetBtn.before(header);
}

function disableAll() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
function enableAll() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    count = 0;
  });
}

resetBtn.addEventListener("click", () => {
  enableAll();
  turnO = true;
  displayMSG("");
});
