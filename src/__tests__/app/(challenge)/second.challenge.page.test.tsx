import { render, screen } from "@testing-library/react";
import SecondChallenge from "@/app/(challenge)/second-challenge/page";

describe("SecondChallengeScreen", () => {
  it("should render all form elements", () => {
    render(<SecondChallenge />);

    expect(screen.getByText(/Challenge 2do/i)).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Colocar monedas de cambio:/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("disabled input 2")).toHaveValue(
      "Tu cambio se muestra aquí 😎",
    );

    expect(screen.getByText(/Agregar cambio/i)).toBeInTheDocument();
    expect(screen.getByText(/Eliminar cambio/i)).toBeInTheDocument();
    expect(screen.getByText(/Comprobar cambio mínimo/i)).toBeInTheDocument();
  });
});
