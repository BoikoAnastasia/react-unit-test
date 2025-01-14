import { decrement, increment } from "./counterReducer"
import counterReducer from "../reducers/counterReducer";

describe('counterReducer', ()=>{
    test('increment', ()=>{
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', ()=>{
        expect(counterReducer({value: 0}, decrement())).toEqual({value: -1})
    })

    test('with empty state', ()=>{
        expect(counterReducer(undefined, decrement())).toEqual({value: -1})
        expect(counterReducer(undefined, increment())).toEqual({value: 1})
    })
})