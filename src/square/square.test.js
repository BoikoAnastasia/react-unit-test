const square = require('./square')


describe('Возведение в степень', () => {

    let mockValue;
    // вызовится перед каждым тестом
    beforeEach(()=>{
        
    })

    // вызовиться 1 раз перед всеми тестами
    beforeAll(()=>{

    })

    test('Корректное значение', ()=>{
        // expect(square(2)).toBe(4)
        // // число меньше чем 5
        // expect(square(2)).toBeLessThan(5)
        // // число больше чем 3
        // expect(square(2)).toBeGreaterThan(3)
        // expect(square(2)).not.toBeUndefined()

        // проверка на количество вызовов метода Math, 'pow'
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2)
        expect(spyMathPow).toBeCalledTimes(1) 
    })

    test('Количество вызовов Math', ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1)
        expect(spyMathPow).toBeCalledTimes(0) 
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })

    afterAll(()=>{

    })
})