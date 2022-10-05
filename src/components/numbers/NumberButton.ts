import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const NumberButton = (text: string): HTMLDivElement => {
  const NumberButton = document.createElement("div");
  NumberButton.classList.add("number-btn");
  NumberButton.textContent = text;

  if (text === ".") {
    NumberButton.style.backgroundColor = "#77298f";
  }

  NumberButton.addEventListener("click", () => {
    const value = NumberButton.innerText;
    const handleExpression = HandleExpression.getInstance();

    handleExpression.setValue(value);
    const result = handleExpression.concatValue();

    handleExpression.displayElement(value);
    handleExpression.displayResult(result);
  });

  return NumberButton;
};
