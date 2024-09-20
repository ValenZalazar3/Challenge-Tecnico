import { firstChallengeReducer } from "@/challenge-reducer/reducer/first.challenge.reducer";
import { FirstChallengeState } from "@/challenge-reducer/interfaces/first.challenge.interfaces";
import * as actions from "@/challenge-reducer/actions/first.challenge.actions";

describe("firstChallengeReducer", () => {
  const initialState: FirstChallengeState = {
    number: undefined,
    numbers: undefined,
    targetSum: 0,
    result: undefined,
    error: undefined,
  };

  it("should add a number to the state", () => {
    const action = actions.doSetNumbers(5);
    const newState = firstChallengeReducer(initialState, action);

    expect(newState.numbers).toEqual([5]);
  });

  it("should set a number and validate the input", () => {
    const action = actions.doSetNumber("123");
    const newState = firstChallengeReducer(initialState, action);

    expect(newState.number).toBe("123");
    expect(newState.error).toBeUndefined();
  });

  it(" should set an error when an invalid input is given", () => {
    const action = actions.doSetNumber("abc");
    const newState = firstChallengeReducer(initialState, action);

    expect(newState.error).toBe("Solo números");
  });

  it("should set the target sum", () => {
    const action = actions.doSetTargetSum(10);
    const newState = firstChallengeReducer(initialState, action);

    expect(newState.targetSum).toBe(10);
  });

  it("should calculate the result", () => {
    const stateWithNumbers: FirstChallengeState = {
      ...initialState,
      numbers: [2, 7],
      targetSum: 9,
    };
    const action = actions.doSetResult();
    const newState = firstChallengeReducer(stateWithNumbers, action);

    expect(newState.result).toEqual([2, 7]);
  });

  it("should reset the number and the results", () => {
    const stateWithData: FirstChallengeState = {
      ...initialState,
      numbers: [2, 7],
      number: "5",
      result: [2, 7],
      error: "Error",
    };
    const action = actions.doSetResetNumber();
    const newState = firstChallengeReducer(stateWithData, action);

    expect(newState.numbers).toBeUndefined();
    expect(newState.number).toBeUndefined();
    expect(newState.result).toBeUndefined();
    expect(newState.error).toBeUndefined();
  });

  it("should reset the target sum", () => {
    const stateWithTargetSum: FirstChallengeState = {
      ...initialState,
      targetSum: 15,
    };
    const action = actions.doSetResetTargetSum();
    const newState = firstChallengeReducer(stateWithTargetSum, action);

    expect(newState.targetSum).toBe(0);
    expect(newState.result).toBeUndefined();
  });

  it("should set an error", () => {
    const action = actions.doSetError("Error message");
    const newState = firstChallengeReducer(initialState, action);

    expect(newState.error).toBe("Error message");
  });
});
