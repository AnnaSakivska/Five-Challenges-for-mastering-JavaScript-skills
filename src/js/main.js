// Challenge 1: Your Age in Days

function ageInDays() {
  let birthYear = prompt("What year were you born... Good friend?");
  let ageInDays = (2019 - birthYear) * 365;
  console.log(ageInDays);

  let h1 = document.createElement("h1");
  //   let textAnswer = document.createTextNode("You are " + ageInDays + " days old.");
  let flexBoxResult = document.querySelector(".flex-box-result");
  h1.classList.add("ageInDays");
  h1.innerHTML = "You are " + ageInDays + " days old.";
  //   h1.appendChild(textAnswer);
  flexBoxResult.appendChild(h1);
  //   resetButton.innerHTML = ageInSays;
}

let clickMeButton = document.querySelector(".click-me-button");
clickMeButton.addEventListener("click", ageInDays);

function reset() {
  let flexBoxResult = document.querySelector(".flex-box-result");
  let h1 = document.querySelector(".ageInDays");
  h1.parentNode.removeChild(h1);
}

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", reset);
