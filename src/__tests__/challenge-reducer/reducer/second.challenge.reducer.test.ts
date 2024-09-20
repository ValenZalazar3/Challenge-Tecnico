import { secondChallengeReducer } from "@/challenge-reducer/reducer/second.challenge.reducer";
import { SecondChallengeState } from "@/challenge-reducer/interfaces/second.challenge.interfaces";
import * as actions from "@/challenge-reducer/actions/second.challenge.actions";

describe("secondChallengeReducer", () => {
  const initialState: SecondChallengeState = {
    coin: undefined,
    coins: undefined,
    changeMin: undefined,
    error: undefined,
  };

  it("debería agregar una moneda al estado", () => {
    const action = actions.doSetCoins(5);
    const newState = secondChallengeReducer(initialState, action);

    expect(newState.coins).toEqual([5]);
  });

  it("debería establecer una moneda y validar el input", () => {
    const action = actions.doSetCoin("123");
    const newState = secondChallengeReducer(initialState, action);

    expect(newState.coin).toBe("123");
    expect(newState.error).toBeUndefined();
  });

  it("debería establecer un error cuando se da un input inválido", () => {
    const action = actions.doSetCoin("abc");
    const newState = secondChallengeReducer(initialState, action);

    expect(newState.error).toBe("Solo números");
  });

  it("debería calcular el cambio mínimo correctamente", () => {
    const stateWithCoins: SecondChallengeState = {
      ...initialState,
      coins: [1, 2, 5],
    };
    const action = actions.doSetChangeMin();
    const newState = secondChallengeReducer(stateWithCoins, action);

    expect(newState.changeMin).toBe(4); // Según la lógica del segundo challenge
  });

  it("debería resetear las monedas y los resultados", () => {
    const stateWithData: SecondChallengeState = {
      ...initialState,
      coin: "5",
      coins: [1, 2, 5],
      changeMin: 4,
      error: "Error",
    };
    const action = actions.doSetResetCoin();
    const newState = secondChallengeReducer(stateWithData, action);

    expect(newState.coin).toBeUndefined();
    expect(newState.coins).toBeUndefined();
    expect(newState.changeMin).toBeUndefined();
    expect(newState.error).toBeUndefined();
  });

  it("debería establecer un error correctamente", () => {
    const action = actions.doSetError("Error message");
    const newState = secondChallengeReducer(initialState, action);

    expect(newState.error).toBe("Error message");
  });
});
