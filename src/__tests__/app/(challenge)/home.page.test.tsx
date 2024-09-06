import { render, screen } from "@testing-library/react";
import Home from "@/app/(challenge)/page";
import '@testing-library/jest-dom'; // Importar matchers de jest-dom

describe("Home Component", () => {
    it("It should render the buttons and links", () => {
        render(<Home />);


        const firstChallengeLink = screen.getByText(/Ir al primer reto/i);
        const secondChallengeLink = screen.getByText(/Ir al segundo reto/i);

        expect(firstChallengeLink).toBeInTheDocument();
        expect(firstChallengeLink.closest('a')).toHaveAttribute('href', '/first-challenge');

        expect(secondChallengeLink).toBeInTheDocument();
        expect(secondChallengeLink.closest('a')).toHaveAttribute('href', '/second-challenge');
    });
});