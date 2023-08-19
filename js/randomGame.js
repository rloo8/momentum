const rangeForm = document.querySelector(".range");
const playForm = document.querySelector(".playing");
const resultBox = document.querySelector("#result");

const rangeNumber = rangeForm.querySelector("input");
const guessNumber = playForm.querySelector("input");
const playBtn = playForm.querySelector("button");

function handlePlaying(event) {
  event.preventDefault();

  const randomNumber = Math.ceil(Math.random() * rangeNumber.value);
  const userNumber = guessNumber.value;

  if (rangeNumber.value === "" || userNumber === "") {
    alert("Check your number");
  } else {
    const youChose = resultBox.querySelector("span:first-child");
    const result = resultBox.querySelector("span:last-child");

    youChose.innerHTML = `You chose: <b>${userNumber}</b>&nbsp&nbsp the machine chose: <b>${randomNumber}</b>`;
    if (parseInt(userNumber) !== parseInt(randomNumber)) {
      result.innerText = "You lost!";
    } else result.innerText = "You won!";
  }
}

playBtn.addEventListener("click", handlePlaying);
