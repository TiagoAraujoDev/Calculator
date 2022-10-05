import "./style.css";

export const Display = (): HTMLDivElement => {
  const Display = document.createElement("div");
  Display.classList.add("display");

  const ExpressionBox = document.createElement("div");
  ExpressionBox.classList.add("expression-box");

  Display.appendChild(ExpressionBox);

  const ResultBox = document.createElement("div");
  ResultBox.classList.add("result-box");

  Display.appendChild(ResultBox);

  return Display;
};
