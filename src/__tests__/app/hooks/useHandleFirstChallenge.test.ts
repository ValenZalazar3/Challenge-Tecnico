import { act, renderHook } from "@testing-library/react";
import { useHandleFirstChallenge } from "@/app/hooks/useHandleFirstChallenge";

describe("useHandleFirstChallenge Hook", () => {
  it("should handle the initial state", () => {
    const { result } = renderHook(() => useHandleFirstChallenge());

    expect(result.current.state.numbers).toBeUndefined();
    expect(result.current.state.targetSum).toBe(0);
    expect(result.current.state.error).toBeUndefined();
  });

  it("should set numbers", () => {
    const { result } = renderHook(() => useHandleFirstChallenge());

    act(() => {
      result.current.setNumbers("5");
    });

    expect(result.current.state.numbers).toContain(5);
    expect(result.current.state.error).toBeUndefined();
  });

  it("should handle errors when an empty value is submitted", () => {
    const { result } = renderHook(() => useHandleFirstChallenge());

    act(() => {
      result.current.setNumbers("");
    });

    expect(result.current.state.error).toBe(
      "No se puede enviar un valor vacío",
    );
  });

  it("should handle the submit", () => {
    const { result } = renderHook(() => useHandleFirstChallenge());

    // Simular la llamada a setNumbers
    act(() => {
      result.current.setNumbers("5");
      result.current.setTargetSum(10);
    });

    act(() => {
      result.current.handleSubmit({ preventDefault: () => {} });
    });

    expect(result.current.state.result).not.toBeUndefined();
  });
});
