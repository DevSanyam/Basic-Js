let Game = ["Stone", "Paper", "Scissors"];

let Stone = document.getElementById("stone");

let Paper = document.getElementById("paper");

let Scissors = document.getElementById("scissors");

let Result = document.getElementById("result");

let CompPElement = document.getElementById("PointComp");

let UserPElement = document.getElementById("PointUser");

let UserP = 0;

let CompP = 0;

function display(message,color) {
  Result.innerText = message;
  Result.style.backgroundColor=color;
}

function Outcome(value) {
  let key = Math.floor(Math.random() * 3);
  if (key === value) {
    display(`It's a DRAW, Comp choose ${Game[key]}`,"black");
    return;
  }
  if (value === 0) {
    switch (key) {
      case 1:
        CompPElement.innerText = `${++CompP}`;
        display(`It's a LOSE, Comp choose ${Game[key]}`,"red");

        break;

      case 2:
        UserPElement.innerText = `${++UserP}`;
        display(`It's a WIN!!, Comp choose ${Game[key]}`,"green");

        break;

      default:
        break;
    }
    return;
  } else if (value === 1) {
    switch (key) {
      case 0:
        UserPElement.innerText = `${++UserP}`;
        display(`It's a WIN!!, Comp choose ${Game[key]}`,"green");

        break;
      case 2:
        CompPElement.innerText = `${++CompP}`;
        display(`It's a LOSE, Comp choose ${Game[key]}`,"red");

        break;

      default:
        break;
    }
    return;
  } else if (value === 2) {
    switch (key) {
      case 0:
        CompPElement.innerText = `${++CompP}`;
        display(`It's a LOSE, Comp choose ${Game[key]}`,"red");
        break;

      case 1:
        UserPElement.innerText = `${++UserP}`;
        display(`It's a WIN!!, Comp choose ${Game[key]}`,"green");

        break;
      default:
        break;
    }
    return;
  }
}

Stone.addEventListener("click", () => {
  Outcome(0);
});

Paper.addEventListener("click", () => {
  Outcome(1);
});

Scissors.addEventListener("click", () => {
  Outcome(2);
});
