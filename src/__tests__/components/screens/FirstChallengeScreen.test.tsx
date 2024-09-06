import { render, screen, fireEvent, act, renderHook } from "@testing-library/react";
import FirstChallengeScreen from "@/components/screens/FirstChallengeScreen";
import '@testing-library/jest-dom';
import { useHandleFirstChallenge } from "@/app/hooks/useHandleFirstChallenge";

describe("FirstChallengeScreen", () => {
    it("It should render", () => {
        render(<FirstChallengeScreen />);

        // Verifica si los elementos principales están en el documento
        expect(screen.getByText(/Challenge 1ro/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Colocar números distintos:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Suma objetivo:/i)).toBeInTheDocument();
    });

    it("should allow adding numbers and display the list", () => {
        render(<FirstChallengeScreen />);

        // Simula agregar un número
        const numberInput = screen.getByLabelText(/Colocar números distintos:/i);
        fireEvent.change(numberInput, { target: { value: "5" } });

        const addButton = screen.getByText(/Agregar número/i);
        fireEvent.click(addButton);

        // Verifica que el número se muestre en la lista
        expect(screen.getByDisplayValue(/Tus números son: 5/i)).toBeInTheDocument();
    });

    it("should show an error when entering an invalid number", () => {
        render(<FirstChallengeScreen />);

        const numberInput = screen.getByLabelText(/Colocar números distintos:/i);
        fireEvent.change(numberInput, { target: { value: "abc" } });

        const errorMessage = screen.getByText(/Solo números/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it("should allow setting the target sum", () => {
        render(<FirstChallengeScreen />);

        // Simula ingresar la suma objetivo
        const targetSumInput = screen.getByLabelText(/Suma objetivo:/i);
        fireEvent.change(targetSumInput, { target: { value: "9" } });

        expect(targetSumInput).toHaveValue("9");
    });

    it("should update the state with the correct result after submit", () => {
        const { result } = renderHook(() => useHandleFirstChallenge());


        act(() => {
            result.current.setNumbers("2");
        });
        act(() => {
            result.current.setNumbers("7");
        });
        act(() => {
            result.current.setNumbers("4");
        });


        act(() => {
            result.current.setTargetSum(9);
        });


        act(() => {
            result.current.handleSubmit({ preventDefault: () => { } });
        });


        expect(result.current.state.result).toEqual([2, 7]);
    });

});
