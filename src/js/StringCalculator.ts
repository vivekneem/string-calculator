// src/js/StringCalculator.ts
export class StringCalculator {
  private callCount: number = 0;

  add(numbers: string): number {
    this.callCount++;
    console.log("Original input:", numbers);

    // Remove surrounding quotes and handle escaped newlines
    numbers = numbers.replace(/^"|"$/g, "");
    numbers = numbers.replace(/\\n/g, "\n");
    console.log("After cleaning:", numbers);

    if (!numbers) {
      return 0;
    }

    let delimiter = ",";
    let numbersToProcess = numbers;

    // Handle custom delimiters
    if (numbers.startsWith("//")) {
      const firstNewLine = numbers.indexOf("\n");

      if (firstNewLine !== -1) {
        const delimiterPart = numbers.substring(2, firstNewLine);

        // Check if delimiter is enclosed in square brackets
        if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
          delimiter = delimiterPart.slice(1, -1); // Remove [ and ]
        } else {
          delimiter = delimiterPart; // Use as-is for simple delimiter
        }

        numbersToProcess = numbers.substring(firstNewLine + 1);
        console.log("Custom delimiter:", delimiter);
        console.log("Numbers to process:", numbersToProcess);
      }
    }

    // Handle newlines in the numbers part
    numbersToProcess = numbersToProcess.replace(/\n/g, delimiter);

    // Escape special characters in delimiter for regex
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    console.log("Escaped delimiter:", escapedDelimiter);

    // Split and parse numbers
    const nums = numbersToProcess
      .split(new RegExp(escapedDelimiter))
      .map((num) => num.trim())
      .filter((num) => num.length > 0)
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    console.log("Parsed numbers:", nums);

    // Check for negatives
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    // Calculate sum
    const result = nums
      .filter((num) => num <= 1000)
      .reduce((sum, num) => sum + num, 0);

    console.log("Final result:", result);
    return result;
  }

  getCalledCount(): number {
    return this.callCount;
  }
}
