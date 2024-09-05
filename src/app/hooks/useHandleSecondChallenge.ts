import { useReducer } from "react";
import * as actions from "@/challenge-reducer/actions/second.challenge.actions";
import { SecondChallengeState } from "@/challenge-reducer/interfaces/second.challenge.interfaces";
import { secondChallengeReducer } from "@/challenge-reducer/reducer/second.challenge.reducer";




const INITIAL_STATE: SecondChallengeState = {
    coin: undefined,
    coins: undefined,
    changeMin: undefined,
    error: undefined,
};
export const useHandleSecondChallenge = () => {


    const [state, dispatch] = useReducer(secondChallengeReducer, INITIAL_STATE);

    const setErrors = (error: string): void => {
        dispatch(actions.doSetError(error))
    }

    const setCoins = (value: string): void => {
        if (value == '') return setErrors("No se puede enviar un valor vacío")

        value === '' ? setErrors("Cambio inválido") :
            dispatch(actions.doSetCoins(Number(value)));
    };
    const setCoin = (value: string): void => {
        dispatch(actions.doSetCoin(value));
    };

    const handleResetCoin = (): void => {
        dispatch(actions.doSetResetCoin());
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        dispatch(actions.doSetChangeMin())
    };

    return {
        state,
        setCoins,
        setCoin,
        handleResetCoin,
        handleSubmit
    };
};
