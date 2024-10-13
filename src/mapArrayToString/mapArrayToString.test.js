const mapArrayToString = require('./mapArrayToString')


describe("mapArrayToString", () => {
    test("Корректные значения", () => {
        expect(mapArrayToString([1,2,3])).toEqual(["1","2","3"]);
    });
    test("Мешанина", () => {
        expect(mapArrayToString([1,2,3,null, undefined, 'fdsfsd'])).toEqual(["1","2","3"]);
    });
    test("Пустой массив", () => {
        expect(mapArrayToString([])).toEqual([]);
    });
    test("Отрицание", () => {
        expect(mapArrayToString([1,2,3])).not.toEqual([1,2,3,5]);
    });
});
