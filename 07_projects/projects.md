# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `You're BMI is ${bmi}. You are under weight`;
    } else if (bmi >= 18.6 || bmi < 24.9) {
      results.innerHTML = `You're BMI is ${bmi}. You are in Noraml range`;
    } else if (bmi >= 24.9) {
      results.innerHTML = `You're BMI is ${bmi}. You are Obese`;
    }
  }
});
```

## project 3 solution code

```javascript
const clock = document.querySelector("#clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 solution

```javascript
const randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userGuesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a number between 1 to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNum) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Number is too low");
  } else if (guess > randomNum) {
    displayMessage("Number to too high");
  }
}

function displayGuess(guess) {
  //
  userInput.value = "";
  userGuesses.innerHTML += `${guess} `;
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //
  lowHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("buton");
  p.innerHTML = `<h2 id='newGame>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButon = document.querySelector("#newGame");
  newGameButon.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userGuesses.innerHTML = "";
    lastResult.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

# Project 5 solution

```javascript
const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
<div class='color'>
  <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
</div>
`;
});
```

# Project 6 Solution

```javascript

```
