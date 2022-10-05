import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const DividerOperator = (operator: string): HTMLDivElement => {
  const DividerOperator = document.createElement("div");
  DividerOperator.classList.add("divider-operator");
  DividerOperator.textContent = operator;
  DividerOperator.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.displayElement(operator);
    handleExpression.setOperation(operator);
  });

  return DividerOperator;
};
