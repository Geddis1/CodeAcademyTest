/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.getElementById("search");
  const outputDiv = document.getElementById("output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputWeight = parseFloat(input.value);
    if (isNaN(inputWeight)) {
      outputDiv.innerText = "Please enter a valid weight.";
      return;
    }

    const pounds = inputWeight * 2.2046;
    const grams = inputWeight / 0.001;
    const ounces = inputWeight * 35.274;

    const resultText = `Weight ${inputWeight} kg is equivalent to:
      ${pounds.toFixed(2)} pounds,
      ${grams.toFixed(2)} grams,
      ${ounces.toFixed(2)} ounces`;

    outputDiv.innerText = resultText;
  });
});
