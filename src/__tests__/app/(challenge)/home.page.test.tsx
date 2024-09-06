import { render, screen } from "@testing-library/react";
import Home from "@/app/(challenge)/page";
import '@testing-library/jest-dom'; // Importar matchers de jest-dom

describe("Home Component", () => {
    it("should render the buttons and links correctly", () => {
        render(<Home />);


        const firstChallengeLink = screen.getByRole('link', { name: /Ir al primer reto/i });
        const secondChallengeLink = screen.getByRole('link', { name: /Ir al segundo reto/i });


        expect(firstChallengeLink).toBeInTheDocument();
        expect(firstChallengeLink).toHaveAttribute('href', '/first-challenge');

        expect(secondChallengeLink).toBeInTheDocument();
        expect(secondChallengeLink).toHaveAttribute('href', '/second-challenge');
    });
});
