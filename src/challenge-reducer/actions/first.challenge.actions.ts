

export type FirstChallengeAction =
    | { type: "setNumber"; payload: { value: string } }
    | { type: "setNumbers"; payload: { value: number } }
    | { type: "setTargetSum"; payload: { value: number } }
    | { type: "setError"; payload: { value: string } }
    | { type: "setResult"; }
    | { type: "setResetNumber"; }
    | { type: "setResetTargetSum"; }


export const doSetNumber = (value: string): FirstChallengeAction => ({
    type: "setNumber",
    payload: { value },
});
export const doSetNumbers = (value: number): FirstChallengeAction => ({
    type: "setNumbers",
    payload: { value },
});
export const doSetTargetSum = (value: number): FirstChallengeAction => ({
    type: "setTargetSum",
    payload: { value },
});

export const doSetResult = (): FirstChallengeAction => ({
    type: "setResult",
});
export const doSetResetNumber = (): FirstChallengeAction => ({
    type: "setResetNumber",
});
export const doSetResetTargetSum = (): FirstChallengeAction => ({
    type: "setResetTargetSum",
});
export const doSetError = (value: string): FirstChallengeAction => ({
    type: "setError",
    payload: { value }
});