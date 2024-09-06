import { render, screen, fireEvent } from "@testing-library/react";
import { SecondChallengeScreen } from "@/components/screens/SecondChallengeScreen";
import '@testing-library/jest-dom';

describe("SecondChallengeScreen", () => {
    it("should render", () => {
        render(<SecondChallengeScreen />);

        // Verifica si los elementos principales están en el documento
        expect(screen.getByText(/Challenge 2do/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Colocar monedas de cambio:/i)).toBeInTheDocument();
    });

    it("should allow adding coins and display the list", () => {
        render(<SecondChallengeScreen />);

        // Simula agregar una moneda
        const coinInput = screen.getByLabelText(/Colocar monedas de cambio:/i);
        fireEvent.change(coinInput, { target: { value: "5" } });

        const addButton = screen.getByText(/Agregar cambio/i);
        fireEvent.click(addButton);

        // Verifica que la moneda se muestre en la lista
        expect(screen.getByDisplayValue(/Tus números son: 5/i)).toBeInTheDocument();
    });

    it("should show an error when entering an invalid value", () => {
        render(<SecondChallengeScreen />);

        const coinInput = screen.getByLabelText(/Colocar monedas de cambio:/i);
        fireEvent.change(coinInput, { target: { value: "abc" } });

        const errorMessage = screen.getByText(/Solo números/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it("should allow removing coins", () => {
        render(<SecondChallengeScreen />);

        // Simula agregar y luego eliminar una moneda
        const coinInput = screen.getByLabelText(/Colocar monedas de cambio:/i);
        fireEvent.change(coinInput, { target: { value: "5" } });
        fireEvent.click(screen.getByText(/Agregar cambio/i));

        fireEvent.click(screen.getByText(/Eliminar cambio/i));

        // Verifica que la lista de monedas esté vacía
        expect(screen.queryByDisplayValue(/Tus números son:/i)).not.toBeInTheDocument();
    });

    it("should display the minimum change after submit", () => {
        render(<SecondChallengeScreen />);

        // Simula agregar monedas
        fireEvent.change(screen.getByLabelText(/Colocar monedas de cambio:/i), { target: { value: "1" } });
        fireEvent.click(screen.getByText(/Agregar cambio/i));

        fireEvent.change(screen.getByLabelText(/Colocar monedas de cambio:/i), { target: { value: "2" } });
        fireEvent.click(screen.getByText(/Agregar cambio/i));

        fireEvent.change(screen.getByLabelText(/Colocar monedas de cambio:/i), { target: { value: "5" } });
        fireEvent.click(screen.getByText(/Agregar cambio/i));

        // Simula hacer submit
        const submitButton = screen.getByText(/Comprobar cambio mínimo/i);
        fireEvent.click(submitButton);

        // Verifica que el cambio mínimo se muestre con el texto correcto
        expect(screen.getByDisplayValue("Tu cambio mínimo es: 4 🤑")).toBeInTheDocument();
    });

});
