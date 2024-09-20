import {
  firstChallenge,
  validateNumberInput,
  secondChallenge,
} from "@/app/utils/functions";

// Prueba para firstChallenge
describe("firstChallenge", () => {
  it("should return a pair of numbers that sum to the targetSum", () => {
    const result = firstChallenge({
      numbers: [2, 7, 11, 15],
      targetSum: 9,
    });
    expect(result).toEqual([2, 7]);
  });

  it("should return an empty array if no pair is found", () => {
    const result = firstChallenge({
      numbers: [1, 2, 3],
      targetSum: 6,
    });
    expect(result).toEqual([]);
  });
});

// Prueba para validateNumberInput
describe("validateNumberInput", () => {
  it("should return 'Solo números' if the input is not numeric", () => {
    expect(validateNumberInput("abc")).toBe("Solo números");
  });

  it("should return undefined if the input is valid", () => {
    expect(validateNumberInput("123")).toBeUndefined();
  });

  it("should return undefined if the input is empty", () => {
    expect(validateNumberInput("")).toBeUndefined();
  });
});

// Prueba para secondChallenge
describe("secondChallenge", () => {
  it("should return the minimum unconstructible change", () => {
    const result = secondChallenge({
      coins: [1, 1, 2, 3, 5],
    });
    expect(result).toBe(13);
  });

  it("should return 1 if no changes can be constructed", () => {
    const result = secondChallenge({
      coins: [],
    });
    expect(result).toBe(1);
  });
});
