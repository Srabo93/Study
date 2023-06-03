import { extractNumberValues } from "./src/parser.js";
import { calculateNumbers } from "./src/math.js";
import { generateOutput } from "./src/output.js";

const form = document.querySelector("form");
const output = document.getElementById("result");

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractNumberValues(form);
  const result = calculateNumbers(numberValues);
  const resultText = generateOutput(result);

  output.textContent = resultText;
}

form.addEventListener("submit", formSubmitHandler);
