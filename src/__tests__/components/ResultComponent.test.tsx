import { render, screen } from "@testing-library/react";
import { ResultComponent } from "@/components/ResultComponent";
import "@testing-library/jest-dom";

describe("ResultComponent", () => {
  it("should display 'Tu resultado se muestra aquí 😎' when the result is undefined", () => {
    render(<ResultComponent result={undefined} />);

    const input = screen.getByDisplayValue("Tu resultado se muestra aquí 😎");
    expect(input).toBeInTheDocument();
  });

  it("should display the correct pairs when there is a result", () => {
    render(<ResultComponent result={[2, 7]} />);

    const input = screen.getByDisplayValue("Los pares son: 2,7");
    expect(input).toBeInTheDocument();
  });

  it("should display 'No se encontró coincidencia 😓' cwhen there are no pairs", () => {
    render(<ResultComponent result={[]} />);

    const input = screen.getByDisplayValue("No se encontró coincidencia 😓");
    expect(input).toBeInTheDocument();
  });
});
