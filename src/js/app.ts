// src/js/app.ts
import { StringCalculator } from "./StringCalculator";
import "../css/styles.css";

class CalculatorUI {
  private calculator: StringCalculator;
  private numberInput: HTMLTextAreaElement;
  private resultDiv: HTMLDivElement;

  constructor() {
    this.calculator = new StringCalculator();
    this.numberInput = document.getElementById(
      "numberInput"
    ) as HTMLTextAreaElement;
    this.resultDiv = document.getElementById("result") as HTMLDivElement;
    this.initialize();
  }

  private initialize(): void {
    const calculateBtn = document.getElementById("calculateBtn");
    if (calculateBtn) {
      calculateBtn.addEventListener("click", () => this.calculate());
    }

    this.numberInput.addEventListener("keypress", (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.calculate();
      }
    });
  }

  private calculate(): void {
    try {
      const input = this.numberInput.value;
      console.log("Original input:", input);

      const result = this.calculator.add(input);
      console.log("Calculator result:", result);

      this.showResult(`Sum: ${result}`);
    } catch (error) {
      console.error("Calculation error:", error);
      this.showResult(
        error instanceof Error ? error.message : "An error occurred",
        true
      );
    }
  }

  private showResult(message: string, isError: boolean = false): void {
    this.resultDiv.textContent = message;
    this.resultDiv.style.display = "block";
    this.resultDiv.className = `result ${isError ? "error" : "success"}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CalculatorUI();
});
