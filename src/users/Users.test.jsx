import axios from "axios";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helper/renderWithRouter";
import Users from "./Users";

jest.mock("axios");

describe("test users", () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham",
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                },
                {
                    id: 3,
                    name: "Ervin Teakr",
                },
            ],
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("корректные данные", async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<Users />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        // screen.debug();
    });

    test("redirect to user page", async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(null, "/users");
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        userEvent.click(users[0]);
        expect(screen.getByTestId("user-page")).toBeInTheDocument();
    });
});
