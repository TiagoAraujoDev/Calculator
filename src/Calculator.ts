import { NumberButton } from "./components/numbers/NumberButton";
import { Display } from "./components/display/Display";
import { DividerOperator } from "./components/operators/DividerOperator";
import { EqualOperator } from "./components/operators/EqualOperator";
import { MinusOperator } from "./components/operators/MinusOperator";
import { PlusOperator } from "./components/operators/PlusOperator";
import { MultipleOperator } from "./components/operators/MultipleOperator";
import { ClearButton } from "./components/clear/ClearButton";

export const Calculator = (): HTMLDivElement => {
  const Calculator = document.createElement("div");
  Calculator.classList.add("calculator");

  Calculator.appendChild(Display());
  Calculator.appendChild(ClearButton());

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");
  keyboard.appendChild(NumberButton("1"));
  keyboard.appendChild(NumberButton("2"));
  keyboard.appendChild(NumberButton("3"));
  keyboard.appendChild(MinusOperator("-"));
  keyboard.appendChild(NumberButton("4"));
  keyboard.appendChild(NumberButton("5"));
  keyboard.appendChild(NumberButton("6"));
  keyboard.appendChild(PlusOperator("+"));
  keyboard.appendChild(NumberButton("7"));
  keyboard.appendChild(NumberButton("8"));
  keyboard.appendChild(NumberButton("9"));
  keyboard.appendChild(MultipleOperator("*"));
  keyboard.appendChild(DividerOperator("/"));
  keyboard.appendChild(NumberButton("0"));
  keyboard.appendChild(NumberButton("."));
  keyboard.appendChild(EqualOperator("="));

  Calculator.appendChild(keyboard);

  return Calculator;
};
