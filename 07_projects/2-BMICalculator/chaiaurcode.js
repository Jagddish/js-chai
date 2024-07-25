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
