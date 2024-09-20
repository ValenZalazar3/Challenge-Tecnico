import { useReducer } from "react";
import * as actions from "@/challenge-reducer/actions/first.challenge.actions";
import { FirstChallengeState } from "@/challenge-reducer/interfaces/first.challenge.interfaces";
import { firstChallengeReducer } from "@/challenge-reducer/reducer/first.challenge.reducer";

const INITIAL_STATE: FirstChallengeState = {
  number: undefined,
  numbers: undefined,
  targetSum: 0,
  result: undefined,
  error: undefined,
};
export const useHandleFirstChallenge = () => {
  const [state, dispatch] = useReducer(firstChallengeReducer, INITIAL_STATE);

  const setErrors = (error: string): void => {
    dispatch(actions.doSetError(error));
  };

  const setNumbers = (value: string): void => {
    if (value == "") return setErrors("No se puede enviar un valor vacío");
    if (state.numbers) {
      for (let i = 0; i <= state.numbers.length; i++) {
        if (Number(value) == state.numbers[i])
          return setErrors("El número ingresado se encuentra repetido");
      }
    }
    value === ""
      ? setErrors("Numero inválido")
      : dispatch(actions.doSetNumbers(Number(value)));
  };
  const setNumber = (value: string): void => {
    dispatch(actions.doSetNumber(value));
  };
  const setTargetSum = (value: number): void => {
    dispatch(actions.doSetTargetSum(value));
  };
  const handleResetNumber = (): void => {
    dispatch(actions.doSetResetNumber());
  };
  const handleResetTargetSum = (): void => {
    dispatch(actions.doSetResetTargetSum());
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(actions.doSetResult());
  };

  return {
    state,
    setNumbers,
    setNumber,
    setTargetSum,
    handleResetNumber,
    handleResetTargetSum,
    handleSubmit,
  };
};
