import { firstChallenge, validateNumberInput } from "@/app/utils/functions";
import { FirstChallengeAction } from "../actions/first.challenge.actions";
import { FirstChallengeState } from "../interfaces/first.challenge.interfaces";

export const firstChallengeReducer = (
  state: FirstChallengeState,
  action: FirstChallengeAction,
): FirstChallengeState => {
  const { numbers, targetSum } = state;

  switch (action.type) {
    case "setNumbers":
      return {
        ...state,
        number: "",
        numbers: numbers
          ? [...numbers, action.payload.value]
          : [action.payload.value],
      };
    case "setNumber":
      return {
        ...state,
        number: action.payload.value,
        error: validateNumberInput(action.payload.value),
      };
    case "setTargetSum":
      return {
        ...state,
        targetSum: action.payload.value,
      };
    case "setResult":
      return {
        ...state,
        result: numbers ? firstChallenge({ numbers, targetSum }) : undefined,
      };

    case "setResetNumber":
      return {
        ...state,
        numbers: undefined,
        number: undefined,
        result: undefined,
        error: undefined,
      };
    case "setResetTargetSum":
      return {
        ...state,
        targetSum: 0,
        result: undefined,
      };
    case "setError":
      return {
        ...state,
        error: action.payload.value,
      };

    default:
      return state;
  }
};
