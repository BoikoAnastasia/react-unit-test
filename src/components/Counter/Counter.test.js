import { render } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

describe("counter", () => {
    test("increment btn", () => {
        const { getByTestId } = render(
            <Provider store={createReduxStore()}>
                <Counter />
            </Provider>
        );
        const incrementBtn = getByTestId("increment-btn");
        // const decrementBtn = getByTestId("decrement-btn");
        expect(getByTestId("value-title")).toHaveTextContent("0");
        userEvent.click(incrementBtn);
        expect(getByTestId("value-title")).toHaveTextContent("1");
    });
});
