import { HandleExpression } from "../../utils/handleExpression";

import "./style.css";

export const ClearButton = (): HTMLDivElement => {
  const ClearButton = document.createElement("div");
  ClearButton.classList.add("clear-button");
  ClearButton.textContent = "C";
  ClearButton.addEventListener("click", () => {
    const handleExpression = HandleExpression.getInstance();
    handleExpression.clear();
  });

  return ClearButton;
};
