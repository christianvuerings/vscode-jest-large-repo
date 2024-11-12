
describe('Test Suite 1', () => {
    test('addition test case 10', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 11', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 12', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 13', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 14', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 15', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 16', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 17', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 18', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 19', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});