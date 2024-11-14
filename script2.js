import { exo6 } from './script.js';

document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();

  const firstNumber = parseInt(document.getElementById("firstNumber").value);
  const secondNumber = parseInt(document.getElementById("secondNumber").value);

  exo6(firstNumber, secondNumber);
});
