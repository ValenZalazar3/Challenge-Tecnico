import { render, screen } from "@testing-library/react";
import FirstChallenge from "@/app/(challenge)/first-challenge/page";

describe("FirstChallengeScreen", () => {
  it("should render form with all elements", () => {
    render(<FirstChallenge />);

    expect(
      screen.getByLabelText(/Colocar números distintos:/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Suma objetivo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Agregar número/i)).toBeInTheDocument();
    expect(screen.getByText(/Eliminar números/i)).toBeInTheDocument();
    expect(screen.getByText(/Encontrar par/i)).toBeInTheDocument();
    expect(screen.getByLabelText("disabled input 2")).toHaveValue(
      "Tu resultado se muestra aquí 😎",
    );
  });
});
