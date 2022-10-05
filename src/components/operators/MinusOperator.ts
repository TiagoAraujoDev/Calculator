import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const MinusOperator = (operator: string): HTMLDivElement => {
  const MinusOperator = document.createElement("div");
  MinusOperator.classList.add("minus-operator");
  MinusOperator.textContent = operator;
  MinusOperator.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.displayElement(operator);
    handleExpression.setOperation(operator);
  });

  return MinusOperator;
};
