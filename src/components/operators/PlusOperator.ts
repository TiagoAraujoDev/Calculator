import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const PlusOperator = (operator: string): HTMLDivElement => {
  const PlusOperator = document.createElement("div");
  PlusOperator.classList.add("plus-operator");
  PlusOperator.textContent = operator;
  PlusOperator.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.displayElement(operator);
    handleExpression.setOperation(operator);
  });

  return PlusOperator;
};
