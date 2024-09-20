const billInput = document.getElementById("bill");
const percentageButtons = [...document.getElementsByClassName("percentage")];
const peopleInput = document.getElementById("people-amount");
const resultTip = document.getElementById("final-tip");
const resultTotal = document.getElementById("final-total");
const resetAll = document.getElementById("reset");
const customInput = [...document.getElementsByClassName("custom")];
const errorMessage = document.getElementById("error-message");

let billValue = 0;
let percentageValue = 0;
let peopleValue = 0;

billInput.addEventListener("input", (event) => {
  billValue = parseFloat(event.target.value);

  if (billValue > 0) {
    billInput.style.color = "#00474b";
    billInput.style.fontSize = "24px";
    billInput.style.fontWeight = "bold";
  }
});

percentageButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    percentageValue = parseInt(event.target.textContent);

    percentageButtons.forEach((button) => (button.style.backgroundColor = ""));

    button.style.backgroundColor = "#26c2ae";
    calculation();
  });
});

customInput.forEach((input) => {
  input.addEventListener("input", (event) => {
    percentageValue = parseInt(event.target.value);

    customInput.forEach((input) => (input.style.backgroundColor = ""));

    if (percentageValue > 0) {
      event.target.style.color = "#00474b";
      event.target.style.fontSize = "24px";
      event.target.style.fontWeight = "bold";
    }

    calculation();
  });
});

peopleInput.addEventListener("input", (event) => {
  peopleValue = event.target.value;

  if (peopleValue > 0) {
    peopleInput.style.color = "#00474b";
    peopleInput.style.fontSize = "24px";
    peopleInput.style.fontWeight = "bold";
  }

  if (parseInt(peopleValue) === 0) {
    peopleInput.style.outlineColor = "#e17052";
    errorMessage.textContent = "Can't be zero";
  }
  calculation();
});

function calculation() {
  const billAmount = parseFloat(billValue);
  const peopleAmount = parseFloat(peopleValue);
  const resultTipValue = (billAmount * (percentageValue / 100)) / peopleAmount;
  const resultTotalValue = billAmount / peopleAmount + resultTipValue;

  if (peopleAmount !== 0 && peopleAmount) {
    resultTip.textContent = `$${resultTipValue.toFixed(2)}`;
    resultTotal.textContent = `$${resultTotalValue.toFixed(2)}`;
  }
}

resetAll.addEventListener("click", (event) => {
  billInput.value = "";
  peopleInput.value = "";
  billValue = 0;
  percentageValue = 0;
  peopleValue = 0;
  resultTip.textContent = `$0.00`;
  resultTotal.textContent = `$0.00`;

  peopleInput.style.outlineColor = "#26c2ae";

  percentageButtons.forEach((button) => {
    button.style.backgroundColor = "#00474b";
  });

  customInput.forEach((input) => {
    input.value = "";
    input.style.backgroundColor = "#f3f9fa";
    errorMessage.textContent = "";
  });
});
