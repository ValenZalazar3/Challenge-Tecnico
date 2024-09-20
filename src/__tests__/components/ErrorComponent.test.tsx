import { render, screen } from "@testing-library/react";
import { ErrorComponent } from "@/components/ErrorComponent";

describe("ErrorComponent", () => {
  it("should display the error message when isInvalid has a value", () => {
    render(<ErrorComponent isInvalid="Este es un error" />);

    // Verifica si el mensaje de error se muestra
    const errorMessage = screen.getByText("Este es un error");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should not display anything when isInvalid is undefined", () => {
    render(<ErrorComponent isInvalid={undefined} />);

    // Verifica que no haya ningún mensaje de error
    const errorMessage = screen.queryByText(/error/i);
    expect(errorMessage).not.toBeInTheDocument();
  });
});
