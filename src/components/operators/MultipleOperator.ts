import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const MultipleOperator = (operator: string): HTMLDivElement => {
  const MultipleOperator = document.createElement("div");
  MultipleOperator.classList.add("multiple-operator");
  MultipleOperator.textContent = operator;
  MultipleOperator.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.displayElement(operator);
    handleExpression.setOperation(operator);
  });

  return MultipleOperator;
};
