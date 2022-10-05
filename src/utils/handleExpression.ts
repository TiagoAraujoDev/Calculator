class HandleExpression {
  private elements: string[];
  private operator: string;
  private previousResult: number | null;
  private currentValue: string;
  private result: number = 0;

  private static INSTANCE: HandleExpression;

  private constructor() {
    this.elements = [];
    this.operator = "";
    this.currentValue = "";
    this.previousResult = null;
  }

  public static getInstance(): HandleExpression {
    if (!HandleExpression.INSTANCE) {
      HandleExpression.INSTANCE = new HandleExpression();
    }
    return HandleExpression.INSTANCE;
  }

  setValue(element: string): void {
    this.elements.push(element);
  }

  concatValue(): number {
    if (this.previousResult || this.previousResult === 0) {
      switch (this.operator) {
        case "+":
          this.currentValue = this.elements.reduce((acc, prev) => {
            return acc + prev;
          }, "");

          this.result = this.previousResult + parseFloat(this.currentValue);
          break;
        case "-":
          this.currentValue = this.elements.reduce((acc, prev) => {
            return acc + prev;
          }, "");

          this.result = this.previousResult - parseFloat(this.currentValue);
          break;
        case "/":
          this.currentValue = this.elements.reduce((acc, prev) => {
            return acc + prev;
          }, "");

          this.result = this.previousResult / parseFloat(this.currentValue);
          break;
        case "*":
          this.currentValue = this.elements.reduce((acc, prev) => {
            return acc + prev;
          }, "");

          this.result = this.previousResult * parseFloat(this.currentValue);
          break;
      }
      return this.result;
    } else {
      const value = this.elements.reduce((acc, prev) => {
        return acc + prev;
      }, "");
      this.result = parseFloat(value);

      return this.result;
    }
  }

  displayElement(value: string, isFinalResult = false): void {
    const display = document.querySelector<HTMLDivElement>(".expression-box");

    if (isFinalResult) {
      if (display) display.textContent = value;
    } else {
      if (display) display.textContent += value;
    }
  }

  displayResult(result: number | string): void {
    const resultBox = document.querySelector<HTMLDivElement>(".result-box");

    if (typeof result === "number") {
      if (resultBox) resultBox.textContent = `=${result.toString()}`;
    } else {
      if (resultBox) resultBox.textContent = result;
    }
  }

  setFinalResult(): void {
    this.previousResult = this.result;
    this.operator = "";
    this.currentValue = "";
    this.elements.splice(0, this.elements.length);

    this.displayElement(this.previousResult.toString(), true);
    this.displayResult("");
  }

  setOperation(operator: string): void {
    this.operator = operator;
    this.previousResult = this.result;
    this.currentValue = "";
    this.elements.splice(0, this.elements.length);
  }

  clear(): void {
    this.elements.splice(0, this.elements.length);
    this.previousResult = null;
    this.currentValue = "";
    this.result = 0;
    this.operator = "";

    this.displayElement("", true);
    this.displayResult("");
  }
}

export { HandleExpression };
