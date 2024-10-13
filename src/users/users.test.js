import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./users";

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
    test("корректные данные", async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findAllByTestId("user-item");
        expect(users.length).toBe(3);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });
});
