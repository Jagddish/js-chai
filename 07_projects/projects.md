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

const clock = document.querySelector("#clock");

setInterval(() => {
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```javascript

```

## project 4 solution

```javascript

```

# Project 5 solution

```javascript

```

# Project 6 Solution

```javascript

```
