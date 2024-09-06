import { renderHook, act } from "@testing-library/react";
import { useHandleSecondChallenge } from "@/app/hooks/useHandleSecondChallenge";

describe("useHandleSecondChallenge Hook", () => {
    it("should handle the initial state", () => {
        const { result } = renderHook(() => useHandleSecondChallenge());

        // Verifica el estado inicial
        expect(result.current.state.coins).toBeUndefined();
        expect(result.current.state.changeMin).toBeUndefined();
        expect(result.current.state.error).toBeUndefined();
    });

    it("should set currencies", () => {
        const { result } = renderHook(() => useHandleSecondChallenge());

        // Act para disparar setCoins
        act(() => {
            result.current.setCoins("5");
        });

        // Verifica que se haya actualizado el estado correctamente
        expect(result.current.state.coins).toContain(5);
        expect(result.current.state.error).toBeUndefined();
    });

    it("should handle errors when an empty value is submitted", () => {
        const { result } = renderHook(() => useHandleSecondChallenge());

        // Act para disparar setCoins con un valor vacío
        act(() => {
            result.current.setCoins("");
        });

        // Verifica que se haya actualizado el error
        expect(result.current.state.error).toBe("No se puede enviar un valor vacío");
    });

    it("should handle the submit", () => {
        const { result } = renderHook(() => useHandleSecondChallenge());

        // Simular la llamada a setCoins
        act(() => {
            result.current.setCoins("5");
        });

        // Act para simular el envío
        act(() => {
            result.current.handleSubmit({ preventDefault: () => { } });
        });

        // Verifica si el resultado (cambio mínimo) está actualizado
        expect(result.current.state.changeMin).not.toBeUndefined();
    });
});
