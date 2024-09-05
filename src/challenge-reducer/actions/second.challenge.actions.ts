export type SecondChallengeAction =
    | { type: "setCoin"; payload: { value: string } }
    | { type: "setCoins"; payload: { value: number } }
    | { type: "setError"; payload: { value: string } }
    | { type: "setChangeMin"; }
    | { type: "setResetCoin"; }
    | { type: "setResetChangeMin"; }


export const doSetCoin = (value: string): SecondChallengeAction => ({
    type: "setCoin",
    payload: { value },
});
export const doSetCoins = (value: number): SecondChallengeAction => ({
    type: "setCoins",
    payload: { value },
});
export const doSetChangeMin = (): SecondChallengeAction => ({
    type: "setChangeMin",
});
export const doSetError = (value: string): SecondChallengeAction => ({
    type: "setError",
    payload: { value }
});

export const doSetResetCoin = (): SecondChallengeAction => ({
    type: "setResetCoin",
});
export const doSetResetChangeMin = (): SecondChallengeAction => ({
    type: "setResetChangeMin",
});