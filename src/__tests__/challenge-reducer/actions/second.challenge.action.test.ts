import {
    doSetCoin,
    doSetCoins,
    doSetChangeMin,
    doSetError,
    doSetResetCoin,
    doSetResetChangeMin
} from "@/challenge-reducer/actions/second.challenge.actions";

describe("SecondChallenge Actions", () => {
    it("should create the correct action for doSetCoin", () => {
        const expectedAction = {
            type: "setCoin",
            payload: { value: "5" },
        };
        expect(doSetCoin("5")).toEqual(expectedAction);
    });

    it("should create the correct action for doSetCoins", () => {
        const expectedAction = {
            type: "setCoins",
            payload: { value: 10 },
        };
        expect(doSetCoins(10)).toEqual(expectedAction);
    });

    it("should create the correct action for doSetChangeMin", () => {
        const expectedAction = { type: "setChangeMin" };
        expect(doSetChangeMin()).toEqual(expectedAction);
    });

    it("should create the correct action for doSetError", () => {
        const expectedAction = {
            type: "setError",
            payload: { value: "Error message" },
        };
        expect(doSetError("Error message")).toEqual(expectedAction);
    });

    it("should create the correct action for doSetResetCoin", () => {
        const expectedAction = { type: "setResetCoin" };
        expect(doSetResetCoin()).toEqual(expectedAction);
    });

    it("should create the correct action for doSetResetChangeMin", () => {
        const expectedAction = { type: "setResetChangeMin" };
        expect(doSetResetChangeMin()).toEqual(expectedAction);
    });
});

