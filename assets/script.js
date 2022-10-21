const counterWrapper = document.querySelector(".counter-wrapper");
const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector("reset");
const counterNumber = document.querySelector(".counter-number");
const buttons = document.querySelectorAll(".button");

let counter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const currentButton = e.currentTarget.classList;
    console.log(currentButton);
    if (currentButton.contains("decrease")) {
      console.log(`decrease`);
      counter--;
    } else if (currentButton.contains("increase")) {
      counter++;
      counterNumber.innerText = counter;

      console.log(`incr`);
    } else {
      counter = 0;
      console.log("reset");
    }
    counterNumber.innerText = counter;
    if (Math.floor(Number(counterNumber.innerText)) < 0) {
      `ye`;
      counterNumber.style.color = "red";
    } else if (Math.floor(Number(counterNumber.innerText)) > 0) {
      counterNumber.style.color = "green";
    } else {
      counterNumber.style.color = "black";
    }
  });
});
