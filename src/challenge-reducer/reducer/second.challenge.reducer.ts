import { secondChallenge, validateNumberInput } from "@/app/utils/functions";
import { SecondChallengeAction } from "../actions/second.challenge.actions";
import { SecondChallengeState } from "../interfaces/second.challenge.interfaces";

export const secondChallengeReducer = (
  state: SecondChallengeState,
  action: SecondChallengeAction,
): SecondChallengeState => {
  const { coins } = state;

  switch (action.type) {
    case "setCoins":
      return {
        ...state,
        coin: "",
        coins: coins
          ? [...coins, action.payload.value]
          : [action.payload.value],
      };
    case "setCoin":
      return {
        ...state,
        coin: action.payload.value,
        error: validateNumberInput(action.payload.value),
      };
    case "setChangeMin":
      return {
        ...state,
        changeMin: coins ? secondChallenge({ coins }) : undefined,
      };

    case "setResetCoin":
      return {
        ...state,
        coin: undefined,
        coins: undefined,
        changeMin: undefined,
        error: undefined,
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
