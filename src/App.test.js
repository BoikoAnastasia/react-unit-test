import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";


describe('test app',()=>{
    test("renders learn react hello", () => {
        render(<App />);
        const helloElement = screen.getByText(/Hello/i);
        const btn = screen.getByRole('button')
        const input = screen.getByPlaceholderText(/input value/i)
        expect(helloElement).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        // screen.debug() 
        expect(input).toMatchSnapshot();      
    });

    test('render any methods', async ()=>{
        render(<App/>)
        const helloQuery = screen.queryByText(/hello2/i)
        expect(helloQuery).toBeNull()

        const helloFind = await screen.findByText(/data/i)
        expect(helloFind).toBeInTheDocument()
    })

    test('render btn', async ()=>{
        render(<App/>)
        const btn = screen.getByTestId('toggle-btn')
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.queryByTestId('toggle-elem')).toBeNull()
    })

    test('render input', async ()=>{
        render(<App/>)
        const input = screen.getByPlaceholderText(/input value/i)
        expect(screen.queryByTestId('input-elem')).toContainHTML('')
        // искуcственное событие
        fireEvent.input(input, {
            target: {value: '123'}
        })
        //близко к пользовательскому событию нажатия клавиш и тд
        userEvent.type(input, '123')
        expect(screen.queryByTestId('input-elem')).toContainHTML('123')
    })
})