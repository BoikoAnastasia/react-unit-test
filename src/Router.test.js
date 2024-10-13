import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("Test App", () => {
    test("router test", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId("main-link");
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    });

    test("error test", () => {
        render(
            <MemoryRouter initialEntries={['/fsdfsdfsd']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
    
});
