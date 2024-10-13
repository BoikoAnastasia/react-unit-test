import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { renderWithRouter } from "../../tests/helper/renderWithRouter";

describe("navbar test", () => {
    test("link redirect about page", async () => {
        renderWithRouter(<Navbar />);
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test("link redirect users page", async () => {
        renderWithRouter(<Navbar />);
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });

    test("link redirect main page", async () => {
        renderWithRouter(<Navbar />);
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
});
