import { render, screen } from "@testing-library/react";
import { ResultComponentSC } from "@/components/ResultComponentSC";
import '@testing-library/jest-dom';

describe("ResultComponentSC", () => {
    it("should display 'Tu cambio se muestra aquí 😎' when changeMin is undefined", () => {
        render(<ResultComponentSC changeMin={undefined} />);

        const input = screen.getByDisplayValue("Tu cambio se muestra aquí 😎");
        expect(input).toBeInTheDocument();
    });

    it("should display the minimum change when changeMin has a value", () => {
        render(<ResultComponentSC changeMin={4} />);

        const input = screen.getByDisplayValue("Tu cambio mínimo es: 4 🤑");
        expect(input).toBeInTheDocument();
    });

    it("no should not render anything when changeMin is zero or less", () => {
        render(<ResultComponentSC changeMin={0} />);

        const input = screen.queryByDisplayValue(/cambio mínimo/i);
        expect(input).not.toBeInTheDocument();
    });
});
