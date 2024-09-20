import { FistChallengeProps, SecondChallengeProps } from "./types";

export const firstChallenge = ({
  numbers,
  targetSum,
}: FistChallengeProps): number[] | [] => {
  const numbersMap = new Map();

  numbers.forEach((num) => numbersMap.set(num, targetSum - num));

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    const res = numbersMap.get(num);

    if (!!numbersMap.get(res) && num !== res) return [num, res];
  }

  return [];
};

export const validateNumberInput = (number: string) => {
  const regex = /^\d+$/;
  if (number === "") return;
  if (!regex.test(number)) return "Solo números";

  return;
};

// Funciones del segundo challenge
export const secondChallenge = ({ coins }: SecondChallengeProps): number => {
  coins.sort((a, b) => a - b);
  let currentChange = 0;
  for (const coin of coins) {
    if (coin > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += coin;
  }
  return currentChange + 1;
};
