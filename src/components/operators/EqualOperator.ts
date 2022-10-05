import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const EqualOperator = (operator: string): HTMLDivElement => {
  const EqualOperator = document.createElement("div");
  EqualOperator.classList.add("equal-operator");
  EqualOperator.textContent = operator;
  EqualOperator.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.setFinalResult();
  });

  return EqualOperator;
};
