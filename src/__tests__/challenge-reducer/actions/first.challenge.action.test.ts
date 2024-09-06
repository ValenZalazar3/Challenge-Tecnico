import {
    doSetNumber,
    doSetNumbers,
    doSetTargetSum,
    doSetResult,
    doSetResetNumber,
    doSetResetTargetSum,
    doSetError
} from "@/challenge-reducer/actions/first.challenge.actions";

describe("FirstChallenge Actions", () => {
    it("should create the correct action for doSetNumber", () => {
        const expectedAction = {
            type: "setNumber",
            payload: { value: "5" },
        };
        expect(doSetNumber("5")).toEqual(expectedAction);
    });

    it("should create the correct action for doSetNumbers", () => {
        const expectedAction = {
            type: "setNumbers",
            payload: { value: 10 },
        };
        expect(doSetNumbers(10)).toEqual(expectedAction);
    });

    it("should create the correct action for doSetTargetSum", () => {
        const expectedAction = {
            type: "setTargetSum",
            payload: { value: 20 },
        };
        expect(doSetTargetSum(20)).toEqual(expectedAction);
    });

    it("should create the correct action for doSetResult", () => {
        const expectedAction = { type: "setResult" };
        expect(doSetResult()).toEqual(expectedAction);
    });

    it("should create the correct action for doSetResetNumber", () => {
        const expectedAction = { type: "setResetNumber" };
        expect(doSetResetNumber()).toEqual(expectedAction);
    });

    it("should create the correct action for doSetResetTargetSum", () => {
        const expectedAction = { type: "setResetTargetSum" };
        expect(doSetResetTargetSum()).toEqual(expectedAction);
    });

    it("should create the correct action for doSetError", () => {
        const expectedAction = {
            type: "setError",
            payload: { value: "Error message" },
        };
        expect(doSetError("Error message")).toEqual(expectedAction);
    });
});

