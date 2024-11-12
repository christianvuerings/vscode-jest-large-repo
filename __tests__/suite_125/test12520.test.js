
describe('Test Suite 12520', () => {
    test('addition test case 125200', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 125201', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 125202', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 125203', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 125204', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 125205', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 125206', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 125207', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 125208', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 125209', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});