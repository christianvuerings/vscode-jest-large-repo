
describe('Test Suite 1578', () => {
    test('addition test case 15780', () => {
        expect(2 + 2).toBe(4);
    });

    test('subtraction test case 15781', () => {
        expect(5 - 3).toBe(2);
    });

    test('multiplication test case 15782', () => {
        expect(3 * 4).toBe(12);
    });

    test('division test case 15783', () => {
        expect(10 / 2).toBe(5);
    });

    test('string concatenation test case 15784', () => {
        expect("hello" + "world").toBe("helloworld");
    });

    test('array manipulation test case 15785', () => {
        expect([1, 2, 3].length).toBe(3);
    });

    test('object properties test case 15786', () => {
        expect({ name: "test" }.name).toBe("test");
    });

    test('boolean operations test case 15787', () => {
        expect(true && true).toBe(true);
    });

    test('number comparison test case 15788', () => {
        expect(10 > 5).toBe(true);
    });

    test('string manipulation test case 15789', () => {
        expect("test".toUpperCase()).toBe("TEST");
    });
});