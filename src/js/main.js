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
  // let flexBoxResult = document.querySelector(".flex-box-result");
  let h1 = document.querySelector(".ageInDays");
  //   h1.removeClass('ageInDays');
  h1.parentNode.removeChild(h1);
}

let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", reset);

// Challege 2: Cat Generator

function catGenerator() {
  let catImg = document.createElement("img");
  // catImg.src = "./src/img/photo-of-gray-and-white-tabby-kitten.jpg";
  // catImg.alt = "cat image";
  // catImg.classList.add("cat-image");

  // catImg.setAttribute("src", "./src/img/photo-of-gray-and-white-tabby-kitten.jpg");

  let catContainer = document.querySelector(".flex-box-container-two");

  //https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript
  function setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  setAttributes(catImg, {
    src: "./src/img/photo-of-gray-and-white-tabby-kitten.jpg",
    alt: "cat image",
    class: "cat-image"
  });

  catContainer.appendChild(catImg);
}

let catGeneratorButton = document.querySelector(".cat-generator-button");
catGeneratorButton.addEventListener("click", catGenerator);
