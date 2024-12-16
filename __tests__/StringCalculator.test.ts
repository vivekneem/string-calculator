// src/tests/StringCalculator.test.ts
import { StringCalculator } from "../src/js/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  describe("Basic functionality", () => {
    test("empty string returns 0", () => {
      expect(calculator.add("")).toBe(0);
    });

    test("single number returns the number", () => {
      expect(calculator.add("1")).toBe(1);
    });

    test("two numbers returns their sum", () => {
      expect(calculator.add("1,2")).toBe(3);
    });
  });

  describe("Custom delimiters", () => {
    test("simple custom delimiter", () => {
      expect(calculator.add('"//;\n1;2"')).toBe(3);
    });

    test("multi-character delimiter", () => {
      expect(calculator.add('"//[***]\n1***2***3"')).toBe(6);
    });
  });

  describe("Newlines", () => {
    test("handles newlines between numbers", () => {
      expect(calculator.add('"1\n2,3"')).toBe(6);
    });
  });
});
