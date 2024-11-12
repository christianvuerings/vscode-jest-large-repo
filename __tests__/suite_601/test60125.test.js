
describe('Test Suite 60125', () => {
    test('addition test case 601250', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 601251', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 601252', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 601253', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 601254', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 601255', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 601256', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 601257', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 601258', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 601259', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});