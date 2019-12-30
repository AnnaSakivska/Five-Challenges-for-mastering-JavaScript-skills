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

// Challenge 2: Cat Generator

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
        src: "./src/img/grey-kitten-on-floor.jpg",
        alt: "cat image",
        class: "cat-image"
    });

    catContainer.appendChild(catImg);
}

let catGeneratorButton = document.querySelector(".cat-generator-button");
catGeneratorButton.addEventListener("click", catGenerator);

//Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    let humanChoice = yourChoice.target.id;
    let botChoice = numberToChoice(randToRpsInt());
    let results = decideWinner(humanChoice, botChoice);
    let message = finalMessage(results);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function thisImg(imgClass) {
    return document.querySelector(imgClass);
}

thisImg(".rock-image").addEventListener("click", rpsGame);
thisImg(".paper-image").addEventListener("click", rpsGame);
thisImg(".scissors-image").addEventListener("click", rpsGame);

thisImg(".rock-image").id = "rock";
thisImg(".paper-image").id = "paper";
thisImg(".scissors-image").id = "scissors";

// document.querySelector(".rock-image").addEventListener("click", rpsGame);

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        rock: {scissors: 1, rock: 0.5, paper: 0},
        paper: {rock: 1, paper: 0.5, scissors: 0},
        scissors: {paper: 1, scissors: 0.5, rock: 0}
    };

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {message: "You lost!", color: "red"};
    } else if (yourScore === 0.5) {
        return {message: "Your tied!", color: "yellow"};
    } else {
        return {message: "Your won!", color: "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        rock: thisImg(".rock-image").src,
        paper: thisImg(".paper-image").src,
        scissors: thisImg(".scissors-image").src
    };

    let rpsImageContainer = document.querySelector(".rps-image-container");
    rpsImageContainer.innerHTML = "";
    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML =
        "<img src='" +
        imagesDatabase[humanImageChoice] +
        "' alt='' class='rps-image-result'>";
    botDiv.innerHTML =
        "<img src='" +
        imagesDatabase[botImageChoice] +
        "' alt='' class='rps-image-result'>";
    messageDiv.innerHTML = `<h1>${finalMessage.message}</h1>`;

    humanDiv.style.cssText = `width: 200px; box-shadow: 0 10px 30px blue; margin: 10px;`;
    botDiv.style.cssText = `width: 200px; box-shadow: 0 10px 30px red; margin: 10px;`;
    messageDiv.style.cssText = `width: 200px; margin: auto 0; color: ${finalMessage.color}; font-size: 35px;`;

    rpsImageContainer.appendChild(humanDiv);
    rpsImageContainer.appendChild(messageDiv);
    rpsImageContainer.appendChild(botDiv);
}

//Challenge 4: Challenge 4: Change the color of all Buttons!

let allButtons = document.querySelectorAll(".btn");
let copyAllColors = [];

for (let i = 0; i < allButtons.length; i++) {
    copyAllColors.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.target.value === "red") {
        colorChoiceFunction("btn-danger");
    } else if (buttonThingy.target.value === "blue") {
        colorChoiceFunction("btn-primary");
    } else if (buttonThingy.target.value === "random") {
        randomColorFunction();
    } else {
        resetColorFunction();
    }

    function colorChoiceFunction(colorClass) {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(colorClass);
        }
    }

    function resetColorFunction() {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllColors[i]);
        }
    }

    function randToColorInt() {
        return Math.floor(Math.random() * 4);
    }

    function randomColorFunction() {
        let randomChoices = [
            "btn-primary",
            "btn-danger",
            "btn-warning",
            "btn-success"
        ];
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(randomChoices[randToColorInt()]);
        }
    }
}

let selectElement = document.querySelector(".select-background");
selectElement.addEventListener("click", buttonColorChange);

//Challenge 5: Blackjack
let blackjackGame = {
    you: {
        scoreSpan: ".your-blackjack-result",
        div: ".your-box",
        score: 0
    },
    dealer: {
        scoreSpan: ".dealer-blackjack-result",
        div: ".dealer-box",
        score: 0
    },
    cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
    cardsMap: {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        K: 10,
        J: 10,
        Q: 10,
        A: [1, 11]
    },
    wins: 0,
    losses: 0,
    draws: 0,
    isStand: false,
    turnsOver: false
};

const You = blackjackGame.you,
    Dealer = blackjackGame.dealer;

const hitSound = new Audio("src/sounds/swish.m4a");
const winSound = new Audio("src/sounds/cash.mp3");
const lossSound = new Audio("src/sounds/aww.mp3");

document
    .querySelector(".blackjack-hit-button")
    .addEventListener("click", blackjackHit);

document
    .querySelector(".blackjack-stand-button")
    .addEventListener("click", dealerLogic);

document
    .querySelector(".blackjack-deal-button")
    .addEventListener("click", blackjackDeal);

function blackjackHit() {
    if (blackjackGame.isStand === false) {
        let card = randomCard();
        showCard(card, You);
        playerScoreCounter(card, You);
        showScore(You);
        hitSound.play();
    }
}

function randomCard() {
    return blackjackGame.cards[Math.floor(Math.random() * 13)];
}

function showCard(card, activePlayer) {
    if (activePlayer.score <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `src/images-blackjack/${card}.png`;
        cardImage.classList.add("cards-images");
        cardImage.style.cssText =
            "width: 20%; margin: 10px; align-self: flex-start;";
        document.querySelector(activePlayer["div"]).appendChild(cardImage);
    }
}

function blackjackDeal() {
    if (blackjackGame.turnsOver === true) {
        blackjackGame.isStand = false;
        removeResult();
        removeCard(You);
        removeCard(Dealer);
        blackjackGame.turnsOver = false;
    }
}

function removeCard(activePlayer) {
    let yourOrBotImages = document
        .querySelector(activePlayer.div)
        .querySelectorAll(".cards-images");

    for (let i = 0; i < yourOrBotImages.length; i++) {
        yourOrBotImages[i].remove();
    }
    activePlayer.score = 0;
    let scoreSpanTag = document.querySelector(activePlayer.scoreSpan);
    scoreSpanTag.innerHTML = `${activePlayer.score}`;
    scoreSpanTag.style.color = "white";
}

function playerScoreCounter(card, activePlayer) {
    let activeCard = blackjackGame.cardsMap[card];

    if (card === "A") {
        if (activePlayer.score <= 10) {
            activeCard = blackjackGame.cardsMap[card][1];
        } else {
            activeCard = blackjackGame.cardsMap[card][0];
        }
    }
    activePlayer.score += activeCard;
}

function showScore(activePlayer) {
    let scoreSpanTag = document.querySelector(activePlayer.scoreSpan);
    if (activePlayer.score > 21) {
        scoreSpanTag.style.color = "red";
        scoreSpanTag.innerHTML = "BUST!";
    } else {
        scoreSpanTag.innerHTML = `${activePlayer.score}`;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function dealerLogic() {
    blackjackGame.isStand = true;
    while (Dealer.score < 16 && blackjackGame.isStand === true) {
        hitSound.play();
        let card = randomCard();
        showCard(card, Dealer);
        playerScoreCounter(card, Dealer);
        showScore(Dealer);
        await sleep(1000);
    }
    if (Dealer["score"] > 15) {
        blackjackGame.turnsOver = true;
        let winner = computerWinner();
        showResult(winner);
    }
}

function computerWinner() {
    let winner;
    if (You.score <= 21) {
        //condition: higher score than dealer or when dealer busts but you're not
        if (You.score > Dealer.score || Dealer.score > 21) {
            blackjackGame.wins++;
            winner = You;
        } else if (You.score < Dealer.score) {
            blackjackGame.losses++;
            winner = Dealer;
        } else if (You.score === Dealer.score) {
            blackjackGame.draws++;
        }
    } else if (You.score > 21 && Dealer.score <= 21) {
        //condition: when user bust but dealer doesn't
        blackjackGame.losses++;
        winner = Dealer;
    } else if (You.score > 21 && Dealer.score > 21) {
        //condition: when you AND the dealer busts
        blackjackGame["draws"]++;
    } else if (You.score === 21 && Dealer.score === 21) {
        //condition: when you AND the dealer busts
        blackjackGame.draws++;
    }
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame.turnsOver === true) {
        if (winner === You) {
            document.querySelector(".wins").textContent = blackjackGame["wins"];
            message = "You won!";
            messageColor = "green";
            winSound.play();
        } else if (winner === Dealer) {
            document.querySelector(".losses").textContent = blackjackGame["losses"];
            message = "You lost!";
            messageColor = "red";
            lossSound.play();
        } else {
            document.querySelector(".draws").textContent = blackjackGame["draws"];
            message = "You drew!";
            messageColor = "black";
        }

        document.querySelector(".blackjack-result").innerHTML = message;
        document.querySelector(".blackjack-result").style.color = messageColor;
    }
}

function removeResult() {
    document.querySelector(".blackjack-result").innerHTML = `Let's play!`;
    document.querySelector(".blackjack-result").style.color = "black";
}
